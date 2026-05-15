import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' });
  }, []);

  const education = [
    {
      year: '2023 — 2025',
      degree: 'Master of Science',
      field: 'Computer Science',
      organization: 'University of North Texas',
      location: 'Denton, Texas, USA',
      highlights: [
        'Big Data & Data Science',
        'Data Visualization',
        'AI Application Development',
        'Information Retrieval',
        'Design & Analysis of Algorithms',
        'Software Engineering',
      ],
    },
    {
      year: '2017 — 2021',
      degree: 'Bachelor of Engineering',
      field: 'Computer Science',
      organization: 'Jawaharlal Nehru Technological University',
      location: 'Hyderabad, India',
      highlights: [
        'Programming & Data Structures',
        'Operating Systems & Networks',
        'Database Management Systems',
        'Object-Oriented Programming',
        'Web Application Development',
        'Software Engineering Principles',
      ],
    },
  ];

  const experience = [
    {
      title: 'Data Analyst',
      organization: 'The Cigna Group',
      location: 'Texas, USA',
      period: '2024 — Present',
      details: [
        'Improved reporting turnaround time by ~40% by optimizing enterprise analytics workflows using SQL tuning, automated refresh pipelines, and streamlined data transformations across multi-source healthcare datasets.',
        'Increased reporting accuracy by ~30% by strengthening data validation pipelines with reconciliation checks, duplicate detection, metadata standardization, and anomaly review across SQL Server, Teradata, and Oracle.',
        'Increased stakeholder engagement by ~30% through interactive Power BI dashboards with drill-down filters, KPI scorecards, and self-service reporting layers.',
        'Built KPI frameworks to monitor performance trends, anomaly patterns, and leading indicators across datasets.',
        'Delivered executive-ready insights by combining quantitative analysis with business context, improving strategic decision-making.',
        'Engineered near real-time reporting workflows using SQL procedures, Power Query, and automated refresh schedules.',
        'Developed high-volume data processing pipelines using Python, SQL, and ETL tools to support integrated reporting.',
        'Implemented anomaly detection and variance analysis models to help leadership proactively identify operational risks.',
        'Analyzed large-scale insurance and financial datasets to identify performance trends, risk indicators, and customer behavior patterns.',
        'Documented data logic, business rules, and dataset definitions to support reporting consistency and governance.',
        'Supported regulatory and compliance reporting by ensuring data accuracy, traceability, and audit-ready datasets.',
      ],
    },
    {
      title: 'Data Analyst',
      organization: 'Info Tech',
      location: 'Hyderabad, India',
      period: '2021 — 2023',
      details: [
        'Built interactive analytical dashboards in Tableau to visualize user segments, engagement funnels, and recommendation performance metrics — reducing reliance on intuition by ~20%.',
        'Tracked KPIs such as user engagement, conversion rates, customer retention, and funnel performance across digital platforms.',
        'Reduced recurring reporting turnaround time by ~45% by optimizing data pipelines and automating scheduled workflows across Snowflake, Databricks, and AWS.',
        'Improved data accuracy and control effectiveness by ~30% through reconciliation frameworks, duplicate checks, and validation processes.',
        'Increased stakeholder visibility by ~35% via executive Power BI and Tableau dashboards for KPI monitoring and cost analytics.',
        'Supported forecasting and performance modeling using historical trends and statistical techniques.',
        'Engineered near real-time reporting pipelines using Python, Databricks, and automated distribution workflows.',
        'Automated 35+ analytics and reconciliation workflows using Python and Alteryx, saving ~120 annual hours of manual effort.',
        'Conducted post-campaign and A/B test analysis to evaluate performance impact and measure ROI.',
        'Performed customer segmentation and behavior analysis to identify churn risks and engagement patterns.',
      ],
    },
    {
      title: 'Data Analyst',
      organization: 'DXC Technology',
      location: 'Hyderabad, India',
      period: '2019 — 2021',
      details: [
        'Improved query performance by ~35% by optimizing MySQL reporting workloads using joins, CTEs, stored procedures, and window functions.',
        'Increased customer retention insights by ~30% by enhancing analytics models with segmentation, cohort analysis, and behavior trend reporting.',
        'Increased executive engagement by ~30% through Tableau dashboards integrating data from Excel, AWS S3, RDS, Redshift, JSON, and XML.',
        'Built enterprise data marts and reporting layers for product performance, usage metrics, and business KPI tracking.',
        'Engineered automated ETL workflows using Python, Apache Airflow, and SQL pipelines.',
        'Developed large-scale data processing pipelines using Hadoop, Hive, Spark, and Spark SQL.',
        'Implemented anomaly detection and trend analysis across user activity and product metrics.',
        'Automated data cleansing, duplicate resolution, and consistency checks using Python and Pandas — reducing manual validation effort by ~40%.',
        'Integrated reporting observability through refresh monitoring and issue alerts, reducing resolution time by ~35%.',
        'Built A/B testing dashboards and translated statistical outcomes into actionable business recommendations.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="section-padding bg-ivory border-t border-ink/5"
    >
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="gold-rule" />
            <span className="eyebrow">02 &mdash; Journey</span>
            <span className="gold-rule" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Experience &amp; <span className="italic">Education</span>
          </h2>
        </div>

        {/* ============== EDUCATION ============== */}
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-12">
            <FaGraduationCap className="text-gold" size={22} />
            <h3 className="font-serif text-2xl md:text-3xl text-ink">
              Education
            </h3>
            <span className="h-px flex-1 bg-ink/15" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {education.map((edu, idx) => (
              <article
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="relative bg-ivory-50 p-8 md:p-10 group hover:-translate-y-1 transition-transform duration-500"
              >
                {/* Decorative gold corners */}
                <span className="absolute top-0 left-0 w-8 h-px bg-gold" />
                <span className="absolute top-0 left-0 w-px h-8 bg-gold" />
                <span className="absolute bottom-0 right-0 w-8 h-px bg-gold" />
                <span className="absolute bottom-0 right-0 w-px h-8 bg-gold" />

                <p className="font-serif italic text-gold text-sm mb-4 tracking-wide">
                  {edu.year}
                </p>

                <h4 className="font-serif text-2xl text-ink leading-tight mb-1">
                  {edu.degree}
                </h4>
                <p className="font-serif italic text-lg text-ink-600 mb-5">
                  {edu.field}
                </p>

                <div className="pb-5 mb-5 border-b border-ink/10">
                  <p className="text-base text-ink font-medium">
                    {edu.organization}
                  </p>
                  <p className="text-sm text-ink-500 mt-1">{edu.location}</p>
                </div>

                <p className="eyebrow mb-4 text-ink-500">Coursework</p>
                <ul className="grid grid-cols-1 gap-y-2">
                  {edu.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-ink-700"
                    >
                      <span className="text-gold mt-1 flex-shrink-0">&#9830;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* ============== EXPERIENCE ============== */}
        <div>
          <div className="flex items-center gap-4 mb-16">
            <FaBriefcase className="text-gold" size={20} />
            <h3 className="font-serif text-2xl md:text-3xl text-ink">
              Experience
            </h3>
            <span className="h-px flex-1 bg-ink/15" />
          </div>

          {/* Magazine-style CV layout */}
          <div className="space-y-20 md:space-y-24">
            {experience.map((item, idx) => (
              <article
                key={idx}
                data-aos="fade-up"
                className="grid md:grid-cols-12 gap-8 md:gap-12 relative pb-20 md:pb-24 border-b border-ink/10 last:border-b-0 last:pb-0"
              >
                {/* Left meta column */}
                <div className="md:col-span-4 lg:col-span-4">
                  <div className="md:sticky md:top-32">
                    {/* Big year display */}
                    <p className="font-serif text-2xl md:text-3xl text-gold italic leading-tight mb-6">
                      {item.period}
                    </p>

                    <div className="space-y-1">
                      <h4 className="font-serif text-2xl text-ink leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-base text-ink-700">
                        {item.organization}
                      </p>
                      <p className="text-xs uppercase tracking-[0.2em] text-ink-500 pt-2">
                        {item.location}
                      </p>
                    </div>

                    {/* Tiny role number */}
                    <p className="font-serif italic text-ink-300 text-sm mt-8">
                      {String(idx + 1).padStart(2, '0')} /{' '}
                      {String(experience.length).padStart(2, '0')}
                    </p>
                  </div>
                </div>

                {/* Right details column */}
                <div className="md:col-span-8 lg:col-span-8 md:border-l md:border-ink/10 md:pl-10 lg:pl-12">
                  <ul className="space-y-3 text-ink-700 text-sm md:text-[15px] leading-relaxed">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-gold mt-2 flex-shrink-0 font-serif text-xs">
                          &#9670;
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
