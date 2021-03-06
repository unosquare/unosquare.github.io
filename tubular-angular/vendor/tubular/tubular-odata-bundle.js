(function() {
    "use strict";
    angular.module("tubular.services").service("tubularOData", ["tubularHttp", function(n) {
        var t = this;
        t.operatorsMapping = {
            None: "",
            Equals: "{0} eq {1}",
            NotEquals: "{0} ne {1}",
            Contains: "substringof({1}, {0}) eq true",
            StartsWith: "startswith({0}, {1}) eq true",
            EndsWith: "endswith({0}, {1}) eq true",
            NotContains: "substringof({1}, {0}) eq false",
            NotStartsWith: "startswith({0}, {1}) eq false",
            NotEndsWith: "endswith({0}, {1}) eq false",
            Gte: "{0} ge {1}",
            Gt: "{0} gt {1}",
            Lte: "{0} le {1}",
            Lt: "{0} lt {1}"
        };
        t.generateUrl = function(n) {
            var i = n.data, r = n.serverUrl, f, u, e;
            return r += r.indexOf("?") > 0 ? "&" : "?",
            r += "$format=json&$inlinecount=allpages",
            r += "&$select=" + i.Columns.map(function(n) {
                return n.Name
            }).join(","),
            i.Take != -1 && (r += "&$skip=" + i.Skip,
            r += "&$top=" + i.Take),
            f = i.Columns.filter(function(n) {
                return n.SortOrder > 0
            }).sort(function(n, t) {
                return n.SortOrder - t.SortOrder
            }).map(function(n) {
                return n.Name + " " + (n.SortDirection === "Descending" ? "desc" : "")
            }),
            f.length > 0 && (r += "&$orderby=" + f.join(",")),
            u = i.Columns.filter(function(n) {
                return n.Filter && n.Filter.Text
            }).map(function(n) {
                return t.operatorsMapping[n.Filter.Operator].replace("{0}", n.Name).replace("{1}", n.DataType == "string" ? "'" + n.Filter.Text + "'" : n.Filter.Text)
            }).filter(function(n) {
                return n.length > 1
            }),
            i.Search && i.Search.Operator === "Auto" && (e = i.Columns.filter(function(n) {
                return n.Searchable
            }).map(function(n) {
                return "startswith({0}, '{1}') eq true".replace("{0}", n.Name).replace("{1}", i.Search.Text)
            }),
            e.length > 0 && u.push("(" + e.join(" or ") + ")")),
            u.length > 0 && (r += "&$filter=" + u.join(" and ")),
            r
        }
        ;
        t.retrieveDataAsync = function(i) {
            var r = i.data, e = i.serverUrl, u, f;
            return i.serverUrl = t.generateUrl(i),
            i.data = null,
            u = n.retrieveDataAsync(i),
            f = u.then(function(n) {
                var u = {
                    Payload: n.value,
                    CurrentPage: 1,
                    TotalPages: 1,
                    TotalRecordCount: 1,
                    FilteredRecordCount: 1
                };
                return u.TotalRecordCount = parseInt(n["odata.count"]),
                u.FilteredRecordCount = u.TotalRecordCount,
                u.TotalPages = parseInt((u.FilteredRecordCount + r.Take - 1) / r.Take),
                u.CurrentPage = parseInt(1 + r.Skip / u.FilteredRecordCount * u.TotalPages),
                u.CurrentPage > u.TotalPages && (u.CurrentPage = 1,
                i.data = r,
                i.data.Skip = 0,
                i.serverUrl = e,
                t.retrieveDataAsync(i).then(function(n) {
                    u.Payload = n.value
                })),
                u
            }), f
        }
        ;
        t.saveDataAsync = function(t, i) {
            return n.saveDataAsync(t, i)
        }
        ;
        t.get = function(t) {
            return n.get(t)
        }
        ;
        t.delete = function(t) {
            return n.delete(t)
        }
        ;
        t.post = function(t, i) {
            return n.post(t, i)
        }
        ;
        t.put = function(t, i) {
            return n.put(t, i)
        }
        ;
        t.getByKey = function(t, i) {
            return n.get(t + "(" + i + ")")
        }
    }
    ]).run(["tubularHttp", "tubularOData", function(n, t) {
        n.registerService("odata", t)
    }
    ])
})();
