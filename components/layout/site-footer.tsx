import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Wordmark } from "@/components/ui/wordmark";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-void">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" aria-label={`${site.name} — home`} className="inline-flex">
              <Wordmark />
            </Link>
              <p className="mt-7 max-w-xs font-display text-2xl font-light leading-tight text-bone sm:text-3xl">
              {site.tagline}
            </p>
            <p className="mt-4 text-[0.58rem] uppercase tracking-[0.3em] text-muted">
              {site.supportingName}
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="text-[0.58rem] font-medium uppercase tracking-[0.32em] text-moss">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="text-[0.58rem] font-medium uppercase tracking-[0.32em] text-moss">
              Get in touch
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <a
                  href="mailto:rovinocampoo@gmail.com"
                  className="transition-colors hover:text-bone"
                >
                  rovinocampoo@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+639562268180"
                  className="transition-colors hover:text-bone"
                >
                  0956 226 8180
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kuroshoots_/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-bone"
                >
                  Instagram ↗
                </a>
              </li>
              <li>
                <a
                  href="https://rovinocampo.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-bone"
                >
                  Developer portfolio ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.58rem] uppercase tracking-[0.28em] text-muted">
            © KURO SHOOTS
          </p>
          <p className="text-[0.58rem] uppercase tracking-[0.28em] text-muted">
            Photography / Retouching / Color grading
          </p>
        </div>
      </Container>
    </footer>
  );
}
