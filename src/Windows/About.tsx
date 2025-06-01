import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div className="min-w-[860px] min-h-[550px]">
        <div className=" flex justify-left items-center mx-10 mb-5 mt-6">
          <img
            src="/profile.png"
            alt="Profile"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
          <div className=" ml-16 flex flex-col justify-center  dark:text-[#FDEBA1]">
            <h1 className="text-[3rem] text-black dark:text-[#FDEBA1]">
              Mario Santos
            </h1>
            <h2 className="text-[1.2rem] text-[#1DA4A4]  dark:text-[#cee7e5]">
              Developer pursuing a Bachelor's degree in Computer Engineering.
            </h2>
          </div>
        </div>

        <div className=" mx-8 h-px bg-black dark:bg-[#FDEBA1] my-6"></div>

        <div className="mx-10 text-black dark:text-[#FDEBA1]  h-[300px] overflow-y-auto scrollbar-transparent ">
          <h1 className="text-4xl">Education</h1>
          <p>
            Enrolled in an undergraduate Bachelor's program in Computer
            Engineering at{' '}
            <a
              className="text-[#1DA4A4] dark:text-[#cee7e5] hover:underline"
              href="https://www.unb.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Universidade de Brasília
            </a>
            .
            <br />
            Expected graduation in 2027.
          </p>
          <p className="mt-4">
            Completed the{' '}
            <a
              className="text-[#1DA4A4] dark:text-[#cee7e5] hover:underline"
              href="https://www.huawei.com/minisite/seeds-for-the-future/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Huawei Seeds for the Future
            </a>{' '}
            training program.
          </p>

          <h1 className="text-4xl mt-2.5 ">Work and Research Experience</h1>

          <ul className="list-disc pl-5">
            <li className="mb-2">
              <strong>
                <a
                  href="https://www.droidunb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1DA4A4] dark:text-[#cee7e5] hover:underline"
                >
                  Droid
                </a>
              </strong>{' '}
              – Distrito Federal, Brazil
              <br />
              Member, Autonomous Robots Division. Participating in autonomous
              robot competitions and collaborating on hardware and software
              integration.
            </li>

            <li className="mb-2">
              <strong>Competitive Programming</strong> – Distrito Federal,
              Brazil
              <br />
              Volunteer Athlete. Competed in programming marathons, including
              the Brazilian Computer Olympics (OBI).
            </li>

            <li className="mb-2">
              <strong>
                <a
                  href="https://www.cjr.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1DA4A4] dark:text-[#cee7e5] hover:underline"
                >
                  CJR
                </a>
              </strong>{' '}
              – Distrito Federal, Brazil
              <br />
              Volunteer Junior Employee. Developed a web app for elementary
              teacher reporting and proposed a project pattern adopted by 70+
              colleagues.
            </li>
          </ul>

          <h1 className="text-4xl mt-2.5">Language Proficiency</h1>
          <ul className="list-disc ml-5">
            <li>Portuguese – Native</li>
            <li>English – Advanced to Fluent</li>
            <li>Spanish – Intermediate</li>
            <li>Mandarin Chinese – Currently learning</li>
          </ul>

          <h1 className="text-4xl mt-2.5">Relevant Skills</h1>
          <ul className="list-disc pl-6">
            <li className="text-2xl mb-2 ">Programming</li>
            <p className="pl-2">
              Python 3, C/C++, JavaScript, HTML5, CSS3, TypeScript, PyTorch,
              Haskell, Rust
            </p>
          </ul>

          <ul className="list-disc pl-6">
            <li className="text-2xl mb-2">Computation</li>
            <p className="pl-2">
              Visual Studio, Jupyter Notebook, Windows, LaTeX, Git & GitHub,
              Bash, Linux
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
