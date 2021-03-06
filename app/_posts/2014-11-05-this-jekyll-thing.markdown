---
layout: post
title:  "This Jekyll Thing"
date:   2014-11-05 10:03
type: post
published: true
comments: true
---
For the past year I have been engaged in a tumultuous relationship with Wordpress. It all started when I left my comfortable job as a Microsoft consultant in Charlotte to join my friend's startup company [Redwood](http://redwood-inc.com) in Seoul, South Korea. Up to that point I had never had to make too many important decisions on projects I'd worked on. Mostly I just bounced from office to office and worked off of whatever technology stack (.NET primarily) they were using at the time. Those were all mid-sized to large corporations where a significant amount of "technological inertia" was already in place and who was I to buck the trend? Well, in my new job the slate was clean and I was responsible for setting the trend.

Before I arrived on the scene Redwood had taken on a few little web projects where they would cobble together some different third-party widgets and approximate a working thing. Wordpress was a big part of this recipe. I was vaguely familiar with Wordpress from setting up my personal blog and a few dinky websites for friends, but I had never dug too far into its guts or made heavy modifications. Being blissfully unaware I figured Wordpress would be as good a platform as any to put together a dynamic, beautiful company website. In doing so I stepped into Wordpress hell.

<div style='background: url(/assets/images/blog/jekyll.jpg); height: 200px; background-attachment: fixed; background-size: cover;'>
</div>

You see, my fellow Redwoodians have strong opinions about how their website should look and act but only in a hindsight sort of way. So while we started off with a clear vision of utilizing a nice little Wordpress theme with a bit of added functionality from plugins, we ended up spending hour after hour making increasingly tedious style tweaks on a crufty theme codebase. What I learned all too well is that what shiny plugins like [Revolution Slider](http://codecanyon.net/item/slider-revolution-responsive-wordpress-plugin/2751380) or extensive theme options add in flexibility and "user friendliness" they steal from the efficiencies of traditional software development. So if I needed to make a change to a style element I would have to hunt it down in the various stylesheets employed by the theme (assuming it wasn't a dynamic setting in the theme's options), type it into the web text editor, save, and wait a few seconds for the page to refresh. This is no big deal for a spot change, but if you're really digging in then those 2 or 3 seconds for each change/test iteration become maddening. And of course we went through several rounds of edits with minds changing back and forth constantly. What would have been a cinch with a proper version control system and deployment pipeline was slowed to a crawl in Wordpress.

And if the development process wasn't enough of a bummer, the end result was sloooooow. I had free credits on Windows Azure from my previous job so it seemed like a no-brainer as a place to deploy our site. Azure Websites offers a Wordpress quick-start template that's great for getting things off the ground but the ClearDB MySql database plan that comes with it is either incredibly dinky at the free level or incredibly expensive for not much added functionality at the pay levels. And since a lot of Wordpress caching plugins are hampered by the fact that Azure Websites run as PHP on top of IIS, there were lots of db roundtrips on every pageload (especially in the course of development).

Just today I finished off the last of the tweaks on version 2 of our site (again in Wordpress) and I've vowed to never again stray into Wordpress land unless it's in the absence of bloated plugins and with a proper versioning and deployment scheme. You know, something like [Jekyll][jekyll].

[jekyll]:      http://jekyllrb.com
