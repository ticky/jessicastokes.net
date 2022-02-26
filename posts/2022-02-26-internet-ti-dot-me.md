---
layout: post.html
title: internet-ti.me
published_date: 2022-02-26 09:30:00 -0800
---

I built a website to help with organising events using Internet Time; [internet-ti.me](https://internet-ti.me)!

Internet Time is a quirky time standard [Swatch](https://en.wikipedia.org/wiki/Swatch_Internet_Time) launched on some of their digital watches just shy of the turn of the century, in anticipation of our increasingly connected world.

The core idea being that it avoids time zones altogether by centralising on a single, simplified time notation of numbers between @000 and @999, and each person need only understand where _their_ day falls on the cycle to organise events on easily shared terms.

I've been a big fan of it for a while - it’s [an April fools easter egg in my shell configuration](https://github.com/ticky/dotfiles/blob/10a0eb14f2eca08f4e8f6ad58cd88447b63214b7/platform/all/zsh/prompt.zsh#L125-L137), I wrote [an Apple Watch app](https://apps.apple.com/app/at-watch/id1440309007) to put it on your watch face, and now this!

internet-ti.me's home page is a live Internet Time clock. It shows the current Internet Time, the same for everyone across the world, and a set of local time conversions, including the browser's current local time.

Additionally, you can link to a _specific_ Internet Time - so if for example I am organising an event for @167 in my evening, I can link to <https://internet-ti.me/@167>, and anyone can click that link to see when it is at a glance in their conventional time zone.

But the secret sauce is in the social metadata - linking to that time on Twitter[^1], iMessage, Telegram, Discord, Slack, or anywhere else that shows an Open Graph or Twitter Card-powered[^2] preview, will embed the time zone conversions directly in-context! Here's an example of what it looks like when embedded in something like Discord:

<blockquote>

<small>internet-ti.me</small>  
**[@167](https://internet-ti.me/@167)**  
is 19:00 PST, 22:00 EST, 03:00 UTC, 04:00 BMT, 12:00 JST, 16:00 NZDT


<center><a href="https://internet-ti.me/@167"><img src="https://internet-ti.me/167.png" alt="internet-ti.me card for @167" width="512" style="max-width:100%" /></a></center>
</blockquote>

I've been using Internet Time with these social embeds to organise events with friends for a while now, and this has been handy for sharing with people who are less Internet Time obsessed than I am 😅

## Learning about CGI start-up time years late

Initially, I wrote internet-ti.me in Python as a pair of CGI scripts, but eventually I discovered a problem.

The CGI scripts would start and run in under two milliseconds on my M1 MacBook Air, and I simply didn't question it until it ended up running about *five hundred* times slower on my actual web host[^3]. Every page load therefore incurred about a second of just *Python init time*.

After some profiling and head scratching, and ultimately consulting with some more Python-inclined friends, it turns out that booting up the Python process incurred some not-insubstantial costs of initialising modules.

Even though my web host are using SSDs, they're not even close to the same class as that in my MacBook Air; the random access throughput of loading all of the Python modules, requiring the finding, reading, parsing, and executing of a not-insubstantial number of files, was seemingly the biggest culprit.

With that in mind, I ported it to [Flask](https://flask.palletsprojects.com), which along with being a persistent process whose startup time is effectively irrelevant to request times, also had the benefit of making it easier to share code between routes, and remove some of the boilerplate.

Consequently, all the dynamic page loads came down from about 1,300ms generation time to a much more palatable 100 to 300ms. Does it matter that much in the grand scheme of things? Not *really*, but given my web host bills by resource usage I believe most of what I was being accounted per request was literally just that Python init time. Oops!

## Further optimisations

In search of even more speed and fewer bytes to send, I wound up changing preview images from 32-bit RGBA PNGs to 8-bit indexed PNGs. This saved about 65% in bytes transferred, and I can barely tell the difference between the old and new social images unless I pixel peep.

My next ultimate goal is to add an interactive converter tool, so you can adjust the Internet Time or any of the conventional times and pick a time for an even without guessing times ☺️

[^1]: The `@` is actually optional in the URL, because Twitter’s username autocomplete is kind of sticky once you type an `@`, even in the middle of a link

[^2]: These are _technically sort of competing but ultimately complementary_ standards; using both nets you broader compatibility, with things like Discord even requiring the use of Twitter Cards metadata to control the format of inline displays

[^3]: I use [NearlyFreeSpeech.NET](https://nearlyfreespeech.net) for this, they're good!
