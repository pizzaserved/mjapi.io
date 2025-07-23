---
title: 'reboot: like midjourney, but with an api'
author: kindest
date: 2025-07-17 16:20:00 +0200
categories: [Blogging]
tags: [mjapi,api,image generation,open source,ai,automation,midjourney alternative]
render_with_liquid: false
image:
  path: /assets/img/2025-07-17-reboot-like-midjourney-but-api/reboot-blog-post-seo-mjapi.jpg
  alt: mjapi is now a standalone product
---

> `/imagine` midjourney had an api...
> 
> generating... 20%... 60%... 80%...
>
> **mjapi.io** (fast) <span style="color: gray;">_(edited)_</span>


is there anything else to say? yes, and mjapi has a story

mjapi used to be an unofficial midjourney api, but, apart from the gray area vibes, it hit a scaling ceiling early on (very early, actually). some time has passed, mjapi became the 1st result on google for "midjourney api" and that pushed us to actually build something ourselves. that's it 


> _incredible art poster urban punk technology artistic war_
> 
> <span style="color: gray; float: right;">midjourney</span>
> ![placeholder: midjourney result](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rmxvlzpmw56lsbu1dqvw.png)
>
> <span style="color: gray; float: right;">mjapi</span>
> ![placeholder: mjapi result](/assets/img/2025-07-17-reboot-like-midjourney-but-api/incredible_art_poster_urban_punk_technology_artistic_war-mjapi.jpg)

this is not to say mjapi is "superior" or anything like that, we're just happy if ppl will use it

## the thing

remember when we were reverse engineering discord bots and praying to not get banned? yeah, that's over. while it will work for individuals, you couldn't provide it as a service due to a low ceiling in max images per account per day  

mjapi.io "unchained" is here (not sure about the naming yet). zero midjourney dependencies. zero discord wrappers. zero captcha solving. zero throwaway accounts

just pure, clean image generation and editing with an api that actually works


> _muscular, tough --ar 16:9 https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg_
> 
> <span style="color: gray; float: right;">original</span>
> ![placeholder: original](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h68amjmqet1tcup6r41o.png)
> 
> <span style="color: gray; float: right;">midjourney</span>
> ![placeholder: midjourney result](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c9ybtob0aqtron9o9czu.png)
> 
> <span style="color: gray; float: right;">mjapi</span>
> ![placeholder: mjapi result](/assets/img/2025-07-17-reboot-like-midjourney-but-api/muscular-tough-mjapi.jpg)


if it moonwalks like mj and it sings like mj and it even looks like mj...

.. it might still not be mj

.. but something close enough

ok, that was my attempt at humor (I'm sure you're impressed)



## who this is for

mjapi is for those who care more about having an easy api than having 1:1 fidelity to og mj

you're building an app. you need images. you don't want to deal with discord rate limits/proxies, account bans, or captcha farms

you want to call an endpoint and get an image back. revolutionary concept, right?

> _massive tree of life in garden of eden sunrise far away and some mountains_
> 
> <span style="color: gray; float: right;">midjourney</span>
> ![placeholder: midjourney result](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gjod0itn8mrpgdy9d8ra.png)
> 
> <span style="color: gray; float: right;">mjapi</span>
> ![placeholder: mjapi result](/assets/img/2025-07-17-reboot-like-midjourney-but-api/tree-of-life-garden-of-eden-mjapi.jpg)

I like how mjapi reads your mind and infers the _right_ amount of detail. if you would've just said "tree of life in garden of eden", it might've added some more details by itself (rivers, birds etc., like midjourney), but because you also mention "some mountains", it _understands_ that you've already thought about details, so it is less likely to assume you've missed some of them, the result being something what we (subjectively) think is closer to your intent

## what changed

- no more discord dependencies, account rotation, ban anxiety
- native models running on mjapi's infrastructure
- same simple api you're used to
- better uptime (99.9% vs whatever discord felt like giving us)
- predictable costs

