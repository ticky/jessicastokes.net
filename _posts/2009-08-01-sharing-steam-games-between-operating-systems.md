---
layout: post
title:  "Sharing Steam Games between Operating Systems"
date:   2009-08-01 09:00:00 +0800
categories: blast-from-the-past computers steam games
---

_**Note**: This post was migrated from my long-defunct blog. All meaningful text below this line is unedited. The original publishing date of this post has been lost - it was published sometime between 2009 and 2010._

If you're anything like me... and hell, if you weren't, you wouldn't be here... you probably run multiple Operating Systems on your home PC.

If the answer is yes, do you play games/own games on [Steam](http://store.steampowered.com/)? If you've got Half-Life, Half-Life 2, Team Fortress 2, Portal or anything Valve make, likely you do. And if you're anything like me, you have tens of gigabytes of them.

So what happens when you have multiple Operating Systems installed? You install the games separately for each OS, wasting valuable space on your hard drives, and separating your savegames and some settings.

How can this be worked around? Easy.

Windows 2000 onwards, operating on NTFS, have supported a special type of file called a "junction". What this basically does is make it so that every time your computer sees this file, it gets pointed to another file or folder entirely, and continues reading from there.

_**Note** that from Vista onwards, Windows also supports a real Symlink under NTFS. For compatiblity reasons, I've stuck with a Junction -- they do essentially the same thing, just a Symlink can operate over a network, but you wouldn't want to use Steam programs streaming over your LAN - not even with Gigabit..._

Simple example of this? If I have say, a dodgily made application that only handles your user directory if it resides under `C:\Documents and Settings\`, I can actually make a junction at `C:\Documents and Settings\` that points the computer to `C:\Users\` - solving the problem unless the program is even MORE faulty and uses its own dodgy methods for accessing the filesystem -- in which case, i recommend getting a new program. =]

So how does this actually help us? Well, we can whack your whole "steamapps" folder onto a separate drive or partition -- even a removable device (Be careful with this one, though - you might break something there) and point every instance of steam on every OS (Including Linux) to that same folder.

How is this done? Well, since most Linux users already know this, I'm going to quickly outline it for Windows users. Those running Steam under Wine probably already know enough about Linux to do the same thing. =]

Okay, first things first, sadly, Windows does not include any tools that you can use to create junctions, so you're going to have to grab the very handy [Junction](http://technet.microsoft.com/en-us/sysinternals/bb896768.aspx) (Spectacular name!) tool from Sysinternals.

Grab that Zip file, and extract the .exe to somewhere in your Path (`C:\Windows\` does the trick)

While that's happening, find your `steamapps` directory. It's usually under `C:\Program Files\Steam\steamapps\`. Now you can either copy everything in it to another directory or drive -- I copied mine to a separate partition on another drive which I called `steamapps` and mounted to `S:\`. Once this is done, you need to take note of the path your steamapps are under.

Once that's done, fire up the Command Prompt - Press Windows+R or Start -> Run on XP, or just type into the start menu search bar on Vista or 7. Type `cmd` into your respective textbox, and give your Enter key a friendly tap.

Up should pop a nice, daunting black and gray box of doom. Don't worry too much if you're unfamiliar with the command prompt and its usage. It's really quite easy. Now, what we need to do is locate your current OSes Steam directory. Once again, it's usually `C:\Program Files\Steam\steamapps` so using cd to switch directories, you'll need to do so in this order:

```
C:\Users\Jessica> cd \
C:\> cd "Program Files"
C:\> cd "Steam"
```

Welcome to your Steam folder. Now before we proceed, I'd just like to check once more that you exited Steam. Did you? Not just clicking the "X" button -- I mean a full exit, so clicking "File -> Exit Steam", or right-clicking the tray icon and choosing "Exit"
