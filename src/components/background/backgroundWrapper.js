import AppContainer from "../../app_container/appContainer";

const BgWrapper = ({children}) => {
  return ( 
      <div id="BgWrapper" className="flex justify-center items-center h-full bg-slate-500">
          <AppContainer children={children}/>
      </div>
   );
}
 
export default BgWrapper;