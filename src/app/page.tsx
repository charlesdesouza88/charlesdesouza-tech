import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Waveform from "@/components/Waveform";
import PortraitVideo from "@/components/PortraitVideo";
import AnimatedBar from "@/components/AnimatedBar";
import {
  profile,
  socials,
  featuredProjects,
  moreProjects,
  hackathons,
  experience,
  facets,
  skills,
  education,
} from "@/lib/content";

const bridgeColor: Record<string, string> = {
  sound: "var(--resonance)",
  kitchen: "var(--ember)",
  code: "var(--muted)",
  teaching: "var(--resonance)",
};
const bridgeLabel: Record<string, string> = {
  sound: "music × code",
  kitchen: "kitchen × code",
  code: "engineering",
  teaching: "teaching × code",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-ember" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="grain relative">
      <div className="scan-line" aria-hidden="true" />
      <Nav />

      <main id="main" className="relative z-10">
        <Hero />

        {/* ── METHOD ─────────────────────────────────────────── */}
        <section
          id="method"
          className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
        >
          <div className="grid gap-14 md:grid-cols-[1fr_0.8fr] md:items-center">
            <Reveal>
              <SectionLabel>The method</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] font-light leading-[1.05] tracking-[-0.01em]">
                Take it apart.
                <br />
                Understand it.
                <br />
                <span className="italic text-ember">Build it back better.</span>
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
                <p>
                  I&apos;ve been taking things apart and putting them back
                  together since I was a kid — curiosity is the engine.
                  Twenty-five years in professional kitchens taught me to run a
                  system under pressure:{" "}
                  <span className="text-ink">mise en place</span>, then execute,
                  then refine. It turns out software works exactly the same way.
                </p>
                <p>
                  So I taught myself to build. First tools to fix the problems I
                  lived in the kitchen, then web apps for founders, then
                  decentralized apps at hackathons from Harvard to Solana. Today
                  I lead product and mentor English students in Brazil — building
                  the tools my own classroom runs on. Still driven by the same
                  thing: a love of learning and a need to make things people
                  actually want to use.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-8 border-t border-[var(--line)] pt-8">
                {[
                  { n: "25", l: "years of craft" },
                  { n: "4", l: "hackathons" },
                  { n: "EN·PT", l: "bilingual" },
                ].map((s) => (
                  <div key={s.l} className="border-l border-ember/40 pl-4">
                    <div className="font-display text-2xl text-ink">{s.n}</div>
                    <div className="eyebrow mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120} variant="scale">
              <figure className="relative mx-auto max-w-sm">
                <div className="frame-glow relative overflow-hidden rounded-2xl border border-[var(--line-strong)]">
                  <PortraitVideo alt="Charles DeSouza — portrait" />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 55%, color-mix(in srgb, var(--bg) 90%, transparent))",
                    }}
                  />
                </div>
                <figcaption className="eyebrow mt-4 text-center">
                  Charles DeSouza — {profile.locationLong}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Waveform color="var(--resonance)" opacity={0.4} className="h-8" />
        </div>

        {/* ── WORK ───────────────────────────────────────────── */}
        <section
          id="work"
          className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
        >
          <Reveal>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="max-w-2xl font-display text-[clamp(2rem,5vw,3.4rem)] font-light leading-[1.05]">
              The proof is in the projects.
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Three flagships where my worlds overlap — a school ecosystem
              built by its teacher, kitchen software written by the chef who
              needed it, a music marketplace on-chain.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((p, idx) => (
              <Reveal
                key={p.name}
                delay={idx * 90}
                variant="scale"
                className="edge-glow group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-surface/60"
              >
                {p.image && (
                  <Link
                    href={`/work/${p.slug}`}
                    className="relative aspect-[16/10] overflow-hidden border-b border-[var(--line)]"
                  >
                    <Image
                      src={p.image}
                      alt={`${p.name} preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 50%, color-mix(in srgb, var(--surface) 75%, transparent))",
                      }}
                    />
                  </Link>
                )}

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span
                      className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em]"
                      style={{ color: bridgeColor[p.bridge ?? "code"] }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          background: bridgeColor[p.bridge ?? "code"],
                        }}
                      />
                      {bridgeLabel[p.bridge ?? "code"]}
                    </span>
                    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wide text-faint">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${p.name} — live demo (opens in new tab)`}
                          className="-m-2 p-2 text-resonance transition-colors hover:text-ink"
                        >
                          Live ↗
                        </a>
                      )}
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${p.name} — source code (opens in new tab)`}
                          className="-m-2 p-2 transition-colors hover:text-ink"
                        >
                          Code ↗
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display text-2xl text-ink">
                    {p.slug ? (
                      <Link
                        href={`/work/${p.slug}`}
                        className="transition-colors hover:text-ember"
                      >
                        {p.name}
                      </Link>
                    ) : (
                      p.name
                    )}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wide text-faint">
                    {p.kind}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {p.blurb}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {p.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {p.slug && (
                    <Link
                      href={`/work/${p.slug}`}
                      className="mt-6 inline-flex font-mono text-sm text-ember transition-colors hover:text-ink"
                    >
                      Read case study →
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <p className="eyebrow mb-6">More builds</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {moreProjects.map((p) => (
                <div
                  key={p.name}
                  className="edge-glow flex flex-col rounded-xl border border-[var(--line)] bg-surface/40 p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl text-ink">{p.name}</h3>
                      <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-faint">
                        {bridgeLabel[p.bridge ?? "code"]} · {p.kind}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-faint">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-resonance transition-colors hover:text-ink"
                        >
                          Live ↗
                        </a>
                      )}
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="transition-colors hover:text-ink"
                        >
                          Code ↗
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-14" variant="fade">
            <figure className="frame-glow relative overflow-hidden rounded-2xl border border-[var(--line-strong)]">
              <Image
                src="/img/hackathon.jpg"
                alt="A packed room of builders at the EasyA × Algorand hackathon, Charles among them"
                width={1600}
                height={900}
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="h-auto w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 45%, color-mix(in srgb, var(--bg) 88%, transparent))",
                }}
              />
              <figcaption className="absolute bottom-4 left-5 right-5 flex flex-wrap items-baseline gap-x-3">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink">
                  EasyA × Algorand Hackathon
                </span>
                <span className="font-mono text-[11px] text-muted">
                  in the room, building
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="eyebrow">Hackathons</span>
            {hackathons.map((h) => (
              <span key={h} className="font-mono text-sm text-muted">
                {h}
              </span>
            ))}
            <a
              href="https://github.com/charlesdesouza88"
              target="_blank"
              rel="noreferrer"
              className="ml-auto font-mono text-sm text-ember hover:underline"
            >
              More on GitHub ↗
            </a>
          </Reveal>
        </section>

        {/* ── EXPERIENCE ─────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-14 md:grid-cols-[0.55fr_1fr]">
            <Reveal>
              <SectionLabel>Trajectory</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] font-light leading-[1.05]">
                Full-stack roots.
                <br />
                Product focus.
              </h2>
              <p className="mt-6 text-muted">
                From shipping apps to leading product — each role sharpened how
                I scope, build, and deliver.
              </p>
            </Reveal>

            <div className="md:pt-2">
              {experience.map((r, idx) => (
                <Reveal
                  key={r.title + r.org}
                  delay={idx * 80}
                  variant="left"
                  className="relative border-l border-[var(--line)] pb-10 pl-7 last:pb-0"
                >
                  <span className="timeline-dot-in absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-ember shadow-[0_0_12px_color-mix(in_srgb,var(--ember)_60%,transparent)]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-lg text-ink">
                      {r.title} <span className="text-muted">· {r.org}</span>
                    </h3>
                    <span className="font-mono text-xs text-faint">
                      {r.period}
                    </span>
                  </div>
                  <p className="mt-0.5 font-mono text-xs uppercase tracking-wide text-faint">
                    {r.place}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {r.points.map((pt) => (
                      <li
                        key={pt}
                        className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-[var(--faint)]"
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FACETS ─────────────────────────────────────────── */}
        <section
          id="facets"
          className="scroll-mt-24 border-y border-[var(--line)] bg-bg2/60 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="text-center">
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-ember" />
                <span className="eyebrow">Same person, three modes</span>
                <span className="h-px w-8 bg-ember" />
              </div>
              <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] font-light leading-[1.05]">
                Choose your champion.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted">
                Half in jest, fully true. The same instincts run through all
                three — curiosity, composition, and grace under pressure.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {facets.map((f, idx) => (
                <Reveal
                  key={f.key}
                  delay={idx * 90}
                  variant="scale"
                  className="edge-glow group flex flex-col rounded-2xl border border-[var(--line)] bg-surface/70 p-7 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl text-ember">
                      {f.glyph}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                      {f.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {f.line}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {f.stats.map((s) => (
                      <div key={s.label}>
                        <div className="flex items-center justify-between font-mono text-[11px] text-faint">
                          <span>{s.label}</span>
                          <span>{s.value}/10</span>
                        </div>
                        <AnimatedBar value={s.value} />
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-[var(--line)] pt-4">
                    <p className="eyebrow mb-2">Special abilities</p>
                    <ul className="space-y-1.5">
                      {f.abilities.map((a) => (
                        <li
                          key={a}
                          className="text-xs leading-relaxed text-muted"
                        >
                          <span className="text-ember">◆</span> {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS + EDUCATION ─────────────────────────────── */}
        <section className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-14 md:grid-cols-[1fr_0.7fr]">
            <Reveal>
              <SectionLabel>The toolkit</SectionLabel>
              <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                {skills.map((s, gi) => (
                  <div key={s.group}>
                    <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-ember">
                      {s.group}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {s.items.map((it, ii) => (
                        <Reveal
                          key={it}
                          delay={gi * 40 + ii * 30}
                          variant="fade"
                          as="li"
                          className="rounded-md border border-[var(--line)] px-2.5 py-1 text-sm text-muted transition-colors hover:border-ember/40 hover:text-ink"
                        >
                          {it}
                        </Reveal>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <SectionLabel>Learning never stops</SectionLabel>
              <ul className="space-y-4">
                {education.map((e) => (
                  <li
                    key={e}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-resonance shadow-[0_0_8px_color-mix(in_srgb,var(--resonance)_50%,transparent)]" />
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── CONTACT ────────────────────────────────────────── */}
        <section
          id="contact"
          className="relative scroll-mt-24 overflow-hidden border-t border-[var(--line)] px-5 py-28 sm:px-8 sm:py-36"
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(70% 50% at 50% 100%, color-mix(in srgb, var(--ember) 14%, transparent), transparent 70%), radial-gradient(50% 40% at 80% 20%, color-mix(in srgb, var(--resonance) 8%, transparent), transparent 60%)",
            }}
          />
          <div className="mx-auto max-w-4xl text-center">
            <Reveal className="mb-14" variant="fade">
              <div className="frame-glow relative overflow-hidden rounded-2xl border border-[var(--line-strong)]">
                <Image
                  src="/img/studio.jpg"
                  alt="Charles in black, seated on a couch against a wall of industrial windows"
                  width={864}
                  height={1184}
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="aspect-[3/2] h-auto w-full object-cover object-[center_42%] sm:aspect-[21/9]"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, color-mix(in srgb, var(--bg) 20%, transparent), transparent 30%, transparent 60%, color-mix(in srgb, var(--bg) 82%, transparent))",
                  }}
                />
              </div>
            </Reveal>
            <Reveal>
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-ember" />
                <span className="eyebrow">Let&apos;s talk</span>
                <span className="h-px w-8 bg-ember" />
              </div>
              <h2 className="font-display text-[clamp(2.4rem,7vw,5rem)] font-light leading-[1] tracking-[-0.02em]">
                Let&apos;s build something
                <br />
                <span className="italic text-ember">worth using.</span>
              </h2>
              <p className="mx-auto mt-7 max-w-lg text-muted">
                Open to Creative Technologist, full-stack, and product roles —
                remote or on Cape Cod. If it&apos;s interesting and I get to
                learn, I&apos;m in.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="btn-glow btn-glow-primary rounded-full bg-ember px-7 py-3.5 font-mono text-sm font-medium text-bg"
                >
                  {profile.email}
                </a>
                <a
                  href="/Charles_DeSouza_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-glow btn-glow-ghost rounded-full border border-line-strong px-7 py-3.5 font-mono text-sm text-ink hover:border-ember hover:text-ember"
                >
                  Download résumé ↓
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group font-mono text-sm text-muted transition-colors hover:text-ink"
                  >
                    <span className="text-faint transition-colors group-hover:text-ember">
                      {s.label}/
                    </span>
                    {s.handle}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="border-t border-[var(--line)]">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left">
            <p className="font-mono text-xs text-faint">
              © {new Date().getFullYear()} Charles DeSouza · Composed in Next.js
              on Cape Cod
            </p>
            <p className="eyebrow">One practice · three instruments</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
