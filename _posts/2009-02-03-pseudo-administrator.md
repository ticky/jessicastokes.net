---
layout: post
title:  "Pseudo-Administrator"
date:   2009-02-03 09:00:00 +0800
categories: blast-from-the-past computers
---

_**Note**: This post was migrated from my long-defunct blog. All text below this line is unedited._

Recently my father purchased a new HP laptop. It's quite nice actually. Core 2 Duo, 4GB of RAM and a reasonably powerful GeForce 9-series powering Windows Vista Home Premium. Bringing it home and, as parents tend to do with new tech, asks me what I recommend doing in terms of firewall and antivirus.

My first instinct, as I'm sure is the case for many others, is to grab the latest version of Firefox and kill off IE. Sure, 7MB Download later and we'll be good to go, right?

Well typically, I'm completely wrong. Up pops a messagebox claiming that I don't have the necessary permissions to install Firefox. Attempting to just use the current account causes the installer to disappear with no warning or error. Attempting to log on as Administrator is a no-go, as blank passwords are not accepted, and HP have supplied no Administrator password with the machine. Okay, I think to myself, I guess this must not be a full administrator account, and so dufitully pop open the Control Panel. User Accounts shows no sign of other accounts, as it usually does. Checking the account type of the main account showed it was in fact an Administrator. Okay, time to move on to the Management Console.

Firing it up I'm greeted with a tree that strikes me as odd. A quick look reveals that "Local users and groups" to which i'm fully accustomed to in 2000, XP Pro and Vista Ultimate, is sadly missing. So, I guess that microsoft have hidden it so that noone will break anything. Fine, I think, bringing up the Add Snap-In window. Locating "Local users and groups" in the list, i click add, select the local computer and click OK. Then I recieve a big surprise. It's still a *Home* edition, meaning any of the normal administrative features of the NT series have been eradicated in favour of the watered down control panel, so the faithful "Local users and groups" section is locked out to me.

Puzzled, I have a quick look, and even the Built-In help tells me to add it via the add Snap-In window. Good job with getting help done right for all editions, Microsoft. After a quick think I'm at the command line, making use of the good old Net User command, I bring up the user list. Aha! So Administrator DOES exist. A quick google search (Using IE, unfortunately) shows no useful information about this phantom Administrator.

So I spend the next 15 minutes trying more and more elaborate ways of getting Firefox to install. Setting permissions on Program Files does nothing, setting ownership fails similarly. Frustrated with my inability to solve the issue, I right-click the installer, ready to give up - and, what's this? The second listing in the context menu reads "Run as Administrator" - lo and behold, this command immediately runs the installer, no questions asked and with no password prompt.

So, after about half an hour of work, I finally get Firefox on the damned thing.

Frustrated by HPs inability to supply me with an OS that I actually have the required permissions to use, I decide to leave installing an antivirus until another day, and switched computers to engage in some *Left 4 Dead*.

The morals of the story are always install your own copy of Windows on a name-brand laptop, and don't stress - the answer is probably the second entry in the context menu.
