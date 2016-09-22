+++
date = "2016-09-21T07:53:38+02:00"
fullwidth = true
image = "past-me-was-a-jerk/header.jpeg"
tags = ["shortthoughts", "code"]
title = "Past Me Was a Jerk"

+++

I just stumbled on a line of code that I wrote like 3 years ago.

````js
var path = User.isProfessor() && '/dashboard' || User.isStudent() && '/player-router' || '/login';
````

And I opened my eyes wide trying to understand what was my intention when I wrote this code. Seriously. I stared at it for 10 seconds before I got it.

And I laughed. Past me was a jerk. He wrote this line not thinking about the future me right here trying to do something with this code years later.

What it so cleverly does, in case you're still staring at it in understandable misbelief, is using logical OR short circuts to simulate a couple of ifs. Written by someone who's not a jerk, it would look like this:

````js
var path;
if(User.isProfessor()) {
  path = '/dashboard';
} else if(User.isStudent()) {
  path = '/player-router';
} else {
  path = '/login';
}
````

Surely, we could refactor this code more, but stick with me here. Right now, you're all like:

> But what's the big deal, it's just a line of code. Sure, it's a bit convoluted, but it's not that hard to understand, bruh!

> -- <cite> You right now</cite>

Really? Have you seen that thing? It IS a big deal. Code should be crystal clear to understand. You shouldn't use fancy cool tricks just to look like a ninja developer. Just because you can, doesn't mean you should.

When others read that code, they're like

> Ok, first line, second line, great so far, mhm, right... Wait, what does this line do? ... ... AH I get it. But seriously?! You just made me stop at this line and think for 10 seconds about what it does? I don't have time for this! I lost my flow now. Imma go get some coffee. Screw this jerk.

> -- <cite>People reading your code</cite>

When you write code, write for readability, understandability and clarity. Not some cool tricks that people will stare at for a second in misbelief. Not cool.

Make your intentions very clear when you write code.

Here's a small list of cool tricks I don't like to see in code that's meant to be read by humans:

- `+'1'` for conversion from string to a number. Sure, it's short, it's cool, but no. Use `parseInt` instead. And don't forget to add a second argument (base) while you're at it.
- `+new Date`, similar to the previous one, still no. Use `new Date().valueOf()` or `Date.now()`.
- `a ? b ? c : d : e` - nested ternary operator, are you even serious?
- `let f = Function('return true;')` - now you're just messing with me.
- `b = [a,a=b][0]` - swap variables without a temporary one. Dude, no.

That's it. Just don't make life difficult for yourself or others, and everything will be fine.

P.S. There are of course some use cases for showing off you ninja JS skills. Like if you're playing [CodinGame](https://www.codingame.com/start) or something similar, and you want to write a solution in the least number of characters, because why bother? No human will ever read that code, it will only be interpreted by a machine checking if it passes tests, so you can go all crazy and wild.