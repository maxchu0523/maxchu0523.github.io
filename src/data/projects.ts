import type { Project } from '../types';
import myPodium from '../assets/projects/myPodium.jpg';
import harilelaVip from '../assets/projects/harilelaVip.jpg';
import actnowmh from '../assets/projects/actnowmh.jpg';
import battleOfHongKong from '../assets/projects/battleOfHongKong.jpg';
import maxPortfolio from '../assets/projects/maxPortfolio.jpg';

export const projects: Project[] = [
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
    name: 'Battle of Hong Kong',
    description: 'Interactive history & infographics, WWII Hong Kong',
    tech: 'REACT · JS',
    href: 'https://maxchu0523.github.io/Battle-of-Hong-Kong/',
    preview: battleOfHongKong,
  },
  {
    name: 'This Website',
    description: "The site you're browsing. Bravo!",
    tech: 'REACT · TS',
    href: 'https://github.com/maxchu0523/maxchu0523.github.io',
    preview: maxPortfolio,
  },
];
