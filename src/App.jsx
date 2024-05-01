import avatar from "./assets/portfolio_avatar.svg";
import github from "./assets/github.png";
import news from "./assets/news.png";
import planet from "./assets/planet.png";
import quiz from "./assets/quiz.png";
import scoot from "./assets/scoot.png";
import monster from "./assets/monstercat.png";

export default function App() {
  return (
    <>
      <section className=" md:max-w-6xl md:mx-auto">
        <header className="text-white px-8 py-2 flex flex-col items-center bg-[#272829] md:flex-row md:justify-between md:rounded-2xl md:mt-2 md:mx-2">
          <h1 className="text-3xl font-extrabold oswald-header">
            William Ofori Asante
          </h1>
          <nav className="space-mono-regular">
            <ul className="flex gap-x-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/wasante/"
                  className="hover:text-blue-400"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sphnikola"
                  className="hover:text-blue-400"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="px-8 mt-10">
          <section className="hero">
            <div className="flex flex-col items-center text-center gap-y-10 md:items-start md:text-left lg:flex-row lg:items-center lg:justify-around">
              <div className="space-y-6">
                <h2 className=" text-xl space-mono-regular  md:text-2xl md:pr-10 lg:max-w-sm">
                  Nice to meet you! I'm{" "}
                  <span className="space-mono-bold text-2xl font-bold md:text-3xl">
                    William Ofori Asante
                  </span>
                </h2>
                <h3 className="space-mono-regular text-2xl md:text-3xl">
                  I build things for the web
                </h3>
                <p className="px-5 text-base leading-6 md:pr-20 md:text-lg md:leading-7 md:pl-0 lg:max-w-lg space-mono-regular font-light  text-[#2f3031]">
                  I'm a front-end developer passionate about building accessible
                  web apps and quality User Interface. I always strive to make a
                  new project better than the previous one, paying attention to
                  details, well-versed in design standards and user preferences
                </p>
                <div>
                  <h3 className="space-mono-regular text-2xl mb-5  md:text-3xl md:pr-10 lg:max-w-lg lg:mb-8">
                    Some technologies i like to work with:
                  </h3>
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex gap-x-16 space-mono-regular text-[#2f3031] md:text-lg">
                      <ul class="">
                        <li className="mb-2 flex items-center">
                          <div class="mr-3  inline-block w-2 overflow-hidden">
                            <div class=" h-4  origin-top-left rotate-45 bg-[#272829]"></div>
                          </div>
                          HTML
                        </li>
                        <li className="mb-2 flex items-center">
                          <div class="mr-3  inline-block w-2 overflow-hidden">
                            <div class=" h-4  origin-top-left rotate-45 bg-[#272829]"></div>
                          </div>
                          CSS
                        </li>
                        <li className="mb-2 flex items-center">
                          <div class="mr-3  inline-block w-2 overflow-hidden">
                            <div class=" h-4  origin-top-left rotate-45 bg-[#272829]"></div>
                          </div>
                          JAVASCRIPT
                        </li>
                        <li className="mb-2 flex items-center">
                          <div class="mr-3  inline-block w-2 overflow-hidden">
                            <div class=" h-4  origin-top-left rotate-45 bg-[#272829]"></div>
                          </div>
                          REACT
                        </li>
                      </ul>
                      <ul>
                        <li className="mb-2 flex items-center">
                          <div class="mr-3  inline-block w-2 overflow-hidden">
                            <div class=" h-4  origin-top-left rotate-45 bg-[#272829]"></div>
                          </div>
                          TAILWINDCSS
                        </li>
                        <li className="mb-2 flex items-center">
                          <div class="mr-3  inline-block w-2 overflow-hidden">
                            <div class=" h-4  origin-top-left rotate-45 bg-[#272829]"></div>
                          </div>
                          GITHUB
                        </li>
                        <li className="mb-2 flex items-center">
                          <div class="mr-3  inline-block w-2 overflow-hidden">
                            <div class=" h-4  origin-top-left rotate-45 bg-[#272829]"></div>
                          </div>
                          GIT
                        </li>
                        <li className="mb-2 flex items-center">
                          <div class="mr-3  inline-block w-2 overflow-hidden">
                            <div class=" h-4  origin-top-left rotate-45 bg-[#272829]"></div>
                          </div>
                          ACCESSIBILITY
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink w-[16rem] h-[20rem]">
                <img className="object-contain" src={avatar} />
              </div>
            </div>
          </section>
        </main>
      </section>
      <div className="flex flex-col lg:items-center px-5 bg-[#272829] text-white mt-10 md:rounded-2xl pb-10">
        <div className="flex  justify-center">
          <h3 className="space-mono-regular text-2xl my-5  md:text-3xl  lg:mb-8 ">
            Some Projects i have worked on
          </h3>
          <div></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
           <a
            href="https://monstercat-album.netlify.app/"
            target="_blank"
            className="hover:scale-105 hover:duration-200 hover:text-blue-400 focus:text-orange-300"
          >
            <img
              className="rounded-xl object-contain lg:w-[300px]  "
              src={monster}
            />
            <h4 className="  space-mono-regular font-semibold text-xl ">
              Monstercat Website
            </h4>
          </a>
          <a
            href="https://fem-scoot.netlify.app"
            target="_blank"
            className="hover:scale-105 hover:duration-200 hover:text-blue-400 focus:text-orange-300"
          >
            <img
              className="rounded-xl object-contain lg:w-[300px] "
              src={scoot}
            />
            <h4 className="  space-mono-regular font-semibold text-xl ">
              Scoot Website
            </h4>
          </a>
          <a
            href="https://fem-github-user-search-app.netlify.app"
            target="_blank"
            className="hover:scale-105 hover:duration-200 hover:text-blue-400 focus:text-orange-300"
          >
            <img
              className="rounded-xl object-contain lg:w-[300px]"
              src={github}
            />
            <h4 className="  space-mono-regular font-semibold text-xl ">
              Github User Search App
            </h4>
          </a>
          <a
            href="https://fem-quiz-app.netlify.app"
            target="_blank"
            className="hover:scale-105 hover:duration-200 hover:text-blue-400 focus:text-orange-300"
          >
            <img
              className="rounded-xl object-contain lg:w-[300px]"
              src={quiz}
            />
            <h4 className="  space-mono-regular font-semibold text-xl ">
              Quiz app
            </h4>
          </a>
          <a
            href="https://fem-planet-fact-site.netlify.app"
            target="_blank"
            className="hover:scale-105 hover:duration-200 hover:text-blue-400 focus:text-orange-300"
          >
            <img
              className="rounded-xl object-contain lg:w-[300px]"
              src={planet}
            />
            <h4 className="  space-mono-regular font-semibold text-xl ">
              Planet fact website
            </h4>
          </a>
          <a
            href="https://newshompage-zz.netlify.app"
            target="_blank"
            className="hover:scale-105 hover:duration-200 hover:text-blue-400 focus:text-orange-300"
          >
            <img
              className="rounded-xl object-contain lg:w-[300px]"
              src={news}
            />
            <h4 className="  space-mono-regular font-semibold text-xl ">
              News Website Homepage
            </h4>
          </a>
        </div>
      </div>
    </>
  );
}
