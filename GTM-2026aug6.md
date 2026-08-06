# mjapi.io — Go-to-market plan (2026-08-06)

Goal: revive passive income from the **Gumroad source-code sale**. One product, one
path, no ambiguity. Keep the old landing recoverable. Rekindle SEO durably and win GEO
(get LLMs to recommend mjapi.io for "midjourney api").

---

## 0. What already shipped in this pass (code)

- **Preservation branch** `landing-two-options-v1` + tag `landing-two-options-v1-tag` — the
  old two-options landing, fully restorable. **⚠ Still local — push it when your SSH key is
  loaded:** `git push -u origin landing-two-options-v1 && git push origin --tags`.
- **Landing simplified to a single path** (source code → Gumroad):
  - Hero is now one offer + one button ("get the source code" → Gumroad). No "see", no scroll-to-choice.
  - Removed the two-option cards and the side-by-side comparison. Replaced with one source-code
    section + an honest "what you should know" block (owns the account-ban issue up front).
  - maginary is now a **quiet footer link**, not a co-equal choice.
  - FAQ rewritten to be source-code-centric.
- **SEO fixes:** real `<title>` + description, removed the keyword-spam footer block (a penalty
  risk), added `FAQPage` + `sameAs` structured data.
- **GEO:** added `/llms.txt` (clean, citable facts for LLMs).

**Deferred (need your input):** exact price on the page; whether to drop Discord entirely;
`Product`/`Offer` schema (needs price); pulling the Gumroad screenshots/README into the listing.

---

## 1. How to deploy

Deploy = **push a version tag**; GitHub Actions builds (blog + Angular) and publishes to Pages.

```bash
# 1. commit your changes on develop
git add -A && git commit -m "simplify landing to single source-code CTA + SEO/GEO"

# 2. one-shot bump + tag + push (triggers the deploy Action)
./release.sh patch      # 1.0.21 -> 1.0.22, commits, tags v1.0.22, pushes
# (needs: python venv active + `pip install bump2version`; it asks for confirmation)

# Manual equivalent if release.sh is inconvenient:
#   edit "version" in package.json, then:
#   git commit -am "..." && git tag v1.0.22 && git push --follow-tags
```

- The Action requires `env.json` to have `"api_type": "prod"` (it does).
- Watch runs: https://github.com/pizzaserved/mjapi.io/actions
- Local preview before deploy: `npm run build` (Angular only) or `npm run preview` (full, needs Ruby/Jekyll for the blog).
- **Rollback:** `git checkout landing-two-options-v1 -- src/` (or re-tag from that branch).

---

## 2. Gumroad listing — do these (biggest conversion lever, off-site)

The site now sends everyone to Gumroad, so the *listing* does the selling.

1. **Show the code is real:** screenshot the repo tree, an API snippet, the README; add a short GIF/Loom of it generating an image.
2. **Own the ban issue** in the description (don't hide it) — reframes a post-purchase shock into pre-purchase trust.
3. **List exactly what's included** (modules/files), not vague bullets.
4. **Price anchor:** "$X once vs $Y/mo hosted APIs." Put the number on the site hero too (deferred until you confirm price).
5. **Social proof:** ask past buyers for ratings; show sales count.
6. **Refund line:** "No refunds — it's source you can inspect first; ask anything before buying."

---

## 3. SEO — stop the 2–3 month fade

The fade happens because the site is thin + static with no fresh signals/backlinks. Fixes:

- **Content cluster** (1 post each, interlinked): "midjourney api python example", "how to
  automate midjourney", "unofficial midjourney api", "midjourney api pricing", "midjourney api
  alternative". This is the recurring work that keeps rankings alive — aim for ~1–2/month.
- **Free asset for backlinks:** a minimal open-source client/wrapper on GitHub, or a live
  "midjourney api options" comparison page. Free tools earn the links that stop the decay.
- **Technical (mostly done):** `FAQPage` ✓, `sameAs` ✓. Still to do: `Product`/`Offer` schema
  with price; keep the sitemap fresh (auto-generated in CI).
- **Reactivate owned channels:** re-post to dev.to / Medium / Hashnode (accounts exist) and link back.

## 4. GEO — get LLMs to recommend mjapi.io (the main prize)

You're Google #1 but invisible to LLMs. LLMs cite entities that appear **consistently across
third-party sources**, not your homepage. So seed the corpus:

- **Third-party mentions** where "midjourney api" lives: GitHub READMEs, Stack Overflow answers,
  Reddit threads, "best midjourney api" listicles, dev blogs. This matters far more than on-site copy.
- **Consistent entity description** everywhere: "mjapi.io — an unofficial Midjourney API (self-hostable source code)." Consider a Wikidata entry.
- **On-site (done):** `/llms.txt` + factual FAQ prose — clean fuel for retrieval.
- **KPI:** monthly, ask ChatGPT / Claude / Perplexity / Gemini "what's the best Midjourney API?"
  and log whether mjapi.io appears. That's your GEO scoreboard.
- The wedge: LLMs already "know" Midjourney has no official API — become the name that co-occurs
  with "unofficial midjourney api."

## 5. What actually made theresanaiforthat big (copy the legit parts)

- First-mover **directory** at peak AI-FOMO (early 2023).
- **Programmatic long-tail SEO** — thousands of "best AI for X" pages, each ranking. This is the engine.
- A **weekly newsletter** that compounded into an owned audience (the real moat).
- Founder **built in public** on Twitter/Reddit — earned attention, not fake accounts.

Transferable to you: **programmatic long-tail pages + an email list + building in public.**

---

## 6. Discord + the "fake activity" question — honest take

**Discord link:** for now it stays (quiet, in footer). Decision to make: either **close it** or
**repurpose it as a public showcase/changelog + buyer support** channel where *you* post real
generations and updates. A dead general-chat hurts; a one-person-but-active support/showcase
channel helps. Don't leave it visibly empty.

**Fake bot army / selfbots / Reddit "squads" — don't. Not a lecture; it's a bad bet for a solo founder:**

- **Selfbots violate Discord ToS** — the same ban problem you already fight, now with zero durable
  payoff. A Cloudflare tunnel doesn't save you; bans key off account/behavior signals, not just IP.
- **Reddit astroturfing is detectable and penalized** — vote-rings get shadowbanned, and one
  "founder faked their community" exposé does permanent reputational damage. Asymmetric downside.
- **The Midjourney myth:** MJ didn't win on fake accounts. It dropped a stunning product into a
  real Discord where **every generation was public** → genuine FOMO + organic sharing. The
  mechanism was *visible real output*, not sockpuppets. That part you can and should copy.

**Do this instead (same goal — momentum + social proof — legitimately):**

- **Public output gallery / showcase** on the site and in Discord. Real generations create the FOMO.
- **Seed conversations as yourself, with real value:** genuinely answer "midjourney api" questions on
  Reddit / Stack Overflow / Discord and mention the tool when relevant. This *is* the GEO play (§4)
  and it compounds instead of blowing up.
- **Real social proof:** buyer count, ratings, public roadmap, changelog.

---

## Suggested order of operations

1. Push the preservation branch (SSH). 2. Confirm price → I add it to hero + `Offer` schema.
3. Commit + `./release.sh patch` to deploy v1. 4. Upgrade the Gumroad listing (§2).
5. Start the content cluster + GEO seeding (§3–4) — the recurring work that compounds.
