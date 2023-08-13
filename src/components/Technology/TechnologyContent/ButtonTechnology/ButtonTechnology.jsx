function ButtonTechnology(props) {
  const { isActive, onClick } = props;

  return (
    <div className="btnDiv flex">
      <button
        className={`btn w640:w-10 w640:h-10 w640:text-base w1024:w-16 w1024:h-16 w-20 h-20 rounded-full border-[1px] border-[#31333c] cursor-pointer text-3xl font-Bellefair hover:border-white  ${
          isActive ? "border-2 solid-white bg-white text-black" : "text-white"
        }`}
        onClick={onClick}
      >
        {props.num}
      </button>
    </div>
  );
}

export default ButtonTechnology;
