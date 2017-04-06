---
layout: get-started-default
version: 2
---

# Version control your code

## Step 1: Create a local repository

Click on <img class="inline" src="/img/git-shortcut.png" /> to open Git.
Then, click on _Create Git Repository_.

## Step 2: Initial commit

Add changes to your stage and make a first commit:

<img src="/img/hww2-git-commit.png" />


## Step 3: Setup a remote repository

- First create a remote repository, "Wakanda-Hello-World" on your Github account. (Or retrieve an existing remote repository URL)

<img src="/img/hww2-create-remote-github.png" />

- Copy its html link

<img src="/img/hww2-remote-url.png" />

- Click on the Git menu icon and then _Add a remote_ to open the **Remote Repositories** panel.


- Setup your remote repository, by pasting your remote repository url:

<img src="/img/hww2-add-remote.png" />

- Finally, push your app on your account with a right-click on the git menu. 

 Let us know who your favorite superheroes are with a _Wakanda_ tag on your app! 

 We have a thing with the Black Panther, and you ?


> **Warning:** 
> - The password will be saved as plain text in the `.git/config` file.
> - You can however leave the Username and Password fields empty and cache your password in Git.

> **Tips: Cache your password in Git** 

> - **Mac OS X:** `git config --global credential.helper osxkeychain`
    
[More info  »](https://help.github.com/articles/caching-your-github-password-in-git/#platform-mac){:target="_blank"}

> - **Windows:** `git config --global credential.helper wincred`
    
[More info  »](https://help.github.com/articles/caching-your-github-password-in-git/#platform-windows){:target="_blank"}

---

[Deploy your app »](deploy-your-app.html){:class="btn"}