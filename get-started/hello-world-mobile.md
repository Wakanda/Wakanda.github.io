---
layout: get-started-default
---

# Hello World: your first Mobile hybrid App

## Step 1: Install Wakanda

First, download and install **Wakanda Community Edition**

- On Windows, [x86](https://github.com/Wakanda/wakanda-digital-app-factory/releases/download/v1.1.3/wakanda-community-all_1.1.3_x86.msi "download") or [x64](https://github.com/Wakanda/wakanda-digital-app-factory/releases/download/v1.1.3/wakanda-community-all_1.1.3_x64.msi "download")
- On Mac OS X, [x64](https://github.com/Wakanda/wakanda-digital-app-factory/releases/download/v1.1.3/wakanda-community-all_1.1.3_x64.dmg "download")


Now we can start our **HelloWorld** project.  

## Step 2: Choose your template
We can choose the type of app we want to create : mobile, web or both.

Let’s say we want to create an *Android app with Ionic2*.

To do that, we're going to launch the studio <img src="../img/iconWakanda.png"/> and click on **"Create a new solution"**:

<img src="../img/hp-initial.png"/>

Which opens the template selection page:  

<img src="../img/hw-template-selection.png"/>


The structure of your future projects depends on the template you choose.

You'll always have the **same back-end structure**, however you can choose to have a **web front-end and/or mobile front-end**.

Enter *- HelloWorld -* as an app name and select the **Ionic2 blank template**.

Now, in your **HelloWorld** project, you can find the basic Ionic2 file structure :

<img src="../img/hw-file-structure.png"/>  

You have 3 folders at the root of your project:

- **Backend:** Wakanda JavaScript Server. It contains all the Server files to logs, settings, permissions.  
- **Database:** Wakanda DB folder. It contains your data model(s), backups and your data.
- **Mobile:** where you’ll find all your front-end files to develop and build your mobile app. It contains all you need to code your Ionic 1 or 2 projects.

> **TIPS**:  
> - If you select both mobile and web, the same backend will be used for both applications. 


For our **HelloWorld** we’re going to work first in the `mobile` folder.


## Step 3: Check for dependencies

Mobile apps are based on **AngularJS**, **Ionic** and **Cordova**.

For mobile apps, you need to check for any missing dependencies.
Go in the main menu  (_Help_ > _Wakanda Troubleshooting_) and choose Android. (Troubelshooting can also be accessed from the console)

<img src="../img/hw-troubleshooting.png"/>

Here you can see that Homebrew, Apache and Android SDK are missing. Everything is explained there: why I need them, and how to install them.


## Step 4: Code and preview  

Once all your dependencies are checked you can preview your app.

Just click on your project, and then on **"Preview"**.

<img src="../img/hw-first-preview.png"/>


Let's have a look at our project structure : the src folder is the classical ionic2 project structure.

A simple change in `mobile/src/pages/home.html` and I have my **HelloWorld** done.

To make it more visual, you can change the home page background color in its scss file `mobile/src/pages/home.scss` by adding:

```css
.scroll-content {
  background-color:#f0f8ff
} 
```

The preview is automatically reloaded after each saving.

<img src="../img/hw-colored-preview.png"/>

> **TIPS**:  
> - You can select **"Preview in web browser"** if you prefer to see the result in your default browser.  

<img src="../img/hw-final-preview.png"/>


## Step 5: Run on emulator  

Now you can run your app on the [Android emulator](https://developer.android.com/studio/run/emulator.html "check documentation").

<img src="../img/hw-run-emulator.png"/>

<img src="../img/hw-emulator-view.png"/>

## Step 6: Run on device  


Make sure you have [USB debugging enabled](http://developer.android.com/tools/device.html).

Wakanda Studio automatically detects supported device when connected to the USB port.
Open the _Run_ dropdown and select the device to run on:

<img src="../img/mobile-run-devices.png" />

<!-- <div class="navigation-step">
  <a class="btn next-button" href="populate-database.html">Next: Populate your database <i class="icon-chevron-right"></i></a>
</div> -->
