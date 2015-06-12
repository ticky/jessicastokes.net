---
layout: post
title:  "High School Programming"
date:   2009-02-16 09:00:00 +0800
categories: blast-from-the-past programming high-school
---

_**Note**: This post was migrated from my long-defunct blog. All text below this line is unedited, save for referenced images being lost years ago due to the weird relationship between Blogger (where this post was originally published), Google+ and Picasa Web Albums (where the images resided)._

I recently stumbled across an old flash drive i used during high school. By old I mean a USB 1.1 IBM 64MB flash drive.

Yeah, *THAT* old.

So anyway, i cruised through the contents. Audacity Portable, GIMP Portable and some random essays.

Then I noticed some programming I did back in the day, so I decided to share it with you. Because, you know -- you should care. duh.

## Episode One: Pencil Shop Pro

Pencil shop pro was an attempt at using mouse input (IE positioning, click state) to create something useful. Many people kinda failed at this, at most making something that told you where your cursor was on the page, but being the adventurous bastard I am, I (Along with friends Luke and Paul) decided to take on the big boys with my own image editing app.

We're talking VB 6 here, so no .NET bullcrap to distract from the app itself. And here it is, in all it's Vista capable glory:

_**Note**: The image which is supposed to appear here has been lost._

There you have it. Unbelievably simplistic, but it works. Every one of those colours works. Even the "Eraser" kinda... works. (It makes things black again...)

Thickness of your "pencil" can vary from 1 pixel through to 100 pixels (This was a rush job, you see - and back in the day, this was nearly fullscreen on those computers, so larger didnt seem necessary)

RGB colours are supported, but there is a bug where typing a value in won't actually do anything, so sliders it is.

As for the RGB sliders, they only go from 1 to 155, so you can't ever get *true* black. :)

The "Clear" button and "New" menu option both clear the image back to its former black self.

An interesting feature is that you can resize the window however you wish, and paint as big as you want. Silly, yeah.

As for loading and saving? Well they didn't ever make it in, as PSP had done everything it needed to do for the assignment.

I remember finding the source somewhere once, and trying to convert it into VB .NET ('Cause that's all i had at the time -and still do... ) but the way it works is entirely incompatible with .NET.

Luckily, though, it's compatible with every windows version since '95!

Props to Paul and Luke for letting me do all the work! =P

## Episode Two: Über Calculator

Über Calculator was a simple project introducing us to VB .NET the following year. Obviously, the project was just to create a calculator with all the basic functions. Really simple, so i finished it in ten minutes. Maybe even 5. But then set out to pimp the bitch!

_**Note**: The image which is supposed to appear here has been lost._

All the bling i could think of, however, was to have a section you could open and close with some extra options, including a pulsating transparency effect (Kinda visible here), the ability to toggle always-on-top (For those crazy number crunching activities that required it) and a "Show in taskbar" option -- in case someone thinks you're cheating or something.

It handles Divide-By-Zero flawlessly. I really should just make it implode upon itself, but that'd be no fun.

And hell, it was interesting to code. I did lots of shortcutting and shit there. And worked out timers. All in .NET 1.1 (The original VS .NET)

## Episode 3: The pizza Order Form

This came later the same year as the Über Calculator. It was, quite simply, to make a usable interface for ordering pizza. Why anyone would download a full on .NET app to order pizza is beyond me, but I tacked it, and, imho, tacked it well.

_**Note**: The image which is supposed to appear here has been lost._

There she is. A large image of the currently selected pizza to the left, with a  dropdown for selecting your variety. Garlic bread, extra cheese and drinks are all available, as is home delivery. All pretty simple, really, once I used up/down boxes for it. :P

It does calculate the prices correctly, but doesn't compensate for how VB stores stuff. So that's $12.20 there, but i didnt make it pad the numbers -- this thing CAN have huge numbers, so a len() won't work, but if I'd known regex's at the time, I could've used them.

I may add to this later, if i can get Klick 'n Play working.

EDIT: Aha! I found a working version! Now for part 4:

## Episode 4: The Simpsons Platformer

With great disregard for copyright law, i present to you one of the first proper games I ever produced; The Simpsons Platformer, for Klick &amp; Play.

_**Note**: The image which is supposed to appear here has been lost._

Klick &amp; Play was sufficiently awesome for 1995. So why were we using it in 2006? No idea.

Anyway, taking some 256 colour bitmaps, GIFs and some muscle, I managed to create this monstrosity. A four-and-a-half-level platform game with Homer as the protagonist, and Bart watching over you. Oh, joy!

Using a bunch of Homer sprites (Which was all i could find - I WAS after Bart) i crafted a simplistic platformer. Confusing at times, too -- and only four-and-a-half levels.

The level where a Duff truck appears requires you to use your MOUSE to avoid the "Duff Light" six packs, and catch the normal, manly "Duff" six packs. The rest of the gmae is an arrow key platformer.

If you wait long enough, the Bees (The only enemy in the game) will start to bounce off-course. I have NO clue why this is. KnP is just buggy as hell. =P

Suffice to say, posting images is going to just be silly. This game is made to be ENJOYED :D. So, here, I present to you the first ever public release of *The Simpsons Platformer*. Please don't sue me, fox!

[Download .7z from GSh@ii.net](http://members.ii.net/%7Egregstokes/ext/gshblog/dl/simpplat/simpplat.7z) -- Those who don't have Klick n Play (And i'm sure that's... all of you) can get it from [LittleDawg's Klick &amp; Play Page](http://members.tripod.com/%7ELittleDawg/knp.htm) - As far as I can tell, the only place on the whole internet with a woeking KnP binary.

*NOTICE: The Simpsons names, characters and graphics are used without permission from Twentieth Century Fox or any of its affiliates. The Simpsons is copyright and the property of Twentieth Century Fox.*