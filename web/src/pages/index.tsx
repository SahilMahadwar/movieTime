import type { NextPage } from 'next';
import Backdrop from '../components/Backdrop/Backdrop';
import { Carousel } from '../components/Carousel/Carousel';
import { movies } from '../components/Carousel/data';
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

      <div className="mx-auto mt-56 max-w-[1212px] px-10 mb-[100px] ">
        <div className="grid  grid-cols-4  gap-10 gap-y-14">
          {movies.results.map((movie) => (
            <MediaCard
              key={movie.poster_path}
              title={movie.title}
              releaseDate={movie.release_date}
              posterUrl={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-56 flex max-w-[1212px] mb-[200px] px-10">
        <Carousel />
      </div>
    </>
  );
};

export default Home;
