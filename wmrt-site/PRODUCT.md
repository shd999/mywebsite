# Product

<!-- impeccable:product-schema 1 -->

Scope: the public website of Woodhead Mountain Rescue Team, https://woodheadmrt.org. The site's code lives on its WordPress host, not in this repository; this folder holds its design records.

## Platform

web

## Users

Several audiences, weighted roughly equally (confirmed by the site owner):

- Walkers, runners and mountain bikers heading into the team's area, and anyone already lost or hurt who needs to call 999 and give their location.
- Donors and fundraisers: one-off and monthly givers, JustGiving fundraisers, gifts in wills and in memory.
- People the team has rescued, and their families.
- People who might join the team, book a talk or visit, enter the Trigger fell race, or support it as a business.
- The volunteers who run the site and post incidents and news.

## Product Purpose

The site keeps people safer on the hills, raises the money that keeps a free, volunteer rescue service running, and shows the public what the team does. Success over the next year means all four of:

1. More donations, one-off and monthly.
2. Better-prepared visitors: fewer avoidable callouts, and people who know how to give their location.
3. More recruits and supporters: volunteers, businesses, talks booked, Trigger race entries.
4. Easier to run: volunteers can post incidents and news without a developer.

## Positioning

The only site written by the volunteers who come to find you on this ground: the Dark Peak, west of Sheffield and Barnsley, since 1964. Its safety advice is specific to named local places (Black Clough waterfalls, Greno Woods, Langsett and Cut Gate, Wharncliffe Woods and Crags), and its incident log is the team's own record. Rescue is free and never charged for.

## Operating Context

- Self-hosted WordPress on the Twenty Twenty theme with custom CSS, Jetpack and LiteSpeed Cache. Content is edited by volunteers in WordPress.
- Top of every page: the emergency message ("In an emergency, dial 999, ask for the Police, then Mountain Rescue"), then the menu, then 999 Emergency and Donate buttons.
- Main sections: Safety, News, What we do (incident log, statistics, specialist teams, training, vehicles), About us, Rescued by us?, Get involved, Support us.
- Homepage tools: an OS grid reference finder using the phone's GPS (8-figure reference to read to 999), the year's incident figures, and a donate form (give once or monthly, preset amounts).
- Donations go through JustGiving. Social channels: Facebook and Instagram.
- Incident posts use the team's incident number format (e.g. 2026-70).

## Capabilities and Constraints

- Volunteer-run with no paid staff; changes must stay maintainable in WordPress by non-developers.
- The team is part of the Peak District Mountain Rescue Organisation.
- Live figures (incidents, volunteer hours at incidents, volunteer numbers) change through the year; always take them from the live site or source, never hard-code or estimate them.
- Privacy: never identify a casualty (name, age, home town); keep locations general on public pages; no casualty faces in images or video.
- Anything about a live callout or search is drafted for review, never published directly.

## Brand Commitments

- Name: Woodhead Mountain Rescue Team (Woodhead MRT, WMRT). Registered charity 1137974. Tagline in use: "So much more than mountains" / "More than mountains".
- The MREW logo with "Woodhead" underneath.
- Site palette of blue and orange, the Archivo typeface, and OS grid and contour motifs (from the team's house style).
- Safety before fundraising: the 999 message takes priority over Donate on every page and post, even though audiences are weighted equally.
- The team are unpaid volunteers and rescue is free. Fundraising pieces close with the volunteer message and a donate link.
- Voice: British English; plain, warm and direct; short sentences; no hype.
- Quotes from the Team Leader or others need their sign-off; bereavement or unsuccessful-search wording is checked by the Team Leader before publishing.

## Evidence on Hand

- The live site at https://woodheadmrt.org: incident log, incident statistics, annual reports and accounts, history, local safety pages.
- Homepage figures for 2026 so far, read 22 November 2026: 73 incidents, 2,185 volunteer hours at incidents, 50+ volunteers, £0 charged for a rescue. These change; recheck before use.
- No testimonials, rescued-person stories or quotes have been confirmed for design use. Do not invent any.

## Product Principles

1. Safety first, always visible: the 999 message and "give your location" help are never further than one glance away.
2. Local and specific: name real places and real advice for this ground, not generic outdoor tips.
3. Honest figures: every number comes from the team's own records and says where it came from.
4. Every visit can help: a safer walk, a donation, a volunteer or a supporter, each with a clear next step.
5. Simple to keep up: anything new must be easy for volunteers to edit in WordPress.

## Accessibility & Inclusion

The site publishes an accessibility statement (https://woodheadmrt.org/accessibility/). People may reach the emergency and location pages under stress, outdoors, on a phone with poor signal, so those must load fast and read clearly at phone size.
