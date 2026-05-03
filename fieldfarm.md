---
title: Math X Physics
layout: default
permalink: fieldfarm/
---

<!-- <img class="farm" src="/src/vector/farm.png" /> -->


<div class="myposts" style="margin-top: 20px;">
    <!-- <hr> -->
    {% for post in site.posts %}
    {% assign post_year = post.date | date: "%Y" | plus: 0 %}

    {% if post.categories contains 'Farm' and post_year > 2024 %} {% unless post.tags contains 'Analysis' or post.tags
    contains 'QFT' %} <div class="mypost">
        <h2><a class="postTitle" href="{{ post.url }}">{{ post.title}}</a></h2>
        {{ post.excerpt }}
        <div class="right postPost">
            <i><span class="postTag">{{ post.tags | join: ", " }}</span></i> <br>
            <span class="postDate">{{ post.date | date: "%b %-d, %Y" }}</span>
        </div>
        <hr class="pad">
    </div>
    {% endunless %}
    {% endif %}
    {% endfor %}
</div>

<div class="qft">

</div>


<div class="analysis">
    <svg version="1.1" viewBox="0 0 940 400" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <filter id="filterA" x="-9.6956e-5" y="-.085283" width="1.0146" height="1.1705"
                style="color-interpolation-filters:sRGB">
                <feTurbulence baseFrequency="10" numOctaves="4" result="result1" type="fractalNoise" />
                <feColorMatrix in="SourceGraphic" result="result0" type="luminanceToAlpha" />
                <feColorMatrix result="result2" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.7 0 " />
                <feComposite in="result1" in2="result2" result="result3" />
                <feColorMatrix result="result91" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -3.2 " />
                <feComposite in="SourceGraphic" in2="result91" operator="out" result="result4" />
            </filter>
            <filter id="filterB" x="-.012169" y="-.082537" width="1.0122" height="1.1651"
                style="color-interpolation-filters:sRGB">
                <feTurbulence baseFrequency="0.53620829814189197" numOctaves="3" result="result1" type="fractalNoise" />
                <feColorMatrix in="SourceGraphic" result="result0" type="luminanceToAlpha" />
                <feColorMatrix result="result2" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.7 0 " />
                <feComposite in="result1" in2="result2" result="result3" />
                <feColorMatrix result="result91" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -3.2 " />
                <feComposite in="SourceGraphic" in2="result91" operator="out" result="result4" />
            </filter>
            <filter id="filterC" x="-.001932" y="-.094156" width="1.0039" height="1.1883"
                style="color-interpolation-filters:sRGB">
                <feTurbulence baseFrequency="10" numOctaves="4" result="result1" type="fractalNoise" />
                <feColorMatrix in="SourceGraphic" result="result0" type="luminanceToAlpha" />
                <feColorMatrix result="result2" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.7 0 " />
                <feComposite in="result1" in2="result2" result="result3" />
                <feColorMatrix result="result91" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -3.2 " />
                <feComposite in="SourceGraphic" in2="result91" operator="out" result="result4" />
            </filter>
            <linearGradient id="linearGradient2" x1=".28676" x2="1725.7" y1="145.07" y2="145.07"
                gradientTransform="translate(26.458 -15.875)" gradientUnits="userSpaceOnUse">
                <stop style="stop-color:#9628a0;stop-opacity:0" offset="0" />
                <stop style="stop-color:#8f269e;stop-opacity:.71765" offset=".063942" />
                <stop style="stop-color:#38138f;stop-opacity:.66101" offset=".1566" />
                <stop style="stop-color:#5a0cb2;stop-opacity:.80181" offset=".41792" />
            </linearGradient>
            <linearGradient id="linearGradient24" x1="71.507" x2="912.63" y1="314.72" y2="314.72"
                gradientTransform="translate(5.2917 -15.875)" gradientUnits="userSpaceOnUse">
                <stop style="stop-color:#28ae90;stop-opacity:.6549" offset="0" />
                <stop style="stop-color:#a4d879;stop-opacity:.59098" offset=".91003" />
                <stop style="stop-color:#bbd153;stop-opacity:0" offset="1" />
            </linearGradient>
            <linearGradient id="linearGradient36" x1="139.82" x2="768.35" y1="203.67" y2="145.07"
                gradientTransform="translate(5.2917 -15.875)" gradientUnits="userSpaceOnUse">
                <stop style="stop-color:#28ae90;stop-opacity:.6549" offset="0" />
                <stop style="stop-color:#5a0cb2;stop-opacity:.8" offset="1" />
            </linearGradient>
        </defs>
        <text id="ideas-of-analysis-title" x="50" y="50">
            <tspan x="100" y="40">Ideas Of Analysis</tspan>
        </text>
        <path d="m155.11 242.25c-98.772 2.1971-84.407 113.19 0.49756 113.19h752.32"
            style="fill:none;stroke-linejoin:round;stroke-width:20;stroke:url(#linearGradient24)" />
        <path d="m773.65 129.19c95.937-0.0224 97.591 120 0.79096 117.21l-619.33-4.1507"
            style="fill:none;stroke-linejoin:round;stroke-width:20;stroke:url(#linearGradient36)" />
        <path d="m26.76 129.19h746.89"
            style="fill-opacity:.16011;fill:#190000;stroke-linejoin:round;stroke-width:20;stroke:url(#linearGradient2)" />

        <text class="labels" id="naturals" x="128.96683" y="96.763115">
            <tspan x="128.96683" y="96.763115">Naturals</tspan>
        </text>
        <text class="labels" id="integers" x="268.22638" y="176.15959">
            <tspan x="268.22638" y="176.15959">Integers</tspan>
        </text>
        <text class="labels" id="rationals" x="418.55396" y="91.668831">
            <tspan x="418.55396" y="91.668831">Rationals
            </tspan>
        </text>
        <text class="labels" id="asymmetries-functions" x="593.5498" y="176.21126">
            <tspan x="540.5498" y="176.21126">(a)Symmetries of
            </tspan>
            <tspan x="540.5498" y="195.61406"> a function
            </tspan>
        </text>
        <text class="labels" id="reals-1" x="687.89081" y="93.960861">
            <tspan x="687.89081" y="93.960861">Reals I</tspan>
        </text>
        <text class="labels" id="reals-2" x="688.50281" y="293.30261">
            <tspan x="688.50281" y="293.30261">Reals II</tspan>
        </text>
        <text class="labels" id="reals-3" x="415.33774" y="210.87111">
            <tspan x="415.33774" y="210.87111">Reals III
            </tspan>
        </text>
        <text class="labels" id="riemann-integrability" x="216.371" y="291.6976">
            <tspan x="216.371" y="291.6976">Riemann Integrability</tspan>
        </text>
        <path class="markers marker-1" d="m156.83 111.56v17.636" />
        <path class="markers marker-2" d="m296 129.55v17.636" />
        <path class="markers marker-3" d="m448.41 111.56v17.636" />
        <path class="markers marker-4" d="m595.51 129.55v17.636" />
        <path class="markers marker-5" d="m717.22 111.56v17.636" />
        <path class="markers marker-6" d="m718.04 246.23v17.636" />
        <path class="markers marker-7" d="m448.23 227.06v17.636" />
        <path class="markers marker-8" d="m299.11 245.73v17.636" />

    </svg>

