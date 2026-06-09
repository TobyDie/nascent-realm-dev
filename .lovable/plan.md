## Answer first: will this hurt UX?

No — it improves it. Auto-muted video is a known dark-pattern hazard: viewers don't realise sound exists and bounce. A small, persistent "🔊 Tap to unmute" badge is the industry-standard pattern (Instagram, Twitter/X, LinkedIn, TikTok web). It:

- removes ambiguity (people often think the video has no audio)
- doesn't block the video (small, corner-anchored, semi-transparent)
- disappears the moment the user engages, so it never nags

The current behaviour is actually slightly worse for UX: tapping the video pauses it and shows controls — users expect tap-to-unmute, not tap-to-pause. We'll fix that too.

## What changes

Single file: `src/components/VideoPlayer.tsx` (used by both /17 and any other page — it's a shared component; behaviour change is global, which is what you want for consistency).

### New interaction model
- Video autoplays muted on scroll-in (unchanged).
- A small pill in the bottom-right shows `🔊 Tap to unmute` while muted.
- First tap → unmutes and keeps playing (no pause), pill swaps to `🔇 Tap to mute`.
- Second tap → mutes again, pill swaps back. Native controls stay hidden so the pill remains the single, clean affordance.
- Pill auto-fades after ~4s of no interaction once the user has unmuted once, so it doesn't sit on top of the video forever. Reappears on hover/tap.
- Scroll-out still pauses; scroll-in resumes (unchanged), preserving the user's mute/unmute choice.

### Visual
- Pill: ~28px tall, rounded-full, `bg-black/55`, `text-white`, 12–13px, 8px inset from bottom-right, subtle backdrop-blur, drop-shadow.
- Mobile: same size, easy thumb target (full video surface is tappable too).
- Respects `prefers-reduced-motion` for the fade.

### Accessibility
- Pill is a real `<button>` with `aria-pressed` reflecting mute state and `aria-label="Unmute video" / "Mute video"`.
- Whole video surface remains clickable as a secondary toggle target.

## Out of scope
- No change to autoplay, lazy HLS loading, IntersectionObserver pause/resume, or poster behaviour.
- No per-page overrides; the affordance is universal for any `<VideoPlayer autoplay />`.
- No global volume memory across videos (keep it simple; each player tracks its own state).

## Technical notes
- Replace the `interacted` + `handleTap` pause-and-show-controls flow with a `muted` state toggle.
- Drop `controls={interacted}` — keep `controls={false}` always; the pill is the control.
- Keep `muted={autoplay}` as the initial value but drive it from state after mount so toggling works.
- Add a small `useEffect` timer for the auto-fade; clear on hover/focus.
