import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope, FaUser } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 scroll-smooth">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Elisa Duan</h1>
        <h2 className="text-2xl text-gray-600 mb-6">
          Industrial Engineering & Data Science Student
        </h2>
        <p className="max-w-2xl text-lg mb-8">
          I’m passionate about applying data science to solve real-world
          problems in operations, supply chain, and technology. This portfolio
          highlights my projects, experience, and research.
        </p>

        {/* Social, Resume & About Me Icons */}
        <div className="flex space-x-6 text-3xl">
          <a
            href="https://github.com/elisaduan2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/elisa-duan-095534292"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaFilePdf />
          </a>
          <a
            href="mailto:elisaduan2027@u.northwestern.edu"
            className="hover:text-blue-600 transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="#about"
            className="hover:text-blue-600 transition-colors"
          >
            <FaUser />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          I’m a junior at Northwestern University studying Industrial
          Engineering and Data Science, with a certificate in Managerial
          Analytics from Kellogg. I’ve worked on database design, workflow
          automation, and data-driven decision making through research and
          internships. Outside of academics, I enjoy working with startups and
          exploring how technology shapes business strategy.
        </p>
      </section>
    </div>
  );
}
