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
  FaMicrosoft,
} from "react-icons/fa";
import { SiR, SiSupabase, SiGooglecolab, SiTableau, SiHubspot } from "react-icons/si";
import { TbMathFunction } from "react-icons/tb";
import { motion } from "framer-motion";

// --------- Animation helpers ---------
// Bigger, smoother animations
const fadeUp = {
  hidden: { opacity: 0, y: 48 }, // was 16/24
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }, // slower + bezier
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
  whileHover: { y: -6, scale: 1.1, transition: { type: "spring", stiffness: 360, damping: 16 } },
  whileTap: { scale: 0.95 },
};

// New slide-in variants for split layouts
const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

// Scroll-once reveal wrapper (keeps your pattern)
const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);


export default function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-gray-900 scroll-smooth font-sans"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}background.jpg)` }}
    >
      {/* Slightly lighter overlay for readability, but let bg show */}
      <div className="min-h-screen bg-white/50">
        {/* Hero */}
        <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center">
            {/* Headshot (floats gently) */}
            <motion.img
              variants={fadeUp}
              {...floatLoop}
              src={`${import.meta.env.BASE_URL}ElisaDuan_photo.jpg`}
              alt="Elisa Duan headshot"
              className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover ring-2 ring-gray-200 shadow-md mb-6"
              whileHover={{ scale: 1.05 }}
            />

            <motion.h1 variants={fadeUp} className="text-5xl font-extrabold">
              Elisa Duan
            </motion.h1>

            <motion.h2 variants={fadeUp} className="text-2xl text-gray-700 mt-2 mb-6">
              Industrial Engineering &amp; Data Science Student
            </motion.h2>

            <motion.p variants={fadeUp} className="max-w-2xl text-lg mb-10">
              I love turning data into decisions across operations, tech, and finance. 
              Explore projects I’ve built, skills I’m growing, and a bit about me!
            </motion.p>

            {/* Icons + labels (spring hover) */}
            <motion.div variants={fadeUp} className="flex text-4xl">
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
                  href: `${import.meta.env.BASE_URL}resume.pdf`,
                  label: "Resume",
                  Icon: FaFilePdf,
                  ext: true,
                },
                { href: "mailto:elisaduan2027@u.northwestern.edu", label: "Email", Icon: FaEnvelope },
                { href: "#about", label: "About Me", Icon: FaUser },
              ].map(({ href, label, Icon, ext }) => (
                <div key={label} className="flex flex-col items-center space-y-1 mx-4">
                  <motion.a
                    href={href}
                    {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={label}
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

        {/* About */}
<motion.section
  id="about"
  className="px-6 py-32"
  variants={stagger}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
>
  <div className="max-w-7xl mx-auto flex flex-col gap-16 bg-gradient-to-r from-white/70 via-white/50 to-white/30 backdrop-blur-sm p-10 md:p-12 rounded-2xl shadow-md">
    {/* Title */}
    <Reveal>
      <h2 className="text-4xl font-bold text-center">About Me</h2>
    </Reveal>

    {/* Content row */}
    <div className="flex flex-col md:flex-row items-start gap-20">
      {/* Text LEFT (slides in) */}
      <motion.div className="md:w-1/2 space-y-8 text-lg md:text-xl text-gray-800 leading-relaxed" variants={slideInLeft}>
        <p>
          

          I’m a junior at Northwestern University studying Industrial Engineering and Data Science, 
          with a certificate in Managerial Analytics from the Kellogg School of Management. 
          My experience spans relational database design, workflow automation, and building 
          interactive dashboards that support data-driven decisions across research and internships. 
          I am eager to apply data-science thinking to real-world problems, particularly in analytics, product, or supply chain roles across tech and finance.
          I’m always happy to connect, please don’t hesitate to reach out!
        </p>
        <p>
          Outside of class, I like expressing myself through creative outlets. 
          Dancing and swimming keep me active, 
          and I love discovering new music. I value time with friends and family, 
          whether we’re exploring new restaurants and shops, traveling, or just 
          relaxing and having meaningful conversations. When I’m not working, 
          you’ll probably find me hunting for the best matcha or boba in a new neighborhood—got a favorite? Tell me!
        </p>
      </motion.div>

      {/* Photos RIGHT (slide in) */}
      <motion.div className="md:w-1/2 flex flex-col items-center gap-10" variants={slideInRight}>
        {/* image 1 */}
        <div className="rounded-2xl shadow-lg w-[28rem] h-[28rem] overflow-hidden">
          <motion.img
            src={`${import.meta.env.BASE_URL}single.jpg`}
            alt="Elisa Duan"
            className="w-full h-full object-cover object-center"
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />
        </div>
        {/* image 2 */}
        <div className="rounded-2xl shadow-lg w-[28rem] h-[28rem] overflow-hidden">
          <motion.img
            src={`${import.meta.env.BASE_URL}group.jpg`}
            alt="Elisa with friends"
            className="w-full h-full object-cover object-center"
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>




        {/* Skills */}
        <section
          id="skills"
          className="px-6 py-20 relative bg-gradient-to-r from-white/70 via-white/50 to-white/30 backdrop-blur-sm rounded-2xl shadow-md max-w-6xl mx-auto"
        >
          <Reveal>
            <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
          </Reveal>

          {/* Programming Languages */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { Icon: FaPython, label: "Python", cls: "text-blue-500" },
              { Icon: SiR, label: "R", cls: "text-sky-600" },
              { Icon: TbMathFunction, label: "MATLAB", cls: "text-red-500" },
              { Icon: FaDatabase, label: "SQL", cls: "text-green-600" },
              { Icon: FaHtml5, label: "HTML", cls: "text-orange-600" },
              { Icon: FaCss3Alt, label: "CSS", cls: "text-blue-600" },
              { Icon: FaJsSquare, label: "JavaScript", cls: "text-yellow-500" },
            ].map(({ Icon, label, cls }) => (
              <Reveal key={label}>
                <motion.div className="flex flex-col items-center space-y-2" {...hoverPop}>
                  <Icon className={`text-4xl ${cls}`} />
                  <span className="text-sm font-medium">{label}</span>
                </motion.div>
              </Reveal>
            ))}

            {/* AMPL / Racket images keep the same behavior */}
            <Reveal>
              <motion.div className="flex flex-col items-center space-y-2" {...hoverPop}>
                <img src={`${import.meta.env.BASE_URL}icons/ampl.svg`} alt="AMPL" className="h-10 w-10" />
                <span className="text-sm font-medium">AMPL</span>
              </motion.div>
            </Reveal>
            <Reveal>
              <motion.div className="flex flex-col items-center space-y-2" {...hoverPop}>
                <img src={`${import.meta.env.BASE_URL}icons/racket.svg`} alt="Racket" className="h-10 w-10" />
                <span className="text-sm font-medium">Racket</span>
              </motion.div>
            </Reveal>
          </motion.div>

          {/* Divider Line */}
          <hr className="my-12 border-gray-400/40" />

          {/* Tools & Software */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { Icon: SiSupabase, label: "Supabase", cls: "text-emerald-600" },
              { Icon: SiGooglecolab, label: "Looker Studio", cls: "text-indigo-500" },
              { Icon: SiTableau, label: "Tableau", cls: "text-orange-500" },
              { Icon: FaMicrosoft, label: "Microsoft Office", sub: "(Excel, PowerPoint, Word)", cls: "text-blue-700" },
              { Icon: FaGithub, label: "GitHub", cls: "text-gray-800" },
            ].map(({ Icon, label, sub, cls }) => (
              <Reveal key={label}>
                <motion.div className="flex flex-col items-center space-y-2" {...hoverPop}>
                  <Icon className={`text-4xl ${cls}`} />
                  <span className="text-sm font-medium">{label}</span>
                  {sub && <span className="text-xs text-gray-600">{sub}</span>}
                </motion.div>
              </Reveal>
            ))}

            {/* Smartsheet & GAS use emoji placeholders for now */}
            <Reveal>
              <motion.div className="flex flex-col items-center space-y-2" {...hoverPop}>
                <span className="text-4xl">📊</span>
                <span className="text-sm font-medium">Smartsheet</span>
              </motion.div>
            </Reveal>
            <Reveal>
              <motion.div className="flex flex-col items-center space-y-2" {...hoverPop}>
                <span className="text-4xl">⚡</span>
                <span className="text-sm font-medium">Google Apps Script</span>
              </motion.div>
            </Reveal>
            <Reveal>
              <motion.div className="flex flex-col items-center space-y-2" {...hoverPop}>
                <SiHubspot className="text-4xl text-orange-500" />
                <span className="text-sm font-medium">HubSpot</span>
              </motion.div>
            </Reveal>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="px-6 py-20">
          <motion.div
            className="max-w-5xl mx-auto bg-gradient-to-r from-white/70 via-white/50 to-white/30 backdrop-blur-sm p-8 rounded-2xl shadow-md"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Reveal>
              <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <Reveal>
                <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 250, damping: 18 }}>
                  <h3 className="text-xl font-semibold mb-2">
                    Bringing Seismological Records to the Digital Age
                  </h3>
                  <p className="text-gray-800 mb-4">
                    Designed and deployed a relational PostgreSQL database in Supabase with a web interface
                    (HTML, CSS, JS) hosted on GitHub Pages to digitize, store, and query thousands of
                    historical seismic records. Implemented data validation and FOLDS metadata standards
                    to improve accessibility for researchers.
                  </p>
                  <a
                    href="https://github.com/elisaduan2005/supabase-form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    <FaGithub className="text-lg" />
                    <span className="text-sm">View on GitHub</span>
                  </a>
                </motion.div>
              </Reveal>

              {/* Project 2 */}
              <Reveal>
                <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 250, damping: 18 }}>
                  <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
                  <p className="text-gray-800 mb-4">
                    Automated operational reporting by developing end-to-end data pipelines with Google Apps Script,
                    Zapier, etc., integrating room bookings, visitor activity, and keycard access data. Built interactive
                    Looker Studio dashboards that provided leadership with real-time visibility into space utilization
                    and significantly reduced manual reporting effort.
                  </p>
                </motion.div>
              </Reveal>

              {/* Project 3 */}
              <Reveal>
                <motion.div
                  className="md:col-span-2"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
                >
                  <h3 className="text-xl font-semibold mb-2">Chicago Crime Analysis</h3>
                  <p className="text-gray-800 mb-4">
                    Analyzed three up-to-date Chicago crime datasets using Python and Pandas to identify spatial,
                    demographic, and temporal crime trends. Created visualizations highlighting high-crime neighborhoods,
                    demographic disparities, and time-based patterns, generating insights to support public safety research
                    and policy discussions.
                  </p>
                  <a
                    href="https://github.com/elisaduan2005/chicago-crime-analysis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    <FaGithub className="text-lg" />
                    <span className="text-sm">View on GitHub</span>
                  </a>
                </motion.div>
              </Reveal>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
