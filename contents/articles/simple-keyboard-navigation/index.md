title: Simple keyboard navigation
abstract: A little bit of Javascript to add keyboard shortcuts to mrfrisby.com
author: Stuart Frisby
date: 2012-07-09 15:00
ds: July 9
dss: Jul 9
template: article.jade
tags: productivity, craftsmanship

Below is a quick snippet of code which allows you to add keyboard navigation to your (jQuery-enabled) shit. In my case, it looks at the href attributes of some stuff on the page (the pagination, which changes on a per-page basis), and also has some hardcoded keyboard shortcuts for things like the homepage, reading list, etc. I guess the next logical step would be a twitter style [overlay](http://goo.gl/IGKBO) listing available keyboard shortcuts.

To me, JavaScript is basically magic, and so this piece of code was and is probably both; Stolen from somewhere else & An outrage to anyone who actually understands this stuff.

<script src="https://gist.github.com/3073087.js?file=keyboard-navigation.js"></script>

[PPK](https://twitter.com/ppk) has a [handy tool](http://www.quirksmode.org/js/keys.html#link7) for determining keyCodes which I was using to rig this thing up.
