# woodheadmrt.org fixes

## Step 1: safety first on phones (approved 23 November 2026)

Mock-ups: https://claude.ai/artifact/LaVPw95zsx8Dg6iatKiBhn

**What it does** (phones and tablets below 782px wide, homepage and Safety pages only):

- Adds a bar at the bottom of the screen with Call 999 and Find my grid reference.
- Find my grid reference scrolls to the finder and starts it. On Safety pages that have no finder, it links to the one on the In an emergency page.
- Hides both bars while the finder is on screen. On the homepage the Donate bar comes back once the visitor has scrolled past the finder.
- Hides the consent banner and the Subscribe button on those pages, and moves the Top button above the bar.
- Keeps "dial 999" together on one line in the red banner on every page.

Desktop is not changed.

**Install** (about 5 minutes):

1. In WordPress, open the code-snippet plugin the site already uses for its own scripts (for example WPCode or Code Snippets).
2. Add a new **HTML** snippet called "Safety first on phones".
3. Paste the whole of `safety-first-snippet.html`, from `<!--` to `</script>`.
4. Set it to load in the **site footer**, on the **front end only**, and activate it.
5. In LiteSpeed Cache, choose **Purge All**.
6. On your phone, open the homepage and a Safety page and check the bar appears. Tap Find my grid reference and check it gives a grid reference.

**To undo:** deactivate the snippet and purge LiteSpeed again.

**LiteSpeed:** no settings change is needed. The snippet carries LiteSpeed's own "don't optimise or delay this" markers, and testing on 23 November showed the site's finder answers the very first tap. The styles live inside the script, so LiteSpeed's unused-CSS removal can't strip them.

**Files:**

- `safety-first-snippet.html`: the one thing to install.
- `safety-first.css`, `safety-first.js`: the same code split out, for reading and editing. If you change these, rebuild the snippet from them.

**Tested on the live site** (23 November 2026, snippet injected into the real pages):

| Page and width | Result |
|---|---|
| Homepage, 390 | Bar shows on load, no consent banner; finder gives a grid reference from the bar; bars hide during the result; Donate bar returns after the finder |
| Homepage, 390, bar as first tap | Finder gives a grid reference |
| In an emergency, 390, keyboard | Enter on the bar's button gives a grid reference |
| Greno Woods, 360 | Bar shows; finder link goes to the emergency page; no sideways scroll; "dial 999" kept together |
| News, 390 | No bar |
| Homepage, 1440 | No bar; desktop unchanged |