> _cool teenager on a skyscraper looking down the city digital art_
> 
> <span style="color: gray; float: right;">midjourney</span>
> ![placeholder: midjourney result](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xqb042qpfuqxpxswoit8.png)
> 
> <span style="color: gray; float: right;">mjapi</span>
> ![placeholder: mjapi result](/assets/img/2025-07-17-reboot-like-midjourney-but-api/cool-teenager-mjapi.jpg)

## the quality question

again, I don't say mjapi's models are identical to midjourney. they're not. they're close. really close

but here's the thing: we have an api, and even if mj releases their own, we've already started to diverge, we're not a clone, there are many features down the roadmap that I'm excited about, that are unique to us. I can't say it rn, but here's a hint: vibe image prompting. I'll leave it at that


> _pencil color portrait sketch of beautiful woman from Kansas USA, aged 35 --v 6.1_
> 
> <span style="color: gray; float: right;">midjourney</span>
> ![placeholder: midjourney result](/assets/img/2025-07-17-reboot-like-midjourney-but-api/pencil-kansas-woman-midjourney.jpg)
> 
> <span style="color: gray; float: right;">mjapi ("--v 6.1" part is ignored)</span>
> ![placeholder: mjapi result](/assets/img/2025-07-17-reboot-like-midjourney-but-api/pencil-kansas-woman-mjapi.jpg)

## technical stuff

- midjourney-compatible prompting (e.g. `man holding an apple --ar 16:9 --raw`)
- tens of models and variations
- 1024x1024 native resolution (optional upscaling to 2048, 4096 etc.)
- aspect ratio support
- inpainting and outpainting
- style references
- api-first design

same endpoints you're familiar with. same response format. just better infrastructure underneath.


## pricing reality

we're not here to compete on price. we're here to provide value. it might even be more expensive than midjourney simply because we're first figuring out the base feature-set, and later doing (lossless!) cost optimizations

you pay for reliability, support, and not having to maintain your own gpu cluster

if you want cheap and/or a single, specific kinds of img gen, you can create up your own pipeline, self-host it or use existing cloud providers (it's actually not that hard if you know exactly what you need and have enough time on hand)

if you want it to just work, you're in the right place

## what's next

> _man looking at the horizon optimistic 4k sun positive_
> 
> <span style="color: gray; float: right;">midjourney</span>
> ![placeholder: midjourney result](https://mjapi.io/blog/assets/img/2025-01-29-midjourney-api-source-code/man-looking-at-horizon.png)
> 
> <span style="color: gray; float: right;">mjapi</span>
> ![placeholder: mjapi result](/assets/img/2025-07-17-reboot-like-midjourney-but-api/man-horizon-mjapi.jpg)

midjourney tries to impress you (and it works, and I love their outputs), but mjapi tries to guess your intent. did you write "impressive" or "cinematic"? nope, so we're not implanting any intentions on top of what you _actually_ want -- it's easier to add what you want than to remove what you don't want

and again, we're not "better", just _different_

this is the foundation. after we launch:
- collect feedback
- fast iteration changes  
- build a rest api on top of the current simplified GET-based api
- improve the web app interface
- see what everyone else is generating (controlled by params)
- recognize more styles and composition types
- add more parameters, zoom in/out etc.
- add functionality for --nobg (remove background), --restore (restore old photos), --focus "things to focus on" (change only specific parts of the image). all these can also be inferred from your intention (i.e. "remove background" in the prompt would be enough), but specifying it explicitly makes sure you get what you want
- improve image editing (img2img flows), emphasizing natural language instructions


> competition is for losers - Peter Thiel

the future is not about copying existing platforms, it's about building something unique. and importantly, something we, ourselves, use


## wen launch?

watch for Jul28 2025, check our [discord](https://discord.com/invite/Gn6g3MCsff) for the quickest updates, or check [mjapi.io](https://mjapi.io) directly

on launch, I'll do a a more detailed blog post, diving into each feature (they're just briefly mentioned here)

we're not going to oversell this. it's not magic. rn, it's just a reliable api that deeply understands your intent and generates good images/edits

which is apparently harder to find than it should be