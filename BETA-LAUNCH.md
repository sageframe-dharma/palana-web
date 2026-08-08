# pālana — beta launch, step by step

Work top to bottom, in order. **[you]** needs your hands. **[done]** already
happened. Nothing in Phase 3 starts until Phases 0–2 are checked off.

---

## Phase 0 — Decide (one sitting)

- [ ] **[you] Confirm the price: $29 at 1.0.** It is now printed on the site
      (index card, FAQ, help FAQ, /licensing/, /compare/) and in
      CONTRIBUTING.md. If the number changes, grep both repos for `$29`.
- [ ] **[you] Confirm the domain.** `public/_data/site.json` says
      `https://palana.sageframe.net` — og images and canonical URLs build
      from it. Change it there if the domain will differ.
- [ ] **[you] Pick the window.** A start date and a hard end 8 weeks later,
      in your calendar. The beta ends by decision, not by drift.

## Phase 1 — Finish the website (before any post)

- [ ] **[you] Shoot shots 01–03** minimum — list, states, and capture method
      in `shots/SHOT-LIST.md`. Drop PNGs in `shots/`; I wire them into
      index/start on request.
- [ ] **[you] Record the 50-second demo video** — the timed keystroke script
      and ffmpeg commands are in `shots/SHOT-LIST.md`. This is the single
      highest-leverage asset; every post below links it.
- [ ] **[you] Verify the /compare/ cells about other people's software** —
      Transmit/ForkLift "relayed through your Mac" and "own connection
      stack," prices, versions. From your own testing, not their marketing.
      A wrong cell is the worst credibility hit the site can take.
- [ ] **[done]** Copy DI-audited; facts aligned with PalanaCore; og card
      built; pricing honesty on every money surface.
- [ ] **[you] Read every page once on the deployed preview.** Out loud is
      best.
- [ ] **[you] Deploy:** `npx @11ty/eleventy && npx wrangler pages deploy _site`
      (or connect the repo in Cloudflare Pages). Attach the custom domain.
- [ ] **[you] Test the link preview:** paste the live URL into a Discord DM
      to yourself (or opengraph.xyz). The green og card should render.
- [ ] **[you] Click every nav and footer link once on the live site.**

## Phase 2 — Ready the repo

- [ ] **[done]** CONTRIBUTING.md carries the beta deal. **[you]** Commit it.
- [ ] **[you] Releases:** confirm `/releases/latest` has the current signed
      dmg and short release notes — the site's download buttons point there.
- [ ] **[you] Repo About:** description + site URL. README: site link and a
      one-line beta note near the top.
- [ ] **[you, optional]** Issue template with the fields CONTRIBUTING names —
      say the word and I generate `.github/ISSUE_TEMPLATE/bug-report.yml`.

## Phase 3 — Post, one room at a time

The pacing rule: **one room, then silence.** Post, spend 3–4 days answering
everything within 24 hours, fix what they find, ship a beta release — then
the next room. Every room gets: disclosure that it's yours in the first
sentence, the founding-tester offer, and no arguing with critics (thank, fix
or explain once, move on).

- [ ] **[you] 1. Practical ZFS** (discourse.practicalzfs.com) — **Draft A.**
      Read the room's self-promo norms first; post in the category they use
      for projects. The hardest, most exact audience — that's why first.
- [ ] **[you] 2. r/zfs** — **Draft B**, only after the first fix round.
- [ ] **[you] 3. Level1Techs forum** — **Draft A**, lightly adapted.
- [ ] **[you] 4. Self-Hosted podcast Discord** — **Draft C** — and submit
      the site to selfh.st the same week.

## Phase 4 — Run the beta (weekly rhythm)

- Answer every new issue within 24h, even if only "seen, digging."
- Weekly: triage pass; if anything user-visible was fixed, ship a beta
  release with a short "what changed."
