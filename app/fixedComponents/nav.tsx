import ThemeSelect from "./themeSelect";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="h-20 w-full bg-gray-200 dark:bg-gray-900 dark:text-gray-100 blue:text-gray-100 green:text-gray-100 red:text-gray-100 blue:bg-blue-600 green:bg-green-600 yellow:bg-yellow-600 red:bg-red-600  ">
      <ThemeSelect />
    </div>
  );
};

export default Navbar;
