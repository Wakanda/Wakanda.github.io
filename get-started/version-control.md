---
layout: get-started-default
version: 2
---

# Version control your code

## Step 1: Create a local repository

From the solution explorer, click on <img class="inline" src="/img/git-shortcut.png" /> to open Git.
Then, click on _Create Git Repository_.

## Step 2: Initial commit

Add changes to your stage and commit:

<img src="/img/hww2-git-commit.png" />


## Step 3: Setup a remote repository

First create a remote repository, for exemple on Github. (Or retrieve an existing remote repository URL)

<img src="/img/hww2-create-remote-github.png" />

Click on the Git menu icon <img class="inline" src="/img/git-remote-repositories.png" /> and then _Add a remote_ to open the **Remote Repositories** panel.


Setup your remote repository:

<img src="/img/hww2-add-remote.png" />



If you're new with Github, https://help.github.com/articles/set-up-git/

**IMPORTANT**: the password will be saved as plain text in the `.git/config` file.
You can however leave the Username and Password fields empty and cache your password in Git.

### Cache your password in Git

**Mac OS X**

    git config --global credential.helper osxkeychain
    
[More info  »](https://help.github.com/articles/caching-your-github-password-in-git/#platform-mac){:target="_blank"}

**Windows**

    git config --global credential.helper wincred
    
[More info  »](https://help.github.com/articles/caching-your-github-password-in-git/#platform-windows){:target="_blank"}

---

Now, deploy your app:

[Deploy your app »](deploy-your-app.html){:class="btn"}