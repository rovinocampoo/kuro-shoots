import { Container } from "@/components/layout/container";
import { capabilities } from "@/lib/site";

export function CapabilityStrip() {
  return (
    <section aria-label="Capabilities" className="border-y border-hairline bg-ink/60">
      <Container>
        <ul className="grid grid-cols-2 divide-x divide-hairline sm:grid-cols-4">
          {capabilities.map((capability) => (
            <li
              key={capability.index}
              className="flex flex-col gap-2 px-4 py-6 first:pl-0 last:pr-0 sm:px-6"
            >
              <span className="text-[0.52rem] font-medium tracking-[0.3em] text-moss">
                {capability.index}
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-bone/70">
                {capability.label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
