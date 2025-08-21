import {
  FaLinkedin,
  FaFilePdf,
  FaEnvelope,
  FaUser,
  FaFolderOpen,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 scroll-smooth font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Headshot */}
          <motion.img
            variants={fadeUp}
            src={`${import.meta.env.BASE_URL}ElisaDuan_photo.jpg`} // or avatar.jpg
            alt="Elisa Duan headshot"
            className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover ring-2 ring-gray-200 shadow-md mb-6"
          />

          {/* Name */}
          <motion.h1 variants={fadeUp} className="text-5xl font-extrabold">
            Elisa Duan
          </motion.h1>

          {/* Title */}
          <motion.h2 variants={fadeUp} className="text-2xl text-gray-600 mt-2 mb-6">
            Industrial Engineering &amp; Data Science Student
          </motion.h2>

          {/* Intro */}
          <motion.p variants={fadeUp} className="max-w-2xl text-lg mb-10">
            I’m passionate about applying data science to solve real-world
            problems in operations and supply chain, technology, and finance.
            This portfolio showcases my projects, experiences, and a bit about me!
          </motion.p>

          {/* Icons + labels */}
          <motion.div variants={fadeUp} className="flex space-x-10 text-4xl">
            {[
              { href: "#projects", label: "Projects", Icon: FaFolderOpen },
              {
                href: "https://www.linkedin.com/in/elisa-duan-095534292",
                label: "LinkedIn",
                Icon: FaLinkedin,
                ext: true,
              },
              {
                href: `${import.meta.env.BASE_URL}resume.pdf`,
                label: "Resume",
                Icon: FaFilePdf,
                ext: true,
              },
              {
                href: "mailto:elisaduan2027@u.northwestern.edu",
                label: "Email",
                Icon: FaEnvelope,
              },
              { href: "#about", label: "About Me", Icon: FaUser },
            ].map(({ href, label, Icon, ext }) => (
              <div key={label} className="flex flex-col items-center space-y-1">
                <a
                  href={href}
                  {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="hover:text-blue-600 transition-colors"
                  aria-label={label}
                >
                  <Icon />
                </a>
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
<section id="about" className="px-6 py-20 bg-white">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    {/* Text */}
    <div className="md:w-2/3 space-y-6 text-center md:text-left">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="text-lg text-gray-700 leading-relaxed">
    I’m a junior at Northwestern University studying Industrial Engineering and Data Science, 
    with a certificate in Managerial Analytics from the Kellogg School of Management.
     My experience spans database design, workflow automation, and data-driven decision-making
      across research and internships. Over the course of my journey, I’ve built expertise in
      software and languages such as SQL, Python, R, MATLAB, HTML, CSS, and JavaScript, as well 
      as platforms like Supabase, Looker Studio, and Microsoft Office. These skills have enabled 
      me to analyze data, streamline processes, and design interactive dashboards. 
    I’m always happy to connect, please don’t hesitate to reach out!
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Outside of academics, I enjoy learning more about myself and 
        stepping out of my comfort zone through creative outlets. 
        Dancing and swimming are two of my favorite activities, 
        as they keep me active. 
        I also love listening to music and discovering new genres and artists. 
        Beyond that, I value spending time with friends and family, 
        whether it’s exploring new restaurants and shops, traveling, 
        or simply relaxing and having meaningful conversations together.
      </p>
    </div>

    {/* Image */}
    <div className="md:w-1/3 flex justify-center">
      <img
        src={`${import.meta.env.BASE_URL}ElisaDuan_photo.jpg`} // replace with your file path
        alt="Elisa Duan"
        className="rounded-2xl shadow-lg w-64 h-64 object-cover"
      />
    </div>
  </div>
</section>


      {/* Projects */}
      <section id="projects" className="px-6 py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Seismogram Digitization */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2"> Bringing Seismological Records to the Digital Age </h3>
              <p className="text-gray-700 mb-4">
                Designed and deployed a relational PostgreSQL database in 
                Supabase with a web interface (HTML, CSS, JS) hosted on GitHub Pages 
                to digitize, store, and query thousands of historical seismic records. 
                Implemented data validation and FOLDS metadata standards to improve 
                accessibility for researchers.
              </p>
            </div>
            <a
              href="https://github.com/elisaduan2005/seismogram-digitization"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors mt-4"
            >
              <FaGithub className="text-lg" />
              <span className="text-sm">View on GitHub</span>
            </a>
          </div>

          {/* Workflow Automation @ MATTER */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
              <p className="text-gray-700 mb-4">
                Automated operational reporting by developing end-to-end data pipelines 
                with Google Apps Script, Zapier, etc., and integrated sources including room bookings, 
                visitor activity, and keycard access data. Built interactive Looker Studio 
                dashboards that provided leadership with real-time visibility into space 
                utilization and significantly reduced manual reporting effort.
              </p>
            </div>
            {/* No public repo link for company work */}
          </div>

          {/* Chicago Crime Analysis */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between md:col-span-2">
            <div>
              <h3 className="text-xl font-semibold mb-2">Chicago Crime Analysis</h3>
              <p className="text-gray-700 mb-4">
                Analyzed three up-to-date Chicago crime datasets using Python and Pandas 
                to identify spatial, demographic, and temporal crime trends. 
                Created visualizations highlighting high-crime neighborhoods, 
                demographic disparities, and time-based patterns, generating insights 
                to support public safety research and policy discussions.
              </p>
            </div>
            <a
              href="https://github.com/elisaduan2005/chicago-crime-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors mt-4"
            >
              <FaGithub className="text-lg" />
              <span className="text-sm">View on GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
