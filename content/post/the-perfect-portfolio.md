+++
date = "2016-02-21T16:35:56+02:00"
title = "The Perfect Portfolio"
image = "perfect-portfolio/header.jpg"
tags = ["portfolio", "career"]
+++

If you are a web developer and don't have a portfolio, you are losing out. That's right. A portfolio is the most important thing that you can show to the online world (that includes your potential future employers). You can show your talents, tell your story, all without the boring facts listed in your CV. It is more engaging, and it better portraits your skills than a CV. Don't get me wrong, you should definitely have a CV, that's not in question.

<a target="blank" href="https://play.google.com/store/apps/details?id=com.petarslovic.smartspender&hl=en"><img src="/images/banners/smart-spender.png"></a>

In my opinion your portfolio should supplement your CV, and vice versa. Your CV should list your work experience as the most important thing. Your portfolio should present and focus on your personal projects. Don’t make your CV more than it should be. You've surely seen those CV templates out there, that look amazing and creative at first sight, but when it comes to readability and communicating information, I find that the good old text, properly formatted, does a way better job than those fancy CV designs.

![CV](/images/posts/perfect-portfolio/cv.jpg)

**Your portfolio should showcase your passion about the work you do.**

I say that portfolio is immensley important these days if you are a web developer, because I've had some experience from both sides - as a recruiter and a recrutiee. 

As the one being recruited, this is an amazing chance to show people researching you how you go about your work. I have been called to many interviews by people referencing my portfolio. And I've been on the other side, selecting candidates for interview, and the first thing I'd do is look for a portfolio. I’d get disapointed when someone wouldn’t have a portfolio, because I like seeing what people are creating, and it helps in gaining a good understanding of the skills and interests of the person I’m reviewing.

**Now here is the great secret of landing a job...**

There are many good candidates, but what sets the great ones apart is passion for what they do. And passion can be shown in a portfolio by showcasing the projects that you did in your spare time, or talking about what you have learned recently in your blog. I know, most people will say, I don't have time to work on hobby projects. Well, I say, if you are passionate about what you do, you'll certainly find time, and not because you have to improve your portfolio, but because you really really want to.

![Job](/images/posts/perfect-portfolio/job.jpg)

## Simple, tidy, up to date

My perfect combo for a portfolio is: simple, tidy and up to date.

### Simple

Don’t go overboard on designing your portfolio. The portfolio isn't the thing to showcase, it's just a way to present your projects. So keep it minimalistic and focused on the work you're showing.

![Simplify, do not complicate](/images/posts/perfect-portfolio/simple.jpg)
*Simplify, do not complicate.*

### Tidy

Don't let your website fall appart at certain resolutions. Don't tolerate missing links. Optimize your images. Make it personal and clean.

![Tidy it up.](/images/posts/perfect-portfolio/tidy.jpg)
*Tidy it up.*

### Up to date

Keep your portfolio updated by adding new projects you’re working on. Or write new blog posts at least once in couple of months.

![Write a blog post once in a while.](/images/posts/perfect-portfolio/write.jpg)
*Write a blog post once in a while.*

## Content

My stance is that a portfolio shouldn't contain much copy. It shouldn't be too formal nor too casual. Induce yourself, maybe in a fun and creative way, have links for people to contact you and a link to your CV. The projects should have a short description of what it is you created, what drove you to do it and a list of technologies used.

This one is important for me: show only your personal projects, the ones you work on in your spare time, the ones you are really passionate about. Don't showcase the stuff you do at work. Maybe you're under an NDA. Maybe your previous employers will frown upon it. But more importantly, hobby projects show what you’re really passionate about and what you think is cool. At work you most likely don't get to choose what you'll work on. Personal projects are a chance to create something you've always wanted. Sure, it's not easy to find time for personal projects, with your everyday work and the rest of your life. But if you're truly passionate, you will enjoy getting to work on hobby projects. And that's the most important thing you're showcasing with your portfolio, your passion.

