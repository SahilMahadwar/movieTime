import type { NextPage } from 'next';
import Backdrop from '../components/Backdrop/Backdrop';
import { MediaCard } from '../components/MediaCard/MediaCard';
import Navbar from '../components/Navbar/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      {/* <Backdrop height="h-[110px]" /> */}
      <div className="mx-auto mt-32  max-w-[1212px]  space-y-6 px-10 ">
        <h1 className="text-6xl font-bold ">Welcome.</h1>
        <p className="text-2xl font-medium max-w-[650px]  ">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
      </div>

      <div className="mx-auto mt-56 flex max-w-[1212px] flex-wrap  justify-between px-10 mb-[500px]">
        <MediaCard posterUrl="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6M7RMK2SokM82UNTeJOAOrdQpKM.jpg" />
        <MediaCard posterUrl="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qlrRi05x5hjoM29hz6TDLGTUSop.jpg" />
        <MediaCard posterUrl="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" />
        <MediaCard posterUrl="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ivQpKSYjTqs5DpoUAEyeFZsp7mM.jpg" />
      </div>
    </>
  );
};

export default Home;
