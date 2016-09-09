+++
date = "2016-09-09T01:57:47+02:00"
fullwidth = true
image = "reqs-lang/header.png"
tags = ["thinking", "open-source"]
title = "ReqsLang - Requirements Definition Language"
+++

Let us all throw away our Basecamps, Trellos and JIRAs for a minute.

Managing requirements and tracking project progress has become somewhat cumbersome. There are so many tools, each with its own set of concepts to grasp and use correctly, that we sometimes get lost in the process. 😲

So, what if we used a... simple text file to track all requirements and tasks? ***GASP!***

## **Text files as a way of task management**

I had this idea to have all project requirements and tasks in one text file. Is that as crazy as it sounds? Is it ⁉ Let's see.

**Obvious benefits** 👌

- It's checked into your version control system 
- It's there with your code, so it's easy to reach
- It evolves with the code
- Huge amount of flexibility
- Offline support built-in *(wink)*

**Very Obvious Drawbacks** 👎

- Real-Time collaboration? Forget about it.
- Real-Time notifications? You're outta luck.
- Hyperlinks? Nope.
- What if the file gets too long? No way to navigate / manage it easily.

So basically everything that we've come to love about the today's apps is gone.

Welp. Turns out that it IS crazy. 😥

But wait! ☝ What if we used it only for... really small projects? ***DUN DUN DUNNN...***

It's not unheard of. People are using a similar approach on their side projects, and they seem to like all the complexity taken out of the picture, and just going back to basics. And it seems to work well for such wee projects. 

And guess what! A lot of projects in this world is on the small, tiny scale. So maybe the world needs something to help out in this process. 🦄

You must be thinking right now: 

*"He just explained how we need to have flexible, text file based todo lists because it's easy and simple, and now he wants to give us something that will reintroduce the very complexity from which we ran away into this space!"* 😒

I get the irony, I do. But bear with me, for what I propose is not a new technology, nor an app - it's **just** a specification. And a very loose one at that.

## **ReqsLang as a way of task management**

What is this alien thing, ReqsLang? It's a specification defining what should be in those text based requirements / todo files, and how it should be structured. In theory, this would allow for a well organized and repeatable process, that is also still very flexible.

Okay, now you can head over to [ReqsLang GitHub](https://github.com/petarslovic/reqs-lang), where I've put together a really nice guide and some examples. I'd really like to hear opinions, and start a discussion on how we can make it better, so get those GitHub Issues firing! We can change any part of it. 🗨 🗯 💭 💡

And hey, I know that it's not really a language, but ReqsLang sounds way better than ReqsSetOfLooselyDefinedGuidelines. So, yeah.

Check out ReqsLang GitHub [here](https://github.com/petarslovic/reqs-lang).

And also, important! I made a Sublime Syntax Highlight [plugin for ReqsLang](https://github.com/petarslovic/sublime-reqs-language), which makes it look really nice, as you can see in the image on the top. 👸