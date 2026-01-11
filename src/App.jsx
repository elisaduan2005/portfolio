// App.jsx
import {
  FaLinkedin,
  FaFilePdf,
  FaEnvelope,
  FaUser,
  FaFolderOpen,
  FaGithub,
  FaCode,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";
import { SiR, SiSupabase, SiTableau, SiHubspot } from "react-icons/si";
import { motion } from "framer-motion";

// --------- Animation helpers ---------
const ImgIcon = ({ name, className = "" }) => (
  <img
    src={`${import.meta.env.BASE_URL}icons/${name}`}
    alt={name.replace(/\.(svg|png)$/i, "")}
    className={`h-8 w-8 md:h-10 md:w-10 ${className}`}
    loading="lazy"
    decoding="async"
  />
);

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatLoop = {
  animate: {
    y: [0, -6, 0],
    rotate: [0, 1.5, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { delayChildren: 0.08, staggerChildren: 0.14 } },
};

const hoverPop = {
  whileHover: {
    y: -6,
    scale: 1.1,
    transition: { type: "spring", stiffness: 360, damping: 16 },
  },
  whileTap: { scale: 0.95 },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const Reveal = ({ children }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat text-gray-900 scroll-smooth font-sans"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}background.jpg)` }}
    >
      <div className="min-h-[100svh] md:min-h-screen bg-white/20 md:bg-white/40">

        {/* ================= HERO ================= */}
        <section className="relative flex flex-col items-center justify-center min-h-[100svh] md:min-h-screen text-center px-4 sm:px-6">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.img
              variants={fadeUp}
              {...floatLoop}
              src={`${import.meta.env.BASE_URL}ElisaDuan_photo.jpg`}
              alt="Elisa Duan headshot"
              className="h-28 w-28 md:h-40 md:w-40 rounded-full object-cover ring-2 ring-gray-200 shadow-md mb-6 mx-auto"
            />

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold">
              Elisa Duan
            </motion.h1>

            <motion.h2 variants={fadeUp} className="text-lg md:text-2xl text-gray-700 mt-6 mb-6">
              Industrial Engineering &amp; Data Science @ Northwestern University
            </motion.h2>

            <motion.p variants={fadeUp} className="max-w-2xl text-base md:text-lg mb-10 mx-auto">
              I love turning data into decisions across operations, tech, and finance.
              Explore projects I’ve built, skills I’m growing, and a bit about me!
            </motion.p>

            <motion.div variants={fadeUp} className="flex justify-center gap-6 md:gap-12 flex-wrap text-3xl md:text-4xl">
              {[
                { href: "#projects", label: "Projects", Icon: FaFolderOpen },
                { href: "#skills", label: "Skills", Icon: FaCode },
                {
                  href: "https://www.linkedin.com/in/elisa-duan-095534292",
                  label: "LinkedIn",
                  Icon: FaLinkedin,
                  ext: true,
                },
                {
                  href: `${import.meta.env.BASE_URL}resume_updated.pdf`,
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
                  <motion.a
                    href={href}
                    {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    {...hoverPop}
                    className="hover:text-blue-600 transition-colors"
                  >
                    <Icon />
                  </motion.a>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ================= SKILLS ================= */}
        <section
          id="skills"
          className="px-4 sm:px-6 py-16 md:py-20 bg-gradient-to-r from-white/60 via-white/40 to-white/30 backdrop-blur-sm rounded-2xl shadow-md max-w-7xl mx-auto"
        >
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Skills</h2>
          </Reveal>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
            <FaPython className="text-4xl text-blue-500" />
            <SiR className="text-4xl text-sky-600" />
            <FaDatabase className="text-4xl text-green-600" />
            <FaHtml5 className="text-4xl text-orange-600" />
            <FaCss3Alt className="text-4xl text-blue-600" />
            <FaJsSquare className="text-4xl text-yellow-500" />
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="px-4 sm:px-6 py-16 md:py-20">
          <motion.div
            className="max-w-7xl mx-auto bg-gradient-to-r from-white/65 via-white/45 to-white/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-md"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Projects</h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

              {/* 1. Seismology */}
              <Reveal>
                <motion.div className="rounded-2xl p-6 bg-white/75 backdrop-blur border border-white/50 shadow-sm hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">
                    Bringing Seismological Records to the Digital Age
                  </h3>
                  <h4 className="font-semibold">Summary</h4>
                  <p className="mb-2">
                    Built a relational PostgreSQL database in Supabase with a web interface to digitize
                    thousands of historical seismic records.
                  </p>
                  <h4 className="font-semibold">Methods</h4>
                  <p className="mb-2">
                    Designed schema linking networks, stations, and records; applied FOLDS metadata standards.
                  </p>
                  <h4 className="font-semibold">Impact</h4>
                  <p className="mb-2">
                    Improved accessibility of analog seismic data for researchers and institutions.
                  </p>
                  <a
                    href="https://github.com/elisaduan2005/supabase-form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-blue-600"
                  >
                    <FaGithub /> View on GitHub
                  </a>
                </motion.div>
              </Reveal>

              {/* 2. Adidas */}
              <Reveal>
                <motion.div className="rounded-2xl p-6 bg-white/75 backdrop-blur border border-white/50 shadow-sm hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">Adidas Sales Analysis</h3>
                  <h4 className="font-semibold">Summary</h4>
                  <p className="mb-2">
                    Performed exploratory analysis to uncover sales and profitability trends across regions and channels.
                  </p>
                  <h4 className="font-semibold">Methods</h4>
                  <p className="mb-2">
                    Cleaned data with Python (Pandas, NumPy); calculated KPIs including revenue, profit, and margins;
                    visualized patterns by geography and sales method.
                  </p>
                  <h4 className="font-semibold">Impact</h4>
                  <p className="mb-2">
                    Produced actionable insights to guide inventory and marketing strategy decisions.
                  </p>
                  <a
                    href="https://github.com/elisaduan2005?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-blue-600"
                  >
                    <FaGithub /> View on GitHub
                  </a>
                </motion.div>
              </Reveal>

              {/* 3. LightGBM */}
              <Reveal>
                <motion.div className="md:col-span-2 rounded-2xl p-6 bg-white/75 backdrop-blur border border-white/50 shadow-sm hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">
                    Southern California Housing Price Prediction (CRMLS)
                  </h3>
                  <h4 className="font-semibold">Summary</h4>
                  <p className="mb-2">
                    Built predictive models to estimate housing prices using Southern California MLS data.
                  </p>
                  <h4 className="font-semibold">Methods</h4>
                  <p className="mb-2">
                    Developed LightGBM models and compared performance using R², MAPE, and MdAPE.
                  </p>
                  <h4 className="font-semibold">Impact</h4>
                  <p className="mb-2">
                    Enabled informed model selection through validated performance comparisons.
                  </p>
                </motion.div>
              </Reveal>

              {/* 4. Chicago Crime */}
              <Reveal>
                <motion.div className="md:col-span-2 rounded-2xl p-6 bg-white/75 backdrop-blur border border-white/50 shadow-sm hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">Chicago Crime Analysis</h3>
                  <h4 className="font-semibold">Summary</h4>
                  <p className="mb-2">
                    Analyzed crime data to identify spatial, demographic, and temporal patterns.
                  </p>
                  <h4 className="font-semibold">Methods</h4>
                  <p className="mb-2">
                    Data cleaning, aggregation, and visualization using Python and Matplotlib.
                  </p>
                  <h4 className="font-semibold">Impact</h4>
                  <p className="mb-2">
                    Highlighted disparities to support public policy discussions.
                  </p>
                </motion.div>
              </Reveal>

              {/* 5. Workflow Automation */}
              <Reveal>
                <motion.div className="rounded-2xl p-6 bg-white/75 backdrop-blur border border-white/50 shadow-sm hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">Workflow Automation</h3>
                  <h4 className="font-semibold">Summary</h4>
                  <p className="mb-2">
                    Automated reporting pipelines for operational dashboards.
                  </p>
                  <h4 className="font-semibold">Methods</h4>
                  <p className="mb-2">
                    Google Apps Script, Zapier, Looker Studio.
                  </p>
                  <h4 className="font-semibold">Impact</h4>
                  <p className="mb-2">
                    Reduced manual reporting and enabled real-time insights.
                  </p>
                </motion.div>
              </Reveal>

            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
