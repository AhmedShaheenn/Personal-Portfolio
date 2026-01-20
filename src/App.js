import { useEffect } from "react";
import React from "react";
import MatrixBackground from "./Matrix";
import full from "./components/pic/full.png";
import git from "./components/pic/git.jpeg";
import gmail from "./components/pic/gmail.png";
import image from "./components/pic/Image.jpeg";
import insta from "./components/pic/insta.png";
import linkedin from "./components/pic/linkedin.png";
import sim from "./components/pic/sim.jpeg";
import umgdd from "./components/pic/umgdd.jpeg";
import winnipeg from "./components/pic/winnipeg.jpeg";
import www from "./components/pic/www.png";

const ProgressBar = ({ value, width = "w-full", height = "h-2" }) => {
  const error = value < 0 || value > 100;
  let progressClassName;
  if (error)
    progressClassName = `relative rounded-lg ${height} w-full bg-red-500`;
  else progressClassName = `relative ${height} bg-gray-400`;

  return (
    <div className={`${height} ${width} bg-black my-auto inline-block`}>
      <div className={progressClassName} style={{ width: `${value}%` }}></div>
    </div>
  );
};

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual"; // disable browser’s restore
    window.scrollTo(0, 0); // jump to top
  }, []);
  return (
    <div className="w-full">
      <div id="home" />
      <MatrixBackground />
      <nav
        id="navbar"
        className="sticky w-full top-0 z-50 pr-1 sm:pr-2 md:pr-4 grid grid-cols-10 bg-black text-white"
      >
        <div className="col-span-3 sm:col-span-4 md:col-span-5">
          <a href="https://www.github.com/CenizASH">
            <img
              className="w-10 sm:w-12 md:w-16 p-1 sm:p-2"
              alt="N/A"
              src={git}
            />
          </a>
        </div>

        <div className="col-span-7 sm:col-span-6 md:col-span-5 flex flex-nowrap justify-end items-center gap-1 sm:gap-2 md:gap-4 lg:gap-8 xl:gap-16 pr-1 sm:pr-2 md:pr-4 lg:pr-8">
          <button
            className="p-0.5 sm:p-1 md:p-2 text-[10px] sm:text-xs md:text-sm lg:text-base hover:text-orange-400 whitespace-nowrap"
            onClick={() => {
              const navbar = document.getElementById("navbar");
              const element = document.getElementById("home");
              if (navbar && element) {
                const navbarHeight = navbar.offsetHeight;
                const rect = element.getBoundingClientRect();
                const scrollTop =
                  window.pageYOffset || document.documentElement.scrollTop;
                const elementTop = rect.top + scrollTop;
                window.scrollTo({
                  top: elementTop - navbarHeight,
                  behavior: "smooth",
                });
              }
            }}
          >
            Home
          </button>

          <button
            className="p-0.5 sm:p-1 md:p-2 text-[10px] sm:text-xs md:text-sm lg:text-base hover:text-orange-400 whitespace-nowrap"
            onClick={() => {
              const navbar = document.getElementById("navbar");
              const element = document.getElementById("skills");
              if (navbar && element) {
                const navbarHeight = navbar.offsetHeight;
                const rect = element.getBoundingClientRect();
                const scrollTop =
                  window.pageYOffset || document.documentElement.scrollTop;
                const elementTop = rect.top + scrollTop;
                window.scrollTo({
                  top: elementTop - navbarHeight,
                  behavior: "smooth",
                });
              }
            }}
          >
            Skills
          </button>

          <button
            className="p-0.5 sm:p-1 md:p-2 text-[10px] sm:text-xs md:text-sm lg:text-base hover:text-orange-400 whitespace-nowrap"
            onClick={() => {
              const navbar = document.getElementById("navbar");
              const element = document.getElementById("experience");
              if (navbar && element) {
                const navbarHeight = navbar.offsetHeight;
                const rect = element.getBoundingClientRect();
                const scrollTop =
                  window.pageYOffset || document.documentElement.scrollTop;
                const elementTop = rect.top + scrollTop;
                window.scrollTo({
                  top: elementTop - navbarHeight,
                  behavior: "smooth",
                });
              }
            }}
          >
            <span className="hidden sm:inline">Experience & Projects</span>
            <span className="sm:hidden">Projects</span>
          </button>

          <button
            className="p-0.5 sm:p-1 md:p-2 text-[10px] sm:text-xs md:text-sm lg:text-base hover:text-orange-400 whitespace-nowrap"
            onClick={() => {
              const navbar = document.getElementById("navbar");
              const element = document.getElementById("contact");
              if (navbar && element) {
                const navbarHeight = navbar.offsetHeight;
                const rect = element.getBoundingClientRect();
                const scrollTop =
                  window.pageYOffset || document.documentElement.scrollTop;
                const elementTop = rect.top + scrollTop;
                window.scrollTo({
                  top: elementTop - navbarHeight,
                  behavior: "smooth",
                });
              }
            }}
          >
            Contact
          </button>
        </div>
      </nav>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-4 lg:px-8 xl:px-16">
        {/* HOME */}
        <FadeInSection>
          <div className="flex flex-col md:grid md:grid-cols-7 text-white items-center justify-center gap-6 md:gap-4 lg:gap-6 w-full max-w-[95vw] md:max-w-full box-border">
            <div className="bg-gray-600 p-4 sm:p-6 md:p-[2%] bg-opacity-75 col-span-4 ring-4 md:ring-8 ring-black w-full md:w-auto max-w-full box-border">
              <p className="pb-4 text-2xl sm:text-3xl md:text-4xl flex justify-center">
                Hi There!
              </p>
              <p className="pb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                I&apos;m Ahmed. I&apos;m a Full-Stack Developer based in
                Winnipeg, Canada with experience building startup software. I
                enjoy building software that turn problems into solutions.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                I'm always open to offers for full-time work or contract web
                development. Please continue reading to learn more about me.
              </p>
            </div>
            <div className="col-start-6 col-span-2 flex justify-center md:justify-center w-full max-w-full overflow-hidden box-border">
              <img
                className="rounded-full ring-4 md:ring-8 ring-black w-48 sm:w-64 md:w-56 lg:w-72 xl:w-80 max-w-[90vw] md:max-w-full h-auto object-contain"
                alt="N/A"
                src={image}
              />
            </div>
          </div>
        </FadeInSection>
      </div>
      {/* SKILLS */}
      <div
        id="skills"
        className="bg-white items-top min-h-screen w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 py-8 sm:py-12 md:py-20 align-top text-orange-400"
      >
        <FadeInSection>
          <p className="col-span-12 mx-auto pb-8 sm:pb-12 md:pb-16 lg:pb-24 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            SKILLS
          </p>
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 xl:gap-[300px] text-black">
            <div className="grid grid-cols-6 gap-4 sm:gap-6 md:gap-10 lg:gap-14">
              <p className="col-span-1 font-semibold text-xs sm:text-sm md:text-base">
                JAVA
              </p>
              <div className="col-span-5">
                <ProgressBar value={90} />
              </div>
              <p className="col-span-1 font-semibold text-xs sm:text-sm md:text-base">
                JavaScript
              </p>
              <div className="col-span-5">
                <ProgressBar value={70} />
              </div>
              <p className="col-span-1 font-semibold text-xs sm:text-sm md:text-base">
                Python
              </p>
              <div className="col-span-5">
                <ProgressBar value={80} />
              </div>
              <p className="col-span-1 font-semibold text-xs sm:text-sm md:text-base">
                C
              </p>
              <div className="col-span-5">
                <ProgressBar value={80} />
              </div>
              <p className="col-span-1 font-semibold text-xs sm:text-sm md:text-base">
                HTML
              </p>
              <div className="col-span-5">
                <ProgressBar value={80} />
              </div>
              <p className="col-span-1 font-semibold text-xs sm:text-sm md:text-base">
                C#
              </p>
              <div className="col-span-5">
                <ProgressBar value={70} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 sm:gap-6 md:gap-10 lg:gap-14">
              <p className="col-span-1 font-semibold text-xs sm:text-sm md:text-base">
                CSS
              </p>
              <div className="col-span-5">
                <ProgressBar value={80} />
              </div>
              <p className="col-span-1 font-semibold text-xs sm:text-sm md:text-base">
                C++
              </p>
              <div className="col-span-5">
                <ProgressBar value={80} />
              </div>
              <p className="col-span-1 font-semibold text-xs sm:text-sm md:text-base">
                React.js
              </p>
              <div className="col-span-5">
                <ProgressBar value={70} />
              </div>
              <p className="col-span-1 font-semibold text-xs sm:text-sm md:text-base">
                SQL
              </p>
              <div className="col-span-5">
                <ProgressBar value={90} />
              </div>
              <p className="col-span-1 font-semibold text-xs sm:text-sm md:text-base">
                Git/ Github
              </p>
              <div className="col-span-5">
                <ProgressBar value={70} />
              </div>
              <p className="col-span-1 font-semibold text-xs sm:text-sm md:text-base">
                Prolog/ LISP
              </p>
              <div className="col-span-5">
                <ProgressBar value={70} />
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
      {/* EXPERIENCE */}
      <div
        id="experience"
        className="bg-white flex h-full flex-col items-center w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 py-8 sm:py-12 md:py-20 text-orange-400"
      >
        <FadeInSection>
          <p className="pb-8 sm:pb-12 md:pb-16 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            EXPERIENCE + PROJECTS
          </p>

          <div className="grid grid-cols-1 md:grid-cols-10 items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="col-span-1 md:col-span-7 p-2 order-2 md:order-1">
              <p className="text-base sm:text-lg font-semibold text-gray-400 underline">
                Full Stack Development Trainee @ EZOLOPY
              </p>
              <p className="text-sm sm:text-base text-black">
                Using JS, HTML, and CSS with a local team I was trained and
                helped with developing a Canadian based web development start
                up. After group design discussions, I worked on implementing the
                team&apos;s thoughts and ideas by turning them into functional
                frontend/ backend code.
              </p>
            </div>
            <div className="col-span-1 md:col-span-3 flex justify-center md:justify-end p-2 order-1 md:order-2">
              <img
                className="w-32 sm:w-40 md:w-48 max-w-full"
                alt="N/A"
                src={full}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-10 items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="col-span-1 md:col-span-3 flex justify-center md:justify-start p-2 order-1">
              <img className="w-32 sm:w-40 max-w-full" alt="N/A" src={umgdd} />
            </div>
            <div className="col-span-1 md:col-span-7 p-2 order-2">
              <p className="text-base sm:text-lg font-semibold text-gray-400 underline">
                Co-Founder/ Game design Programmer @ University of Manitoba Game
                Design and Development
              </p>
              <p className="text-left md:text-right text-sm sm:text-base text-black">
                Alongside a team of at least ten programmers and three
                designers, my university colleagues and I worked on developing
                runner and open world games during weekends using Unity and C#.
                I was focused on implementing real life physics (like gravity
                fall and figure reaction) into game. I also happen to be a
                co-founder of the club. A flappy bird clone was the game I
                enjoyed developing the most.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-10 items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="col-span-1 md:col-span-7 p-2 order-2 md:order-1">
              <p className="text-base sm:text-lg font-semibold text-gray-400 underline">
                Personal portfolio website
              </p>
              <p className="text-sm sm:text-base text-black">
                Using React, JS, HTML, and CSS I built and deployed this website
                to showcase some of my projects as well as my skills in
                full-stack web development.
              </p>
            </div>
            <div className="col-span-1 md:col-span-3 flex justify-center md:justify-end p-2 order-1 md:order-2">
              <img className="w-32 sm:w-40 max-w-full" alt="N/A" src={www} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-10 items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="col-span-1 md:col-span-3 flex justify-center md:justify-start p-2 order-1">
              <img
                className="w-32 sm:w-40 md:w-48 max-w-full"
                alt="N/A"
                src={winnipeg}
              />
            </div>
            <div className="col-span-1 md:col-span-7 p-2 order-2">
              <p className="text-base sm:text-lg font-semibold text-gray-400 underline">
                Winnipeg Tourist Guide
              </p>
              <p className="text-left md:text-right text-sm sm:text-base text-black">
                Using the Redwood.JS framework, JS, HTML, and CSS I built a
                dynamic multi-webpage website that guides a Winnipeg tourist on
                what to eat, what medium of transportation to use, what
                activities to do around the city, etc. The website incorporates
                HCI, OO, and features like navigation buttons, a contact form,
                etc.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-10 items-center gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-10">
            <div className="col-span-1 md:col-span-7 p-2 order-2 md:order-1">
              <p className="text-base sm:text-lg font-semibold text-gray-400 underline">
                Game of Life Simulation
              </p>
              <p className="text-sm sm:text-base text-black">
                Using C, I built an implementation of the classic "Game of Life"
                simulation developed by mathematician John Conway in the 1970s.
              </p>
            </div>
            <div className="col-span-1 md:col-span-3 flex justify-center md:justify-end p-2 order-1 md:order-2">
              <img
                className="w-32 sm:w-40 md:w-48 max-w-full"
                alt="N/A"
                src={sim}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-10 items-center gap-4 sm:gap-6">
            <div className="col-span-1 md:col-span-10 p-2">
              <p className="text-sm sm:text-base md:text-lg font-extrabold text-black text-center">
                For more projects, visit my Github{" "}
                <button>
                  <a
                    href="https://www.github.com/CenizASH"
                    className="p-1 sm:p-2 underline hover:text-orange-400"
                  >
                    HERE
                  </a>
                </button>
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
      {/* CONTACT */}
      <FadeInSection>
        <div
          id="contact"
          className="grid min-h-screen grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 text-orange-400 py-8 sm:py-12"
        >
          <p className="col-span-2 sm:col-span-4 md:col-span-6 lg:col-span-12 mx-auto mt-8 sm:mt-12 md:mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <p className="bg-black p-2">CONTACT</p>
          </p>

          <a
            href="https://www.github.com/CenizASH"
            className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 mx-auto w-12 sm:w-16 md:w-20"
          >
            <img className="bg-black w-full" alt="N/A" src={git} />
          </a>

          <a
            href="https://www.linkedin.com/in/Ahmed-Shaheen-/"
            className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 mx-auto w-12 sm:w-16"
          >
            <img className="bg-black w-full" alt="N/A" src={linkedin} />
          </a>

          <a
            href="mailto:ahmedshaheen850@gmail.com"
            className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 mx-auto w-12 sm:w-16"
          >
            <img className="bg-black w-full" alt="N/A" src={gmail} />
          </a>

          <a
            href="https://www.instagram.com/a7mdshaheen_/"
            className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 mx-auto w-12 sm:w-16"
          >
            <img className="bg-black w-full" alt="N/A" src={insta} />
          </a>
          <div className="col-span-2 sm:col-span-4 md:col-span-6 lg:col-span-12 self-end mt-auto">
            <hr className="mx-auto mb-2 w-10/12" />
            <p className="col-span-2 sm:col-span-4 md:col-span-6 lg:col-span-12 pb-4 sm:pb-6 text-center text-xs text-orange-400 bg-black">
              AHMED SHAHEEN © 2023
            </p>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default App;
