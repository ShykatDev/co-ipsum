import Hamburger from "./Hamburger";
import Logo from "./Logo";
import MenuPanel from "./MenuPanel";

const TopBar = () => {
  return (
    <>
      <nav className="fixed top-[3%] sm:top-10 md:top-[3%] w-full flex justify-between items-center px-4 sm:px-8 md:px-16 h-fit z-50 mix-blend-difference">
        <Logo />

        <Hamburger />
      </nav>
      <MenuPanel />
    </>
  );
};

export default TopBar;
