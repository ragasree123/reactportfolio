import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  useEffect(() => {
<<<<<<< HEAD
    AOS.init({ duration: 800, once: true, easing: 'ease-out' });
=======
    AOS.init({ duration: 1000 });
>>>>>>> 9d747945cd50aaabee7fb8cddc5d0a4a4b97ab2b
  }, []);

  const education = [
    {
<<<<<<< HEAD
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
=======
      title: 'Master of Science in Computer Science',
      organization: 'University of North Texas, USA',
      period: 'Aug 2023 - May 2025',
      details: ['Software Development for Artificial Intelligence (AI) — AI application development and deployment.','Big Data and Data Science — Data processing, distributed computing, and data analysis techniques.','Data Visualization — Interactive and meaningful data representation using modern visualization tools.','Software Engineering — Software development life cycle, agile methodologies, testing, and debugging.','Information Retrieval — Search engine algorithms, indexing, and ranking systems.', 'Computer Networks — TCP/IP stack, networking protocols, network security, and communications.','Computer Architecture — Processor design, memory management, and hardware-software optimization.','High Volume Storage & Data Retrieval — Managing and retrieving data from large-scale storage systems.','Fundamentals of Databases — Database design, SQL, normalization, and transaction management.','Design and Analysis of Algorithms — Algorithm design techniques including dynamic programming and complexity analysis.','Introduction to Computer Security — Encryption, authentication, and securing systems against vulnerabilities.'],
    },
    {
      title: 'Bachelor of Engineering in CS',
      organization: 'Sphoorthy Engineering College, Hyderabad, India',
      period: 'Aug 2017 - July 2021',
      details: ['Built a solid foundation in core computer science concepts such as programming, data structures, and algorithms through hands-on coursework and projects.','Gained practical knowledge of operating systems, computer networks, and database management systems, understanding how they function in real-world applications.','Developed hands-on experience in software development using object-oriented programming principles and worked on building web-based applications.','Worked on various academic projects, including website development, data-driven applications, and small-scale software tools that simulated real-world use cases.'],
>>>>>>> 9d747945cd50aaabee7fb8cddc5d0a4a4b97ab2b
    },
  ];

  const experience = [
    {
<<<<<<< HEAD
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
      location: 'Hyderabad,India',
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
      location: 'Hyderabad,India',
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
=======
      title: 'System Engineer | Software Engineer',
      organization: 'Infosys Ltd.Hyderabad,INDIA',
      period: 'Sept 2021 - July 2023',
      details: [' Resolved an average of 20 technical issues per week by applying streamlined support procedures, contributing to high customer satisfaction and aligning solution delivery with evolving stakeholder needs.','Monitored and optimized technical systems to achieve a 15% reduction in system downtime, integrating automated processes and demonstrating principles of scalable framework development.','Collaborated with cross-functional teams to identify process improvements, streamlining workflows and enhancing overall team productivity while adapting solutions to business requirements.','Enhanced user interface experiences with front-end technologies (HTML, CSS, React) to improve user satisfaction and directly support business teams in visualizing solutions.','Ensured smooth deployments through coordinated post-release checkouts, aligning rapid response practices with both immediate and long-term process improvement initiatives.','Identified and escalated system vulnerabilities to improve overall security posture, reflecting an engineering approach to safeguard critical infrastructure.'],
    },
    {
      title: 'Data Analyst Intern',
      organization: 'The SmartBridge',
      period: 'April 2019 - July 2019',
      details: ['Conducted thorough examinations of hospital patient records and integrated diverse healthcare databases using statistical techniques','supporting evidence-based decision-making and resource optimization.','Aggregated and synthesized healthcare datasets to facilitate data-driven decision-making processes that streamlined operational workflows.','Analyzed patient records to identify trends in treatment effectiveness, adapting insights to optimize resource allocation.','Enhanced data validation procedures to improve the accuracy and reliability of medical data, aligning analytical processes with improved healthcare delivery.'],
>>>>>>> 9d747945cd50aaabee7fb8cddc5d0a4a4b97ab2b
    },
  ];

  return (
<<<<<<< HEAD
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
=======
    <section id="experience" className="bg-gray-50 py-16 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">Experience & Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Education */}
        <div>
          <h3 className="text-3xl font-semibold text-purple-600 mb-6 text-center flex items-center gap-2 justify-center">
            <FaGraduationCap /> Education
          </h3>
          <div className="border-l-4 border-purple-500 ml-4 space-y-10">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative pl-8"
                data-aos="fade-up"
              >
                <div className="absolute -left-4 top-2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white"></div>
                <div className="bg-white shadow-md rounded-xl p-6 hover:scale-105 transition-transform">
                  <h4 className="text-xl font-bold text-purple-800">{item.title}</h4>
                  <p className="font-medium">{item.organization}</p>
                  <p className="text-gray-500 mb-3">{item.period}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
>>>>>>> 9d747945cd50aaabee7fb8cddc5d0a4a4b97ab2b
            ))}
          </div>
        </div>

<<<<<<< HEAD
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
=======
        {/* Experience */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-600 mb-6 text-center flex items-center gap-2 justify-center">
            <FaBriefcase /> Experience
          </h3>
          <div className="border-l-4 border-blue-500 ml-4 space-y-10">
            {experience.map((item, index) => (
              <div
                key={index}
                className="relative pl-8"
                data-aos="fade-up"
              >
                <div className="absolute -left-4 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                <div className="bg-white shadow-md rounded-xl p-6 hover:scale-105 transition-transform">
                  <h4 className="text-xl font-bold text-blue-800">{item.title}</h4>
                  <p className="font-medium">{item.organization}</p>
                  <p className="text-gray-500 mb-3">{item.period}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
>>>>>>> 9d747945cd50aaabee7fb8cddc5d0a4a4b97ab2b
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