- Keep a private list of (a) quotable praise — ask permission at 1.0 — and
  (b) every new refusal class encountered. (b) is the exit-criteria measure.

## Phase 5 — Exit to 1.0 (criteria, not vibes)

The beta ends when **all** of these hold:

- [ ] ≥15 external fields reported (count via issues) and **no new refusal
      class in the final 2 weeks**
- [ ] Zero open data-loss-severity issues
- [ ] The gated-delete path and send/receive path each confirmed run on
      hardware you don't own
- [ ] Shots and video live on the site

Then 1.0 gets its own playbook — Show HN, r/homelab, r/macapps, newsletters,
Payhip coupons for the beta rooms. We write it *during* the beta, not now.

---

## The drafts

### Draft A — Practical ZFS / Level1Techs

**Title:** pālana — a native Mac file manager for SSH hosts that shows the
exact command before it runs [beta]

> I administer a small homelab from a Mac — Proxmox, two ZFS hosts — and I
> never trusted GUI file managers with it: they hide the command, they relay
> 40 GB through your laptop without saying so, and they think a
> cross-dataset move is a rename. So I built the tool I wanted, and I'm
> looking for beta testers whose fields don't look like mine.
>
> The shape of it: dual panes; either pane is any host in your
> `~/.ssh/config` — the config is the host list, and the system `ssh` runs
> everything. Press a verb, get a plan: what the operation actually is, the
> route, the exact rsync/zfs commands. Enter runs it with live output; Esc
> means nothing happened. Between two servers the bytes go host to host with
> agent forwarding. Where a host runs ZFS: dataset boundaries visible in the
> pane, snapshot/rollback/destroy through the same plan gate, and
> whole-dataset moves become `zfs send | ssh | zfs receive`. The delete half
> of any move is gated on visible count checks. No daemon, no telemetry.
> GPL-3.0 — free to compile yourself, forever.
>
> What it deliberately is not: Mac-only (the servers can be anything).
> SSH-only — no SMB, S3, or SFTP-server browsing. Not a sync tool, not a
> monitor.
>
> The beta is free (signed, notarized dmg). 1.0 will be a one-time $29 —
> file a real issue during the beta and your 1.0 license is on me. I
> especially want: userlands I haven't met (BusyBox, NAS firmware),
> rsync/zfs version skew, and any plan that says something untrue.
>
> Site: <url> · Repo: <url> · Download: <url> · 50-sec demo: <url>

### Draft B — r/zfs

**Title:** I built a Mac file manager that shows you the
`zfs send | ssh | zfs receive` before it runs it [beta]

> Dataset boundaries are first-class: a move that crosses one is named as
> copy-then-delete before Enter, and a whole-dataset move upgrades to
> send/receive — snapshot first, `send -R`, `receive -u`. The `-u` is
> deliberate: on Linux, mounting is root's even when the verbs are
> delegated, and a bare receive lands the data, fails the mount, and returns
> an exit code that lies about a transfer that worked.
>
> Dataset verbs run under your own `zfs allow` delegation. Mount/unmount are
> the one sudo, and the app shows the exact one-line sudoers grant instead
> of asking for blanket root. Every mutation — snapshot, rollback, destroy,
> the gated deletes — is a plan you read before it runs, and every command
> pastes into your terminal unchanged.
>
> Native Mac app, SSH-only, no daemon, GPL-3.0. Beta is free (signed dmg);
> 1.0 will be $29, but a real issue filed during the beta earns a free 1.0
> license. Looking for pools and userlands unlike mine.
>
> Site: <url> · Repo: <url> · Demo: <url>

### Draft C — Discord / short form

> I built pālana — a native Mac dual-pane file manager where either pane is
> any host in your ssh config, and nothing runs until you've read the exact
> command (rsync, zfs send/receive, deletes gated on visible count checks).
> No daemon, no telemetry, GPL-3.0, free beta. Looking for testers with
> unusual userlands — file a real issue and your 1.0 license is free. <url>
