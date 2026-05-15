import React from 'react';

const About = () => {
  const stats = [
    { value: '6+', label: 'Years in Analytics' },
    { value: '35+', label: 'Reports Automated' },
    { value: '3', label: 'Industries Served' },
    { value: 'MS', label: 'Computer Science' },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-ivory-50 border-t border-ink/5"
    >
      <div className="container-wide grid md:grid-cols-12 gap-12">
        {/* Left — heading */}
        <div className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-rule" />
              <span className="eyebrow">01 &mdash; About</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
              A practitioner of <span className="italic">clarity</span>.
            </h2>
          </div>
        </div>

        {/* Right — prose */}
        <div className="md:col-span-8 space-y-6 text-ink-700 text-base md:text-lg leading-relaxed">
          <p>
            I&rsquo;m Ragasree &mdash; a data analytics professional with six
            years of experience turning raw, complex data into insights that
            actually move the needle. I&rsquo;m drawn to the analytical
            infrastructure behind every confident decision: KPI dashboards,
            portfolio performance reports, forecasting models, and the
            executive-ready narratives that answer the &ldquo;so what?&rdquo;
            before it&rsquo;s asked.
          </p>
          <p>
            My background spans insurance, healthcare, and technology &mdash;
            where I&rsquo;ve worked end-to-end on analytical workstreams using
            Power BI, Tableau, and SQL to surface risk trends, variance
            drivers, and opportunities that aren&rsquo;t always visible in core
            data. I love the moment when a chart tells a story that changes a
            decision &mdash; whether that&rsquo;s automating thirty-five
            recurring reports to save hundreds of hours, or building a
            self-serve dashboard that empowers teams without an analyst in the
            loop.
          </p>
          <p>
            I completed my Master of Science in Computer Science at the
            University of North Texas and am now seeking my next opportunity.
            Outside of work, I&rsquo;m exploring new visualization techniques,
            sharpening my forecasting skills, and open to data and analytics
            roles where I can innovate, collaborate, and grow.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 mt-4 border-t border-ink/10">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="font-serif text-3xl md:text-4xl text-ink mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-ink-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
