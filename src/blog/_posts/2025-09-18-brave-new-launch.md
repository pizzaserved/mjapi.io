---
title: 'brave new launch'
author: kindest
date: 2025-09-16 20:00:00 +0200
categories: [Blogging]
tags: [mjapi,launch,video generation,image generation,api,ai,build in public]
render_with_liquid: false
image:
  path: /assets/img/2025-09-18-brave-new-launch/mjapi-launch-seo.jpg
  video: https://player.vimeo.com/video/1119939932
  alt: brave new launch
---

from text... straight to mind-blowing images and videos  
without overthinking prompts.  
any format. any language. simple ui. simple api.  
and no forced subscriptions you forget to cancel.

this is the promise  

<div style="margin: 10px 0;">
<audio controls controlsList="nodownload nofullscreen" style="width: 100%; height: 32px; margin-bottom: 0px;" onloadeddata="this.volume=0.1">
  <source src="https://mjapi.io/assets/soundtrack/mjapi%20-%20invoke%20the%20unseen.mp3" type="audio/mpeg">
  your browser doesn't support audio (but mjapi still works)
</audio>
<div style="text-align: right; font-style: italic; font-size: 0.8em; opacity: 0.6;">
"mjapi - invoke the unseen" at 10% volume goes well with this post
</div>
</div>

## what was mjapi again?

> an image and video generator that reads and blows your mind

## so what
this is the more official launch day, call it v1.0 if you wish

