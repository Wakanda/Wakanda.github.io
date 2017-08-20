---
layout: learn-javascript-default
version: 2
chapter: Chapter 1 - Variables and values
---

### JavaScript Principles

# Declare variables, initialize with primitive values

The `var` statement declares a variable, optionally initialized to a value.

In the following code sample, do you know what _values_ `alice` and `bob` hold?

    var alice;
    var bob = 42;

Watch the answer on this video:

<div class="player">
<div class="embed-video">
<iframe src="https://player.vimeo.com/video/208474337" width="1170" height="658" allowtransparency="true" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
</div>
</div>

# Initialize a variable with an object

Do you know what _value_ `carol` holds?

    var carol = {a: true};

This is not as obvious as it may seem:

<div class="player">
<div class="embed-video">
<iframe src="https://player.vimeo.com/video/208651639" width="1170" height="658" allowtransparency="true" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
</div>
</div>

**You have learned**:

*   **Primitive values** (`Number`, `String`, `Boolean`…) are held directly by variables
*   **Non-primitive values** (objects) are held by references, not by variables

<br/>

### Learn with Wakanda

# Create a new solution

In the [first lesson](data-types.html), you have discovered data types and started Wakanda Studio. With this second lesson, you have now learned the concept of values and variables in JavaScript. You are now ready to create a new application to start playing with JavaScript.

You can create one _Wakanda solution_ containing a _web app_, a _mobile app_ or both.

Click on "Create a new solution". 

As you can see, Wakanda comes with preconfigured web and mobile templates. We'll focus on a **web** application with an _Angular basic template_:

<img src="../img/wakanda-studio-select-template.png"/>

Click on "Create". Your new web application is automatically generated:

<img src="../img/wakanda-studio-new-web-app.png"/>

The console checks that `node` is installed. If you read "not found", please [install node](https://nodejs.org/en/){:target="_blank"} (it only takes a minute).

Let's have a look at the main application files with the [next lesson](assign-primitive-values.html).

{% include learn_js_toc.html progress=12 %}