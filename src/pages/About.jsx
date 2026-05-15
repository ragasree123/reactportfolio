import React from 'react';

const About = () => {
<<<<<<< HEAD
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
            sharpening my forecasting skills, and open to Frontend Developer
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
=======
  return (
    <section id="about" className="py-20 px-10 bg-white">
      <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
      <p className="max-w-3xl mx-auto text-center text-lg">
        Hi! I’m Ragasree, a Software Engineer and Front-End Developer passionate about building clean, responsive, and user-friendly websites and applications. I love turning ideas into interactive digital products using React, JavaScript, Next.js, and Node.js.

With a professional background at Infosys, I worked on everything from optimizing infrastructure to enhancing user interfaces and resolving complex issues. Now, as a graduate student at UNT, I continue to sharpen my skills in web development, automation, and system design.

When I’m not coding, I’m exploring design trends, learning new technologies, and looking for opportunities to create impactful digital experiences. I’m open to Frontend Developer roles where I can innovate, collaborate, and grow
      </p>
>>>>>>> 9d747945cd50aaabee7fb8cddc5d0a4a4b97ab2b
    </section>
  );
};

export default About;
