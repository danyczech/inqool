import LinkCard, { TLinkCard } from "@/components/shared/LinkCard/LinkCard";


const dataCards:Array<TLinkCard>= [
  {
    image:'/images/users.webp',
    title: 'Users',
    url: '/',
  },
  {
    image: '/images/animals.webp',
    title: 'Animals',
    url: '/',
  }
];

const Home = () => (
    <div className="m-10">

      <main className="flex gap-8 items-center">
        {dataCards.map(({image, title, url}, index) => (
          <LinkCard 
            image={image}
            key={index}
            title={title}
            url={url}
          />
        ))
        }
      </main>

    </div>
  );


export default Home;
