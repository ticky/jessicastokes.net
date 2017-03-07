---
layout: post
title:  PlayStation 2 HD Boot Quick-start
date:   2017-02-23 22:32:00 +1100
categories: games playstation
---

In [my last post]({% post_url 2017-02-19-playstation-2-sd-card-mod %}), I discussed how I got my PlayStation 2 booting from an internal SD card, and how you can run games from it. I've since prepared a super-simple quick-start image for getting up and running with PS2 HD booting.

### Requirements

You will need:

* A PlayStation 2 compatible with internal storage[^1]
* A PlayStation 2 network adapter compatible with your PlayStation 2
* Some form of IDE-attached internal storage
  * SD Cards, along with readily-available [44-pin IDE to SD card adapters](https://www.amazon.ca/dp/B00H3CRJNY) and [40-pin IDE and Molex power to 44-pin IDE adapters](https://www.amazon.ca/dp/B00006B8C2) are a good choice!
  * Hard drives will work, but you'll want to check compatibility, and that's something I don't plan to cover!
* A computer capable of connecting to your IDE-attached internal storage
  * A computer with an SD card reader will do just fine for SD cards!
  * Other storage devices may require a USB adapter if your computer is too new
* A spare PlayStation 2 memory card
* A spare USB mass storage device of some kind, formatted to either FAT or FAT32
* [The Quick-start image](/ps2-hdboot-quickstart-1.0.img.gz)
* [Free MCBoot Installer](http://ichiba.geocities.jp/ysai187/PS2/FMCB/index.htm)
* An hour or two in which to mess around!

### Getting Started

#### macOS or Linux

To install this quick-start image to your storage device of choice on macOS or Linux, you can use this command:

```bash
gunzip \
  --keep \
  --to-stdout \
  ps2-hdboot-quickstart-1.0.img.gz | \
sudo dd \
  of=/dev/disk3

# where /dev/disk3 is the raw device
# specified in Disk Utility
```

#### Windows

To install the quick-start image on Windows, you can use [Rufus](http://rufus.akeo.ie), by:

1. selecting your disk under the "Device" list
2. checking "Create a bootable disk using" under "Format Options"
3. choosing "DD Image" under the adjacent dropdown
4. selecting the `ps2-hdboot-quickstart-1.0.img.gz` file as the image

### Setting up your PlayStation 2

Once you've done that, connect your storage device to your PlayStation 2's internal IDE connector, and start it up.

After the Sony Computer Entertainment logo, you should be greeted with the uLaunchELF main menu!

Copy the extracted Free MCBoot Installer onto your USB mass storage device, eject it from your computer, and connect it to your PlayStation 2.

#### 1. Making a Free MCBoot Memory Card

First, we're going to take your spare PlayStation 2 Memory Card and make it bootable, just in case anything goes wrong!

To do this, open the File Manager applet in uLaunchELF. From here, navigate to your USB storage device by selecting the `mass:` item in the file manager. Find the Free MCBoot installer, and press Cross on the ELF file with the green icon[^2].

The Free MCBoot installer will start. Select either "Install" or "Multi-Install," and follow the prompts.

After installation, you can verify the Memory Card is bootable by removing the network adapter from your PlayStation 2 and seeing if it now boots to the Free MCBoot screen. If so, put the bootable memory card aside, reinstall the network adapter, and continue to step 2!

#### 2. Format your PlayStation 2's internal storage

Open up the HDD Manager applet, press the R1 button, and choose "Format".

This formats the hard disk correctly for your storage media.

Afterwards, press Triangle to exit the HDD Manager applet.

#### 3. Install Free HDBoot to your internal storage

From the uLaunchELF menu, open the File Manager applet.

Navigate again to `mass:`, find the Free MCBoot installer ELF and press Cross.

Once you're at the menu, press R1 to navigate to the HDBoot options, and select "Install FHDB."

Once this process completes, rebooting your PlayStation 2 should bring you to a Free HDBoot menu screen, and you're ready to explore!

[^1]: Compatibility information is listed in [my last post]({% post_url 2017-02-19-playstation-2-sd-card-mod %})!
[^2]: If there are two, you want the second one.
