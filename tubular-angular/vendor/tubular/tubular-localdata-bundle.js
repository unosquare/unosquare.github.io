(function(n) {
    "use strict";
    n.module("tubular.services").service("tubularLocalData", ["tubularHttp", "$q", "$filter", function(t, i, r) {
        var u = this, f;
        u.retrieveDataAsync = function(r) {
            r.requireAuthentication = !1;
            var f = function(n) {
                console.error(n);
                i.defer().resolve(n)
            };
            return r.serverUrl.indexOf("data:") === 0 ?  i(function(t) {
                    var i = r.serverUrl.substr(29), f;
                    i = atob(i);
                    f = n.fromJson(i);
                    t(u.pageRequest(r.data, f))
                }) : i(function(n) {
                    n(t.retrieveDataAsync(r).then(function(n) { return u.pageRequest(r.data, n) }))
                })
        }
        ;
        f = function(n) {
            var r = {}, t, i;
            for (t in n)
                if (n.hasOwnProperty(t))
                    for (i in n[t])
                        n[t].hasOwnProperty(i) && (r[i] = n[t][i].toLocaleLowerCase());
            return r
        }
        ;
        u.pageRequest = function(t, i) {
            var u = {
                Counter: 0,
                CurrentPage: 1,
                FilteredRecordCount: 0,
                TotalRecordCount: 0,
                Payload: [],
                TotalPages: 0
            }, e, o, s, h, c, l, a;
            if (i.length === 0)
                return u;
            e = i;
            o = t.Columns.filter(function(n) {
                return n.SortOrder > 0
            }).map(function(n) {
                return (n.SortDirection === "Descending" ? "-" : "") + n.Name
            });
            for (s in o)
                o.hasOwnProperty(s) && (e = r("orderBy")(e, o[s]));
            return h = t.Columns.filter(function(n) {
                return n.Filter && n.Filter.Text
            }).map(function(n) {
                var t = {};
                return n.Filter.Operator === "Contains" && (t[n.Name] = n.Filter.Text),
                t
            }),
            h.length > 0 && (e = r("filter")(e, f(h))),
            t.Search && t.Search.Operator === "Auto" && t.Search.Text && (c = t.Columns.filter(function(n) {
                return n.Searchable
            }).map(function(n) {
                var i = {};
                return i[n.Name] = t.Search.Text,
                i
            }),
            c.length > 0 && (e = r("filter")(e, function(t) {
                var r = f(c)
                  , i = !1;
                return n.forEach(r, function(n, r) {
                    t[r] && t[r].toLocaleLowerCase().indexOf(n) >= 0 && (i = !0)
                }),
                i
            }))),
            u.FilteredRecordCount = e.length,
            u.TotalRecordCount = e.length,
            u.Payload = e.slice(t.Skip, t.Take + t.Skip),
            u.TotalPages = (u.FilteredRecordCount + t.Take - 1) / t.Take,
            u.TotalPages > 0 && (l = Math.pow(10, 0),
            a = 1 + t.Skip / u.FilteredRecordCount * u.TotalPages,
            u.CurrentPage = (a * l | 0) / l,
            u.CurrentPage < 1 && (u.CurrentPage = 1)),
            u
        }
        ;
        u.saveDataAsync = function() {}
        ;
        u.get = function(n) {
            t.get(n)
        }
        ;
        u.delete = function(n) {
            t.delete(n)
        }
        ;
        u.post = function(n, i) {
            t.post(n, i)
        }
        ;
        u.put = function(n, i) {
            t.put(n, i)
        }
        ;
        u.getByKey = function(n, i) {
            t.getByKey(n, i)
        }
    }
    ]).run(["tubularHttp", "tubularLocalData", function(n, t) {
        n.registerService("local", t)
    }
    ])
})(window.angular);
