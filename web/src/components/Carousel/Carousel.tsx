import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { MediaCard } from '../MediaCard/MediaCard';

import { movies } from './data';

/* eslint-disable-next-line */
export interface CarouselProps {}

export const Carousel = (props: CarouselProps) => {
  const [count, setCount] = useState(1);
  const [tuple, setTuple] = useState([null, count]);

  if (tuple[1] !== count) {
    setTuple([tuple[1], count]);
  }

  let prev: any = tuple[0];

  const direction = count > prev ? 'increasing' : 'decreasing';
  console.log(direction);

  return (
    <div className="w-full">
      <div className="flex justify-between w-full">
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Next
        </button>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="h-[500px] w-full flex items-center justify-center  relative">
          <AnimatePresence custom={direction}>
            <motion.div
              key={count}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              className={`absolute flex  space-x-10 items-center w-full `}
            >
              {movies.results.map((movie) => (
                <MediaCard
                  key={movie.poster_path}
                  posterUrl={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const defaultCarouselProps = {};

let variants = {
  enter: (direction: any) => ({ x: direction === 'increasing' ? 100 : -100 }),
  center: { x: 0 },
  exit: (direction: any) => ({ x: direction === 'increasing' ? -100 : 100 }),
};

Carousel.defaultProps = defaultCarouselProps;

// https://image.tmdb.org/t/p/w600_and_h900_bestv2
