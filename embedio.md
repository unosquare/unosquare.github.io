---
layout: default
title: "Open Source Software Initiatives from Unosquare | Embedio"
description: "All the utilities for a web server in one place, written in C#"
---
<div class="container content-home py-0">
    <div class="main-hero hero">
        <img src="/assets/coding-like-a-god.jpg" class="px-5" alt="EmbedIO logo" />
        <div class="hero-title title-black">
            <h2 class="text-uppercase">Embedio</h2>
            <div id="hero-label">A tiny, cross-platform, module based, MIT-licensed web server for .NET
                Framework and
                .NET Core.</div>
            <a class="link-gray" href="https://unosquare.github.io/embedio/"> Read more
            </a>
        </div>
    </div>
</div>
<div class="container content-home py-0">
    <div class="facts-four-columns">
        <div class="row">
            <div class="col-6 col-lg-3">
                <p>Written entirely in C#, using our helpful library <a href="https://unosquare.github.io/swan/">SWAN.</a></p>
            </div>
            <div class="col-6 col-lg-3">
                <p>Network operations use the async/await pattern: Responses are handled
                    asynchronously.</p>
            </div>
            <div class="col-6 col-lg-3">
                <p>Multiple implementations support: EmbedIO can use Microsoft HttpListener
                    or internal Http Listener based on Mono/websocket-sharp projects.</p>
            </div>
            <div class="col-6 col-lg-3">
                <p>Cross-platform: tested on multiple OS and runtimes. From Windows .NET Framework to
                    Linux MONO.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-6 col-lg-3">
                <p>Extensible: Write your own modules
                    -- For example, video streaming, UPnP, etc. Check out EmbedIO Extras for additional
                    modules.</p>
            </div>
            <div class="col-6 col-lg-3">
                <p> Create REST APIs quickly with the out-of-the-box Web API module.</p>
            </div>
            <div class="col-6 col-lg-3">
                <p>Serve static or embedded files with 1 line of code (also out-of-the-box).</p>
            </div>
            <div class="col-6 col-lg-3">
                <p>Handle sessions with the built-in LocalSessionWebModule.</p>
            </div>
        </div>
    </div>
</div>
<div class="container content-home">
    <div class="row">
        <div class="col-12 col-lg-4 mb-4">
            <div class="card">
                <div class="card-body p-3">
                    <div class="card-head">
                        <h4 class="text-uppercase">embedio-cli</h4>
                        <span>By Unosquare</span>
                        <p class="author-date">
                            A dotnet global tool that enables start any web folder or EmbedIO assembly
                            (WebAPI or WebSocket) from command line.
                        </p>
                    </div>
                    <div class="calltoaction calltoaction-sm d-flex justify-content-start m-0">
                        <a href="https://github.com/unosquare/embedio-cli" class="link-blue button">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mb-4">
            <div class="card">
                <div class="card-body p-3">
                    <div class="card-head">
                        <h4 class="text-uppercase">EmbedIO BearerToken</h4>
                        <span>By Unosquare</span>
                        <p class="author-date">
                            Allow to authenticate with a Bearer Token. It uses a Token endpoint (at
                            /token
                            path)
                            and with a defined validation delegate create a JsonWebToken. The module
                            can
                            check all incoming requests or a paths
                        </p>
                    </div>
                    <div class="calltoaction calltoaction-sm d-flex justify-content-start m-0">
                        <a href="https://www.nuget.org/packages/EmbedIO.BearerToken/" class="link-blue button">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mb-4">
            <div class="card">
                <div class="card-body p-3">
                    <div class="card-head">
                        <h4 class="text-uppercase">EmbedIO LiteLibWebApi</h4>
                        <span>By Unosquare</span>
                        <p class="author-date">
                            Allow to expose a sqlite database as REST api using EmbedIO WebApi and
                            LiteLib
                            libraries
                        </p>
                    </div>
                    <div class="calltoaction calltoaction-sm d-flex justify-content-start m-0">
                        <a href="https://www.nuget.org/packages/EmbedIO.LiteLibWebApi/" class="link-blue button">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mb-4">
            <div class="card">
                <div class="card-body p-3">
                    <div class="card-head">
                        <h4 class="text-uppercase">EmbedIO OWIN</h4>
                        <span>By Unosquare</span>
                        <p class="author-date">
                            EmbedIO can use the OWIN platform in two different approach:
                            You can use EmbedIO as OWIN server and use all OWIN framework with EmbedIO
                            modules.
                        </p>
                    </div>
                    <div class="calltoaction calltoaction-sm d-flex justify-content-start m-0">
                        <a href="https://www.nuget.org/packages/EmbedIO.OWIN/" class="link-blue button">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mb-4">
            <div class="card">
                <div class="card-body p-3">
                    <div class="card-head">
                        <h4 class="text-uppercase">Butterfly EmbedIO</h4>
                        <span>By Fireshark Studios, LLC</span>
                        <p class="author-date">
                            Implementation of Butterfly.Core.Channel and Butterfly.Core.WebApi using
                            the
                            EmbedIO server
                        </p>
                    </div>
                    <div class="calltoaction calltoaction-sm d-flex justify-content-start m-0">
                        <a href="https://www.nuget.org/packages/Butterfly.EmbedIO/" class="link-blue button">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mb-4">
            <div class="card">
                <div class="card-body p-3">
                    <div class="card-head">
                        <h4 class="text-uppercase">Microsoft AspNetCore Server EmbedIO</h4>
                        <span>By Dju</span>
                        <p class="author-date">
                            EmbedIO web server support for ASP.NET Core, as a drop-in replacement for
                            Kestrel
                        </p>
                    </div>
                    <div class="calltoaction calltoaction-sm d-flex justify-content-start m-0">
                        <a href="https://www.nuget.org/packages/Microsoft.AspNetCore.Server.EmbedIO/"
                            class="link-blue button">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>