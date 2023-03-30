import React, { useEffect, useRef } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import myPodium from '../src/media/myPodium.png';
import actnow from '../src/media/actnowmh.png';
import harilelaVip from '../src/media/harilelaVip.png';



function App() {
  const projectRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  const scrollToProject = () => { projectRef.current?.scrollIntoView({ behavior: 'smooth' }) };
  const scrollToContact = () => { contactRef.current?.scrollIntoView({ behavior: 'smooth' }) };


  const redirectTo = (url: string) => () => {
    window.open(url, '_blank');
  }

  const mailTo = (e: Event, email: string) => () => {
    window.location.href = email;
    e.preventDefault();
  }



  useEffect(() => {

  }, [])


  return (
    <div className="App ">
      <header className="App-header">
      </header>

      <div className='bg-gray-900 w-min-screen w-full'>

        <div className='min-h-screen flex flex-wrap justify-between py-42'>
          <div className='px-4 py-4 md:px-28 md:py-24' >


            <div className='text-4xl md:text-7xl subpixel-antialiased font-mono text-left py-8'>
              <div className='text-white'>Web Developer,</div>
              <div className='text-orange-500'>Max</div>
            </div>
            <div className='text-base text-white subpixel-antialiased font-mono text-left  py-4'>
              <p>Full-Stack Web Developer, build Website, Hybird app, System</p>

              <p>Born in late 90s, Raised in Hong Kong, Living in Toronto</p>
            </div>

            <div className='flex flex-row flex-wrap text-white subpixel-antialiased font-mono gap-4'>
              <div className='min-w-24 border-2 my-1 px-3 cursor-pointer hover:border-orange-500' >About</div>
              <div className='min-w-24 border-2 my-1 px-3 cursor-pointer hover:border-orange-500' onClick={scrollToProject}>Work Experience</div>
              <div className='min-w-24 border-2 my-1 px-3 cursor-pointer hover:border-orange-500' onClick={scrollToContact}>Contact</div>
            </div>

            <div className='flex flex-row flex-wrap text-white subpixel-antialiased font-mono gap-5 py-4 y-4'>
              <FontAwesomeIcon icon={faLinkedinIn} onClick={redirectTo('https://www.linkedin.com/in/max-chu-06b944181/')} className='cursor-pointer' />
              <FontAwesomeIcon icon={faGithub} onClick={redirectTo('https://github.com/maxchu0523')} className='cursor-pointer' />
            </div>

          </div>

          {/* <p>Full-Stack Web Developer, ex-Motorcyclist, still a enthusiast</p> */}

          <div className='basis-4/12'>
            {/* <img src={me} /> */}
          </div>
        </div>

        <div className='min-h-screen bg-gray-900 py-42' ref={projectRef} >
          
          <div className='text-4xl md:text-7xl subpixel-antialiased font-mono text-center py-4'>
            <p className='text-white'>Work Experience</p>
          </div>


          <div className='md:flex flex-wrap flex-row justify-around subpixel-antialiased font-mono py-4 content-center'>

            <div className='basis-1/3 p-8'>
              <img className='h-48 rounded-md  w-max my-4' src={myPodium} onClick={redirectTo('https://www.oocllogistics.com/eng/ourservices/eservices/podium/Pages/default.aspx')}></img>
              <p className='text-white font-bold text-left'>My Podium</p>
              <div className='text-base text-white subpixel-antialiased font-mono text-left'>
                <p>Module-based International Supply Chain Management IT platform</p>
              </div>
            </div>




            <div className='basis-1/3 p-8'>
              <img className='h-48 rounded-md  w-max my-4' src={actnow} onClick={redirectTo('https://actnowmh.com/')}></img>
              <p className='text-white font-bold text-left'>Missionary Holiday</p>
              <div className='text-base text-white subpixel-antialiased font-mono text-left'>
                <p>Grasp all the information related to christian mission trips, offering trips ranging from two months to two years</p>
              </div>
            </div>


            <div className='basis-1/3 p-8'>
              <img className='h-48 rounded-md  w-max my-4' src={harilelaVip} onClick={redirectTo('https://apps.apple.com/us/app/harilela-vip/id1571846151')}></img>
              <p className='text-white font-bold text-left'>Harilela VIP </p>
              <div className='text-base text-white subpixel-antialiased font-mono text-left'>
                <p>A private VIP App for friends and family of the Harilela Family to enjoy benefits and discounts at the Harilela Hotels in Hong Kong</p>
              </div>
            </div>

          </div>
        </div>




        <div className='min-h-screen bg-gray-900 py-42' ref={contactRef} >
          <div className='my-60'>
            <div className='text-4xl md:text-7xl subpixel-antialiased font-mono text-center py-4'>
              <p className='text-white'>Get In Touch</p>
            </div>
            <div className='text-base text-white subpixel-antialiased font-mono text-center  py-4'>
              <p>I am looking for any kind of new opportunites,</p>
              <p>Let's have a chat and a decent cup of coffee.</p>
            </div>

            <div className='py-8'>
              <a className="bg-transparent hover:bg-orange-500 text-white font-semibold hover:text-white py-4 px-4 border border-orange-500 hover:border-transparent rounded-bl-2xl rounded-tr-2xl text-base subpixel-antialiased font-mono text-center  py-4" href="mailto:maxchu0523@gmail.com">
                Let's Go
              </a>
            </div>
            <div className='flex flex-row flex-wrap text-white subpixel-antialiased font-mono gap-5 py-4 y-4 justify-center'>
              <FontAwesomeIcon icon={faLinkedinIn} onClick={redirectTo('https://www.linkedin.com/in/max-chu-06b944181/')} className='cursor-pointer' />
              <FontAwesomeIcon icon={faGithub} onClick={redirectTo('https://github.com/maxchu0523')} className='cursor-pointer' />
            </div>
          </div>




        </div>
      </div>






    </div>
  );
}

export default App;
