import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { caseStudies, getCaseStudy } from "@/lib/content";

const bridgeLabel: Record<string, string> = {
  sound: "music × code",
  kitchen: "kitchen × code",
  code: "engineering",
  teaching: "teaching × code",
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.name,
    description: study.summary,
    openGraph: {
      title: `${study.name} — Charles DeSouza`,
      description: study.summary,
      url: `https://charlesdesouza.tech/work/${study.slug}`,
      images: [{ url: study.heroImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.name} — Charles DeSouza`,
      description: study.summary,
      images: [study.heroImage],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const others = caseStudies.filter((c) => c.slug !== study.slug);

  return (
    <div className="grain relative">
      <Nav />
      <main id="main" className="relative z-10">
        <article className="mx-auto max-w-4xl px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-32">
          <Reveal>
            <Link
              href="/#work"
              className="font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-ember"
            >
              ← Selected work
            </Link>

            <p className="eyebrow mt-10">
              {bridgeLabel[study.bridge]} · {study.kind}
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.2rem)] font-light leading-[1.05] tracking-[-0.02em]">
              {study.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {study.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.12em] text-faint">
              <span>
                <span className="text-muted">Role </span>
                {study.role}
              </span>
              <span>
                <span className="text-muted">Period </span>
                {study.period}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {study.live && (
                <a
                  href={study.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-ember px-5 py-2.5 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
                >
                  Live demo ↗
                </a>
              )}
              {study.repo && (
                <a
                  href={study.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[var(--line-strong)] px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-ember hover:text-ember"
                >
                  Source ↗
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={80} className="mt-14">
            <figure className="overflow-hidden rounded-2xl border border-[var(--line-strong)]">
              <Image
                src={study.heroImage}
                alt={study.heroAlt}
                width={1280}
                height={800}
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="h-auto w-full object-cover object-top"
              />
            </figure>
          </Reveal>

          <Reveal className="mt-16">
            <h2 className="font-display text-3xl font-light text-ink">
              The problem
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {study.problem}
            </p>
          </Reveal>

          <Reveal className="mt-14">
            <h2 className="font-display text-3xl font-light text-ink">
              The approach
            </h2>
            <ol className="mt-6 space-y-4">
              {study.approach.map((step, i) => (
                <li key={step} className="flex gap-4 text-muted">
                  <span className="font-mono text-sm text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-relaxed sm:text-lg">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="mt-14">
            <h2 className="font-display text-3xl font-light text-ink">
              The outcome
            </h2>
            <ul className="mt-6 space-y-3">
              {study.outcome.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-relaxed text-muted sm:text-lg"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-14">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-ember">
              Stack
            </h2>
            <ul className="flex flex-wrap gap-2">
              {study.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-[var(--line)] px-3 py-1.5 font-mono text-xs text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          {others.length > 0 && (
            <Reveal className="mt-24 border-t border-[var(--line)] pt-14">
              <p className="eyebrow mb-6">More case studies</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/work/${o.slug}`}
                    className="group rounded-2xl border border-[var(--line)] p-5 transition-colors hover:border-[var(--line-strong)]"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                      {bridgeLabel[o.bridge]}
                    </p>
                    <h3 className="mt-2 font-display text-xl text-ink transition-colors group-hover:text-ember">
                      {o.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">
                      {o.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </Reveal>
          )}
        </article>

        <footer className="border-t border-[var(--line)]">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left">
            <p className="font-mono text-xs text-faint">
              © {new Date().getFullYear()} Charles DeSouza · Composed in Next.js
              on Cape Cod
            </p>
            <Link
              href="/#contact"
              className="eyebrow transition-colors hover:text-ember"
            >
              Let&apos;s talk →
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
