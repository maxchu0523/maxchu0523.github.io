import React, { useEffect, useRef } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import myPodium from '../src/media/myPodium.png';
import actnow from '../src/media/actnowmh.png';
import harilelaVip from '../src/media/harilelaVip.png';
import todoList from '../src/media/todoList.png';
import { redirect, useNavigate } from "react-router-dom";



function App() {
  const aboutMeRef = useRef<null | HTMLDivElement>(null);
  const projectRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  const scrollToAboutMe = () => { aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' }) };
  const scrollToProject = () => { projectRef.current?.scrollIntoView({ behavior: 'smooth' }) };
  const scrollToContact = () => { contactRef.current?.scrollIntoView({ behavior: 'smooth' }) };


  const redirectTo = (url: string) => () => {
    window.open(url, '_blank');
  }


  useEffect(() => {
    document.title = 'Max Chu';
  }, [])


  return (
    <div className="App ">
      <header className="App-header">
      </header>

      <div className='bg-gray-900 w-min-screen w-full'>

        <div className='min-h-screen flex flex-wrap justify-between py-42'>
          <div className='px-4 py-4 md:px-28 md:py-24' >


            <div className='headerText text-left py-8'>
              <div className='text-white'>Web Developer,</div>
              <div className='text-orange-500'>Max</div>
            </div>
            <div className='contentText text-left  py-4'>
              <p>I am a Web Developer. I code Websites, Hybird app and ERP System</p>

              <p>Born in the late 90s, Raised in Hong Kong, Living in Toronto</p>
            </div>

            <div className='flex flex-row flex-wrap text-white subpixel-antialiased font-mono gap-4'>
              <div className='min-w-24 border-2 my-1 px-3 cursor-pointer hover:border-orange-500' onClick={scrollToAboutMe}>About</div>
              <div className='min-w-24 border-2 my-1 px-3 cursor-pointer hover:border-orange-500' onClick={scrollToProject}>Work</div>
              <div className='min-w-24 border-2 my-1 px-3 cursor-pointer hover:border-orange-500' onClick={scrollToContact}>Contact</div>
            </div>

            <div className='flex flex-row flex-wrap text-white subpixel-antialiased font-mono gap-5 py-4 y-4'>
              <FontAwesomeIcon icon={faLinkedinIn} onClick={redirectTo('https://www.linkedin.com/in/max-chu-06b944181/')} className='cursor-pointer hover:scale-150 hover:rotate-12' />
              <FontAwesomeIcon icon={faGithub} onClick={redirectTo('https://github.com/maxchu0523')} className='cursor-pointer hover:scale-150 hover:rotate-12' />
            </div>

          </div>

          {/* <p>Full-Stack Web Developer, ex-Motorcyclist, still a enthusiast</p> */}

          <div className='basis-4/12'>
            {/* <img src={me} /> */}
          </div>
        </div>

        <div className='min-h-screen bg-gray-900 py-42' ref={aboutMeRef} >
          <div className='headerText text-center pb-4 pt-12'>
            <p className='text-white'>About Me</p>
          </div>

          <div className='md:flex'>
            {/* py-4 md:py-24 */}
            <div className='contentText text-left basis-1/2 py-8'>
              <div className='px-4 md:px-28'>
                <p>Hi, I am Max, a Web developer in Toronto. I enjoy participating in all aspects of the development process and exploring new cool technologies. UI/UX is also one of my favourite things. Seeing users interact with my work gives me a sense of accomplishment</p>
              </div>
            </div>

            <div className='contentText text-left basis-1/2 py-8'>
              <div className='px-4 md:px-28'>
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
        </div>

        <div className='min-h-screen bg-gray-900 py-42' ref={projectRef} >

          <div className='headerText text-white text-center py-12'>
            <p>Work Experience</p>
          </div>

          <div className='md:flex flex-wrap flex-row gap-8 justify-around subpixel-antialiased font-mono content-center pl-8 pr-8'>

            <div className='basis-1/4 pb-8'>
              <img className='h-48 rounded-md  w-max my-4' src={myPodium} onClick={redirectTo('https://www.oocllogistics.com/eng/ourservices/eservices/podium/Pages/default.aspx')}></img>
              <p className='contentText font-bold text-left'>My Podium</p>
              <div className='contentText text-left'>
                <p>Module-based International Supply Chain Management IT platform</p>
              </div>
            </div>

            <div className='basis-1/4 pb-8'>
              <img className='h-48 rounded-md  w-max my-4' src={actnow} onClick={redirectTo('https://actnowmh.com/')}></img>
              <p className='contentText font-bold text-left'>Missionary Holiday</p>
              <div className='contentText text-left'>
                <p>Grasp all the information related to christian mission trips, offering trips ranging from two months to two years</p>
              </div>
            </div>


            <div className='basis-1/4 pb-8'>
              <img className='h-48 rounded-md  w-max my-4' src={harilelaVip} onClick={redirectTo('https://apps.apple.com/us/app/harilela-vip/id1571846151')}></img>
              <p className='contentText font-bold text-left'>Harilela VIP </p>
              <div className='contentText text-left'>
                <p>A private VIP App for friends and family of the Harilela Family to enjoy benefits and discounts at the Harilela Hotels in Hong Kong</p>
              </div>
            </div>

          </div>



          <div className='headerText text-white text-center py-12'>
            <p>Projects</p>
          </div>

          <div className='md:flex flex-wrap flex-row gap-8 justify-around subpixel-antialiased font-mono content-center pl-8 pr-8'>

            <div className='basis-1/4 pb-8'>
              <img className='h-48 rounded-md  w-max my-4' src={todoList} onClick={redirectTo('/to-do-list')}></img>
              <p className='contentText font-bold text-left'>Todo App</p>
              <div className='contentText text-left'>
                <p>A experimental todo list build with React, Redux and Tailwindcss</p>
              </div>
            </div>

            {/* <div className='basis-1/4 pb-8'>
              <img className='h-48 rounded-md  w-max my-4' src={actnow} onClick={redirectTo('https://actnowmh.com/')}></img>
              <p className='contentText font-bold text-left'>Missionary Holiday</p>
              <div className='contentText text-left'>
                <p>Grasp all the information related to christian mission trips, offering trips ranging from two months to two years</p>
              </div>
            </div>


            <div className='basis-1/4 pb-8'>
              <img className='h-48 rounded-md  w-max my-4' src={harilelaVip} onClick={redirectTo('https://apps.apple.com/us/app/harilela-vip/id1571846151')}></img>
              <p className='contentText font-bold text-left'>Harilela VIP </p>
              <div className='contentText text-left'>
                <p>A private VIP App for friends and family of the Harilela Family to enjoy benefits and discounts at the Harilela Hotels in Hong Kong</p>
              </div>
            </div> */}

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
            <FontAwesomeIcon icon={faLinkedinIn} onClick={redirectTo('https://www.linkedin.com/in/max-chu-06b944181/')} className='cursor-pointer hover:scale-150 hover:rotate-12' />
            <FontAwesomeIcon icon={faGithub} onClick={redirectTo('https://github.com/maxchu0523')} className='cursor-pointer hover:scale-150 hover:rotate-12' />
          </div>




        </div>
      </div>






    </div>
  );
}

export default App;
