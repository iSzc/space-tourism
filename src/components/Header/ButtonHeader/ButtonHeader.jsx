function ButtonHeader(props) {
  return (
    <main className="mainBtn hover:border-b-white border-b-[2px] border-transparent ">
      <div className="divBtn h-20 bg-transparent font-bold font-Barlow font-base flex justify-center items-center gap-x-3 ">
        <button className="btnNum font-light cursor-pointer bg-none border-none text-white w640:text-white  w1024:hidden  w1440:font-bold z-20 ">
          {props.buttonNum}
        </button>
        <button className="btnName cursor-pointer font-light font-Barlow font-base bg-none text-white w1440:tracking-tighter no-underline ">
          {props.buttonName}
        </button>
      </div>
    </main>
  );
}

export default ButtonHeader;
