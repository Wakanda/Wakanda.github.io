---
layout: learn-javascript-default
version: 2
chapter: Chapter 1 - Variables and values
---

### JavaScript Principles
# Assign primitive values

Can you guess what the last line returns?

    var alice = 'foo';
    var bob = alice;
    alice = 'bar';
    bob;

<div class="player">
<div class="embed-video">
<iframe src="https://player.vimeo.com/video/208474345" width="1170" height="658" allowtransparency="true" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
</div>
</div>

_Primitive values_ are always assigned by **value-copy**.

In `bob = alice;`, `bob` is assigned a **copy** of `alice`‘s value: the `'foo'` value.
In JavaScript, you can’t have a variable `alice` pointing to another variable `bob`.

<br/>

### Learn with Wakanda
# Discover the main application files

## JavaScript Controller

What if you could try the challenges of this course yourself? Let's create an app for that!

Open the `app/controllers/home.js` file. Replace its content with the following code:

<script src="https://gist.github.com/cedricss/b646c5309ff4ba41c16412e9435c10f5.js?file=home.js"></script>

<img src="../img/wakanda-studio-home-js.png"/>

**TIPS**: close the bottom panel with the third toggle (in the upper-right corner):

<img src="../img/wakanda-studio-toggle-panels.png"/>


## HTML/CSS View

We want to display the content of the `alice`, `bob` and `carol` values on a web page.

Edit the `index.html` page and replace its content with the following markup:

<script src="https://gist.github.com/cedricss/b646c5309ff4ba41c16412e9435c10f5.js?file=index.html"></script>

Open the `assets/css/style.css` style sheet to edit the look and feel of our web page. Replace its content with the following code:

<script src="https://gist.github.com/cedricss/b646c5309ff4ba41c16412e9435c10f5.js?file=style.css"></script>

In the next chapters of this course you'll learn how to write those JavaScript, HTML and CSS files yourself.

For now, read the [next lesson](set-properties.html) to run this app.

{% include learn_js_toc.html progress=13 %}