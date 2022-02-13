# Autosize Text – Figma plugin

[![](https://img.shields.io/endpoint?url=https://figma-plugin-badges.vercel.app/api/installs/950454402091975756)](https://www.figma.com/community/plugin/950454402091975756/autosizetext)

This is the home for  ['Autosize Text' Figma Plugin](https://www.figma.com/community/plugin/950454402091975756/autosizetext). The goal of this plugin is to automatically resize text to fit in its textbox.

## How this plugin works

When triggered this plugin autosizes text to fit within its textbox.

For example

### If text it too small it will grow to fit the bounds.

**Before:** 

![small before](images/small_before.jpg?raw=true) 

**After:** 

![small after](images/small_after.png?raw=true)

### If text it too big it will shrink to fit the bounds.


**Before:** 


![large before](images/big_before.png?raw=true)

**After:** 

![large after](images/big_after.png?raw=true)


### This plugin has three different options to select textboxes to resize.

* **Full Page** - Resizes all textboxes on current page
* **Selection** - Resizes currently selected textboxes
* **Textbox Names** - comma seperated list of textbox names to resize (ex. `textbox1,textbox2` with resize textboxes that have names `textbox1` and `textbox2`)


## Issues

Please file any issues, bugs or feature requests as an issue on the [GitHub](https://github.com/anovis/autosizetext/issues) page.

## Roadmap

 &#9744; Run as background process \
 &#9745; Select specific textboxes to resize

## Want to Contribute

If you would like to contribute to the plugin (e.g. by improving the documentation, solving a bug or adding a cool new feature) submit a [pull request](https://github.com/anovis/autosizetext/pulls).


## Running Locally

* `npm install`
* `npx webpack --mode=development --watch`

Import as a new plugin into Figma

## Want to Support

<!-- markdownlint-disable MD033 -->
<a href="https://www.buymeacoffee.com/austennovis" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" height="41" width="174"></a>
<!-- markdownlint-disable MD033 -->