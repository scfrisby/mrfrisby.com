title: A New mrfrisby.com
abstract: A little bit about my rebuild of this site and the stuff I'm using behind the scenes.
author: Stuart Frisby
date: 2012-11-11 23:10
ds: November 11
dss: Nov 11
template: article.jade
comments: on

When I set live the previous version of this site, it was the simplest thing I could release - a set of static HTML files, authored inside my text editor, everything written by hand and augmented by the occasional TextExpander shortcut. I talked then about how `HTML` & `CSS` are my environment, and so writing and managing a site in them was natural for me. 

Having worked that way for a little over a year, I started to lament the tedium of a few little tasks which accompanied posting a new article - manually adding a new entry to my `RSS` feed *(which I kept fucking up, as [Matthew](http://www.thewatchmakerproject.com/) & [Deepak](http://www.deepakg.com/) we're all too happy to point out)*, cross-referencing new posts on various other parts of the site, yadda, yadda. They were pretty minor complaints though, and so when I decided I wanted to solve them I went looking for something that was almost as simple as my handspun system, but meant I'd be doing less donkey work. 

After trying to install/compile/read-the-docs-of many static site generators and failing at various ill-documented stages, I ended up getting along rather better with [Wintersmith](http://jnordberg.github.com/wintersmith/) by [Johan Nordberg](http://johan-nordberg.com/) - which was well documented and easy to get going. The [Jade](http://jade-lang.com/) templates are taking some getting used to, but I'm enjoying it, and finding it quite trivial to extend and bend it to my will here on this new version of my site. That it's static means I can keep it synced across machines via dropbox and add new posts from anywhere I can write a markdown file. 

The keen-eyed amongst you will also have noticed that this version is somewhat responsive, but that's hardly a difficult task for what is essentially a collection of text documents. Design-wise I've been influenced in the main-part by [Monocle](http://monocle.com) and it's lovely editorial design - I stopped short of creating a complete remake, but the influence is pretty self-evident for anyone that reads it. In place of [Plantin](http://goo.gl/KYmQi) I'm using [Gentium Book Basic](http://www.google.com/webfonts/specimen/Gentium+Book+Basic), which is a lot less lovely, but a lot more available. You can read a bit about Monocle's type design in [this 2009 article](http://fontfeed.com/archives/in-use-plantin-for-monocle/) from Font Feed, this quote in particular sums up the retrained quality the publication exudes: 

> […] I think that if you want to build something to last it should have a confident permanent look. Something that doesn’t reinvent itself every 6 months. Plus I have always found that restraint and a tight set of rules actually prompts more creative solutions. We always look at ways to use Plantin, not ways to replace it. <cite>Monocle Creative Director - Richard Spencer Powell</cite>  


I'm also bringing back comments for the first time in years on posts for which opportunities for discussion exist - they're the same [Disqus](http://disqus.com) comments you find everywhere else. If you're curious to see how they or anything else here in implemented, the full source is on [github](https://github.com/scfrisby/mrfrisby.com). 

If you spot anything broken, do give me a shout - I'm still fiddling around with some stuff and will get around to adding an about page at some point, but this'll do for now. 