import { motion } from 'framer-motion';

/* eslint-disable-next-line */
export interface MediaCardProps {
  posterUrl?: string;
}

export const MediaCard = (props: MediaCardProps) => {
  const { posterUrl } = props;

  return (
    <motion.div
      whileTap={{ scale: 1 }}
      whileHover={{ scale: 1.04 }}
      className=" flex w-[255px] flex-col space-y-1  cursor-pointer select-none "
    >
      <motion.div className="relative h-[370px] w-[255px] overflow-hidden rounded-lg ">
        <div className="absolute top-4 left-4  rounded-lg bg-black px-2 py-1">
          8.0
        </div>
        <motion.img
          // whileHover={{ scale: 1.04 }}
          src={posterUrl}
          alt="movie poster"
          className="h-full w-full select-none object-cover object-center"
          placeholder="s"
        />
      </motion.div>
      <div className="space-y-1 py-2 px-4">
        <p className="text-lg font-semibold">How I Met Your Mother</p>
        <p className="text-sm text-gray-400">Sep 20, 1999</p>
      </div>
    </motion.div>
  );
};

const defaultMediaCardProps = {
  posterUrl:
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r7XifzvtezNt31ypvsmb6Oqxw49.jpg',
};

MediaCard.defaultProps = defaultMediaCardProps;
