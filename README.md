# Wakanda.io

## Edition

### Home page content

- to add new entries in the main menu, edit `_data/menu.yml`
- to edit home page content (headlines, paragraphs...), edit `_data/content.yml`

### Releases

- to set new community releases for the download sections (stable and preview versions), edit `_assets/js/main.js`:

```
var versionLinks = { 
communiy_stable: "2.0.3",
//preview: "2.0.1",
enterprise: "2.0.3"
};
```
- and update the enterprise version in [back-office] (https://backoffice.wakanda.io/)

> Find advanced configuration options in `js/main.js`.


## Development

### Introduction

This website is based on [Jekyll](https://jekyllrb.com/). It is hosted on Github Pages.

> **Note:** push your changes to the `gh-page` branch in order to publish them on preproduction. 

### Setup

#### Install Jekyll

```
$ gem install jekyll bundler
```
#### Install bundle (Jekyll Plugin)
```
$ cd wakanda.github.io
$ bundle install 
```

#### Install Gulp

```
$ cd wakanda.github.io
$ npm install
$ npm install gulp -g
```
#### Run the website

```
$ cd wakanda.github.io
$ bundle exec jekyll serve
```

> **Note:** Jekyll generates the static site in the `_site` folder.

### Layout 

- to update the main menu layout, edit `_includes/menu.html`
- to update the general layout, edit `_layouts/default.html`
- to update the blank layout, edit `_layouts/blank.html`
- to update the marketplace layout, edit `_layouts/marketplace.html`
- to update the intern pages layout, edit `_layouts/page.html`

### Style 

- to update the Wakanda style, edit `_assets/saas/_*.scss` files and `_assets/saas/main.scss`

The `_assets/saas/partials/_base.scss` file should help finding which file to edit:

```
/** Mixins */
@import "mixin";

/** General theme */
@import "variables";
@import "buttons";
@import "icons";
@import "type";
@import "layout";
@import "mail_form";

/** Sections **/
@import "navigation";
@import "headlines";
@import "slideshow";
@import "features";
@import "download";
@import "community";
@import "quotes";
@import "events";
@import "footer";

/** Pages **/
@import "pricing";
@import "marketplace";
@import "partners";
@import "whitepaper";
@import "what_we_do";
@import "landing";

/** Effects */
@import "strips";
@import "typed";
```
- to compile the scss files from the site:
```
$ cd wakanda.github.io
$ gulp site_css
```
- to compile the scss files from the site at each changes:
```
$ cd wakanda.github.io
$ gulp watch
```
### Scripts

- to add synchronous scripts (to be executed after page load), edit `_includes/sync_scripts.html`
- to change js files _assets/js/main.js
- to uglify js files after a change :
```
$ cd wakanda.github.io
$ gulp site_js
```

> **Note:** once Jekyll is started with `jekyll serve`, it will look for file changes and automatically compile `scss` files to `css`.

### Medias

- find Wakanda logo in different versions in `_img/logo`

### Libraries

The website uses Bootstrap `v4.0.0-alpha.6`.

- to upgrade bootstrap, edit `css/lib/bootstrap/*` files.