</div>



<!-- <div class="ideas-wrapper">
    <div class="ideas-row">
        <div class="ideas-left">
            <h2 class="handwritten-title"><span class="ideasof">Ideas of</span> <em>Algebra</em></h2>
        </div>
        <div class="ideas-right">
            {% for post in site.posts %}
            {% if post.tags contains 'Algebra' %}
            <a href="{{ post.url }}" class="idea-box">
                {{ post.title }}
            </a>
            {% endif %}
            {% endfor %}

        </div>
    </div>

    <div class="ideas-row">
        <div class="ideas-left">
            <h2 class="handwritten-title"><span class="ideasof">Ideas of</span> <em>Analysis</em></h2>
        </div>
        <div class="ideas-right">
            {% for post in site.posts %}
            {% if post.tags contains 'Analysis' %}
            <a href="{{ post.url }}" class="idea-box">
                {{ post.title }}
            </a>
            {% endif %}
            {% endfor %}
        </div>
    </div>

    <div class="ideas-row">
        <div class="ideas-left">
            <h2 class="handwritten-title"><span class="ideasof">Ideas of</span> <em>QFT</em></h2>
        </div>
        <div class="ideas-right">
            {% for post in site.posts %}
            {% if post.tags contains 'QFT' %}
            <a href="{{ post.url }}" class="idea-box">
                {{ post.title }}
            </a>
            {% endif %}
            {% endfor %}

            <div class="idea-box empty"></div>

        </div>
    </div>
</div> -->



<div class="myposts myposts-2">
    <!-- <hr> -->
    {% for post in site.posts %}
    {% assign post_year = post.date | date: "%Y" | plus: 0 %}

    {% if post.categories contains 'Farm' and post_year < 2025 %} {% unless post.tags contains 'Analysis' or post.tags
        contains 'QFT' %} <div class="mypost">
        <h2><a class="postTitle" href="{{ post.url }}">{{ post.title}}</a></h2>
        {{ post.excerpt }}
        <div class="right postPost">
            <i><span class="postTag">{{ post.tags | join: ", " }}</span></i> <br>
            <span class="postDate">{{ post.date | date: "%b %-d, %Y" }}</span>
        </div>
        <hr class="pad">
</div>
{% endunless %}
{% endif %}
{% endfor %}
</div>


<script src="/src/js/blog-art-display.js"></script>
<style>
    .bg {
        max-width: 40rem;
    }
    h1, .myposts {
        max-width: 80rem;
        margin-inline: auto;
    }
    .active-farm {
        background-color: rgba(0, 0, 0, 0);
        color: black;
    }
</style>