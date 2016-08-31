+++
date = "2016-06-02T12:00:00+02:00"
image = "winning-your-second-hackathon/header.jpg"
tags = ["hackathon", "IoT"]
title = "Winning Your Second Hackathon"

+++

So, yeah. Another Hackathon, another victory! 🎉

When I got back from the SICEF Hackathon two years ago (you can read about it [here](http://petar.io/blog/winning-your-first-hackathon)), I thought to myself: *"This is cool, I'd like to do it again!"* But, as it so often happens, I got preoccupied with work and payed no attention to such ephemeral things as Hackathons. But here I am, two years later, just got back from a Hackathon.

Spoiler alert - We won. 💪💪💪

Here's the app that we created - [noisecheck.xyz](http://noisecheck.xyz)

Same as the last time, a friend suggested that we participate in this upcoming Hackathon. He sent me a link, and I immediately said "Yes", with an exclamation mark. He invited two other friends to join, and they were very excited about the idea as well.

![News about Hackathons make me feel like](/images/posts/winning-your-second-hackathon/invited.jpg)
*News about Hackathons make me feel like*

The Hackathon was a part of IoT Week Belgrade, so the task was to make something in the IoT domain, that would benefit our society. *Wow, Internet of Things*, we thought! *We're gonna make something cool!* Ivan likes to hack on Raspberry Pi in his spare time, so this was a perfect fit. He's also a Laravel Jedi, so we had our back(end) covered. Aleksandar, Nikola and me are all Front End ninjas, so we were good on the UI front as well. We got together and started filling the application. It required us to come up with an idea that we would implement on the Hackathon right away, so that they could decide which teams to call. So we came up with an idea. Noise pollution. We didn't want to just fill in the application, that seemed boring, and besides, we were eager to start hacking. So we took a few hours and created a landing page for our imaginary project to submit with the application. We quickly came up with the project name - **NoiseCheck**, and got a .xyz domain for it even quicker. Here's the [landing page](http://noisecheck.xyz/about/). So in one Saturday afternoon, we had our idea formed and a nice application filled out and submitted. We thought that the landing page was a great touch to set us apart. Now we waited for the response.

After several days, a response came. We were accepted.

![Being accepted to a Hackathon makes us feel like](/images/posts/winning-your-second-hackathon/accepted.jpg)
*Being accepted to a Hackathon makes us feel like*

## The Idea

So, Noise pollution. We identified a problem in our environment - Noise. Traffic noise, construction sounds, airplanes, loud neighbours or coworkers.

![Loudly - The only proper way to listen to Rock](/images/posts/winning-your-second-hackathon/noise.jpg)
*Loudly - The only proper way to listen to Rock*

There are places where noise is really not desirable. Like, construction workers drilling something in front of your office, so the noise makes it nearly impossible to concentrate. It's annoying and stressful. We wanted to create a device that would measure the noise levels and publish that data for people to see in real time, and aggregate it so we'd be able to identify trends, and maybe do something about it.

## The Tech Stack

We decided to use Raspberry Pi with a sound pressure sensor attached. Microphone was not an option, because of privacy issues. We envisioned our device being put in every cafe, on every street light, so that we could get a full noise pollution picture of a neighbourhood or a city. Recording the sound with a microphone and sending it to the Cloud for processing has obvious privacy issues. That's why an analog sound pressure sensor, that only recorded sound levels, and not the sound itself was a good solution.

![Our Tech Stack](/images/posts/winning-your-second-hackathon/stack.png)

The Raspberry Pi would run a Node server and send data (real time noise levels and the device id) via a web socket. The data would then be received by a Node server running on Azure platform, and it would dispatch the data to our Laravel API, also running on Azure. The API would then store the data in a MySql database and make it accessible via HTTP endpoints for clients to consume. We would also run a cron job to aggregate the data, to get a better understanding of it. Finally, our client app would be a web app, that would show information about the location where the sensor is installed, a real time noise level graph, and the aggregated hourly noise levels.

## The Plan

We came up with a timeframe for implementing different components of the system. The Hackathon lasted for 3 days, first two from 9am to 5pm, and the last day 9am to 3pm, when the teams would present their work.

- **First day** - Ivan will work on implementing the Raspberry Pi and the API. The rest of us will work on the UI for the web app.
- **Second day** - Ivan will continue working and finish the API. The rest of us will be polishing the interface, and connect it to the API, and Nikola will begin preparing the presentation.
- **Third day** -  Nikola will practise his presentation and the rest of us will fix any remaining bugs.

It turned out that we succeeded following the plan pretty much to the letter, even with the unavoidable and unforeseen issues that we faced. Like when we discovered that there were no AD converters provided to us for our analog sensor, so we used an Arduino to connect the sensor and RPI.

## Photos!
<iframe src="https://drive.google.com/embeddedfolderview?id=0B-d53DqGEcEvQU1Dai1ibnJSQjA#grid" style="width:100%; height:600px; border:0; background: #dfdfdf;
  border-radius: 4px;"></iframe>

## The Hackathon

![Crowne Plaza](/images/posts/winning-your-second-hackathon/crowne-plaza.jpg)
*Crowne Plaza in Belgrade*

The Hackathon took place in a luxurious hotel, Crowne Plaza in Belgrade, running in parallel to the IoT Week conference. I thought that was unusual, as I never had the impression of Hackathons being this fancy. It was so fancy that there were no pizzas - the trademark food of Hackathons everywhere. We had very nice things for lunch. A big, huge, unacceptable minus is that there was no steady supply of coffee. ***That I shall never forgive.*** ☕☕☕ It was served only at breaks, like, each 2 hours or so. No energy drinks either! There was no game room to unwind from working and hacking. But that was no biggie, since we didn't stay the nights there. We would go home and come back in the morning. Weird, right?

Overall, the experience was quite nice, a balance between hacking and resting, messy programmers and fancy suits, exposed electronics and neatly arranged buffets. We enjoyed our time there, did not work too hard, got plenty of rest. It was a fun, and a very different Hackathon experience from what I was used to. I was trying to follow my own advice that I wrote about in [Winning your first Hackathon](http://petar.io/blog/winning-your-first-hackathon), and it worked out very well. We were working harmoniously as a team, contributing ideas and our unique talents and knowledge, combining them to create something that looked great and was working even better.

Looking forward to the next Hackathon! 🖖