![Gotta be passionate!](/images/posts/perfect-portfolio/jump.jpg)
*Gotta be passionate!*

### Have a Blog

This is always a bonus point. It’s a way to express yourself further. Obvious topic choices would be your technological expertise, like new ideas and things you are learning, the tools you use, tutorials about what you’re great at. That’s great, but - don’t limit yourself. Your audiance are not only other developers, but also people who don’t know much about programming. So, you can also write about your non-techie interests. You invented a great tasting and healthy juice recipe? Write about it! You have some strong opinions on how different coffee bean types taste? Share them! You started learning a new programming language? Tell people about it!

![Coffee beans!](/images/posts/perfect-portfolio/coffee.jpg)
*Coffee beans!*

## Technologies

The portfolio itself can be a great way to try out some new technologies.
I have had several versions of my portfolio over the years.

![Coding is awesome.](/images/posts/perfect-portfolio/code.jpg)
*Coding is awesome.*

- First one I build using just HTML and some basic styling.

- Then I updated it to use plain PHP to add the ability to dynamically add and edit projects.

- After some time I decided I wanted to try a static site generator, and I used Assemble. It was interesting to me because it did everything in JavaScript.

- Next, I decided that updating content and building the static website in Assemble was too much of a hussle, so I took one evening and rewrote it in Laravel. It uses the same json files for content as the Assemble project used, but they’re cached by Redis.

- When I get the time, I’ll rewrite it again in NodeJS, just for the fun of it.

### Analytics

Add Google Analytics to your portfolio. That way you’ll be able to see how many people find you and how - social media, direct url or organic search.

### Optimize for SEO

Make you portfolio SEO optimized. Control what shows as your site description and title.
If you have a blog be sure to include open graph tags for social media sharing. But don’t overdo it by focusing too much on keywords in your blog posts. Just keep it casual, the content is more important here.

### Optimize for speed

Make you site load insanely fast! This is usually pretty easy to do, and it greatly contributes to you coming off as the all around awesome guy (or gal).

![Being fast is great, especially if you are a website.](/images/posts/perfect-portfolio/speed.jpeg)
*Being fast is great, especially if you are a website.*

**1.** Styles

If you followed my advice on keeping the portfolio design simple, then you really shouldn't have a lot of css and scripts that can slow down your site. Your CSS file will be negligible in size. You will probably use Bootstrap or Foundation, but my advice is to try and get rid of them! You will probably only need the grid and the responsive utilities of the framework. So why load the whole framework for just those things? You can either customize the build of Bootstrap/Foundation to only include what you need, or you can use something like Susy just for grids.

**2.** Images

Images are the biggest assets in your portfolio, both in size and in the impact they will have on the viewer. It’s the one thing that can slow you down. Optimize your large project screenshots by making them jpgs and running them through a nice image optimizer. Here’s an easy one that I used in the past - https://kraken.io/. It reduced the size of my images by 60%.

You will also have some icons. You can make them into a sprite sheet, or - my preferred solution - use SVG icons and inline them into your HTML. The icons you use will probably be really simple SVGs so it won't add much overhead to your HTML file, and it will eliminate the need to do even a single additional request to fetch them.

![SVG icons are cool.](/images/posts/perfect-portfolio/icons.jpg)
*SVG icons are cool.*

**3.** Turn on your server's gzip and adjust cache

Turning gzip will reduce the size of the assets that you need to transfer by around 50% (for me it was 64.3%). Also make sure that you adjust the cache for your files.

Here are examples of turning on gzip and caching. You just add it to your website’s .htaccess file, but first make sure that you have these PHP extensions enabled by echo-ing a phpinfo() on your web server.

[Apache gzip and cache Gist](https://gist.github.com/petarslovic/d6f8c7e8c146a75b33d1)

## Conclusion

In conclusion, I say be passionate about the work that you do, and use your portfolio to show that passion to the whole world. Beautiful things will happen!

![Enjoying the view after hard work.](/images/posts/perfect-portfolio/top.jpg)
*Enjoying the view after hard work.*