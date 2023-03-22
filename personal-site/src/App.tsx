import React, { useEffect, useRef } from 'react';
import './App.css';
import me from '../src/media/me.png';
import myPodium from '../src/media/myPodium.png';
import actnow from '../src/media/actnowmh.png';
import harilelaVip from '../src/media/harilelaVip.png';


function App() {
  const projectRef = useRef<null | HTMLDivElement>(null); 
  const contactRef = useRef<null | HTMLDivElement>(null); 

  const scrollToProject = () => {projectRef.current?.scrollIntoView({ behavior: 'smooth' })};
  const scrollToContact = () => {contactRef.current?.scrollIntoView({ behavior: 'smooth' })};
  

  const redirectTo = (url: string) => () => {
    window.open(url, '_blank');
  }



  useEffect(() => { 

  }, [])


  return (
    <div className="App ">
      <header className="App-header">
      </header>

      <div className='w-screen h-screen flex justify-between bg-gray-900'>


        <div className='px-12 py-4' >
          <div className='text-7xl subpixel-antialiased font-mono text-left py-4'>
            <p className='text-white'>Web Developer,</p>
            <p className='text-orange-500'>Max</p>
          </div>
          <div className='text-base text-white subpixel-antialiased font-mono text-left  py-4'>
            <p>Full-Stack Web Developer, build Website, Hybird app, System</p>
            {/* <p>Full-Stack Web Developer, ex-Motorcyclist, still a enthusiast</p> */}
            <p>Born in late 90s, Raised in Hong Kong, Living in Toronto</p>
          </div>

          <div className='flex flex-row text-white subpixel-antialiased font-mono '>
            <div className='w-24 border-2 mx-2 my-1' >About</div>
            <div className='w-24 border-2 mx-2 my-1' onClick={scrollToProject}>Project</div>
            <div className='w-24 border-2 mx-2 my-1' onClick={scrollToContact}>Contact</div>
          </div>
        </div>
        <div className='basis-4/12'>
          {/* <img src={me} /> */}
        </div>
      </div>

      <div className='h-screen bg-gray-900 px-12 py-42' ref={projectRef} >
        <div className='text-7xl subpixel-antialiased font-mono text-center py-4'>
          <p className='text-white'>Project</p>
        </div>

        <div className='flex flex-wrap flex-row justify-around subpixel-antialiased font-mono py-4'>

          <div className='basis-1/3 p-8'>
            <img className='rounded-md' src={myPodium} onClick={redirectTo('https://www.oocllogistics.com/eng/ourservices/eservices/podium/Pages/default.aspx')}></img>
            <p className='text-white py-4 font-bold text-left'>My Podium</p>
            <div className='flex flex-wrap gap-5'>
              <div className='bg-teal-500 rounded-md px-4 py-1'>
                <p className='text-white'>#Shipment</p>
              </div>
              <div className='bg-yellow-600 rounded-md px-4 py-1'>
                <p className='text-white'>#Supply Chain Management</p>
              </div>
              <div className='bg-lime-500 rounded-md px-4 py-1'>
                <p className='text-white'>#Inventory</p>
              </div>
            </div>
          </div>


          <div className='basis-1/3 p-8'>
            <img className='rounded-md' src={actnow} onClick={redirectTo('https://actnowmh.com/')}></img>
            <p className='text-white py-4 font-bold text-left'>Actnowmh.com</p>
            <div className='flex flex-wrap gap-5'>
              <div className='bg-indigo-500 rounded-md px-10 py-1'>
                <p className='text-white'>#Responsive</p>
              </div>
              <div className='bg-rose-500 rounded-md px-10 py-1'>
                <p className='text-white'>#Web App</p>
              </div>
            </div>
          </div>
          <div className='basis-1/3 p-8'>
            <img className='rounded-md' src={harilelaVip} onClick={redirectTo('https://apps.apple.com/us/app/harilela-vip/id1571846151')}></img>
            <p className='text-white py-4 font-bold text-left'>Harilela VIP</p>
            <div className='flex flex-wrap gap-5'>
              <div className='bg-pink-500 rounded-md px-10 py-1'>
                <p className='text-white'>#Hybird App</p>
              </div>
              <div className='bg-cyan-500 rounded-md px-10 py-1'>
                <p className='text-white'>#ios</p>
              </div>
              <div className='bg-blue-500 rounded-md px-10 py-1'>
                <p className='text-white'>#android</p>
              </div>
            </div>
          </div>

        </div>
      </div>







      <div className='h-screen bg-gray-900 px-12 py-42' ref={contactRef} >
        <div className='text-7xl subpixel-antialiased font-mono text-center py-4'>
          <p className='text-white'>About</p>
        </div>


      </div>




    </div>
  );
}

export default App;
