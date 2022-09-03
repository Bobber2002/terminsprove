import { GiHamburgerMenu } from "react-icons/gi";

const Menu = ({setNavState, navState}) => {
  return ( 
    <GiHamburgerMenu
    color="#9E9E9E"
    size="1.4rem"
    onClick={() => setNavState(!navState)}
  />
   );
}
 
export default Menu;