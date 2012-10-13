title: You can tell a lot about a man from his unread email count
abstract: Because good enough isn't good enough anymore
author: Stuart Frisby
date: 2012-09-17 15:00
ds: September 17
dss: Sep 17
template: article.jade
tags: productivity, craftsmanship

I talk about craftsmanship a lot on this blog & elsewhere, typically as it relates to my specific role as a designer of websites. But I'd like to explore craftmanship in a more general sense as it relates to the management and development of ones working environment. 

I'm a bit anal about working smart, simplifying repetitive tasks, documenting, and using the appropriate tools for the appropriate tasks. I think that to do my job well, I need to think about and improve upon these things. And so I equip myself with the best possible tools, and I set aside time to  optimise my workflow. Here are some of the things I've found useful, and which you might find useful too: 

# Email
## You don't need to know how many email's you haven't read. 

Disable the unread item counter on your mail icon. Disable dumb incoming email notifications. These things can be useful, but only if they're used to highlight important incoming mail, not any old pile of crap hitting your inbox. It's the classic boy who cried wolf story, you'll end up ignoring important stuff is it looks just like unimportant stuff.

Hiding the unread count has stopped me from running along and reading mail as it comes in, I want to read email when it is least distruptive to my other tasks. In exceptional cases, I have rules which trigger notifications for emails I need to ask upon. 

##### Empty your inbox

If you work in a corporate environment like me, you'll have hundreds of emails arriving everyday, apply rules to move these messages as they arrive. Your inbox should be the place from which important messages are readily visible. Gmails 'important mail' & mail.app's VIP features are hacks on top of poor email management, you don't need them if you apply rules and keep a clean inbox. I archive mail upon having read or actioned it, my inbox is that of someone who knows what is going on in my team, department & company. If you have 65k unread messages, there's no way you know what is going on anywhere, and you have no way of distinguishing the least important & most important messages in your inbox. You're just going to spend a lot of time scrolling. 

##### Flagged, Pinned, Archived. 

I have three buckets of actioned emails. Flagged messages are those which require further action, Pinned messages are those which contain information which I will need to refer to again & archived messages are those which have served their purpose and require no further action. This works really well for me, your mileage will of course vary. What you definitely need is a system, the particulars should be honed to your specific needs. The absense of a system is suicidal. 

## Calendering

I use [Fantastical](http://flexibits.com/fantastical) as my primary calendar application. It allows me to turn normal sentances into events with a single keyboard shortcut. Quite often, I have people drop by my desk and ask to schedule meetings as short notice, at which point I instantly create a new calendar entry. Many people write down the time and commit to checking their calendar later, I add the event there and then, I forget fewer committments this way. Of course, some things happen frequently at predictable times, and for these I have the appropriate repeating calendar entries setup, and with reminders set depeding on their appropriateness.

My beuatiful-lady-wife-to-be & I also share reminders and plans calendars which are synced to our myriad devices, and so I know when adding meetings when I'm available both on-the-clock & off it. 

I got a great tip from [Back To Work](#) Recently when Merlin Mann, who suggested prepending unconfirmed calendar entries with a '¿', which means I can now scan for stuff which is pending confirmation from the other party with greater ease than looking for .

##### Calendar integrations

In addition to the stuff I manage manually, I have some third-party services which pipe stuff into my calendars: 

1. [Last.fm](#) - I subscribe to a calendar which lists the gigs I've committed to attend. I typically book tickets a long way in advance, and am prone to forget about them. This stops that from happening.
2. [Lanyrd](#)- I subscribe to a list of events tagged 'web design' which means I get to keep an eye on what's going on in our industry. I also pipe in the schedules of the events I'm attending and thus aren't reliant on a floppy schedule to know what I'm going to be listening to. 
3. [Tripit](#) - Tripit watches my email account for reservations, builds iteneraries for trips, and syncs to my 'trips' calendar. I grant access to this to the afore mentioned lady, which means she'll know when a plane goes down over the English channel whether I was on it or not.  
4. [Facebook](#) - I pipe in my events & Birthday feeds. I never remember, which makes me look like an unthinking idiot. This helps, though I really need to set alerts long enough in advance that I can buy cards & post them in good time. 

## Repetitive task avoidance

The third time I have to perform a given task manually is when I make note of it and commit to spending some time making it easier. Very often these things are as simple as having to repeatedly visit a given URL, perform an action and read the output. I solve most of these  with [Alfred](http://alfredapp.com) which supports 'custom searches', these are URLs you can inject a string into from the alfred interface. I have around fifty of these searches which go from the inane to the massively time-saving. My colleagues generally look on in awe as I perform tasks in seconds which otherwise take whole minutes to complete. Alfred syncs across machines via dropbox, and is not bound to any specific browser, which makes these tools more useful to me than browser bookmark(/lets). 

The other set of manual tasks I optimise are handled by [TextExpander](#), they're things like writing out my email address, using the correct syntax for some -vendor-prefixed CSS crap or generating a valid credit number for testing our checkout process. Some of my TextExpander snippets are inredibly complex, using applescripts & shell-scripts to do things in milliseconds which before would take me minutes. I'd record a video, but most of the things that would blow your mind are tied to internal work stuff which would make no sense. 

## Capturing information

##### Text

Another large part of day is spent managing incoming information. Meeting summaries, interview notes, unanswered questions, ideas, etc. I tried lots of things for keeping this information: evernote, NValt, my email drafts folder, Paper, paper. I finally settled on mou by Chen Louis, which is a Markdown-augmented text editor. I keep a Text Documents folder in my DropBox, and use TextExpander to expand Markdown to create documents which I can then export as HTML and have served from my dropbox public folder. Think about that for a minute. I enter raw text, and I get a cloud-synced, formatted, backed-up, indexable text file.

I have a scratchpad document which I dump stuff into as required, and then a whole bunch of subject specific files which I'm working on at any given time. I can share them with my colleagues, embed the exported HTML file into pages on our internal wiki, print them to take into meetings. The possibilities are endless, and the method of entry completely frictionless. If Mou.app had (and I'm told it'd coming) a single window, tabbed interface, I'd be even happier.

##### Images

The dropbox theme continues with my method of sharing images. Typically what I share are screenshots. Interesting stuff from other websites, bugs or issues identified on our own, parts of mockups which I want to include in a snippet document which I'll later share with the person implementing my design work. 

To do this quickly and easily I use [GrabBox](#) which piggybacks on the OSX screenshot tool. When it spots a screenshot landing on my desktop, it picks that file up, drops it into a public folder on my dropbox, creates a short URL pointing to the image, and places that URL on the system clipboard. I'll let you revel in that for a second, because trust me - it's mind-blowingly good. I take a screenshot, and it sets of this magical sequence of events which ends with my having a URL pointing to that screenshot, and a file stored on my machine and in my dropbox. I dare anyone to come up with a quicker way to do that. 



