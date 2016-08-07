+++
date = "2016-08-02T03:48:26+02:00"
fullwidth = true
image = "my-top-tools-for-awesome-blogs/header.jpg"
tags = ["thinking", "blog", "tools"]
title = "My Top Tools for Awesome Blogs"

+++

Some people asked me how to start their blogs as fast and as easy as possible. So I though I'd describe the tools I use and my strategy. 👾

Currently I'm running 4 blogs. And I plan starting more in the future.
- [petarslovic.com](http://petarslovic.com)  
- [petar.io](http://petar.io)  
- [jspolice.com](http://jspolice.com)  
- [hipstercodes.com](http://hipstercodes.com)  

So naturally, my goal is to go from idea to fully functioning blog in the least possible time and effort. Here are some tips on how to do that. ⚡⚡⚡

## Technology

You'll want to choose a stack that is easy to learn, easy to use, easy to deploy and easy to scale. Now you might think there is no technology that satisfies all of these conditions. 🦄 You can choose a framework that is easy to use, but has a lot of overhead for a simple blog. You can choose a fast programming language like Go, but you'd probably have to learn it from scratch (if you never used it before), and learn how to deploy it. You can use simple html pages, which is easy to deploy, but it's really stupid to create every blog page by hand - i.e. it doesn't scale.

![Choosing a right tool for the job can sometimes be a true rollercoaster.](/images/posts/my-top-tools-for-awesome-blogs/rollercoaster.jpg)
*Choosing a right tool for the job can sometimes be a true rollercoaster.*

### Wordpress 🙁

Wordpress is certainly an option for a lot of people, but I really don't like it. It's big, it's clunky and I'm not sure about it's security with plugins and all. I have used in the past, but really disliked the Admin panel, and most of all, how you edit a theme by creating a messy, spaghetti with ketchup all over the place mix of PHP and HTML code. I promised myself I would never work on a Wordpress site again, and I intend to make good on that promise. 🤘 There are many other CMS systems like Wordpress that are more modern and have nicer Admin panels to try out. But I have a better suggestion...

### Back to Basics 😎

Use a static site generator. It's a beautiful combination of both the dynamic and static worlds. 🙌 You write dynamic code, that produces a different output given different data. But as output, you get static pages, that are easy to put on any web server, can be much faster to load than anything that keeps the content in the database and dynamically generates the page on each request. You write HTML / CSS / JS, stuff that most people are comfortable with. 

I'm not suggesting you follow this approach for everything. I'm saying that static site generators are a perfect fit for small blogs like the ones we're discussing here.

![Be dynamic like fire, yet contained so you don't burn everything around you. That's what static site generators are like.](/images/posts/my-top-tools-for-awesome-blogs/fire.jpg)
*Be dynamic like fire, yet contained so you don't burn everything around you. That's what static site generators are like.*

### Drawbacks

An obvious drawback is that you can't do any server side processing. You can't have a contact form. You can't have a subscribe button and collect email addresses. You can't have search.

### Or can you? 😏

Well, yes, you kinda can. There are a lot of services that offer dynamic functionalities like these that can be easily added to static sites. The question is - is it worth it? If you want to have so many dynamic things, you may want to consider creating a dynamic website, instead of combining 10 different services to do a small functionality each. But it certainly can work. It's up to you. Here's a list of things that can be easily integrated:

- Subscribe form - easy - use MailChimp or a similar service
- Contact form - easy - there are a lot of providers for this
- Site search - intermediate - Tapir, Alogila... you have to put a bit more effort into this one
- Comments - easy - Disqus and others
- Zappier and IFTTT allow you to coordinate and connect different tasks
- Services like Firebase allow you to have DB storage through a REST api that you use just from javascript

### Which static site generator to choose

There are many good choices. If you are familiar with Ruby, you can use Middleman. But, if you're looking for a more JavaScript experience like me, you can check these:

- [Assemble](http://assemble.io/)
- [Hexo](https://hexo.io/)
- [Hugo](https://gohugo.io/)

I've tried those 3, and found that Hugo is the most comfortable one for me.

- It's written in Go, so it's blazingly fast. It's faster by an order of magnitude compared to Assemble and Hexo, as they use NodeJS.
- Cool templates -  It uses Go's template library, which is cool, and has great features. It really allows you to make things seemingly dynamic, like for example you can render lists of data that only statisfy certain conditions. It takes a bit of getting used to its syntax, but when you do, you'll enjoy it.
- Convention over configuration - it's easy to get started, and flexible in changing what you need.
- Nice themes - [http://themes.gohugo.io/](http://themes.gohugo.io/)
- You can choose to write any data - post front matter, custom data - in toml, yaml or json, they are all supported.
- Built in support for markdown and code highlighting.
- Pretty easy to install and build.
- Nice CLI tool for executing tasks - create new site, start server, build...

![I always get amazed at how fast it is. It's beautiful, having something running like that.](/images/posts/my-top-tools-for-awesome-blogs/fast.jpg)
*I always get amazed at how fast it is. It's beautiful, having something running like that.*

But there are some things that I miss with Hugo:

- Out of the box support for CSS preprocessors
- Compared to Hexo it seems to be less configurable

## Version Control

I strongly encourage you to use Git. Why? First of all - documenting the changes that you make over time. You can see what you did, and can get back to an earlier version if need. Second, if you use FTP for getting your site to server, keeping track of what files changed yourself is setting yourself up for failure. And if you don't work alone on the site, it's going to be a nightmare. Using Git to manage and pull changes to your server saves you from a lot of demons creeping in the dark.

![Avoid getting lost with no water in the desert of dead code by using version control.](/images/posts/my-top-tools-for-awesome-blogs/desert.jpg)
*Avoid getting lost with no water in the desert of dead code by using version control.*

## Domain Name

Now you've gotta choose a cool domain name. I like to use [DomainsBot](http://www.domainsbot.com/) to help with this task. It gives you some recommendations based on keywords that you type, so it can really help in coming up with a great and creative domain name. It only shows available domains, which is awesome. But the coolest thing about it is that when you click "Buy", it shows you prices form different Domain Registers, so you can see who has the lowest price. Often there will be promotions on some sites, so you can get a great deal.

## Email

After you've got your domain, the natural next step is to setup email with it. Surely you don't want to send emails to people from a gmail account. `myaweomseblog@gmail.com` doesn't sound very trustworthy. And you need to build trust with people who will read you blog.

Setting a mail server yourself is quite a hustle. So here is a great, easy and free option: [Zoho Mail](https://www.zoho.com/mail/). If you look at the pricing, you'll see that it's free if you use it for one domain. And that's really all you need, since you can register a new Zoho account for every domain that you own. And don't worry, Zoho lets you create multiple email addresses so that you can have `info@myawesomeblog.com` and `hello@myawesomeblog.com` and so on.

The setup is pretty simple, but it does require you to add some DNS records for your domain, so that it connects with Zoho's mail servers. They have a nice interface which guides you through the whole process. The whole thing can be done in like 5 minutes. Although, to be honest, sometimes the DNS records take ages to propagate - one time I waited for hours until they did.

Lastly, after I have set everything up with Zoho, I add it into my Apple Mail using the SMTP credentials. And then it's all done, I can send and receive emails with my new domain.

## Hosting

Now you need to deploy your blog to a web server to make it accessible to the Internet. There are several ways to go about this, some easy and some hard. Here are the ones I had experience with.

### VPS - Not Easy, but Awesome

I like having my own VPS. I'm using Linode and it's $10 a month for a server with a SSD. Their interface is not as good as Digital Ocean's though. The only reason I went with Linode in the first place is that Digital Ocean wouldn't accept my credit card for some reason, and I wanted the server ASAP. Now switching to Digital Ocean would be too painful, but I might do it in the future. The pricing is similar for the entry level VPS.

![It's a tricky mountain to climb, but once you do, you feel like you're on the top of the world.](/images/posts/my-top-tools-for-awesome-blogs/climb.jpg)
*It's a tricky mountain to climb, but once you do, you feel like you're on the top of the world.*

It did take some time when I was first setting it up, but it was well worth it. Having your own machine in the cloud is very fun. I use that VPS for hosting everything I do, from blogs to more serious web apps. I installed Nginx there, Node, PHP5.6, Go and all the other nice things. And of course, Git. I just ssh into the server, pull the changes and build the project I want.

If you're like most people and don't want to go through the somewhat painful process of Dev Ops-ing and Sys Admin-ing all the things, there are a lot of easier options to choose:

### Shared Hosting - Easier, but Meh

You can buy some kind of shared hosting package for a pretty low price. I used BlueHost's Unlimited package in the past, and it's great for static websites and WordPress blogs, and even sites written in PHP. They give you ssh access too, but I couldn't install things like the new version of PHP (which prevented me from hosting some Laravel 5 apps) so I switched to VPS where I could do whatever I pleased. 

They offer one click Wordpress installation, so that's easy. For static sites, you'll probably use a FTP client like FileZilla. It's all quite easy to setup and use.

### Static Site Hosting - Easiest, and still Awesome

[Netlify](https://www.netlify.com/) offers amazing features for static site hosting. You can host Single Page apps there as well. I am yet to try it out, but features like one click SSL, CDN, Scaling and Continuous Deployment make it a very interesting option. They do offer a free tier, but what really got me to want to try them out is that they offer their PRO plan - which is $49 / month - free for Open Source projects!

There are some other services that offer static site hosting too. For example, you can upload your site to a S3 bucket and serve it from there. And you can see a good rundown of options [here](http://alignedleft.com/resources/cheap-web-hosting).

## Content

Use markdown for you content. I now exclusively use [Classeur.io](Classeur.io) for writing content. I tried many markdown editors, both online and offline, and this one really struck home with me.

Here's how I set it up for maximum productivity:

![An amazing tool!](/images/posts/my-top-tools-for-awesome-blogs/classeur.jpg)
*An amazing tool! 💕👌 🎉*

This way I can see markdown and the rendered content side by side, and stats on the bottom. It's very useful keeping an eye on the word count as you write. Optimal word count (as people keep saying on the Internet) is ~2500 words.

If you're new to markdown, here is a [nice guide](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Other than that - just write! If you do it enough, you'll get great at it.

## Images

Every blog post needs some cool images to break the wall of text. There are certainly good paid options for stock photos, but lately, the free stock image websites are exploding in popularity. There are a ton of websites that offer high quality stock photos for free, without any restrictions. The best part is - those photos are highly organic! If you search a paid site like ShutterStock, you will find a lot of pictures that look really scened and fake. Just imagine a stock photo of business people in suits, standing in a circle, having fake laughs and pretending to enjoy the meeting. Gives me creeps. You will want to go with cool, warm and fuzzy organic images that you can find on sites like [the ones listed here](https://bootstrapbay.com/blog/free-stock-photos/)

## Social Sharing

Well, you've got your blog online, and you've written your first post. But now you'll want people to see it, right? So you open a new tab and type 'f' and then Enter, and you're on Facebook. You share your post to your friends. But wait, if you're going to have a blog, you'll want to have a Facebook page for it. So you create one, and share the post there as well. But... what about Twitter? You open Twitter and create an account for your blog there. Though unlikely, you might want to share the posts to LinkedIn and Google Plus. So you realise that managing all these social media accounts is going to be a headache.

Enter [Buffer](https://buffer.com/app). It's a web tool that allows you to schedule posting content to your social media accounts at specific times, up to 10 posts in future (with the free tier). And it's free for Facebook, Twitter, LinkedIn, G+ and Instagram.

![Managing and syncing all your social accounts for all your blogs by hand will make you feel sad like this pug.](/images/posts/my-top-tools-for-awesome-blogs/pug.jpg)
*Managing and syncing all your social accounts for all your blogs by hand will make you feel sad like this pug.*

## Audio

For some blogs, you'll want to create a podcast to go with the content. It's a great way of giving some more value to your posts.

What should you record with? In most cases, your phone microphone will do, especially if you own an iPhone. But I use Zoom H1 for recording sound, it's really good and for a solid price of $100. I have it mounted on a simple camera tripod.

But where should you host your audio? You don't want to upload it to your website. If many people try to listen to it, it'll eat all your bandwidth, and your website will become painfully slow to use. There are many options, but I will mention [SoundCloud](https://soundcloud.com).  With it you can have:

- Upload up to three hours of audio
- No headaches on file sizes
- Statistics on who viewed your track
- Fast Uploads
- Track Storage
- Customisable widget for embedding

The limit is 3h of audio for the free plan. But hey, if you record 10 minute podcasts for your blog posts, that will get you 18 recordings. That's more than enough for a start. Also, since the uploads don't depend on the upload size, but only on recording time, you can upload higher quality files. One other option is [BandCamp](https://bandcamp.com/artists).

For audio editing (read stitching together and removing noise) you'll probably want to start with [Audacity](https://sourceforge.net/projects/audacity/). It's free and Open Source, but it doesn't have the nicest interface. No matter. It does the job well.

## Video

For some blogs, you'll want to have video to go with the audio. For recording video, I use my phone - Nexus 5X - mounted on a simple smartphone tripod. It's shooting in 4K, and with good lighting, the videos are more than decent.

I pair the phone video recording with Zoom H1 audio recording, because the phone's mic is inferior, and mix them later. Phone's audio is useful for syncing and timing the Zoom H1 audio to the video.

## Screencast

Screencasts are important if you're running a tech blog or writing tutorials. I currently use QuickTime on Mac for recording my screen, but I imagine that I'll soon invest in a proper software for this. Probably Camtasia.

## Other tools

To make your blog truly great, use these tools:

- Google Analytics
- Disqus for comments
- Usability Hub for quick User testing
- Fiverr for logo if you don't want to create it yourself

## Conclusion

The underlying point of all this is - don't give it too much thought! The goal is to get your blog from an idea to being online as fast as possible. If you follow the advice from above, you'll see that you don't need to sacrifice quality to achieve this.