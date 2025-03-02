import ThemeSelect from "./themeSelect";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="h-20 w-full bg-amber-300 ">
      <ThemeSelect />
    </div>
  );
};

export default Navbar;
