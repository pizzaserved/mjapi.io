---
title: 'selling the whole midjourney api backend!'
author: kindest
date: 2025-01-29 14:30:00 +0200
categories: [blogging]
tags: [midjourney,python,api,source code,backend,automation]
render_with_liquid: false
---

excited to announce that the original python source code powering [mjapi.io](https://mjapi.io)'s backend is now available! this release marks a significant pivot in our whole approach to selling access to image gen models.

## why

transitioning to a more scalable architecture. the original python backend, though perfect for individual use, faces challenges when scaling to even hundreds of concurrent users.

## what's inside

the package contains our core library with all the essential components:
- the whole saas backend, with payments, user auth, extensive spam detection, job queue etc. probably 50% of this code can be repurposed to any other project
- complete discord wrapper managing the lifecycle of image generation requests. this is the actual "bot" doing the heavy lifting.
- automated captcha solving (via your own api key from a third-party service)
- comprehensive request handling (sending requests, monitoring generation, handling reactions)
- generally robust, well-documented code ready for integration

you can also get the minimal self-contained bot version that you can use directly in your own project, which is cheaper if you're only interested in that.

## a deeper dive into the why

we believe in complete transparency, so here's what you should know:

- **does it work?** absolutely! we've used this code extensively for our own projects.
- **will i get banned?** eventually, yes. midjourney typically flags accounts after 2-3 months or ~300 api calls per day. this latter limit might just be a coincidence, but it was somethign we've experienced
- **how to minimize risks?** always use throwaway discord accounts.
- **future updates?** we'll try to adapt the lib when midjourney changes their api.

## it's still perfect for individual use

while this backend wasn't ideal for our scale (we started to have hundreds of concurrent users, and it was a nightmare), it's perfect for individual developers and small projects. the sweet spot is 1-5 discord accounts per ip address, which covers 99% of use cases.

## pricing

for the amount of work we've put in? dirt cheap.

## what's next

![man looking at the horizon optimistic 4k sun positive](/assets/img/2025-01-29-midjourney-api-source-code/man-looking-at-horizon.png) _(man looking at the horizon optimistic 4k sun positive)_


we're evolving! [mjapi.io](https://mjapi.io) is pivoting to a self-hosted open-source model. we'll have all of the stuff you'd expect:
- image gen
- inpaint/outpaint
- face swap
- outfit gen
- everything else the current open source models are capable of

it's exciting that we've reached 5k monthly visitors just a few days ago and growing at 10% month-over-month, i can't wait for this new direction that will allow us to scale "infinitely", while still keeping a mj-like quality (at least 90% imo), for cheaper and without any constraints. we're going native baby

## dive in

you can get the source code now on [gumroad](https://exploder.gumroad.com/l/mjapi-python?utm_source=mjapi-site&utm_medium=blog-source-code&utm_campaign=mjapi)

this pack is the culmination of months of dev and real-world testing.

fun fact: the most frustrating part was keeping the fake email signups and creating a robust email/ip filtering system, hope you'll find some use for this piece too, i'm definitely using it in all of my upcoming projects. 

stay tuned!

ps: i know there's no easy way to get notified of new posts, but you can join our discord, i'll be posting there too!
