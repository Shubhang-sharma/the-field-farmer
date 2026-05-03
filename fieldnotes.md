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

<style>
    
    .myposts {
        margin-top: 4vh;
    }
</style>