
const AppContainer = ({children}) => {
  return (
    <div id="appContainer" className="flex flex-col justify-between w-[375px] h-[812px] bg-white">
      {children}
    </div>
  );
};

export default AppContainer;
