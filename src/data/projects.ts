import type { Project } from '../types';
import equifax from '../assets/projects/equifax.jpg';
import tdClari from '../assets/projects/tdClari.jpg';
import myPodium from '../assets/projects/myPodium.jpg';
import harilelaVip from '../assets/projects/harilelaVip.jpg';
import actnowmh from '../assets/projects/actnowmh.jpg';
import scout from '../assets/projects/scout.jpg';
import maxPortfolio from '../assets/projects/maxPortfolio.jpg';

export const projects: Project[] = [
  {
    name: 'Equifax',
    description: 'Consumer credit monitoring & identity-protection platform',
    tech: 'ANGULAR · TS',
    href: 'https://www.equifax.ca/personal',
    preview: equifax,
  },
  {
    name: 'TD Clari',
    description: 'In-app virtual banking assistant for the TD mobile app',
    tech: 'ANGULAR · JAVA',
    href: 'https://www.td.com/ca/en/personal-banking/how-to/td-app/clari',
    preview: tdClari,
  },
  {
    name: 'My Podium',
    description: 'International supply-chain management platform',
    tech: 'ANGULAR · JAVA',
    href: 'https://mypodium.oocllogistics.com/mypodium/pub/common/podium/cs_up_web_login.jsf',
    preview: myPodium,
  },
  {
    name: 'Harilela VIP',
    description: 'Private VIP app for the Harilela Hotels, Hong Kong',
    tech: 'ANGULAR · PHP',
    href: 'https://apps.apple.com/us/app/harilela-vip/id1571846151',
    preview: harilelaVip,
  },
  {
    name: 'Missionary Holiday',
    description: 'Everything about Christian mission trips, in one place',
    tech: 'REACT · PHP',
    href: 'https://actnowmh.com/',
    preview: actnowmh,
  },
  {
    name: 'Scout',
    description: 'nmap for MCP/AI services — scan, verify & invoke local AI tools',
    tech: 'NODE · TS',
    href: 'https://github.com/maxchu0523/scout',
    preview: scout,
  },
  {
    name: 'This Website',
    description: "The site you're browsing. Bravo!",
    tech: 'REACT · TS',
    href: 'https://github.com/maxchu0523/maxchu0523.github.io',
    preview: maxPortfolio,
  },
];
