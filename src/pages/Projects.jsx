import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCogs } from 'react-icons/fa';

const Projects = () => {
  const projectList = [
    {
      name: 'Olist E-commerce Analytics',
      subtitle: 'End-to-End Business Intelligence Project',
      number: '01',
      description:
        'A real-world e-commerce analytics solution analyzing 100,000+ customer orders to uncover delivery performance trends, customer satisfaction drivers, and revenue insights through dashboards and KPI reporting.',
      tech: {
        Languages: ['Python', 'SQL'],
        Analytics: ['KPI Reporting', 'EDA', 'Trend Analysis'],
        Tools: ['Streamlit', 'Microsoft Excel', 'Jupyter'],
      },
      github: 'https://github.com/ragasree123/olist-ecommerce-analysis',
      live: 'https://olist-ecommerce-analysis-nk9hu3towfh2i2thukjhfz.streamlit.app/',
      image: '/project1.png',
    },
    {
      name: 'Personal Portfolio Website',
      subtitle: 'Data Analytics & Professional Branding Platform',
      number: '02',
      description:
        'A portfolio site highlighting end-to-end projects across SQL, Python, Power BI, Tableau, and data visualization — focused on intuitive navigation, modern UI, and professional storytelling.',
      tech: {
        Frontend: ['React', 'Tailwind'],
        Languages: ['HTML', 'CSS', 'JavaScript'],
        Tools: ['Git', 'Netlify'],
      },
      github: 'https://github.com/ragasree123/reactportfolio',
      live: 'https://ragasree.netlify.app/',
      image: '/project2.png',
    },
    {
      name: 'Interactive Data Visualization Dashboard',
      subtitle: 'D3.js Analytics Project',
      number: '03',
      description:
        'Responsive, interactive business dashboards built to transform raw datasets into insightful visualizations — pie charts, area charts, bar charts, and trend-based reporting views.',
      tech: {
        Visualization: ['D3.js'],
        Languages: ['JavaScript', 'HTML', 'CSS'],
        Analytics: ['Charts', 'Trend Reporting'],
      },
      github: 'https://github.com/ragasree123/DataVisualisation',
      live: 'https://tejvink.github.io/SDV_diabetes_dashboard/',
      image: '/project3.png',
    },
    {
      name: 'Heuristic Puzzle Forge',
      subtitle: 'Interactive UI/UX Learning Game',
      number: '04',
      description:
        'A gaming website for students and developers to learn UI/UX design through play. Blends strategy, skill development, and the satisfaction of discovery with curriculum-grade content about interface design principles.',
      tech: {
        Frontend: ['React', 'Tailwind'],
        Libraries: ['React DnD', 'React Hooks', 'Confetti'],
        Languages: ['HTML', 'CSS', 'JavaScript'],
      },
      github: 'https://github.com/prakashmariappan/callofcreative',
      live: 'https://heuristicpuzzleforge.netlify.app/',
      image: '/project4.png',
    },
  ];

  // Soft, tasteful color schemes for each category — keeping the elegant feel
  const categoryStyles = {
    Frontend: 'bg-[#EAE3F5] text-[#6B4FA0] ring-1 ring-[#D7CAEB]',
    Backend: 'bg-[#E3F1E5] text-[#3F7A4A] ring-1 ring-[#CDE5D3]',
    Languages: 'bg-[#FBEDD6] text-[#8E6F3F] ring-1 ring-[#F1DDB7]',
    Libraries: 'bg-[#E3ECF6] text-[#3D5C84] ring-1 ring-[#CCDCEC]',
    Tools: 'bg-[#F2E6E0] text-[#8A5A45] ring-1 ring-[#E5D2C8]',
    'AI/ML': 'bg-[#EAE3F5] text-[#6B4FA0] ring-1 ring-[#D7CAEB]',
    Cloud: 'bg-[#E0EBF6] text-[#3D6FA1] ring-1 ring-[#CADBED]',
    Analytics: 'bg-[#E3F1E5] text-[#3F7A4A] ring-1 ring-[#CDE5D3]',
    Visualization: 'bg-[#F5E3E8] text-[#9A4A66] ring-1 ring-[#ECCBD4]',
  };

  return (
    <section
      id="projects"
      className="section-padding bg-ivory-50 border-t border-ink/5"
    >
      <div className="container-wide">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="gold-rule" />
            <span className="eyebrow">03 &mdash; Selected Work</span>
            <span className="gold-rule" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Recent <span className="italic">Projects</span>
          </h2>
        </div>

        <div className="space-y-24">
          {projectList.map((project, index) => {
            const reverse = index % 2 === 1;
            const primaryLink = project.live || project.github;
            return (
              <article
                key={index}
                className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${
                  reverse ? 'md:[direction:rtl]' : ''
                }`}
              >
                {/* Image */}
                <div className="md:col-span-7 [direction:ltr]">
                  <a
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group overflow-hidden bg-ink-300"
                  >
                    <div className="absolute -top-3 -left-3 w-full h-full border border-gold/30 group-hover:-top-2 group-hover:-left-2 transition-all duration-500" />
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
                    </div>
                  </a>
                </div>

                {/* Content */}
                <div className="md:col-span-5 [direction:ltr]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-serif italic text-gold text-lg">
                      {project.number}
                    </span>
                    <span className="h-px flex-1 bg-ink/15" />
                  </div>

                  <h3 className="font-serif text-3xl text-ink mb-2 leading-tight">
                    {project.name}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm uppercase tracking-[0.15em] text-ink-500 mb-5">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="text-ink-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies Used — categorized pills */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <FaCogs className="text-ink-700" size={14} />
                      <span className="text-sm font-semibold text-ink">
                        Technologies Used:
                      </span>
                    </div>

                    <div className="space-y-3">
                      {Object.entries(project.tech).map(([category, items]) => (
                        <div
                          key={category}
                          className="flex flex-wrap items-center gap-2"
                        >
                          <span className="text-sm font-medium text-ink-700 mr-1 min-w-[100px]">
                            {category}:
                          </span>
                          {items.map((item, i) => (
                            <span
                              key={i}
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                categoryStyles[category] ||
                                'bg-ink-300/30 text-ink-700 ring-1 ring-ink/10'
                              }`}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-ink-700 hover:text-gold transition-colors duration-300"
                    >
                      <FaGithub size={16} />
                      <span>Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-ink-700 hover:text-gold transition-colors duration-300"
                      >
                        <FaExternalLinkAlt size={14} />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
