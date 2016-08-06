+++
date = "2016-05-28T12:00:00+02:00"
image = "make-git-more-enjoyable-with-aliases/header.jpg"
tags = ["thinking", "books"]
title = "Making Git More Enjoyable with Aliases"

+++

Typing `git status` over and over again, for hundreds of times a day can get really annoying. You type one letter wrong and have to retype it. Yeah, you can have nice command completion, especially if you use [Fish](https://fishshell.com/), but I like my aliases better! I have set up aliases for Git commands that seemed logical to me. Maybe you will find them useful too.

It's really useful, because when you get the tedious typing out of the way, and substitute it with just a few meaningful letters, you get a more productive and enjoyable experience.

It's not only the time you save in typing. It's like the mental barrier between thinking about an action you want to execute (like get the latest changes from current branch) and typing it (`git pull origin HEAD`) is torn down. So you just think that thought and with a few keystrokes, it is executed. I find that very liberating, because it makes transferring of your intent to computer super fast and effortless.

Now of course, I don't use aliases for commands that could be dangerous, like `git reset`, because when you have the ability to execute what you're thinking about nearly instantly, you also have a greater responsibility to think correctly. You could have a wrong thought, and if you get into that habit of executing commands automatically, you risk doing the wrong thing, which can cost you time and effort to recover. For example, if we had an alias for `git branch -D my-feature ` which would be like `gbD my-feature `, and you know you want to delete that branch, and do so automatically, you may remember right after pressing the Return key that there were some important changes on that branch after all.

In contrast, if you have to type the whole command, or at least `gb -D` (as I use `gb` as an alias to `git branch`), it makes the intent more explicit, and you have more time to reevaluate what you're about to do. This reasoning saved me from trouble many times.

*Note: some of the aliases might be OS specific, like the alias for `finder`.*

Let's explore how we can use the aliases to make our git experience seamless.

The one used most often is, you guessed it, `git status`.

**Alias**: `gst`  
**Effect**: `git status`

Okay, so we now know the status of our repository. We want to get the latest changes from the `develop` branch (as we use `git flow`).

**Alias**: `gl origin develop`  
**Effect**: `git pull origin develop`

Not much shorter. Well, let's try this:

**Alias**: `glod`  
**Effect**: `git pull origin develop`

Yes, much better. This one of the aliases I use the most.  
So now we change some files, but we don't want to keep the changes. We want to clear the modifications and return to previous state. So we do:

**Alias**: `gco .`  
**Effect**: `git checkout .`

Now we don't have any changes. Let's make some changes we want to commit. First, we need to add them to the staging area:

**Alias**: `ga .`  
**Effect**: `git add .`

Next, let's commit the changes.

**Alias**: `gcmsg "fix the heuristic for determining the optimal coffee temperature"`  
**Effect**: `git commit -m "..."`

Great. Oh! Just remembered we need to add a few more changes to the same commit. Run `ga .` to add the changes to the staging area, and then commit them with `--amend` flag.

**Alias**: `gc --amend`  
**Effect**: `git commit --amend`

Time to push the changes!

**Alias**: `gp origin develop`  
**Effect**: `git push origin develop`

Oh, but we can go shorter:

**Alias**: `gpod`  
**Effect**: `git push origin develop`

Okay, great. Now let's see a nice log of our commits.

**Alias**: `glog`  
**Effect**: `git log --oneline --graph --decorate`

Wanna see a list of all branches?

**Alias**: `gbl`  
**Effect**: `git branch --list`

And now, you made some changes to your files again, but forgot what exactly changed. Let's find out with:

**Alias**: `gda` or `gd .`  
**Effect**: `git diff .`

I use git flow for almost all my projects, so these proved very useful:

To start a new feature:

**Alias**: `gffs my-feature`  
**Effect**: `git flow feature start my-branch`

and to finish it:

**Alias**: `gfff my-feature`  
**Effect**: `git flow feature finish my-feature`

You can find these as Gists for [bash](https://gist.github.com/petarslovic/3c93a25ef5b9328c895fb6edc8b034cf)   and [fish](https://gist.github.com/petarslovic/e29300d1928ae48a7b62).

Here a few more useful ones (fish only)

Since Fish doesn't support `sudo !!`, we can simulate it like this:

**Alias**: `sudo!!`  
**Effect**: `eval sudo $history[1]`

Just a nice `ls`:

**Alias**: `ll`  
**Effect**: `ls -FGlAhp`

And a short `clear`:

**Alias**: `c`  
**Effect**: `clear`

Quickly open current directory with Finder:

**Alias**: `f`  
**Effect**: `open -a Finder ./`

Print what's in PATH:

**Alias**: `ll`  
**Effect**: `echo -e $PATH`

Make a directory and `cd` into it:

**Alias**: `mkcd coffee-images`  
**Effect**: `mkdir -p coffee-images; and cd coffee-images;`

Quick Look a file:

**Alias**: `ql medium-roast.png`  
**Effect**: `qlmanage -p medium-roast.png >/dev/null;`

You can find these here: [fish](https://gist.github.com/petarslovic/24416a61e291a55e05961b7889ce8b49)

## Conclusion

Hopefully you realise how much I like these aliases, and maybe you will find them useful too. I am already so accustomed to them, that it's like second nature to me.