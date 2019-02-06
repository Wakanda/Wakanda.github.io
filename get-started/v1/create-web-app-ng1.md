---
layout: get-started-default
version: 1
page_step: false
---

# Hello World: your first Web App with Angular

## Step 1 : Install Wakanda

First, download and install **Wakanda Enterprise Edition**

- On [Windows](https://wakanda.github.io/download.html#section-download "download")
- On [Mac OS X](https://wakanda.github.io/download.html#section-download "download")


Now we can start our **HelloWorldWeb** project.  

## Step 2: Choose : mobile or web app ?

We can choose the kind of app we want to create : mobile, web or both.

Here we want to create an *Angular web app*.

To do that, we're going to open the studio <img src="/img/logo/wakandaio_pic.png"/> , and click on **"Create a new solution"**:

<img src="/img/hp-initial.png"/>

Which opens the template selection page:  

<img src="/img/hww-template-selection-ng1.png"/>

Now, a solution and a project structure have been created. A solution, represent your whole app and can contain multiple projects. The first one is created by default. 

The structure of your project depends of the template you choose.

You'll always have the **same back end structure**, but you can choose to have a **web front-end and/or mobile front-end**.

There, you can name your app *- without spaces -* and select the **Angular basic template**.

Now, in your **HelloWorldWeb** project, you can find the Angular web app file structure :

<img src="/img/hww-file-structure-ng1.png"/>  

You have 3 folders at the root of your project:

- **Backend**: Wakanda JavaScript Server. It contains all the Server files to logs, settings, permissions.  
- **Database**: Wakanda DB folder. It contains your data model(s), backups and your data.
- **Web**: where you’ll find all your web app front-end files. It contains all you need to code your Angular 1 or 2 projects.

> **TIPS**:  
> - If you choose web and mobile in the template selection, you'll have both a `mobile` and a `web`folder.
> - A mobile and a web front-end, for the same back-end.


**Note** : `Prototyper` folder in the Web Project is a prototyper tool to create quickly Web UI based on widgets architecture. But it is deprecated and will be excluded from the platform in our next major release.

For our **HelloWorldWeb** we’re going to work first in the `web` folder.


## Step 3: Run your web application

First let's have a look to our web template.

Click on the _Run Page_ toolbar button:
<img src="/img/web-run-page-ng1.png"/>


> **TIPS**:  

> 1. To open your application in your default browser, set this preference via _Run Page_ dropdown
> 2. Customize the panels: open the right panel from the toolbar toggles
> 3. You can move the web preview on the right panel


<img src="/img/web-app-creation-ng1.png" />


<img src="/img/hww-run-template-ng1.png" />


## Step 4: Code your Angular application

Let's have a look to our project structure : in the `web` folder, as for a classical Angular app file structure, you have the `index.html` file and folders `app` and `assets` at the root.

`index.html` handles loading in all the libraries and Angular elements
`assets` is very standard: it contains all the shared assets as css, images, libs
`app` is the core of your app. It contains all your controllers.

A simple change in `web/index.html` and I have my **HelloWorld** done.
To make it more visual, you can change the background color in its css file `web/assets/css/style.scss`:

```css
body {
    background-color: #51D8C6;
}
p {
  padding: 1em;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 50px;
  display: block;
  font-size: 200%;
}
```

The preview is automatically reloaded after each saving.

<img src="/img/hww-run-helloworld-ng1.png"/>


---


