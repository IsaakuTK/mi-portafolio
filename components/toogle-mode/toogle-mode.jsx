export const ToogleMode = () =>  {

  return (
    <div className="relative w-[100px] h-[50px]">
    <label className="absolute w-full h-[50px] bg-[#28292c] rounded-[25px] cursor-pointer border-3 border-[#28292c]">
        <input type="checkbox" className="absolute hidden"/>
        <span className="absolute w-full h-full rounded-[25px] transition-all duration-300">
        <span className="absolute top-[10px] left-[10px] w-[25px] h-[25px] rounded-full bg-[#28292c] shadow-[inset_12px_-4px_0px_0px_#d8dbe0] transition-all duration-300"></span>
        </span>
    </label>
    </div>
  );
}