import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPhp, faLinkedin, faGithub, faAngular, faJava, faJs } from '@fortawesome/free-brands-svg-icons'
import motocycleing from '../media/motorcycling.jpg';


interface AboutMeProps {
    aboutMeRef : React.RefObject<HTMLInputElement>;
    scrollToAboutMe : () => void;
    scrollToProject : () => void;
    scrollToContact : () => void;
}


function AboutMe(props: AboutMeProps) {
    const redirectTo = (url: string) => () => {
        window.open(url, '_blank');
    }

    return (
        <>
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
                            <div className='min-w-24 border-2 my-1 px-3 cursor-pointer hover:border-orange-500' onClick={props.scrollToProject}>Works & Projects</div>
                            <div className='min-w-24 border-2 my-1 px-3 cursor-pointer hover:border-orange-500' onClick={props.scrollToContact}>Contact</div>
                        </div>

                        <div className='flex flex-row flex-wrap text-white subpixel-antialiased font-mono gap-5 py-4 y-4'>
                            <FontAwesomeIcon icon={faLinkedin} onClick={redirectTo('https://www.linkedin.com/in/max-yat-long-chu-06b944181/')} className='cursor-pointer hover:scale-125 ' />
                            <FontAwesomeIcon icon={faGithub} onClick={redirectTo('https://github.com/maxchu0523')} className='cursor-pointer hover:scale-125' />
                        </div>
                    </div>
                </div>



                {/* <p>Full-Stack Web Developer, ex-Motorcyclist, still a enthusiast</p> */}

                <div className='xl:basis-1/2'>


                    <div className='px-8 py-8 xl:py-12 xl:px-16 ' ref={props.aboutMeRef} >
                        <div className="collapse collapse-plus " onClick={props.scrollToAboutMe}>
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title contentText text-lg font-bold xl:text-xl bg-orange-500 text-white peer-checked:bg-orange-500 peer-checked:text-white">
                                More About Me
                            </div>
                            <div className="collapse-content contentText bg-orange-500 text-white peer-checked:bg-orange-500 peer-checked:text-white">
                                <p className='py-4'>Living in Toronto 🇨🇦, Studied in Finland 🇫🇮, Born and raised in Hong Kong 🇭🇰 </p>
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
        </>


    )
}

export default AboutMe;