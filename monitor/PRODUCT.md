# Product

<!-- impeccable:product-schema 1 -->

Scope: the Woodhead MRT Social Monitor in `monitor/`. The rest of this repository (the `home` page and the `my-agent` Worker) is out of scope.

## Platform

web

## Users

One person: the repository owner, a Woodhead Mountain Rescue Team member, using it as a personal tool. They open it to see what is being said online about the team and its area, and to catch posts that might describe an incident.

## Product Purpose

It watches social media for mentions of Woodhead Mountain Rescue Team and its patch, so the owner sees them in one place instead of searching each platform by hand. It succeeds when relevant new posts, especially possible incident posts and brand mentions, are seen quickly, and irrelevant worldwide noise is kept out.

## Positioning

It is tuned to one rescue team's ground. Generic topic words (hiking, walking, moors, navigation) only count when the post also names a local place or area, so results stay local. It flags possible incident posts using rescue vocabulary, and it runs entirely in the viewer's browser with no server or account.

## Operating Context

- A single static page (`monitor/index.html`, marked `noindex`) opened in a browser and left open; it auto-refreshes every 5 minutes.
- Live search sources, queried from the browser: Bluesky, Reddit, Mastodon and Lemmy.
- Platforms without free automatic search (X, Facebook, Instagram, TikTok, YouTube, Threads, LinkedIn, plus Google News) are covered by links that open each platform's own search for a chosen keyword.
- Results may be exported as CSV for use elsewhere.

## Capabilities and Constraints

- Summary counts: mentions found, brand mentions, possible incident posts, last 24 hours, and a positive / neutral / negative sentiment split.
- Mentions feed with filters: text search, source, keyword, sentiment, age (any, 24h, 7 days default, 30 days), incidents only, brand only. Posts new since the last visit are marked.
- Side panels: live source status, mentions by keyword, and the manual platform search links.
- Keywords dialog with five editable lists (brand names, places, topics, local area words, incident words), Reset to defaults, Cancel, and Save & refresh.
- Light and dark theme toggle; keywords, seen posts and theme are kept in the browser's localStorage.
- Sentiment is a small word list tuned for outdoor and rescue talk, not a model; it is approximate.
- No backend, no login, no stored history beyond the browser. Platform APIs can fail or rate-limit, and each source reports its own status.

## Brand Commitments

Woodhead Mountain Rescue Team (also "Woodhead MRT", "WMRT") is a real organisation; the page uses its name and a "WMRT" text mark. No other visual brand commitments were confirmed for this tool.

## Evidence on Hand

- Default keyword lists in `monitor/index.html`: brand (Woodhead Mountain Rescue, Woodhead MRT, WMRT), places (Woodhead, Langsett, Middle Black Clough, Greno Woods, Wharncliffe Crags), area (Peak District, Dark Peak, Sheffield, Barnsley, Stocksbridge, Holmfirth, Bleaklow, Longdendale, Penistone), topics, and incident words.
- All mention data is live from public APIs; there is no sample or stored dataset. Future work must not invent mentions, counts or testimonials.

## Product Principles

1. Signal over volume: a missed incident post costs more than a missed generic mention, so incidents and brand mentions come first.
2. Local by design: keep matches tied to the team's ground; never widen to worldwide topic noise.
3. Honest about its limits: say plainly which sources work, which failed, and which platforms need a manual check.
4. Zero setup: one static page, no account, no server.
