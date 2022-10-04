/* eslint-disable-next-line */
export interface BackDropProps {
  height?: string;
}

const Backdrop = (props: BackDropProps) => {
  const { height } = props;
  return (
    <div
      className={`absolute -top-8 bottom-0 right-0 left-0 -z-30  ${height} select-none overflow-hidden `}
    >
      <div className="from-bg-brand absolute bottom-0 left-0 -z-20 h-3/4 w-full bg-gradient-to-t"></div>
      <div className="absolute -z-30 h-full w-full  overflow-hidden opacity-25 ">
        <img
          src="https://www.themoviedb.org/t/p/original/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg"
          alt="movie poster"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

const defaultBackDropProps = {
  height: 'h-[600px]',
};

Backdrop.defaultProps = defaultBackDropProps;

export default Backdrop;
