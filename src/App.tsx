import React, { useEffect, useRef } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPhp, faLinkedin, faGithub, faAngular, faJava, faJs } from '@fortawesome/free-brands-svg-icons'
import myPodium from '../src/media/myPodium.png';
import actnow from '../src/media/actnowmh.png';
import harilelaVip from '../src/media/harilelaVip.png';
import battleOfHongKong from '../src/media/battleOfHongKong.png';
import ProjectCard from './components/project-card';
import maxPortfolio from './media/maxPorfolio.png';
import motocycleing from './media/motorcycling.jpg';



function App() {
  const aboutMeRef = useRef<null | HTMLDivElement>(null);
  const projectRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  const scrollToAboutMe = () => { aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' }) };
  const scrollToProject = () => { projectRef.current?.scrollIntoView({ behavior: 'smooth' }) };
  const scrollToContact = () => { contactRef.current?.scrollIntoView({ behavior: 'smooth' }) };

  const onClickMoreAboutMe = () => { 
    // TODO onClickMoreAboutMe to open MoreAboutMe
   };


  const redirectTo = (url: string) => () => {
    window.open(url, '_blank');
  }




  return (
    <div className="App ">
      <header className="App-header">
      </header>

      <div className='bg-gray-900 w-min-screen w-full'>

        <div className=' min-h-screen xl:h-min-screen xl:flex flex-wrap py-42'>
          <div className='xl:basis-1/2' >

            <div className='px-8 py-8 xl:py-12 xl:px-16 '>
              <div className='headerText text-left py-8'>
                <div className='text-white'>Web Developer,</div>
                <div className='text-orange-500'>Max</div>
              </div>
              <div className='contentText text-left  py-4'>
                <p>Welcome to my page! I love exploring and using new technologies. I also enjoy seeing users interact with my work. </p>

              </div>

              <div className='py-4 contentText'>
                <p className=' underline underline-offset-2 '>Tools I use</p>
                <div className='box=content flex gap-4 flex-wrap py-2'>
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>JavaScript</div>
                  <div>React</div>
                  <div>NextJs</div>
                  <div>Angular</div>
                  <div>C#</div>
                  <div>Java</div>
                  <div>Php</div>
                  <div>Spring</div>
                  <div>ASP.NET</div>
                  <div>CakePhp</div>
                </div>
              </div>


              <div className='flex flex-row flex-wrap text-white subpixel-antialiased font-mono gap-4'>
                {/* <div className='min-w-24 border-2 my-1 px-3 cursor-pointer hover:border-orange-500' onClick={scrollToAboutMe}>About</div> */}
                {/* <div className='min-w-24 border-2 my-1 px-3 cursor-pointer hover:border-orange-500' onClick={scrollToProject}>More About Me</div> */}
                <div className='min-w-24 border-2 my-1 px-3 cursor-pointer hover:border-orange-500' onClick={scrollToProject}>Works & Projects</div>
                <div className='min-w-24 border-2 my-1 px-3 cursor-pointer hover:border-orange-500' onClick={scrollToContact}>Contact</div>
              </div>

              <div className='flex flex-row flex-wrap text-white subpixel-antialiased font-mono gap-5 py-4 y-4'>
                <FontAwesomeIcon icon={faLinkedin} onClick={redirectTo('https://www.linkedin.com/in/max-yat-long-chu-06b944181/')} className='cursor-pointer hover:scale-125 ' />
                <FontAwesomeIcon icon={faGithub} onClick={redirectTo('https://github.com/maxchu0523')} className='cursor-pointer hover:scale-125' />
              </div>
            </div>
          </div>



          {/* <p>Full-Stack Web Developer, ex-Motorcyclist, still a enthusiast</p> */}

          <div className='xl:basis-1/2'>


            <div className='px-8 py-8 xl:py-12 xl:px-16 ' ref={aboutMeRef} >
              <div className="collapse collapse-plus " onClick={scrollToAboutMe}>
                <input type="checkbox" className="peer" />
                <div className="collapse-title contentText text-lg font-bold xl:text-xl bg-orange-500 text-white peer-checked:bg-orange-500 peer-checked:text-white">
                  More About Me
                </div>
                <div className="collapse-content contentText bg-orange-500 text-white peer-checked:bg-orange-500 peer-checked:text-white">
                  <p className='py-4'>Born and raised in Hong Kong 🇭🇰 , Studied in Finland 🇫🇮 , Now living in Toronto 🇨🇦 </p>
                  <p className='underline underline-offset-2 '>Things I love 😎</p>
                  <li>Learning Japanese 🇯🇵</li>
                  <li>Travelling 🧳</li>
                  <li>Working on UI/UX 🖥️</li>
                  <li>And my favourite is motorcycling! 🏍️</li>
                  <img className='w-9/12 p-4' src={motocycleing}></img>


                </div>
              </div>
            </div>

          </div>
        </div>

        {/* <div className='min-h-screen bg-gray-900 py-42' ref={aboutMeRef} >
          <div className='headerText text-center pb-4 pt-12'>
            <p className='text-white'>About Me</p>
          </div>

          <div className='xl:flex'>
            <div className='contentText text-left basis-1/2 py-8'>
              <div className='px-4 xl:px-28'>
                <p>Hi, I am Max, a Web developer in Toronto. I enjoy participating in all aspects of the development process and exploring new cool technologies. UI/UX is also one of my favourite things. Seeing users interact with my work gives me a sense of accomplishment</p>
              </div>
            </div>

            <div className='contentText text-left basis-1/2 py-8'>
              <div className='px-4 xl:px-28'>
                <p className=' underline underline-offset-2'>Tools I use</p>
                <div className='box=content flex gap-4 flex-wrap py-2'>
                  <div className='bg-gray-600'>React</div>
                  <div className='bg-gray-600'>Angular</div>
                  <div className='bg-gray-600'>NextJs</div>
                  <div className='bg-gray-600'>Ionic</div>
                  <div className='bg-gray-600'>Php</div>
                  <div className='bg-gray-600'>Java</div>
                  <div className='bg-gray-600'>C#</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className='min-h-screen bg-gray-900 py-42' ref={projectRef} >

          <div className='headerText text-white text-center py-12'>
            <p>Works & Projects</p>
          </div>

          <div className='sm:flex flex-wrap flex-row justify-start subpixel-antialiased font-mono content-center pl-4 pr-4'>

            {/* <div className='basis-1/4 pb-8'>
              <img className='h-48 rounded-md  w-max my-4' src={todoList} onClick={redirectTo('/to-do-list')}></img>
              <p className='contentText font-bold text-left'>Todo App</p>
              <div className='contentText text-left'>
                <p>A experimental todo list build with React, Redux and Tailwindcss</p>
              </div>
            </div> */}
            <div className='sm:basis-1/2 xl:basis-1/3 p-8 xl:p-16'>
              <ProjectCard
                projectName={"My Podium"} projectDesription={"Module-based International Supply Chain Management IT platform"}
                sitePath={"https://mypodium.oocllogistics.com/mypodium/pub/common/podium/cs_up_web_login.jsf"}
                imagePath={myPodium}
                techStackIcons={[<FontAwesomeIcon icon={faAngular} size="xl" />, <FontAwesomeIcon icon={faJava} size="xl" />, <FontAwesomeIcon icon={faJs} size="xl" />]}
              ></ProjectCard>
            </div>

            <div className='sm:basis-1/2 basis-1/2 xl:basis-1/3 p-8 xl:p-16'>
              <ProjectCard
                projectName={"My Website"} projectDesription={"The site you are browsing, Bravo!"}
                sitePath={"https://maxchu0523.github.io"}
                imagePath={maxPortfolio}
                repositoryPath={'https://github.com/maxchu0523/maxchu0523.github.io'}
                techStackIcons={[<FontAwesomeIcon icon={faReact} size="xl" />, <FontAwesomeIcon icon={faJs} size="xl" />]}
              ></ProjectCard>
            </div>

            <div className='sm:basis-1/2 xl:basis-1/3 p-8 xl:p-16'>
              <ProjectCard
                projectName={"Missionary Holiday"} projectDesription={"Grasp all the information related to christian mission trips, offering trips ranging from two months to two years"}
                sitePath={"https://actnowmh.com/"}
                imagePath={actnow}
                techStackIcons={[<FontAwesomeIcon icon={faReact} size="xl" />, <FontAwesomeIcon icon={faPhp} size="xl" />, <FontAwesomeIcon icon={faJs} size="xl" />]}
              ></ProjectCard>
            </div>

            <div className='sm:basis-1/2 xl:basis-1/3 p-8 xl:p-16'>
              <ProjectCard
                projectName={"Battle Of Hong Kong"} projectDesription={"A website that provides information and infographic about the Battle of Hong Kong during World War II."}
                sitePath={"https://maxchu0523.github.io/Battle-of-Hong-Kong/"}
                imagePath={battleOfHongKong}
                repositoryPath={'https://github.com/maxchu0523/Battle-of-Hong-Kong'}
                techStackIcons={[<FontAwesomeIcon icon={faReact} size="xl" />, <FontAwesomeIcon icon={faJs} size="xl" />]}
              ></ProjectCard>
            </div>

            <div className='sm:basis-1/2 xl:basis-1/3 p-8 xl:p-16'>
              <ProjectCard
                projectName={"Harilela VIP"} projectDesription={"A private VIP App for friends and family of the Harilela Family to enjoy benefits and discounts at the Harilela Hotels in Hong Kong"}
                sitePath={"https://apps.apple.com/us/app/harilela-vip/id1571846151"}
                imagePath={harilelaVip}
                techStackIcons={[<FontAwesomeIcon icon={faAngular} size="xl" />, <FontAwesomeIcon icon={faPhp} size="xl" />, <FontAwesomeIcon icon={faJs} size="xl" />]}
              ></ProjectCard>
            </div>
          </div>
        </div>




        <div className='min-h-screen bg-gray-900 py-42' ref={contactRef} >
          <div className='headerText text-center pb-4 pt-48'>
            <p >Get In Touch</p>
          </div>
          <div className='contentText text-center  py-4'>
            <p>Let's have a chat and a decent cup of coffee.</p>
          </div>

          <div className='py-8 flex justify-center'>
            <a className="bg-transparent hover:bg-orange-500 text-white font-semibold hover:text-white py-4 px-4 border border-orange-500 hover:border-transparent rounded-bl-2xl rounded-tr-2xl text-base subpixel-antialiased font-mono text-center  py-4" href="mailto:maxchu0523@gmail.com">
              Let's Go
            </a>
          </div>
          <div className='flex flex-row flex-wrap text-white subpixel-antialiased font-mono gap-5 py-4 y-4 justify-center'>
            <FontAwesomeIcon icon={faLinkedin} onClick={redirectTo('https://www.linkedin.com/in/max-yat-long-chu-06b944181/')} className='cursor-pointer hover:scale-125' />
            <FontAwesomeIcon icon={faGithub} onClick={redirectTo('https://github.com/maxchu0523')} className='cursor-pointer hover:scale-125' />
          </div>




        </div>
      </div>






    </div>
  );
}

export default App;
