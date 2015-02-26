# twemoji on the fastlane

twemoji on the fastlane is a scss helper for twitters awesome twemoji.

## get it
<pre>
bower install twemoji-on-the-fastlane
</pre>

## quick start

Three quick start options are available:

- [download the latest release](https://github.com/andrezimpel/twemoji-on-the-fastlane/archive/master.zip).
- clone the repo: `git clone https://github.com/andrezimpel/twemoji-on-the-fastlane.git`.
- install with [bower](http://bower.io): `bower install twemoji-on-the-fastlane`.


## usage

### include
Just include the `/dist/css/fastlane.css` file and you good to go. The temoji will be loaded from [maxcdn](https://twemoji.maxcdn.com/).


###  use

You can use the temoji like so:

```html
<i class="twfl twfl-purple-heart"></i>
```

or with underscore

```html
<i class="twfl twfl_purple_heart"></i>
```

Be sure to use `twfl` as a base to allow generic styling.

Than just add the twemoji you like. See all [here](#).

Yea, it's inspired by font awesome, :)


## customize

Be sure to include the `/src/scss/fastlane.css` to enable customization.

### custom asset path
You're also able to adjust the url the assets are loaded form. twemoji on the fastlane also includes the png and svg assets. To use them do this:

```scss
$twemoji-asset-path: "/dist/assets/";
// default: "https://twemoji.maxcdn.com/""
```
Note: _Please include a trailing slash!_

### IE8 fallback
twemoji on the fastlane supports older browsers that can't deal with svg, like IE8.

To enable png fallbacks just add this line before you import the `fastline.scss`:

```scss
$png-fallbacks: true;
// default: false
```

### fallback
If you need another fallback size, feel free adjust it:

```scss
$png-fallback-size: "36x36";
// default: "16x16"
```
