import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import Avatar from '../Avatar/Avatar';

/* eslint-disable-next-line */
export interface UserDropdownMenuProps {
  height?: string;
  fallback?: string;
}

const UserDropdownMenu = () => {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="flex items-center rounded-full text-sm font-medium text-white outline-none hover:text-blue-600  focus:ring-0  dark:hover:text-blue-500 md:mr-0">
          <span className="mr-0.5">
            <Avatar />
          </span>

          <svg
            className="h-4 w-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align="end"
            className=" mt-2.5 z-30  w-44  divide-y divide-gray-100   rounded bg-white text-gray-800 shadow"
          >
            <div className="py-3 px-4 text-sm text-gray-900">
              <div className="truncate">Bonnie Green</div>
              <div className="truncate font-medium">name@movietime.com</div>
            </div>

            <DropdownMenu.Group className="py-1 text-sm text-gray-700">
              <DropdownMenu.Item className="block cursor-pointer  py-2 px-4 hover:bg-gray-100 ">
                <a href="google.com">My Suggestions</a>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="block  cursor-pointer py-2 px-4  hover:bg-gray-100">
                <a href="google.com">My Lists</a>
              </DropdownMenu.Item>
            </DropdownMenu.Group>

            <div className="w-full py-1  text-sm text-gray-700">
              <button className=" inline-flex  w-full cursor-pointer py-2 px-4  hover:bg-gray-100">
                Logout
              </button>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
};

const defaultUserDropdownMenu = {
  fallback: 'SM',
};

UserDropdownMenu.defaultProps = defaultUserDropdownMenu;

export default UserDropdownMenu;
