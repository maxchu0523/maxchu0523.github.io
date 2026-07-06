import React, { useEffect, useRef } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AboutMe from './components/AboutMe';
import WorksProjects from './components/WorksProjects';
import ContactMe from './components/ContactMe';

function App() {
  const aboutMeRef = useRef<HTMLInputElement>(null);
  const projectRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);

  const scrollToAboutMe = () => { aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' }) };
  const scrollToProject = () => { projectRef.current?.scrollIntoView({ behavior: 'smooth' }) };
  const scrollToContact = () => { contactRef.current?.scrollIntoView({ behavior: 'smooth' }) };


  return (
    <div className="App ">
      <div className='bg-gray-900 w-min-screen w-full'>
        <AboutMe aboutMeRef={aboutMeRef} scrollToAboutMe={scrollToAboutMe} scrollToProject={scrollToProject} scrollToContact={scrollToContact}></AboutMe>
        <WorksProjects projectRef={projectRef}></WorksProjects>
        <ContactMe contactRef={contactRef} ></ContactMe>
      </div>

    </div>
  );
}

export default App;
