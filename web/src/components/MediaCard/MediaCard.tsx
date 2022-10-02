import React from 'react';

/* eslint-disable-next-line */
export interface MediaCardProps {}

export const MediaCard = (props: MediaCardProps) => {
  const {} = props;
  return (
    <div>
      <p className="text-2xl text-green-400">Hi i am a MediaCard</p>
    </div>
  );
};

const defaultMediaCardProps = {};

MediaCard.defaultProps = defaultMediaCardProps;
