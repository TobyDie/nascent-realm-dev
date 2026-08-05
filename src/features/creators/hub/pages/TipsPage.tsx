import { DONTS, DOS, IDEAS, IDEAS_INTRO } from "../../copy/hub";
import { Prose } from "../Prose";
import { PageFooter, PageHead, RuleColumn, Section } from "../primitives";

/** /creators/hub/tips — what to film next, and what works on camera. */
export function TipsPage() {
  return (
    <>
      <PageHead title="Tips & advice" lede={[IDEAS_INTRO]} />

      <Section title="Content ideas">
        <Prose>
          <ul>
            {IDEAS.map((idea) => (
              <li key={idea}>{idea}</li>
            ))}
          </ul>
        </Prose>
      </Section>

      <Section id="dos" title="Do & Don'ts">
        <div className="grid grid-cols-1 gap-4 cs:grid-cols-2">
          <RuleColumn title="Do" items={DOS} tone="do" />
          <RuleColumn title="Don't" items={DONTS} tone="dont" />
        </div>
      </Section>

      <PageFooter current="tips" />
    </>
  );
}
