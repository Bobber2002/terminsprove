import { GiMagnifyingGlass } from "react-icons/gi";

const Search = ({ query, setQuery }) => {

  function handleSearch(e) {

    let input = document.getElementById('searchInput');

    setQuery(input.value)

    console.log(query);
    
    e.preventDefault();
    
  }


  return (
    <div className="flex items-center w-full h-11 bg-[#FBFBFB] border border-[#D4D4D4] rounded-full p-4 text-sm mb-6">
      <GiMagnifyingGlass color="#9E9E9E" />
      <form onSubmit={handleSearch}>
          <input
            type="text"
            name=""
            id="searchInput"
            placeholder="Search classes"
            className="bg-inherit outline-none pl-3"
          />
      </form>
    </div>
  );
};

export default Search;
