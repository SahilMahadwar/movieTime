import React from 'react';

/* eslint-disable-next-line */
export interface TemplateProps {}

export const Template = (props: TemplateProps) => {
  const {} = props;
  return (
    <div>
      <p className="text-2xl ">Hi i am a Component Templet</p>
    </div>
  );
};

const defaultTemplateProps = {};

Template.defaultProps = defaultTemplateProps;
