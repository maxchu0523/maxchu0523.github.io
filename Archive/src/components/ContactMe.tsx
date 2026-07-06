import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { MouseEventHandler, useEffect, useRef } from 'react';
import { faReact, faPhp, faLinkedin, faGithub, faAngular, faJava, faJs } from '@fortawesome/free-brands-svg-icons'

interface AboutMeProps {
    contactRef : React.RefObject<HTMLInputElement>;
}



  
function ContactMe(props : AboutMeProps) {
    const redirectTo = (url: string) => () => {
        window.open(url, '_blank');
      }

    return (
        <>
            <div className='min-h-screen bg-gray-900 py-42' ref={props.contactRef} >
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
        </>


    )
}

export default ContactMe;