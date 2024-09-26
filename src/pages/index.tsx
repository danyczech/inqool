import { ReactElement } from 'react';
import { LinkCard } from '@/components/shared';
import { TLinkCard } from '@/components/customTypes';

const dataCards:Array<TLinkCard>= [
  {
    image:'/images/users.webp',
    title: 'Users',
    url: '/users',
  },
  {
    image: '/images/animals.webp',
    title: 'Animals',
    url: '/',
  }
];

const Home = ():ReactElement => (
  <div className="m-10">

    <main className="flex gap-8 items-center">
      {dataCards.map(({image, title, url}, index) => (
        <LinkCard 
          image={image}
          key={index}
          title={title}
          url={url}
        />
      ))}
    </main>

  </div>
);

export default Home;
