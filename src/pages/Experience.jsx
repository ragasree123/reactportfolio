import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const education = [
    {
      title: 'Master of Science in Computer Science',
      organization: 'University of North Texas, USA',
      period: '2023 - 2025',
      details: ['Web Development, AI, Data Structures.', 'Built full-stack & cloud-based projects.'],
    },
    {
      title: 'Bachelor of Engineering in ECE',
      organization: 'JNTU Hyderabad, India',
      period: '2017 - 2021',
      details: ['Focused on electronics and software.', 'Completed major embedded systems projects.'],
    },
  ];

  const experience = [
    {
      title: 'Frontend Developer Intern',
      organization: 'ABC Tech Solutions',
      period: 'May 2023 - Aug 2023',
      details: ['Built UI with React & Tailwind.', 'API integration.', 'Improved performance by 20%.'],
    },
    {
      title: 'Software Engineer Trainee',
      organization: 'Infosys',
      period: 'Jan 2022 - Dec 2022',
      details: ['Reduced downtime by 15%.', 'Reusable components.', 'Agile collaboration.'],
    },
    {
      title: 'Web Developer (Freelance)',
      organization: 'Self-employed',
      period: '2021 - Present',
      details: ['Designed websites.', 'SEO & performance optimization.', 'Landing pages and portfolios.'],
    },
  ];

  return (
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
            ))}
          </div>
        </div>

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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
