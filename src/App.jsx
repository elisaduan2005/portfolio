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
// Small helper for SVG/PNG logos in /public/icons
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const floatLoop = {
  animate: { y: [0, -6, 0], rotate: [0, 1.5, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } },
};
const stagger = { hidden: {}, visible: { transition: { delayChildren: 0.08, staggerChildren: 0.14 } } };
const hoverPop = { whileHover: { y: -6, scale: 1.1, transition: { type: "spring", stiffness: 360, damping: 16 } }, whileTap: { scale: 0.95 } };
const slideInLeft = { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };
const slideInRight = { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };

// Scroll-once reveal wrapper
const Reveal = ({ children, delay = 0 }) => (
  <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ delay }}>
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat text-gray-900 scroll-smooth font-sans"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}background.jpg)` }}
    >
      {/* overlay (lighter on mobile, stronger on desktop) */}
      <div className="min-h-[100svh] md:min-h-screen bg-white/20 md:bg-white/40">
        {/* Hero */}
        <section className="relative flex flex-col items-center justify-center min-h-[100svh] md:min-h-screen text-center px-4 sm:px-6">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center">
            {/* Headshot */}
            <motion.img
              variants={fadeUp}
              {...floatLoop}
              src={`${import.meta.env.BASE_URL}ElisaDuan_photo.jpg`}
              alt="Elisa Duan headshot"
              className="h-28 w-28 md:h-40 md:w-40 rounded-full object-cover ring-2 ring-gray-200 shadow-md mb-6"
              whileHover={{ scale: 1.05 }}
            />

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold">
              Elisa Duan
            </motion.h1>

            <motion.h2 variants={fadeUp} className="text-lg md:text-2xl text-gray-700 mt-6 mb-4 md:mb-6">
              Industrial Engineering &amp; Data Science @ Northwestern University
            </motion.h2>

            <motion.p variants={fadeUp} className="max-w-2xl text-base md:text-lg mb-8 md:mb-10 px-1">
              I love turning data into decisions across operations, tech, and finance. Explore projects I’ve built, skills I’m growing, and a bit about me!
            </motion.p>

            {/* Nav Icons */}
            <motion.div variants={fadeUp} className="flex justify-center gap-6 md:gap-12 flex-wrap text-3xl md:text-4xl">
              {[
                { href: "#projects", label: "Projects", Icon: FaFolderOpen },
                { href: "#skills", label: "Skills", Icon: FaCode },
                { href: "https://www.linkedin.com/in/elisa-duan-095534292", label: "LinkedIn", Icon: FaLinkedin, ext: true },
                { href: `${import.meta.env.BASE_URL}resume_updated.pdf`, label: "Resume", Icon: FaFilePdf, ext: true },
                { href: "mailto:elisaduan2027@u.northwestern.edu", label: "Email", Icon: FaEnvelope },
                { href: "#about", label: "About Me", Icon: FaUser },
              ].map(({ href, label, Icon, ext }) => (
                <div key={label} className="flex flex-col items-center space-y-1">
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
  className="px-4 sm:px-6 py-16 md:py-32"
  variants={stagger}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
>
  <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-16 bg-gradient-to-r from-white/60 via-white/40 to-white/30 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl shadow-md">
    <Reveal>
      <h2 className="text-3xl md:text-4xl font-bold text-center">About Me</h2>
    </Reveal>

    <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
      {/* Text */}
      <motion.div
       className="md:w-1/2 pl-4 sm:pl-6 md:pl-10 space-y-6 md:space-y-8 text-lg md:text-2xl text-gray-800 leading-relaxed"


        variants={slideInLeft}
      >
        <p>
          I’m a junior at Northwestern University studying Industrial Engineering and Data Science,
          with a certificate in Managerial Analytics from the Kellogg School of Management.
          My experience spans relational database design, workflow automation, and building interactive
          dashboards that support data-driven decisions across research and internships.
          I am eager to apply data-science thinking to real-world problems, particularly in analytics,
          product, or supply chain roles across tech and finance. I’m always happy to connect—please don’t hesitate to reach out!
        </p>
        <p>
          Outside of class, I like expressing myself through creative outlets. Dancing and swimming keep me active,
          and I love discovering new music. I value time with friends and family—exploring restaurants and shops,
          traveling, or just relaxing and having meaningful conversations.
          When I’m not working, you’ll probably find me hunting for the best matcha or boba in a new neighborhood—got a favorite? Tell me!
        </p>
      </motion.div>

      {/* Photos */}
      <motion.div
        className="md:w-1/2 flex flex-col items-center gap-6 md:gap-10"
        variants={slideInRight}
      >
        <div className="w-full max-w-sm md:max-w-md rounded-2xl shadow-lg overflow-hidden">
          <motion.img
            src={`${import.meta.env.BASE_URL}single.jpg`}
            alt="Elisa Duan"
            className="w-full h-auto aspect-[4/5] object-cover"
            whileHover={{ y: -4, scale: 1.02 }}
          />
        </div>
        <div className="w-full max-w-sm md:max-w-md rounded-2xl shadow-lg overflow-hidden">
          <motion.img
            src={`${import.meta.env.BASE_URL}group.jpg`}
            alt="Elisa with friends"
            className="w-full h-auto aspect-[4/5] object-cover"
            whileHover={{ y: -4, scale: 1.02 }}
          />
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>

       {/* Skills */}
<section
  id="skills"
  className="px-4 sm:px-6 py-16 md:py-20 relative bg-gradient-to-r from-white/60 via-white/40 to-white/30 backdrop-blur-sm rounded-2xl shadow-md max-w-6xl sm:max-w-7xl mx-auto"
>
  <Reveal>
    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center">Skills</h2>
  </Reveal>

  {/* Languages */}
  <motion.div
    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 justify-items-center"
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {[
      { Icon: FaPython, label: "Python", cls: "text-blue-500" },
      { Icon: SiR, label: "R", cls: "text-sky-600" },
      { Icon: FaDatabase, label: "SQL", cls: "text-green-600" },
      { Icon: FaHtml5, label: "HTML", cls: "text-orange-600" },
      { Icon: FaCss3Alt, label: "CSS", cls: "text-blue-600" },
      { Icon: FaJsSquare, label: "JavaScript", cls: "text-yellow-500" },
    ].map(({ Icon, label, cls }) => (
      <Reveal key={label}>
        <motion.div className="flex flex-col items-center space-y-2" {...hoverPop}>
          <Icon className={`text-3xl md:text-4xl ${cls}`} />
          <span className="text-xs md:text-sm font-medium">{label}</span>
        </motion.div>
      </Reveal>
    ))}

    {/* Local SVGs */}
    <Reveal>
      <motion.div className="flex flex-col items-center space-y-2" {...hoverPop}>
        <ImgIcon name="matlab.svg" />
        <span className="text-xs md:text-sm font-medium">MATLAB</span>
      </motion.div>
    </Reveal>
    <Reveal>
      <motion.div className="flex flex-col items-center space-y-2" {...hoverPop}>
        <ImgIcon name="ampl.svg" />
        <span className="text-xs md:text-sm font-medium">AMPL</span>
      </motion.div>
    </Reveal>
    <Reveal>
      <motion.div className="flex flex-col items-center space-y-2" {...hoverPop}>
        <ImgIcon name="racket.svg" />
        <span className="text-xs md:text-sm font-medium">Racket</span>
      </motion.div>
    </Reveal>
  </motion.div>

  <hr className="my-8 md:my-12 border-gray-400/40" />

  {/* Tools — same grid as above */}
  <motion.div
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-6 justify-items-center"
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <Reveal>
      <motion.div className="flex flex-col items-center space-y-1 md:space-y-2" {...hoverPop}>
        <SiSupabase className="text-3xl md:text-4xl text-emerald-600" />
        <span className="text-xs md:text-sm font-medium">Supabase</span>
      </motion.div>
    </Reveal>

    <Reveal>
      <motion.div className="flex flex-col items-center space-y-1 md:space-y-2" {...hoverPop}>
        <ImgIcon name="lookerstudio.svg" />
        <span className="text-xs md:text-sm font-medium">Looker Studio</span>
      </motion.div>
    </Reveal>

    <Reveal>
      <motion.div className="flex flex-col items-center space-y-1 md:space-y-2" {...hoverPop}>
        <SiTableau className="text-3xl md:text-4xl text-orange-500" />
        <span className="text-xs md:text-sm font-medium">Tableau</span>
      </motion.div>
    </Reveal>

    <Reveal>
      <motion.div className="flex flex-col items-center space-y-1 md:space-y-2" {...hoverPop}>
        <ImgIcon name="office.svg" />
        <span className="text-xs md:text-sm font-medium">Microsoft Office</span>
        <span className="text-[10px] md:text-xs text-gray-600">(Excel, PowerPoint, Word)</span>
      </motion.div>
    </Reveal>

    <Reveal>
      <motion.div className="flex flex-col items-center space-y-1 md:space-y-2" {...hoverPop}>
        <FaGithub className="text-3xl md:text-4xl text-gray-800" />
        <span className="text-xs md:text-sm font-medium">GitHub</span>
      </motion.div>
    </Reveal>

    <Reveal>
      <motion.div className="flex flex-col items-center space-y-1 md:space-y-2" {...hoverPop}>
        <ImgIcon name="smartsheet.svg" />
        <span className="text-xs md:text-sm font-medium">Smartsheet</span>
      </motion.div>
    </Reveal>

    <Reveal>
      <motion.div className="flex flex-col items-center space-y-1 md:space-y-2" {...hoverPop}>
        <ImgIcon name="apps_script.svg" />
        <span className="text-xs md:text-sm font-medium">Google Apps Script</span>
      </motion.div>
    </Reveal>

    <Reveal>
      <motion.div className="flex flex-col items-center space-y-1 md:space-y-2" {...hoverPop}>
        <SiHubspot className="text-3xl md:text-4xl text-orange-500" />
        <span className="text-xs md:text-sm font-medium">HubSpot</span>
      </motion.div>
    </Reveal>
  </motion.div>
</section>


        {/* Projects */}
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
      {/* Project 1 */}
      <Reveal>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          className="rounded-2xl p-6 md:p-7 bg-white/75 backdrop-blur border border-white/50 shadow-sm hover:shadow-lg"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            Bringing Seismological Records to the Digital Age
          </h3>

          <h4 className="text-sm md:text-base font-semibold">Summary</h4>
          <p className="text-base md:text-lg text-gray-800 mb-2">
            Built a relational PostgreSQL database in Supabase with a web interface (HTML, CSS, JS)
            hosted on GitHub Pages to digitize, store, and query thousands of historical seismic records.
          </p>

          <h4 className="text-sm md:text-base font-semibold">Methods</h4>
          <p className="text-base md:text-lg text-gray-800 mb-2">
            Designed LucidChart schema linking networks, stations, locations, and records; applied FOLDS (Federation of Online Legacy Data for Seismology) metadata
            standards; deployed web GUI.
          </p>

          <h4 className="text-sm md:text-base font-semibold">Impact</h4>
          <p className="text-base md:text-lg text-gray-800 mb-2">
            Improved data accessibility for researchers at universities and seismological institutes by digitizing analog records.
          </p>

          <a
            href="https://github.com/elisaduan2005/supabase-form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
          >
            <FaGithub className="text-lg" />
            <span className="text-base">View on GitHub</span>
          </a>
        </motion.div>
      </Reveal>

      {/* Project 2 */}
      <Reveal>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          className="rounded-2xl p-6 md:p-7 bg-white/75 backdrop-blur border border-white/50 shadow-sm hover:shadow-lg"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-3">Workflow Automation</h3>

          <h4 className="text-sm md:text-base font-semibold">Summary</h4>
          <p className="text-base md:text-lg text-gray-800 mb-2">
            Automated operational reporting by developing pipelines that integrate room bookings, visitor logs, and
            keycard access data into interactive real-time dashboards.
          </p>

          <h4 className="text-sm md:text-base font-semibold">Methods</h4>
          <p className="text-base md:text-lg text-gray-800 mb-2">
            Built daily ETL workflows with Google Apps Script and Zapier; centralized data in Google Sheets;
            built dashboards in Looker Studio.
          </p>

          <h4 className="text-sm md:text-base font-semibold">Impact</h4>
          <p className="text-base md:text-lg text-gray-800 mb-2">
            Provided management with real-time visibility into space utilization and significantly reduced manual reporting efforts.
          </p>
        </motion.div>
      </Reveal>

      {/* Project 3 */}
      <Reveal>
        <motion.div
          className="md:col-span-2 rounded-2xl p-6 md:p-7 bg-white/75 backdrop-blur border border-white/50 shadow-sm hover:shadow-lg"
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
        >
          <h3 className="text-lg md:text-xl font-semibold mb-3">Chicago Crime Analysis</h3>

          <h4 className="text-sm md:text-base font-semibold">Summary</h4>
          <p className="text-base md:text-lg text-gray-800 mb-2">
            Analyzed three Chicago crime datasets to uncover demographic, temporal, and spatial crime patterns.
          </p>

          <h4 className="text-sm md:text-base font-semibold">Methods</h4>
          <p className="text-base md:text-lg text-gray-800 mb-2">
            Cleaned and merged datasets using Python (Pandas, NumPy); aggregated incidents by type of crime, demographics, etc.; and created visualizations using libraries such as Matplotlib and Seaborn.
          </p>

          <h4 className="text-sm md:text-base font-semibold">Impact</h4>
          <p className="text-base md:text-lg text-gray-800 mb-2">
            Identified disparities in crime exposure across demographics, time, and neighborhoods; supported public safety
            and policy discussions.
          </p>

          <a
            href="https://github.com/elisaduan2005/chicago-crime-analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
          >
            <FaGithub className="text-lg" />
            <span className="text-base">View on GitHub</span>
          </a>
        </motion.div>
      </Reveal>
    </div>

    {/* Project 4 */}
  <Reveal>
  <motion.div
    className="md:col-span-2 rounded-2xl p-6 md:p-7 bg-white/75 backdrop-blur border border-white/50 shadow-sm hover:shadow-lg"
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 250, damping: 18 }}
  >
    <h3 className="text-lg md:text-xl font-semibold mb-3">
      Southern California Housing Price Prediction (CRMLS)
    </h3>

    <h4 className="text-sm md:text-base font-semibold">Summary</h4>
    <p className="text-base md:text-lg text-gray-800 mb-2">
      Collaborated with a team to conduct exploratory data analysis (EDA) on real estate market data to support predictive
      modeling of housing prices in Southern California.
    </p>

    <h4 className="text-sm md:text-base font-semibold">Methods</h4>
    <p className="text-base md:text-lg text-gray-800 mb-2">
      Developed and evaluated a LightGBM model to predict property closing prices using California Regional Multiple Listing
      Service (CRMLS) data; compared performance across machine learning models using R², MAPE, and MdAPE.
    </p>

    <h4 className="text-sm md:text-base font-semibold">Impact</h4>
    <p className="text-base md:text-lg text-gray-800 mb-2">
      Built a validated modeling pipeline with clear performance comparisons, enabling informed model selection and improving
      accuracy in housing price prediction.
    </p>

    <a
      href="https://github.com/agrawalreva/idx-exchange-ds34"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
    >
      <FaGithub className="text-lg" />
      <span className="text-base">View on GitHub</span>
    </a>
  </motion.div>
</Reveal>

  </motion.div>
</section>
</div> </div>
  );
}


