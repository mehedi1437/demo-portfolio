import { useState } from "react";
import { ReactTyped } from "react-typed";
import Lottie from "lottie-react";
import contactAnimation from "../public/Animation - 1747465391863.json"; // download and import your Lottie file
export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-900">
      {/* Nav Section */}
      <nav className="fixed top-0 left-0 w-full z-50  shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">
          <a href="#" className="text-2xl font-bold">
            Mehedi Hasan <span className="text-blue-500">Emon</span>
          </a>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#projects" className="hover:text-blue-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
          <a
            href="/resume .pdf"
            download
            className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-2 rounded-full transition duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-[#0f172a] text-white px-4 pb-4 space-y-2">
            <li>
              <a href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden bg-[#0f172a] text-white h-screen">
        {/* Dotted Grid Background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Fixed Glowing Blobs */}
        <div className="absolute w-96 h-96 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 opacity-20 blur-3xl rounded-full top-1/3 -left-20 animate-none z-0"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 opacity-25 blur-2xl rounded-full bottom-10 right-20 animate-pulse z-0"></div>
        <div className="absolute w-60 h-60 bg-gradient-to-br from-green-400 via-teal-500 to-cyan-400 opacity-20 blur-2xl rounded-full top-1/3 right-1/4 animate-pulse z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <img
            src="https://i.ibb.co.com/Jw6DSWCb/IMG-20250428-133709-628.jpg"
            alt="Emon"
            className="w-32 h-32 rounded-full mb-4 shadow-lg object-cover"
          />
          <ReactTyped
            className="text-xl md:text-2xl mb-6 text-blue-600"
            strings={[
              "Frontend Web Developer",
              "React.js Enthusiast",
              "UI/UX Focused",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
          <p className="text-xl text-blue-400 mb-6">Frontend React Developer</p>
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 max-w-6xl mx-auto bg-[#0f172a] text-white"
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-[#1e293b] rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <img
              src="https://camo.githubusercontent.com/5444f52a715cfa6beff9d998558319c00307ac485ae0d1a0fd57a59e1d7c6096/68747470733a2f2f692e6962622e636f2e636f6d2f7370396d645130712f53637265656e73686f742d342e706e67"
              alt="Job Finding Website"
              className="rounded-lg mb-4 w-full object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Job Finding Website</h3>
            <p className="mb-3 text-gray-300">
              A modern and responsive job search app built with React.js,
              Tailwind CSS, Express & MongoDB. JWT integrated for secure access.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-900/40 text-blue-300 text-sm px-3 py-1 rounded-full">
                React
              </span>
              <span className="bg-green-900/40 text-green-300 text-sm px-3 py-1 rounded-full">
                Tailwind
              </span>
              <span className="bg-yellow-900/40 text-yellow-300 text-sm px-3 py-1 rounded-full">
                API
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://findjob-22996.web.app"
                target="_blank"
                className="text-blue-400 hover:underline hover:text-blue-300 transition"
              >
                Live
              </a>
              <a
                href="https://github.com/mehedi1437/find-job-client"
                target="_blank"
                className="text-blue-400 hover:underline hover:text-blue-300 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-[#1e293b] rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <img
              src=""
              alt="E-Commerce Site"
              className="rounded-lg mb-4 w-full object-cover"
            />
            <h3 className="text-xl font-bold mb-2">E-Commerce Website</h3>
            <p className="mb-3 text-gray-300">
              A full-featured e-commerce site with product listings, cart, and
              secure checkout. Built with React & Firebase.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-900/40 text-blue-300 text-sm px-3 py-1 rounded-full">
                React
              </span>
              <span className="bg-green-900/40 text-green-300 text-sm px-3 py-1 rounded-full">
                Firebase
              </span>
              <span className="bg-red-900/40 text-red-300 text-sm px-3 py-1 rounded-full">
                Stripe
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-blue-400 hover:underline hover:text-blue-300 transition"
              >
                Live
              </a>
              <a
                href="#"
                className="text-blue-400 hover:underline hover:text-blue-300 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-[#1e293b] rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <img
              src=""
              alt="Admin Dashboard"
              className="rounded-lg mb-4 w-full object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Admin Dashboard</h3>
            <p className="mb-3 text-gray-300">
              An admin dashboard with dynamic charts and analytics using React,
              Recharts, and Tailwind.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-purple-900/40 text-purple-300 text-sm px-3 py-1 rounded-full">
                Recharts
              </span>
              <span className="bg-blue-900/40 text-blue-300 text-sm px-3 py-1 rounded-full">
                React
              </span>
              <span className="bg-gray-900/40 text-gray-300 text-sm px-3 py-1 rounded-full">
                Tailwind
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-blue-400 hover:underline hover:text-blue-300 transition"
              >
                Live
              </a>
              <a
                href="#"
                className="text-blue-400 hover:underline hover:text-blue-300 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-[#1e293b] rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <img
              src=""
              alt="Blog Website"
              className="rounded-lg mb-4 w-full object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Developer Blog</h3>
            <p className="mb-3 text-gray-300">
              A markdown-based blog website where you can write and read tech
              articles. Responsive & fast.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-indigo-900/40 text-indigo-300 text-sm px-3 py-1 rounded-full">
                Next.js
              </span>
              <span className="bg-green-900/40 text-green-300 text-sm px-3 py-1 rounded-full">
                Tailwind
              </span>
              <span className="bg-yellow-900/40 text-yellow-300 text-sm px-3 py-1 rounded-full">
                Markdown
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-blue-400 hover:underline hover:text-blue-300 transition"
              >
                Live
              </a>
              <a
                href="#"
                className="text-blue-400 hover:underline hover:text-blue-300 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="bg-[#0f172a] py-20 px-4 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://i.ibb.co.com/Jw6DSWCb/IMG-20250428-133709-628.jpg"
              alt="Mehedi Hasan Emon"
              className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-blue-500"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            <p className="text-lg mb-5 text-gray-300 leading-relaxed">
              Hi! I’m{" "}
              <span className="text-blue-400 font-medium">
                Mehedi Hasan Emon
              </span>
              , a passionate frontend web developer from Bangladesh. My journey
              began with a fascination for how modern, beautiful websites are
              built — and I’ve been in love with the process ever since.
            </p>
            {/* <p className="text-lg mb-5 text-gray-300 leading-relaxed">
        I specialize in crafting responsive, user-friendly interfaces using <span className="text-green-300">React.js</span> and <span className="text-sky-300">Tailwind CSS</span>.
        I enjoy writing clean, maintainable code and bringing creative ideas to life.
      </p> */}
            <p className="text-lg mb-5 text-gray-300 leading-relaxed">
              I specialize in crafting responsive, user-friendly interfaces
              using
              <span className="text-green-300"> React.js</span>,
              <span className="text-sky-300"> Tailwind CSS</span>,
              <span className="text-emerald-300"> MongoDB</span>, and
              <span className="text-yellow-300"> Express.js</span>. I’ve also
              integrated
              <span className="text-pink-300"> JWT authentication</span> for
              secure user management and built{" "}
              <span className="text-purple-300">admin dashboards</span> for
              better data control and insights.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My long-term goal is to create meaningful digital experiences and
              eventually lead a team or run an agency. Currently, I’m working
              solo and open to collaboration with startups, agencies, or
              individuals who value quality frontend development.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-[#0f172a] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
            {/* Skill Item */}
            <div className="flex flex-col items-center gap-2 bg-[#1e293b] p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 w-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                alt="HTML"
                className="w-10 h-10"
              />
              <p className="text-sm font-medium">HTML</p>
            </div>

            <div className="flex flex-col items-center gap-2 bg-[#1e293b] p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 w-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                alt="CSS"
                className="w-10 h-10"
              />
              <p className="text-sm font-medium">CSS</p>
            </div>

            <div className="flex flex-col items-center gap-2 bg-[#1e293b] p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 w-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                alt="JavaScript"
                className="w-10 h-10"
              />
              <p className="text-sm font-medium">JavaScript</p>
            </div>

            <div className="flex flex-col items-center gap-2 bg-[#1e293b] p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 w-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
                alt="React"
                className="w-10 h-10"
              />
              <p className="text-sm font-medium">React</p>
            </div>

            <div className="flex flex-col items-center gap-2 bg-[#1e293b] p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 w-full">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAApVBMVEX///8lKi8+rbA2sq47sK8ytq1ArLE8rq8iJywbISfj5OTLzM0+Q0exsrPa29v29vYAAAAUGyGcnqCipKVna25zdXcGERkAChQvuKx/goN2en0OFh3w8PC2uLliZmnU1dU0OT7o9PQAAA9bXmHAwcJITFCt3duUlpeJjI5QU1d1wsNnu7/I6Ofe8vFxzcUAAAiMy81fvbyb1NO53uFPwLbR5umE08y8OLoQAAAJmElEQVR4nO2ZC3eiuhaA5dhawtOIYDHhoYBA1T60M///p929AUdEtD131r3Vtfa3zjqtaQj7y2MncQYDgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgvi/s6j56TD+nsX21+r9pWK339o/Hc7fsNjs1qPRP8AT/Pf08b65X51f76Ayqm1Q5uHhY3ens81e1SptmYeHl81Px/VfsRuNemQePu7R5uhyKjMc3p/NZnRRZrj96eD+LZXF+uVlvT6XeejarG5bDybZelftK4v9etSRGX6cBr96vekct1iP3v8EuNiNOjLDdhZY7J53PxHjt1mN9u2P+4+OzHB4mFmLzevz822nhPcTl4G9X3dkHh9fV5vNZrX7/fz8fOOz7KyrN+uuzOPz4+fnM/J42wPTw3bdlUEqmd39Hdi2Lw/9Mq+3nZcv8N4r83l3k6xm8zE8k7nPcUHs1cewLQPr5aYT2Vdsdh8ftczn5+vqxlXsxXazX612q82vC5FChRWyufVb9GJ/uCfjLXl3yeceWOxf2if+p4en9ztNVXjlb19f6h3/4w53RGR/euVvji/Du8xXm/WoT+Zh+PLTkf17fq1HF2Tub2wWh/XSIzM8u3ttb3vbX4HEy36z2G7x6tK9JnfGZvP6Q1F+D7gmrzdNxItGp33kP7HZPP/+kSC/y37UDnf78tSRefz9Z2Jtdzd+TV68n06k7cs/T6cyj5+7zXYBJ5kdXPlfb3rv2e47BYv3rgzovALVRfmmBwZOl90SsOnKNJdkGJifCPGvWOw+Hroytc7nbeflXuz9R7/MbU+yS2xfhucy93rlh8F56src75Uf2Lw/tGRe73VYDiw2+M/Nr6+/YaP56VhuAds+22XtnrI22hl9LUATNv7tSlNQSX69x/dFI7VI16OT99qaHpimmbZfqEUpFJn6WYBHinDaQXZeZeZ5rkNbc6gZXY4yyPMi+MpFh7Y6bVimn2SGUbqO9actPQ8zhTHFCJ1D6JrjlnFVNjU7ER4pl/wEMetU1aZLb+zAS2NPePrFMOX8zRu7X7jY+ViMzZMSJ+GCM0DwMG3GIcg4ZyoiVL+2iVwm6iIm4uKSTelVVZQDKu/KuEJ9QxmDqeyKjC/U5fwrmclMeWvLyFzhqsKgE/HNZd28bsAnLIM/qaxAQ20Kvyu8LmNscmE+h3EFejAPWL51ZebwV/NLGbtQYu5/KeMpJyOTw7xRuRFOS49BACEOgz0V4JAVzsSPmcKUFMocD7x4kjsTF55gcdrfvhUhhQKVXVxzptmpYGvwd/mlzACrXVmbvTIWh8jUItKkdCBs1cNFJ4Wq8LmFCSVQmSLmcmAn4KcWGpY5EKp3dQpgDXXSfq3d+rX60MjYx/R4/Fn91pQ3Sc8KnKDtJrG0K4Mxxs3nlEGQLvSaPlZYVmcJG0bOE9FAwuTiYd2cLATzlhdzQFdGTvxpkkzzehi0okzK4zTLs6Qsqmb9MnHxnVoCmPakTLIcPoUe46kWsuVyqf5ZqVaRKWrmaKcyFq6D+aFL3CXz4qiWKZvMFpXGtLAGEhY1d5u+SY1sejEFdGUC/uZVjMNq7bkeHx8TQDDmMwM1LSaEioEFS+7Fqe3POGYzLYRZ4sdL6GeFvblVpLbDZvAwn5VT1pZxYGbFf9J5mvi5U4+MqpgHxfr/GVeYkX7zqtqS0XFNxoYBk3SJvaa5TJkdZayY1TMjmEG35lAh57hybZ9XU1kLIRUpvGpAUceobZsxVzBhQgJW2jIFO47BcdZquJCMIrW04yacw8tYNjkp+4aMDGecTYNIz2PI2MGZDOaaKjXOBcQ81WB6QKQFpOaWDEvMSC9iVXnLcQyxXyE7OXMoacnY0DILz08cBYwqE2qczB29OQJoJaZkobTLviGj+WESRs2rMNd2ZAYw7XH6SnRlmQ7vUXGo2jJ1d0u3LhmYyyaZygm85igjYdKx7oEDQ5jDBIbGuTdTkkk9cnri8aYsnjrXs+ZRBo5gVpUWbR/6YnouE3EVkw0knxgeCgZ6DJ+tExnuVC3lAtITSnmKV9SZLuHdkemRgaNLGKt4CIC9RQ3rPBTlSQwbKcPNVZlb5w/1yWBbqVP4cz/DXexcRmbVT5+pbslg0cCjbGq3ZVQW1DJcEZgSYJaJepeTfjub2T7IJL29DCH40LyHe8+0rmFbQT4PDYHbp3f13NSSkdAFEF/VCX0yduEpM1MmTAl8wV2JEeWDCzL4VnxQqbu3s8+cJoBTbCk1WLd4QDjaS81KXQx1dmX3bq8ZOC+ofAn+UNQnM0iFMisCg8XSnLFSD+tQL48MPhj3ypgnqVlzJs4EPkngkJhTgynetC47VIMugAC+JYNrlJWObmk4f/pk4Bce+opIYKthRp6pzJDXRkbLjiMDKbYlo+Pg54dPgWBs5tvSLcty2oyXhJzJjYGEouyw9egwXGL6HRkJS5TX2hO1X0bOIfnGCpykIWEqsLIE1r88MtikVxtokNfbx5kM51lzv5ElnG2EObDhzMl5cJRh8cBmnM0OqwsyjsKT78hYJSTkqhttTJx9MraDx3HlzYLlA+9XlPp4eHFk7LkHUvLQqW0Z5w0m87wKEq4QMEwGmPm4GzdDo4MujMwgwV3XqdqQOYynCL8jo8HC5gVkZq24tGaqroH+glEP0EWN5dWRwX1G5YUlZQojeXoFwCBFGERRWs4wS+FurC+hUWE4qZ5OjGZ9mALTtBvoeuriWWLsfEcGt1819vMCpPqzWb1bwMm86bhmyK/IRJiTWOmGMXT+qQzcw2DOsBi2EOiVOk/DkQI7y2OxKnBRYfLAVkEbKnGBp1Pj2rYJMmqdACI49apweZ6FLtxQk0pGrWUEF5WMLOB2KjAmDd87njQyai0zY6KRmbHltJ4YrEr23CjVUxk4XTLY2aEDcX906+VjYUJVlOr+q/L6igBJk1VFWCayq182OPiqep+J/FgIFvtRkGXG/Hhq1hIja64ZAdRWrCpewfnYqmU8NsbqcyMzqi3Sdowsru6ems88aN/LnGLJT2UGVp5VN1zx5+QC9fOSewK/kPDUMKiTWFQYQlRfUnjK9Pr52QqAQzrUAzPV5UDC1dHCr0qCwMSfeCetG5FpENTtafhcVWZHUC1qqtV7glY3UFXzwzDMI9syA7MzQ2SUTooid1KrdR+0zGIKT7hF8OdUKXXTr8ry9KsL7f8aee1LN9jtz75Ok9V3eLKn7Kb/AY4gCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIK4Bf4DvC/5IDYhgBIAAAAASUVORK5CYII="
                alt="Tailwind CSS"
                className="w-10 h-10"
              />
              <p className="text-sm font-medium">Tailwind CSS</p>
            </div>

            <div className="flex flex-col items-center gap-2 bg-[#1e293b] p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 w-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9672/9672242.png"
                alt="MongoDB"
                className="w-10 h-10"
              />
              <p className="text-sm font-medium">MongoDB</p>
            </div>

            <div className="flex flex-col items-center gap-2 bg-[#1e293b] p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 w-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
                alt="Express.js"
                className="w-10 h-10"
              />
              <p className="text-sm font-medium">Express.js</p>
            </div>

            <div className="flex flex-col items-center gap-2 bg-[#1e293b] p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 w-full">
              <img
                src="data:image/png;base64,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"
                alt="GitHub"
                className="w-10 h-10"
              />
              <p className="text-sm font-medium">GitHub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">
          {/* Lottie Animation */}
          <div className="w-full">
            <Lottie animationData={contactAnimation} loop={true} />
          </div>

          {/* Contact Info & Form */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-300 mb-6">
              Feel free to reach out for collaborations or just a friendly
              hello!
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 rounded-lg border border-gray-600 bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-lg border border-gray-600 bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="px-4 py-2 rounded-lg border border-gray-600 bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="button"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Footer section */}

      <footer className="bg-[#0f172a] text-white py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* About / Name */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Mehedi Hasan Emon</h3>
            <p className="text-gray-400 text-sm">
              Passionate Frontend Developer crafting beautiful and functional
              web experiences.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                📧{" "}
                <a href="mailto:your@email.com" className="hover:underline">
                  mdmehedihasan1437@gmail.com
                </a>
              </li>
              <li>📍 Chapai Nawabganj, Rajshahi,  Bangladesh</li>
              <li>📞 +880 1306504958</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Me</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/mehedi1437"
                target="_blank"
                rel="noopener noreferrer"
              >
               <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-6 h-6 text-white"
>
  <path
    fillRule="evenodd"
    d="M12 2C6.48 2 2 6.58 2 12.17c0 4.46 2.87 8.24 6.84 9.57.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.36-3.37-1.36-.46-1.18-1.12-1.49-1.12-1.49-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.29.1-2.69 0 0 .84-.27 2.75 1.02A9.3 9.3 0 0 1 12 6.8c.85.01 1.71.12 2.51.35 1.9-1.29 2.73-1.02 2.73-1.02.55 1.4.2 2.43.1 2.69.64.72 1.03 1.64 1.03 2.76 0 3.92-2.34 4.78-4.57 5.03.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.58.69.48A10.18 10.18 0 0 0 22 12.17C22 6.58 17.52 2 12 2Z"
    clipRule="evenodd"
  />
</svg>

              </a>
              <a
                href="https://www.linkedin.com/in/mehedihasan1437/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  className="w-6 h-6"
                  alt="LinkedIn"
                />
              </a>

            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Mehedi Hasan Emon. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
