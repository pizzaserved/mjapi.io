---
title: 'brave new launch'
author: kindest
date: 2025-09-16 20:00:00 +0200
categories: [Blogging]
tags: [mjapi,launch,video generation,image generation,api,ai,build in public]
render_with_liquid: false
image:
  path: /assets/img/2025-09-16-mjapi-launch-the-real-one/mjapi-launch-seo.jpg
  alt: brave new launch
---
[DRAFT: I'm editing this while you're reading lol, go away]

[DRAFT: I'm editing this while you're reading lol, go away]

[DRAFT: I'm editing this while you're reading lol, go away]

> from text... straight to mind-blowing images and videos
> 
> without overthinking prompts
>
> **mjapi.io** _(for real this time)_

<div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-radius: 8px;">
🎵 <strong>play our soundtrack while reading this</strong><br>
<audio controls style="width: 100%; margin-top: 10px;">
  <source src="/assets/audio/mjapi-launch-soundtrack.mp3" type="audio/mpeg">
  <!-- fallback for local hosting -->
  <source src="/assets/audio/mjapi-launch-soundtrack.wav" type="audio/wav">
  your browser doesn't support audio (but mjapi still works)
</audio>
</div>

hi, and this is mjapi - an image and video generator that reads your mind

we've "launched" a few times already, but this one? this one's for real

## the thing that happened

remember when I [talked about getting traction](https://x.com/xucian_/status/1962040208674668716) a few weeks ago? well, things escalated

![mjapi traction stats](/assets/img/2025-09-16-mjapi-launch-the-real-one/mjapi-traction-stats.png)

turns out when you build something people actually want, they tell their friends. who knew?

## what mjapi does now

### launch video
<!-- video placeholder - will be hosted locally and/or vimeo -->
<div style="margin: 20px 0; text-align: center;">
<video controls style="width: 100%; max-width: 800px;" poster="/assets/img/2025-09-16-mjapi-launch-the-real-one/video-poster.jpg">
  <source src="/assets/video/mjapi-launch-video.mp4" type="video/mp4">
  <!-- vimeo fallback -->
  <iframe src="https://player.vimeo.com/video/VIMEO_ID_HERE" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
</video>
</div>

it does text to image, text to video, image to video. but let me show you what that actually means:

> _majestic old tree in a fantastic setting full of life_
> 
> ![majestic tree result](/assets/img/2025-09-16-mjapi-launch-the-real-one/majestic-tree.jpg)

then upscale it, vary it, zoom out, pan up, or turn it into a video. all from the same starting point.

need a logo? 

> _logo for cat food "doggo walko" --svg_
>
> ![doggo walko logo](/assets/img/2025-09-16-mjapi-launch-the-real-one/doggo-walko-logo.svg)

want clean line art?

> _beautiful tiger line art, monochrome, simple lines_
>
> ![tiger line art](/assets/img/2025-09-16-mjapi-launch-the-real-one/tiger-line-art.jpg)

or get style from an existing image:

> _portrait of a woman holding a cup of tea --sref [style-reference-url]_
>
> ![woman with tea styled](/assets/img/2025-09-16-mjapi-launch-the-real-one/woman-tea-styled.jpg)

and yes, you can write prompts in any language. they're translated to english internally:

> _un chat noir élégant dans un jardin japonais_
>
> ![elegant black cat in japanese garden](/assets/img/2025-09-16-mjapi-launch-the-real-one/chat-noir-jardin.jpg)

## the video thing

this is big. text to video, image to video - it just works

> _dog fetches a frisbee --mp4 --1080p --2_
>
> <video controls style="width: 100%; max-width: 600px;">
>   <source src="/assets/video/dog-frisbee.mp4" type="video/mp4">
> </video>

we're using multiple models including Google's nanobanana and ByteDance's seedance-1-pro. the results speak for themselves.

## all the parameters

![mjapi parameters](/assets/img/2025-09-16-mjapi-launch-the-real-one/mjapi-reboot-launch4-params-15sep25-photopea.png)

here's what you can control if the UI isn't enough. and this list will obviously grow over time.

aspect ratios, style references, model selection, output formats - it's all there.

## what changed since july

- **video generation**: complete implementation with multiple cutting-edge models
- **audio player**: because waiting for generations should be pleasant
- **image picking**: select and focus on specific results with smooth animations
- **style references (--sref)**: reference specific visual styles in your prompts
- **mobile experience**: comprehensive UI improvements, responsive everything
- **progress tracking**: real-time generation updates so you know what's happening
- **credit system overhaul**: new pricing tiers (Novice, Acolyte, Mage, Archmage) with transparent costs
- **generation history**: see everything you've created on your homepage
- **api access**: proper API keys and documentation for developers
- **new models**: added Google Imagen-4-fast for cheap, high-quality generation
- **image upload**: reference your own images with frontend preprocessing
- **infrastructure scaling**: 3 celery workers, parallel processing, Redis caching

the platform evolved from basic image generation to a comprehensive creative AI platform.

## try it

- [app.mjapi.io](https://app.mjapi.io) - no account needed to start
- mobile app coming soon

## the build in public part

I've been [building this in public](https://x.com/xucian_/), sharing the ups and downs. early users are shaping this project through feedback.

for that, I'm giving lifetime 10% off to the first 100 users. because early adopters deserve something special.

## what's next

we're not trying to be midjourney. we're trying to be something better for developers and creators who want:
- reliable apis that just work
- video generation alongside images  
- reasonable pricing without surprise costs
- a platform that evolves based on actual user needs

this is the foundation. what we build on top of it depends on what you need.

---

_follow the progress: [@xucian_](https://x.com/xucian_)_

_hang out: [discord server](https://discord.com/invite/Gn6g3MCsff)_

_build: [app.mjapi.io](https://app.mjapi.io)_