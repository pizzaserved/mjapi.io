---
title: 'midjourney unofficial api - yes, we're selling the source code'
author: kindest
date: 2025-01-29 14:30:00 +0200
categories: [Blogging]
tags: [midjourney,python,api,source code,backend,automation]
render_with_liquid: false
---

Excited to announce that the original Python source code powering [mjapi.io](https://mjapi.io)'s backend is now available! This release marks a significant pivot in our whole approach to selling access to image gen models.

## Why

Transitioning to a more scalable architecture. The original Python backend, though perfect for individual use, faces challenges when scaling to even hundreds of concurrent users.

## What's inside

The package contains our core library with all the essential components:
- The whole SaaS backend, with payments, user auth, extensive spam detection, job queue etc. probably 50% of this code can be repurposed to any other project
- Complete Discord wrapper managing the lifecycle of image generation requests. This is the actual "bot" doing the heavy lifting.
- Automated captcha solving (via your own api key from a third-party service)
- Comprehensive request handling (sending requests, monitoring generation, handling reactions)
- Generally robust, well-documented code ready for integration

You can also get the minimal self-contained bot version that you can use directly in your own project, which is cheaper if you're only interested in that.

## A deeper dive into the Why

We believe in complete transparency, so here's what you should know:

- **Does it work?** Absolutely! We've used this code extensively for our own projects.
- **Will I get banned?** Eventually, yes. Midjourney typically flags accounts after 2-3 months or ~300 API calls per day. This latter limit might just be a coincidence, but it was somethign we've experienced
- **How to minimize risks?** Always use throwaway Discord accounts.
- **Future updates?** We'll try to adapt the lib when Midjourney changes their API.

## It's still perfect for individual use

While this backend wasn't ideal for our scale (we started to have hundreds of concurrent users, and it was a nightmare), it's perfect for individual developers and small projects. The sweet spot is 1-5 Discord accounts per IP address, which covers 99% of use cases.

## Pricing

For the amount of work we've put in? Dirt cheap.

## What's next

![man looking at the horizon optimistic 4k sun positive](/blog/assets/img/2025-01-29-midjourney-api-source-code/man-looking-at-horizon.png) _(man looking at the horizon optimistic 4k sun positive)_


We're evolving! [mjapi.io](https://mjapi.io) is pivoting to a self-hosted open-source model. We'll have all of the stuff you'd expect:
- image gen
- inpaint/outpaint
- face swap
- outfit gen
- everything else the current open source models are capable of

It's EXCITING that we've reached 5k monthly visitors just a few days ago and growing at 10% month-over-month, I can't wait for this new direction that will allow us to scale "infinitely", while still keeping a mj-like quality (at least 90% imo), for cheaper and without any constraints. We're going native baby

## Dive in

You can get the source code now on [Gumroad](https://exploder.gumroad.com/l/mjapi-python?utm_source=mjapi-site&utm_medium=blog-source-code&utm_campaign=mjapi)

This pack is the culmination of months of dev and real-world testing.

Fun fact: the most frustrating part was keeping the fake email signups and creating a robust email/ip filtering system, hope you'll find some use for this piece too, I'm definitely using it in all of my upcoming projects. 

Stay tuned!

PS: I know there's no easy way to get notified of new posts, but you can join our discord, I'll be posting there too!
