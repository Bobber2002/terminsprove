import SearchContainer from "../../components/search/searchContainer";

const SearchPage = ({setNavState, navState}) => {
  return ( 
    <div>
      <SearchContainer navState={navState} setNavState={setNavState}/>
    </div>
   );
}
 
export default SearchPage;