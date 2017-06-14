---
layout: learn-javascript-default
version: 2
chapter: Chapter 2 - Object properties
---

### JavaScript Principles

# Set a property with `[]` or `.`

An `object` is a _compound value_. You can set properties holding their own values.

Can you guess what the last line returns?

    var alice = {};
    alice['foo'] = true;
    alice.foo = 42;
    alice;

<div class="player">
<div class="embed-video">
<iframe src="https://player.vimeo.com/video/208474357" width="1170" height="658" allowtransparency="true" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
</div>
</div>


## Use `[]` with a variable

This challenge starts where the previous exercise ends. Can you guess what the last line returns?

    var alice = {foo: 42};
    var bar = 'foo';
    alice[bar] = 'wat'
    alice;

<div class="player">
<div class="embed-video">
<iframe src="https://player.vimeo.com/video/210588506" width="1170" height="658" allowtransparency="true" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
</div>
</div>

**You have learned:**

*   Object properties can be set with the _bracket notation_ (`alice['foo']`) or the shorter _dot notation_ (`alice.foo`).
*   The _bracket notation_ accepts string literals (`'foo'` or `"foo"`). It also accepts a variable (`bar`), which is useful when the name of the property is dynamic and held by a variable.


<br/>

### Learn with Wakanda
# Run your app

Click on _Run_:

<img src="../img/wakanda-studio-run-button.png"/>

Wakanda automatically setups your application:

<img src="../img/wakanda-studio-run-in-progress.png"/>

The _Tasks_ panel manages and centralizes all the processes running for your web and mobile applications. You can inspect their output and control their lifecycle.

After a few seconds, your application opens in your browser:

<img src="../img/wakanda-studio-web-page-0.png"/>

For now, `alice`, `bob` and `carol` are `undefined`. In the [next lesson](assign-object-values.html), we'll edit `home.js` and try different values.

{% include learn_js_toc.html progress=21 %}