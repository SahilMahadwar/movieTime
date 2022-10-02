/* eslint-disable-next-line */
export interface ComponentProps {}

/**
 * Primary UI component for user interaction
 */
export const Component = (props: ComponentProps) => {
  const {} = props;
  return (
    <div>
      <p>Hi i am a Component</p>
    </div>
  );
};

const defaultComponentProps = {};

Component.defaultProps = defaultComponentProps;
