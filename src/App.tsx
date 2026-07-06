import { useRef } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  const { choice, setChoice } = useTheme('dark');

  // Shared handle to the last work item; Footer measures it to time the
  // motorcycle ride, Projects attaches it to its final row.
  const lastWorkRef = useRef<HTMLAnchorElement>(null);

  return (
    <>
      <Header choice={choice} onChoiceChange={setChoice} />
      <Hero />
      <Projects lastItemRef={lastWorkRef} />
      <Footer lastItemRef={lastWorkRef} />
    </>
  );
}

export default App;
