---
title: 'midjourney unofficial api - yes, we're selling the source code'
author: kindest
date: 2025-01-29 14:30:00 +0200
categories: [Blogging]
tags: [midjourney,python,api,source code,backend,automation]
render_with_liquid: false
---

After countless requests from our community, we're excited to announce that the original Python source code powering mjapi.io's backend is now available! This release marks a significant pivot in our whole approach to selling access to image gen models.

## Why

The decision to release our source code stems from our commitment to transparency and our evolution as a service. We're transitioning to a more scalable architecture. The original Python backend, though perfect for individual use, faces challenges when scaling to even hundreds of concurrent users.

## What's inside

The package contains our core library with all the essential components:
- Complete Discord wrapper managing the lifecycle of image generation requests
- Automated captcha solving (via your own api key from a third-party service)
- Comprehensive request handling (sending requests, monitoring generation, handling reactions)
- Generally robust, well-documented code ready for integration
- The whole SaaS backend, with payments, user auth, extensive spam detection, job queue etc. probably 50% of this code can be repurposed to any other project

You can also get the minimal self-contained bot version that you can use directly in your own project, which is cheaper.

## A deeper dive into the Why

We believe in complete transparency, so here's what you should know:

- **Does it work?** Absolutely! We've used this code extensively for our own projects.
- **Will I get banned?** Eventually, yes. Midjourney typically flags accounts after 2-3 months or ~300 API calls per day. This latter limit might just be a coincidence, but it was somethign we've experienced
- **How to minimize risks?** Always use throwaway Discord accounts.
- **Future updates?** We'll try to adapt the lib when Midjourney changes their API.

## It's still perfect for individual use

While this backend wasn't ideal for our scale (we started to have hundreds of concurrent users, and it was a nightmare), it's perfect for individual developers and small projects. The sweet spot is 1-5 Discord accounts per IP address, which covers 99% of use cases.

## Pricing

Based on development hours and market value, this backend could command $1000+ per pack. However, we're offering it at a significantly lower price during our initial release phase to gather community feedback and support independent developers.

## What's next

![man looking at the horizon optimistic 4k sun positive](/blog/assets/img/2025-01-29-midjourney-api-source-code/man-looking-at-horizon.png) _(man looking at the horizon optimistic 4k sun positive)_


We're evolving! MJAPI is pivoting to a self-hosted open-source model that will include:
- image generation
- inpainting and outpainting
- face swap
- outfit generation
- everything else the current open source models are capable of

it's EXCITING that we've reached 5k monthly visitors just a few days ago and growing at 10% month-over-month, I can't wait for this new direction that will allow us to scale "infinitely", while still keeping a mj-like quality (at least 90% imo), for cheaper and without any constraints. we're going native baby

## Ready to dive in?

You can get the source code now on [Gumroad](https://exploder.gumroad.com/l/mjapi-python?utm_source=mjapi-site&utm_medium=blog-source-code&utm_campaign=mjapi)

This pack is the culmination of months of dev and real-world testing (the most frustrating part was keeping the fake email signups and creating a robust email/ip filtering system, hope you'll find some use for it, I'm definitely using it in all of my upcoming projects). 

Stay tuned! 
