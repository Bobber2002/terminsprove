import { GiMagnifyingGlass } from "react-icons/gi";

const Search = () => {
  return (
    <div className="flex items-center w-full h-11 bg-[#FBFBFB] border border-[#D4D4D4] rounded-full p-4 text-sm mb-6">
      <GiMagnifyingGlass color="#9E9E9E" />
      <form action="" className="pl-4">
        <input type="search" name="" id="" placeholder="Search classes" className="bg-inherit outline-none"/>
      </form>
    </div>
  );
};

export default Search;
