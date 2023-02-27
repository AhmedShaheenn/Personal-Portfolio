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
  else progressClassName = `relative ${height} bg-white`;

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
  return (
    <div className="">
      <div id="home" />
      <MatrixBackground />
      <div className="fixed w-screen top-0 z-50 pr-4 grid grid-cols-10 bg-black text-white">
        <div className="col-span-5">
          <a href="https://www.github.com/CenizASH">
            <img className="w-16 p-2" alt="N/A" src={git} />
          </a>
        </div>

        <div className="col-span-5 flex justify-end gap-16">
          <button
            className="p-2 hover:text-orange-400"
            onClick={() => {
              document.getElementById("home").scrollIntoView();
            }}
          >
            Home
          </button>

          <button
            className=" p-2 hover:text-orange-400"
            onClick={() => {
              document.getElementById("skills").scrollIntoView();
            }}
          >
            Skills
          </button>

          <button
            className=" p-2 hover:text-orange-400"
            onClick={() => {
              document.getElementById("experience").scrollIntoView();
            }}
          >
            Experience & Projects
          </button>

          <button
            className=" p-2 hover:text-orange-400"
            onClick={() => {
              document.getElementById("contact").scrollIntoView();
            }}
          >
            Contact
          </button>
        </div>
      </div>
      <div className="h-screen">
        {/* HOME */}
        <FadeInSection>
          <div className="m-40 flex items-center justify-between gap-4 text-white">
            <div className="bg-black p-2">
              <p className="pb-4 text-3xl">Hi, I&apos;m Ahmed.</p>
              <p className="pb-4 text-4xl">
                I&apos;m a Full-Stack Developer/ Junior Software Engineer.
              </p>
              <p className="pb-4 text-3xl">I code smarter, not harder.</p>
            </div>
            <div>
              <img className="w-96 rounded-full" alt="N/A" src={image} />
            </div>
          </div>
        </FadeInSection>
      </div>
      {/* SKILLS */}
      <div
        id="skills"
        className="bg-emerald-900 items-top  h-screen  px-52 py-20 align-top text-orange-400"
      >
        <FadeInSection>
          <p className="col-span-12 mx-auto pb-24 text-center text-6xl">
            SKILLS
          </p>
          <div className="flex justify-between gap-[300px]">
            <div className="grid grid-cols-6 gap-14">
              <p className="col-span-1 font-semibold">JAVA</p>
              <div className="col-span-5">
                <ProgressBar value={90} />
              </div>
              <p className="col-span-1 font-semibold">JavaScript</p>
              <div className="col-span-5">
                <ProgressBar value={70} />
              </div>
              <p className="col-span-1 font-semibold">Python</p>
              <div className="col-span-5">
                <ProgressBar value={80} />
              </div>
              <p className="col-span-1 font-semibold">C</p>
              <div className="col-span-5">
                <ProgressBar value={80} />
              </div>
              <p className="col-span-1 font-semibold">HTML</p>
              <div className="col-span-5">
                <ProgressBar value={80} />
              </div>
              <p className="col-span-1 font-semibold">C#</p>
              <div className="col-span-5">
                <ProgressBar value={70} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-14">
              <p className="col-span-1 font-semibold">CSS</p>
              <div className="col-span-5">
                <ProgressBar value={80} />
              </div>
              <p className="col-span-1 font-semibold">C++</p>
              <div className="col-span-5">
                <ProgressBar value={80} />
              </div>
              <p className="col-span-1 font-semibold">React.js</p>
              <div className="col-span-5">
                <ProgressBar value={70} />
              </div>
              <p className="col-span-1 font-semibold">SQL</p>
              <div className="col-span-5">
                <ProgressBar value={90} />
              </div>
              <p className="col-span-1 font-semibold">Git/ Github</p>
              <div className="col-span-5">
                <ProgressBar value={70} />
              </div>
              <p className="col-span-1 font-semibold">Prolog/ LISP</p>
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
        className="bg-emerald-900 flex h-full flex-col items-center px-40 py-20 text-orange-400"
      >
        <FadeInSection>
          <p className="pb-16 text-center text-6xl">EXPERIENCE + PROJECTS</p>

          <div className="grid grid-cols-10 items-center gap-6">
            <div className="col-span-7 p-2">
              <p className="text-lg font-semibold text-white">
                Full Stack Development Trainee @ EZOLOPY
              </p>
              <p className="">
                Using JS, HTML, and CSS with a local team I was trained and
                helped with developing a Canadian based web development start
                up. After group design discussions, I worked on implementing the
                team&apos;s thoughts and ideas by turning them into functional
                frontend/ backend code.
              </p>
            </div>
            <div className="col-span-3 flex justify-end p-2">
              <img className="w-48" alt="N/A" src={full} />
            </div>
          </div>

          <div className="grid grid-cols-10 items-center gap-6">
            <div className="col-span-3 flex justify-start p-2">
              <img className="w-40" alt="N/A" src={umgdd} />
            </div>
            <div className="col-span-7 p-2">
              <p className="text-right text-lg font-semibold text-white">
                Co-Founder/ Game design Programmer @ University of Manitoba Game
                Design and Development
              </p>
              <p className="text-right">
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

          <div className="grid grid-cols-10 items-center gap-6">
            <div className="col-span-7 p-2">
              <p className="text-lg font-semibold text-white">
                Personal portfolio website
              </p>
              <p className="">
                Using React, JS, HTML, and CSS I built and deployed this website
                to showcase some of my projects as well as my skills in
                full-stack web development.
              </p>
            </div>
            <div className="col-span-3 flex justify-end p-2">
              <img className="w-40" alt="N/A" src={www} />
            </div>
          </div>

          <div className="grid grid-cols-10 items-center gap-6">
            <div className="col-span-3 flex justify-start p-2">
              <img className="w-48" alt="N/A" src={winnipeg} />
            </div>
            <div className="col-span-7 p-2">
              <p className="text-right text-lg font-semibold text-white">
                Winnipeg Tourist Guide
              </p>
              <p className="text-right">
                Using the Redwood.JS framework, JS, HTML, and CSS I built a
                dynamic multi-webpage website that guides a Winnipeg tourist on
                what to eat, what medium of transportation to use, what
                activities to do around the city, etc. The website incorporates
                HCI, OO, and features like navigation buttons, a contact form,
                etc.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-10 items-center gap-6  pb-10">
            <div className="col-span-7 p-2">
              <p className="text-lg font-semibold text-white">
                Game of Life Simulation
              </p>
              <p className="">
                Using C, I built an implementation of the classic "Game of Life"
                simulation developed by mathematician John Conway in the 1970s.
              </p>
            </div>
            <div className="col-span-3 flex justify-end p-2">
              <img className="w-48" alt="N/A" src={sim} />
            </div>
          </div>

          <div className="grid grid-cols-10 items-center gap-6">
            <div className="col-span-10 p-2">
              <p className="text-lg font-extrabold text-white text-center">
                For more projects, visit my Github{" "}
                <button>
                  <a
                    href="https://www.github.com/CenizASH"
                    className=" p-2 underline hover:text-orange-400"
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
          className="grid h-screen grid-cols-12 gap-4  px-40 text-orange-400"
        >
          <p className="col-span-12 mx-auto mt-20 text-6xl">
            <p className="bg-black p-2">CONTACT</p>
          </p>

          <a
            href="https://www.github.com/CenizASH"
            className="col-span-3 mx-auto w-20"
          >
            <img className="bg-black" alt="N/A" src={git} />
          </a>

          <a
            href="https://www.linkedin.com/in/Ahmed-Shaheen-/"
            className="col-span-3 mx-auto w-16"
          >
            <img className="bg-black" alt="N/A" src={linkedin} />
          </a>

          <a
            href="mailto:ahmedshaheen850@gmail.com"
            className="col-span-3 mx-auto w-16"
          >
            <img className="bg-black" alt="N/A" src={gmail} />
          </a>

          <a
            href="https://www.instagram.com/a7mdshaheen_/"
            className="col-span-3 mx-auto w-16"
          >
            <img className="bg-black" alt="N/A" src={insta} />
          </a>
          <div className="col-span-12 self-end">
            <hr className="mx-auto mb-2 w-10/12" />
            <p className="col-span-12 pb-6 text-center text-xs text-orange-400 bg-black">
              AHMED SHAHEEN © 2023
            </p>
          </div>
          {/* </FadeInSection> */}
        </div>
      </FadeInSection>
    </div>
  );
};

export default App;
