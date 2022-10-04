import * as RadixAvatar from "@radix-ui/react-avatar";

/* eslint-disable-next-line */
export interface AvatarProps {
  height?: string;
  fallback?: string;
}

const Avatar = (props: AvatarProps) => {
  const { fallback } = props;

  return (
    <div>
      <RadixAvatar.Root className="flex h-10 w-10 items-center justify-center  overflow-hidden rounded-full">
        <RadixAvatar.Image
          className="h-full w-full select-none object-cover object-top"
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        />
        <RadixAvatar.Fallback className="flex h-full w-full items-center justify-center bg-gray-800 text-sm font-medium text-violet-300">
          {fallback}
        </RadixAvatar.Fallback>
      </RadixAvatar.Root>
    </div>
  );
};

const defaultAvatarProps = {
  fallback: "SM",
};

Avatar.defaultProps = defaultAvatarProps;

export default Avatar;
