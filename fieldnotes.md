---
title: Field Notes
layout: default
permalink: fieldnotes/
---

<!-- <img class="farm" src="/src/images/trek-dither.png"> -->

<div class="myposts">
    {% for post in site.posts %}
    {% if post.categories contains 'Fields' %}
    <div class="mypost">
        <h2><a class="postTitle" href="{{ post.url }}">{{ post.title}}</a></h2>
        {{ post.excerpt }}
        <div class="right postPost"><i><span class="postTag">{{ post.tags}}</span></i> <br>
            <i><span class="postDate">{{ post.date | date: "%b %-d, %Y" }}</span></i>
        </div>
        <hr class="pad">
    </div>
    {% endif %}
    {% endfor %}
</div>
{% if jekyll.environment == "production" %}
<div class="counter">
        <img style="display: block; margin-inline: auto; margin-top: 20px;"
            src="https://hitscounter.dev/api/hit?url=https%3A%2F%2Fshubhang-sharma.github.io%2Ffieldnotes&label=Visitor+Count&icon=github&color=%23198754&message=&style=for-the-badge&tz=localtime">
</div>
{% endif %}
<style>
    
    .myposts {
        margin-top: 4vh;
    }
</style>