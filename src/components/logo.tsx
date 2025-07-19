import { Link } from "react-router";
import { LogoIcons } from "../assets/icons/icons";

function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <LogoIcons />
      <span className="self-center text-2xl font-semibold font-mono whitespace-nowrap dark:text-white">
        Ibrahem
      </span>
    </Link>
  );
}

export default Logo;