the soft-launch from [a few](/blog/reboot-like-midjourney-but-api) weeks ago (damn, it's actually 2 months already? time flies) was just my attempt to market this thing. it went pretty well

## results

so it feels good to get some [traction](https://x.com/xucian_/status/1962040208674668716), things are going well. could be better, but I see enough validation to move forward 

![rev last 60d](/assets/img/2025-09-18-brave-new-launch/metabase-revenue-timeline-(60d)-19_09_2025.png)

yeah, I messed something up around sep9, since sales were constant and then suddenly stopped until a few days ago. thing is, there's no clear sign. could be some ui bug, or any change in my yapping about the project on x/reddit. who knows

btw shout-out to [@metabase](https://x.com/metabase) for the amazing bi graphs, I'm using their free self-hosted docker image and it works great!

## what mjapi does now

it does text to image, text to video, image to video. but let me show you what that actually means

> _majestic old tree in a fantastic setting full of life_
> 
> ![majestic tree result](/assets/img/2025-09-18-brave-new-launch/3_majestic_old_tree_in_a_fantastic_setting_full_of_life.webp)
> [app.mjapi.io/g/1a3d55b2b40cf9e29f6b92739fa94d82](https://app.mjapi.io/g/1a3d55b2b40cf9e29f6b92739fa94d82/)


then upscale it, vary it, zoom out, pan (add pixels), or turn it into a video. all from the same starting point, here are the current available controls for most formats:
> ![image editing actions](/assets/img/2025-09-18-brave-new-launch/actions.png)

for example, here's a zoom out:
> ![tree variation](/assets/img/2025-09-18-brave-new-launch/0_majestic_old_tree_in_a_fantastic_setting_full_of_life.png)
> [app.mjapi.io/g/12f4463971e383979844eb7465944482](https://app.mjapi.io/g/12f4463971e383979844eb7465944482/)

"hmm, I wonder what's in the tree?", just pan the camera bro:
> ![tree panning](/assets/img/2025-09-18-brave-new-launch/0_majestic_old_tree_in_a_fantastic_setting_full_of_life--panning.png)
> [app.mjapi.io/g/c3c93135e0f47e4b96256da0b50a2ea1](https://app.mjapi.io/g/c3c93135e0f47e4b96256da0b50a2ea1/)


need a logo? works with any format, including vector graphics

> _logo for cat food \"kitty kit\" \-\-svg_
>
> ![doggo walko logo](/assets/img/2025-09-18-brave-new-launch/0_logo_for_cat_food_u0022kitty_kitu0022_--svg.svg)
> [app.mjapi.io/g/cb539942a53d83af2cea0bebc0a9febe](https://app.mjapi.io/g/cb539942a53d83af2cea0bebc0a9febe/)

want clean line art?

> _beautiful tiger line art, monochrome, simple lines_
>
> ![tiger line art](/assets/img/2025-09-18-brave-new-launch/1_beautiful_tiger_line_artu002c_monochromeu002c_simple_lines.webp)
> [app.mjapi.io/g/c014e79a26daaaa0ba9a59ae8793b6fc](https://app.mjapi.io/g/c014e79a26daaaa0ba9a59ae8793b6fc/)

or get the style from any other image:

> _portrait of a woman holding a cup of tea \-\-sref https://s.mjapi.io/styles/line_art_4.png_
>
> ![woman with tea styled](/assets/img/2025-09-18-brave-new-launch/0_portrait_of_a_woman_holding_a_cup_of_tea_--sref_httpsu003au002fu002fsu002emjapiu.webp)
> [app.mjapi.io/g/8161566ead8bafe6404bafb9ad3c2753](https://app.mjapi.io/g/8161566ead8bafe6404bafb9ad3c2753/)

or combine your own images with style references:

> _https://s.mjapi.io/demo/man-in-coat.jpg \-\-sref https://s.mjapi.io/demo/impressionist-style.jpg also add a cigar_
>
> <div style="display: flex; gap: 10px; margin: 10px 0;">
>   <img src="/assets/img/2025-09-18-brave-new-launch/man-in-coat.jpg" alt="input: man in coat" style="width: 45%;">
>   <img src="/assets/img/2025-09-18-brave-new-launch/impressionist-style.jpg" alt="style reference: impressionist" style="width: 45%;">
> </div>
>
> ![result: man with cigar in impressionist style](/assets/img/2025-09-18-brave-new-launch/3_httpsu003au002fu002fsu002emjapiu002eiou002fdemou002fman-in-coatu002ejpg_--sref_h.webp)
> [app.mjapi.io/g/d7289c201e2b579f25d824c33f2ecf26](https://app.mjapi.io/g/d7289c201e2b579f25d824c33f2ecf26/)

and yes, you can write prompts in any language. they're translated to english internally:

> _un chat noir élégant dans un jardin japonais_
>
> ![elegant black cat in japanese garden](/assets/img/2025-09-18-brave-new-launch/2_un_chat_noir_elegant_dans_un_jardin_japonais.webp)
> [app.mjapi.io/g/9e83aa6acebaacae4a54f21f8e1cefbc](https://app.mjapi.io/g/9e83aa6acebaacae4a54f21f8e1cefbc/)

## videos baby

this is big. text to video, image to video - it just works

> _pink frog jumps \-\-mp4_
>
> <video controls style="width: 100%; max-width: 600px;">
>   <source src="/blog/assets/video/2025-09-18-brave-new-launch/0_pink_frog_jumps_--mp4.mp4" type="video/mp4">
> </video>
> 
> [app.mjapi.io/g/c88846d2707545afedb723d3a3d6acab](https://app.mjapi.io/g/c88846d2707545afedb723d3a3d6acab/)

take a photo of you directly via the website (or upload one). 
its url gets generated/pasted instantly in the prompt (before it's uploaded. yeah, magic baby)\*  

> _https://s.mjapi.io/u/8b2e24a0c6850dc0e11611087d6d2260.webp make me blonde and get me a badass beard_  
> <img src="/assets/img/2025-09-18-brave-new-launch/1_httpsu003au002fu002fsu002emjapiu002eiou002fuu002f8b2e24a0c6850dc0e11611087d6d226.jpeg" alt="guy turned blonde" style="width: 25%;">
> [app.mjapi.io/g/b83a8784c4081b1ad70c81a29b473c89](https://app.mjapi.io/g/b83a8784c4081b1ad70c81a29b473c89/)


then the video ▶ button and describe it:  
> _this guy stands up and leaves the room \-\-720p \-\-5sec_
>
> <video controls style="width: 100%; max-width: 600px;">
>   <source src="/blog/assets/video/2025-09-18-brave-new-launch/0_httpsu003au002fu002fsu002emjapiu002eiou002fuu002f8b2e24a0c6850dc0e11611087d6d226.mp4" type="video/mp4">
> </video>  
> 
> [app.mjapi.io/g/76c3072d5166c07a508e7c1aa653b00d](https://app.mjapi.io/g/76c3072d5166c07a508e7c1aa653b00d/)


## main parameters

![mjapi parameters](/assets/img/2025-09-18-brave-new-launch/mjapi-reboot-launch4-params-15sep25-photopea-bw.png)

here's what you can control if the UI isn't enough. and this list will obviously grow over time.

aspect ratios, style references, model selection, output formats -- it's all there.

## what changed since july

- **video generation**: complete implementation with multiple cutting-edge models
- **style references (\-\-sref)**: reference specific visual styles in your prompts
- **progress tracking**: real-time generation updates so you know what's happening
- **credit system overhaul**: new pricing tiers (no-subs: novice; subs: acolyte, mage, archmage)
- **generation history**: see everything you've created on your homepage
- **api access**: proper api keys and documentation for developers
- **image upload**: reference your own images with frontend preprocessing
- **chill audio player**: because waiting for generations should be pleasant
- **image picking**: select and focus on specific results with smooth animations
- **mobile experience**: comprehensive UI improvements, responsive everything
- **some infrastructure scaling**: added more celery workers, parallel processing of each of the 4 slots, redis caching

mjapi evolved from just standard image gen to a comprehensive prompt-based creative tool


## tagline change!
> former midjourney api, now something better  
->  
> an image and video generator that reads and blows your mind

## try it

- [app.mjapi.io](https://app.mjapi.io) - no account needed to try the sample prompts!
- mobile app coming soon

## the build in public part

I've been [building this in public](https://x.com/xucian_/status/1966536975374045309), sharing the ups and downs and iterating on your feedback. so you, as an early adopter, deserve something special:  
hHere's a lifetime 10% off code: **SOEARLY10**  
it's valid until oct1 '25 for 100 users  

btw, here's my users per country:  
![users by country](/assets/img/2025-09-18-brave-new-launch/metabase-users-by-country.png)

## what's next

mjapi is not trying to be the next midjourney. just something different for developers and creators who want:
- beautiful and diverse outputs by default, without overprompting
- video generation alongside images  
- reliable apis that just work
- reasonable pricing without surprise costs or forcing you to subscribe to use the app
- a platform that evolves based on actual user needs

this is the foundation. we, together, will build on top of it through your feedback, so please share your experience! I see very few users actually email/dm me about issues/feature. guys! I'm here to build whatever the heck you need, for 'free'!  
when we'll reach 1k users you won't have that luxury anymore (unless your demands are popular)

next is scaling. let's do it.  
![users 60d](/assets/img/2025-09-18-brave-new-launch/metabase-users60d.png)

---

_create: [app.mjapi.io](https://app.mjapi.io)_

_follow my progress: [@xucian_](https://x.com/xucian_)_

_hang out: [discord server](https://discord.com/invite/Gn6g3MCsff)_
