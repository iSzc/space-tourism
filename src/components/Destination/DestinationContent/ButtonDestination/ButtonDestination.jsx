import style from "./style.module.css";

function ButtonDestination(props) {
  const { isActive, onClick } = props;

  return (
    <main
      className={`${isActive ? style.activeButton : ""} ${
        style.borderFix
      } h-10`}
    >
      <a
        className="Anchor tracking-widest text-[#979db9] w1024:text-base text-xl cursor-pointer"
        onClick={onClick}
      >
        {props.satelliteName}
      </a>
    </main>
  );
}

export default ButtonDestination;
