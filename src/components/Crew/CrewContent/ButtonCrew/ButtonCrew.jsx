import style from "./style.module.css";

function ButtonCrew(props) {
  const { isActive, onClick } = props;

  return (
    <div className="btnDiv flex">
      <a
        className={`btn w1024:w-3 w1024:h-3 w-4 h-4 rounded-full bg-[#848589] bg-opacity-40 cursor-pointer hover:bg-white border-none ${
          isActive ? style.activeButton : ""
        }`}
        onClick={onClick}
      ></a>
    </div>
  );
}

export default ButtonCrew;
