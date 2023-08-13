import imgLogo from "/images/logo.svg";
import { Link } from "react-router-dom";
import ButtonHeader from "./ButtonHeader/ButtonHeader";

function Header() {
  return (
    <header className="main h-24 w-full flex flex-row items-center justify-between absolute w1024:mt-0 mt-8 z-1 w425:flex-col w640:items-start w425:h-36">
      <div className="divImg w-14 rounded-full flex items-center w1024:ml-6 absolute ml-16 w640:hidden">
        <figure className="img">
          <img src={imgLogo} alt="Logo Image" />
        </figure>
      </div>
      <hr className="grow border-[0.1] border-white border-opacity-25  ml-36 z-20" />
      <div
        className={`divHeader w1024:h-20 w1024:min-w-[440px] min-w-[800px] flex w1024:justify-around w640:justify-center w640:gap-x-6 w480:gap-x-4 w640:min-w-[300px] w640:justify-around w640:w-full w1024:gap-x-0 justify-center gap-x-16 w640:bg-transparent bg-gray-500 bg-opacity-20 z-0 backdrop-blur-xl rounded-s shadow-btnHeader  w640:absolute w640:px-2 w640:my-2 `}
      >
        <Link to="/">
          <ButtonHeader buttonNum="0 0" buttonName="H O M E" />
        </Link>
        <Link to="/destination">
          <ButtonHeader buttonNum="0 1" buttonName="D E S T I N A T I O N" />
        </Link>
        <Link to="/crew">
          <ButtonHeader buttonNum="0 2" buttonName="C R E W" />
        </Link>
        <Link to="/technology">
          <ButtonHeader buttonNum="0 3" buttonName="T E C H N O L O G Y " />
        </Link>
      </div>
    </header>
  );
}

export default Header;
