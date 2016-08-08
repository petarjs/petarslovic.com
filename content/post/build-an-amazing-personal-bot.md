+++
date = "2016-08-08T19:40:16+02:00"
fullwidth = true
image = "build-an-amazing-personal-bot/header.jpg"
tags = ["thinking", "bots"]
title = "Build an Amazing Personal Bot in Just 3 Easy Steps"

+++

Bots. They seem to be all the rage these days. So let's hop on the Bot hype train and explore an easy way to create one of your own. 🎉

## What is a Bot?

First of all, let's agree on what exactly is a Bot. The word bot is actually an abbreviation of the word `robot`. An Internet Bot is defined as

> a software application that runs automated tasks (scripts) over the Internet

Well, that's pretty wide, and doesn't tell us what we want to know. 🙄 The Bots that we talk about here are more specifically known as `Conversational Interfaces` - as opposed to GUIs, or Graphical User Interfaces. Conversational Interfaces are a subgroup of Natural User Interfaces 🌲 (NUIs), which are the interfaces that let you interact with technology in a natural way (duuh), by gestures, or voice, or other, you know, natural things. The idea behind Conversational Interfaces is an old one, but a really awesome one. You talk to the machine by typing, or actually talking, and it can understand what you want from it, accomplishing tasks on your behalf. 👾

![A laptop in nature is not a natural user interface. Well, ok, technially it could be, but that's not what we're talking about here.](/images/posts/build-an-amazing-personal-bot/natural.jpg)
*A laptop in nature is not a natural user interface. Well, ok, technially it could be, but that's not what we're talking about here. 🌲🌲🌲*

The reason why we're seeing the Bot boom now rather than when the Conversational Interfaces were first conceived is because of some amazing recent advances in technology. Like machine learning and voice recognition for example.

### People -> Computers -> Computers that seem like People

Here is an interesting observation - first, we dealt with people in order to accomplish all these tasks - getting a reservation in a restaurant, buying airplane tickets... then, computers came and automated all those tasks, so that we could do them from our computers, at home, over the Internet. And now, we are trying to make computers seem more human. We don't just want to click buttons and search for information ourselves. We'd like to just state what we want and have it done for us. The best interface is the one you don't even notice using - like naturally speaking to someone - and that's where we're headed.

