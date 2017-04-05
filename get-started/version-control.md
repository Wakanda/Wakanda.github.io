---
layout: get-started-default
version: 2
---

# Version control your code

## Step 1: Create a local repository

From the solution explorer, click on <img class="inline" src="/img/git-shortcut.png" /> to open Git.
Then, click on _Create Git Repository_.

## Step 2: Setup a remote repository

First create a remote repository, "Wakanda-Hello-World" on your Github account. (Or retrieve an existing remote repository URL)

<img src="/img/hww2-create-remote-github.png" />

Click on the Git menu icon and then _Add a remote_ to open the **Remote Repositories** panel.


Setup your remote repository:

<img src="/img/remote-configuration.png" />

And now you can commit your Hello World ! Let us now with a _Wakanda_ tag !


If you're new with Github, [more info here](https://help.github.com/articles/set-up-git/).

> **Warning:** 
> - The password will be saved as plain text in the `.git/config` file.
> - You can however leave the Username and Password fields empty and cache your password in Git.

> **Tips: Cache your password in Git** 

> - **Mac OS X:** `git config --global credential.helper osxkeychain`
    
[More info  »](https://help.github.com/articles/caching-your-github-password-in-git/#platform-mac){:target="_blank"}

> - **Windows:** `git config --global credential.helper wincred`
    
[More info  »](https://help.github.com/articles/caching-your-github-password-in-git/#platform-windows){:target="_blank"}




## Step 3: Initial commit

Add changes to your stage on click to plus icon next to file name or add all on clique to plus icon next to "Changes" section:

<img src="/img/change-file.png" />

Add your commit message and clique to commit button : 

<img src="/img/commit.png" />




## Step 4: Push your commits


Click on the Git menu icon and then _Push_ to open the **Push** panel.


Setup your push branch:


<img src="/img/remote-push.png" />

and clique to push button.


---

Now, deploy your app:

[Deploy your app »](deploy-your-app.html){:class="btn"}