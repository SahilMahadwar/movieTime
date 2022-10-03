import React from 'react';

/* eslint-disable-next-line */
export interface TemplateProps {}

export const Template = (props: TemplateProps) => {
  const {} = props;
  return (
    <div>
      <p className="text-2xl text-green-400">Hi i am a MediaCard</p>
    </div>
  );
};

const defaultTemplateProps = {};

Template.defaultProps = defaultTemplateProps;
