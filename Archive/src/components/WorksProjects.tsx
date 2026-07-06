import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import myPodium from '../media/myPodium.png';
import actnow from '../media/actnowmh.png';
import harilelaVip from '../media/harilelaVip.png';
import battleOfHongKong from '../media/battleOfHongKong.png';
import maxPortfolio from '../media/maxPorfolio.png';
import { faReact, faPhp, faAngular, faJava, faJs } from '@fortawesome/free-brands-svg-icons'

interface WorksProjectsProps {
    projectRef : React.RefObject<HTMLInputElement>;
}


function WorksProjects(props : WorksProjectsProps) {
    return (
        <>
            <div className='min-h-screen bg-gray-900 py-42' ref={props.projectRef} >

                <div className='headerText text-white text-center py-12'>
                    <p>Works & Projects</p>
                </div>

                <div className='sm:flex flex-wrap flex-row justify-start subpixel-antialiased font-mono content-center pl-4 pr-4'>

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
        </>


    )
}

export default WorksProjects;