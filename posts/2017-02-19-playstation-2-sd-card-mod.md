---
layout: post.html
title: Setting up my PlayStation 2 to load games from an internal SD card
excerpt: I recently discovered that the PlayStation 2 can accept an IDE hard drive via the official Network Adapter accessory. With just a bit of software trickery, you can back up your games and launch them from it!
published_date: 2017-02-19 12:04:00 +1100
categories:
  - games
---

I recently discovered that the PlayStation 2[^1] can accept an IDE hard drive via the official Network Adapter accessory. With just a bit of software trickery, you can back up your games and launch them from it!

After looking frustratedly at a list of compatible[^2] drives, it occurred to me that there are other viable storage media which work over an IDE connection! An IDE SD card adapter should fit the bill - in 2017, SD Cards are fast[^3] and cheap, and solid state feels like a good way to go[^4].

I found a reasonably priced [44-pin IDE to SD card adapter](https://www.amazon.ca/dp/B00H3CRJNY) on Amazon, plus a [40-pin IDE and Molex power to 44-pin IDE adapter](https://www.amazon.ca/dp/B00006B8C2). After some searching, I found a secondhand Network Adapter for about CA$10, and figuring I wasn't going to get a better deal, picked it up! I also picked up a 128GB Class 10 SDXC card, and just in case adapter wasn't SDXC compatible, a 32GB Class 10 SDHC card.

Each item arrived at vastly different times, so unfortunately unless you're up for paying for local stockists of all these parts, it could be a month or two before you've collected all the parts you need!

I was pleasantly surprised to learn that my _super_ cheap Network Adapter was in fact an official North American model with modem and ethernet, and not a clone[^5]! I was also able to verify that that the adapter worked by [configuring the network](https://youtu.be/PqCuiMoMzs0) in one of my games.

The process was pretty straightforward. I had to;

1. Copy a bootable PS2 hard disk image to the SD card
2. Connect the SD card and adapter to the console
  * Hope it'd work with the 128GB card
3. Start the console
4. Install my games!

For the hard disk image, I went with a basic Free HDBoot one I found via [this tutorial](http://imgur.com/a/2rUST). Having a Mac, however, meant that I ended up jumping through some hoops to get a Windows VM to write to the card, and I am 95% sure I didn't need to! It should be possible to simply write the image to the SD card using something like `dd if=FHDB1.93.img of=/dev/disk2`.

Thankfully, it turned out the 128GB card _was_ readable in my adapter! Score!

Once I had my PlayStation booting arbitrary software, I decided I needed a backup in case I had problems with the SD cards, so I took a spare Memory Card and used [Free MCBoot installer](http://ichiba.geocities.jp/ysai187/PS2/FMCB/index.htm) to make a universal installation, which would mean that Memory Card can now boot in any PlayStation 2 model!

After making a bootable Memory Card, I'd also recommend using the included uLaunchELF utility to format the hard drive before installing Free HDBoot. Free HDBoot can be installed using the same installer as Free MCBoot! This'll mean you have the cleanest possible installation of Free HDBoot. The image I started with had some extra stuff I wasn't interested in!

Once you've made it to that point, you can use [HDLoader Game Installer](http://ichiba.geocities.jp/ysai187/PS2/HDLGameInstaller.htm) to install your games to your SD card! Copy the program to a USB drive, and use uLaunchELF to start it. Installing a game is then as simple as inserting the disc, then pressing Start. Once installed, you can use [OpenPS2Loader](https://bitbucket.org/ifcaro/open-ps2-loader/wiki/Home) to launch the games[^6]!

I'm currently running a slightly updated version of this setup, and it's really nice being able to load up PS2 games without having to go find my discs! Combined with Logitech Cordless Action controllers, and the DVD Remote Control[^7], my PlayStation 2 can be started from the couch, and feels much more like the modern consoles I've grown accustomed to!

[^1]: This includes all non-slim models released outside Japan, plus any non-slim Japanese console other than the SCPH-10000 and SCPH-15000. Instead of the Expansion Bay these two Japanese models included a PCMCIA slot which had a similar network adapter, but which used an external, non-user-serviceable hard drive enclosure. Any non-PCMCIA network adapter will suffice.

[^2]: Unfortunately, the Network Adapter has fixed IDE and Molex power connectors, so many later-model drives are incompatible, if only phsyically. Modifications to the network adapter to move the connectors are possible, as the connectors are mounted on separate boards, but obviously given I didn't go down this route I won't cover this approach!

[^3]: Much faster than the PlayStation 2's ATA-66 bus or 2x speed DVD-ROM drive, anyway! 😜

[^4]: Particularly if I'm to be carting the PlayStation across the planet a few times 😅

[^5]: Many cloned versions of the Network Adapter seem to exist, particularly on eBay. Many of them are even available with Serial ATA interfaces, however, the Serial ATA interface will almost invariably be via an adapter anyway, and many of these do not include any network functionality. I avoided these because I didn't want to complicate the setup!

[^6]: You can also use Sony software known as HDDOSD or "Browser 2.00," which allows your games to be launched from the Sony menu, and means games can show up in the menu using their save icons, but attaining it is a bit complicated, so I won't cover it in this post!

[^7]: The newer SCPH-10420 model, as it includes power and eject buttons, though it's only compatible with newer PlayStation 2s which include a built-in IR sensor!
