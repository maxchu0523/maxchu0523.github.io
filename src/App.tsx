import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  const { choice, theme, setChoice } = useTheme('dark');

  return (
    <>
      <Header theme={theme} choice={choice} onChoiceChange={setChoice} />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