![When you ask a computer to do something, there's all these little people inside in that start doing their thing, and voilà! The task is magically completed.](/images/posts/build-an-amazing-personal-bot/lego.jpeg)
*When you ask a computer to do something, there's all these little people inside in that start doing their thing, and voilà! The task is magically completed.*

### Smart Bots?

It seems that most bots right now are not all that smart. 🤓 They do one thing, and they do it... not that well. Heck, even Siri, arguably the most advanced CUI at the moment, is pretty darn far from perfect. Most bots right now, they can do this

- Randomly select one of similar predefined phases as an answer
- Have different responses for positive and negative feedback from the user
- Have different responses if user's answer contains a certain phase 
- Extract some information from user's answers, like a date, address or an email
- Go to a predefined step if the user's answer matches a condirion

They are mostly scripted state machines, without much dynamic behaviour. Well, you might say, we could have created that kids of programs in the 80's! Why only now?!

![Hey, the 80ies called! They want their bots back.](/images/posts/build-an-amazing-personal-bot/80ies.jpg)
*Hey, the 80ies called! They want their bots back.*

The secret lies in extracting information from user's answers and connecting the bot to the already existing services of the Internet that took decades to develop and refine. The AI part in the Contemporary Bot's picture is the one where user's response is analyzed for different meaning, which determines the next scripted action. So, as a user, you don't have to respond with strict predefined words. You can speak naturally and even have typos, and the bot should still be able to understand you (in a perfect world).

What gives these bots such popularity is how they make the user feel. When you type a message into chat, and see those three animated dots, 💬 you can't help but **feel** that someone is really typing on the other side. And that feeling makes all the difference in the world. The secret is this: in order for an interaction to seem human, you don't need to replicate all of the behaviours that humans exhibit, just a couple. But of course, as you get deeper into the interaction, you unmistakably notice the lack of all subtleties that are present in dealing with a real human.

Of course, there are some bots that are really smart and do a great job of understanding and accomplishing tasks, 👌 but they are in a minority right now. The reason behind it is that everyone today wants to create a bot, and there are tools that allow you to do that easily. Therefore, if you're going to create a bot, either be prepared for some serious work, or make it simple enough that you can achieve the optimal interaction. 😐

**So lets enter the world of amazing mediocre bots! 💃💃💃**

![Blink green for yes and red for no. Hey, that's not an optimal interaction! And neither would be blinking in Morse code. Make the interactions more human, I tell you!](/images/posts/build-an-amazing-personal-bot/blink.jpg)
*Blink green for yes and red for no. Hey, that's not an optimal interaction! And neither would be blinking in Morse code. Make the interactions more human, I tell you!*

## Questions to ask before building a bot

We will build a bot using [motion.ai](http://motion.ai). There are a few services that offer bot creation, but this is the one I tried. I may try some more in the future.

![Here's the motion.ai flow of my simple bot. You should be amazed that you can achieve an almost coherent conversation with so few steps. I'm not sure if this says more about bots or humans.](/images/posts/build-an-amazing-personal-bot/bot-flow.png)
*Here's the motion.ai flow of my simple bot. You should be amazed that you can achieve an almost coherent conversation with so few steps. I'm not sure if this says more about bots or humans.*

## 1. Who will use it?

The first question you should ask when planning a bot is "Who will use it?". Answer to this will give some guidelines on conversation style. Is it going to be used by teenagers? Put a forward but relaxed tone, using some slang. Are busy people going to use it? Provide short and concise information and actions. Students? Give a bit more information, but in a very structured manner. 🎭

## 2. What purpose will it serve?

This is the question that defines everything else. What will your bot do? Will it just be for fun, or will it really accomplish something for users? Will it only collect information, or will it execute actions? The answer will help you sketch out a flow for your bot. Just do some drawing on paper first, trust me, it's easier than trying to get it right in the interface, and moving all the connections around and stuff. 📝

## 3. Where will people use it?

This is more of a front end concern, as you should define where will your users have the chance of interacting with your bot. How will it be deployed? It can be on Slack, Facebook, Telegram, or just a web interface. Motion AI can connect your bot to SMS, Email, Facebook, Slack, API, or provide you a widget that you can embed on your site. Want to know a secret? See the button in the lower right corner that says "Bot"? Yep, that's the one I made using Motion AI. 😊

## Interactions

OK, now that you have a basic plan on what your bot will do, let's talk about the kinds of questions it will be able to ask. You need to define steps and the flow from one step to the next. Each step has connections going in and going out of it.

### Give information

Not really a question, but it is the most basic thing your bot can do. Just write out a message to the user. This is useful in many situations, but specifically in the beginning of the conversation, you can greet the user, and start by asking him a question. Asking the user a question puts you in control of the conversation, which is what you want to do. You can't expect to create a general purpose bot such as Siri or Cortana. You will have to focus on only a few tasks and a handful of scenarios in order to make a good bot without too much effort.

So, you can start the conversation by saying something like "Hi, I'm here to help you choose a birthday present for your friend." And you can almost immediately see how the conversation will unfold. And the user still has the impression that your bot is all nice and helpful. 👏

### Yes / No questions

Now we want to get some information from the user. We can ask him "Do you want me to show you some suggestions?", which is a yes / no question. But, the user can answer "sure", or "nope", which aren't simple matches for "yes" and "no". Here's where the AI comes into play. Motion AI has the Yes / No question module which can process input and tell you if the answer is positive or negative. It's pretty good at extracting that sentiment from an answer.

![I had fun trying out all the positive responses I could think of to see how smart this recognition is. I'd say it understood about 70%, which is quite impressive I'd say.](/images/posts/build-an-amazing-personal-bot/yesno.png)
*I had fun trying out all the positive responses I could think of to see how smart this recognition is. I'd say it understood about 70%, which is quite impressive I'd say.*

This will make the user feel right at home, not being coerced to say just "yes" or "no". He can express himself more freely and be understood. That's what it's all about. 🎶

Now you can link to different next steps depending on if the answer was positive or negative.

### Multiple choice questions

This is a great way to offer user more flexibility while still keeping him confined in your script. You can next ask "Are you shopping for a man or a woman?". Motion AI then lets you specify next steps for each of your choices. You should also provide a fallback, or think about what else the user might want here, and handle it. The user might say "Both", or "Show me all options".

![This is a nice feature. It can detect what you want to say even if you have a typeo.](/images/posts/build-an-amazing-personal-bot/multiple-choice.png)
*This is a nice feature. It can detect what you want to say even if you have a typeo.*

### Collecting specific information

You can choose a module which extracts specific information from the users answer. There are address, data and email to chose from.

### API Calls

What's great about Motion AI's service is that it allows you to define web hooks easily. You can tell your bot to send a request to some url after an answer to some question. The request contains info about the answer, such as was it from bot or from user, what was the answer and what is the extracted data from the answer (yes / no if it's a sentiment analysis type of question).

### Cards

Another cool and useful feature is the ability to show Cards to the user. You can show a card that has an image and multiple buttons, that allow user to click instead of typing the response. This allows for wonderful combinations of conversational and more traditional interfaces. The buttons can be set to pass an answer to the bot in the same manner as the user would, or to open a link.

![Hello buttons! You're easier to click than typing a response you're not sure if the bot will understand!](/images/posts/build-an-amazing-personal-bot/cards.png)
*Hello buttons! You're easier to click than typing a response you're not sure if the bot will understand!*

## Deploy your bot

Motion AI offers you easy deployment with Facebook, Slack or web. If you want to add your bot the a website like I did, just choose Web, and embed the code they give you into your webpage. It's that simple. 👌

## Shortcomings

When I played around with it, Motion AI did not support a variable system. You couldn't extract a piece of information from one user's answer, and then use it later. I think this is a crucial feature that would allow your bots to seem much more human. 👶 Right now, you need to improvise and rely on the paths to determine what the user said before. For example if you are on the step that is only accessible through "Woman birthday presents" line, you can safely ask the user if he has a wife or a sister.

## Conclusion

So, while we have a limited toolset, we can use some creativity to guide the user through conversation, so that he doesn't notice that your bot is not omniscient. Being subtle in our manipulations is the key to a good bot experience. 🐧

I encourage you to try out the bot builder, on Motion AI or somewhere else, play around with it, and get a feel of how awesomely fun it can be. The dawn of bots is upon us!