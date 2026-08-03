/**
 * `{{TBA}}` marks a decision that is still open (payout window, legal entity, draw
 * mechanic). <RichText> swaps it for the muted <TodoChip>, so copy files stay plain
 * strings and stay editable without touching JSX.
 *
 * Its own module so both the copy files and the renderer can import it without a
 * cycle.
 */
export const TBA = "{{TBA}}";
