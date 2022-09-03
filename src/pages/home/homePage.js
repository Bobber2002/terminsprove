import HomeContainer from "../../components/home/homeContainer";

const HomePage = ({setNavState, navState}) => {
  return ( 
    <>
      <HomeContainer navState={navState} setNavState={setNavState}/>
    </>
   );
}
 
export default HomePage;