const HomeContainer = () => {
  return (
    <div className="px-5 py-12 flex flex-col">
      <header className="flex justify-between pb-6">
        <h2 className="text-2xl">Popular classes</h2>
        <p>X</p>
      </header>
      <div className='flex flex-col-reverse h-96 rounded-2xl mb-12 bg-[url("https://via.placeholder.com/500")]'>
        <div className="flex flex-col justify-center font-bold text-md px-3 w-2/3 h-1/5 bg-yellow-400 rounded-tr-[56px]">
          <p>Lower abs workout</p>
          <div id="Starts" className="w-[45%] flex justify-between">
            <span>x</span>
            <span>x</span>
            <span>x</span>
            <span>x</span>
            <span>x</span>
          </div>
        </div>
      </div>
      <div id="ChooseClasses">
        <h3 className="font-extrabold text-xl mb-4">Classes for you</h3>
        <div className='flex flex-col-reverse w-36 h-48 rounded-t-2xl rounded-bl-2xl bg-[url("https://via.placeholder.com/200")]'>
          <div className="flex flex-col justify-center w-full h-[28%] px-3 bg-yellow-400 font-bold rounded-tr-[36px]">
            <p className='text-sm'>DAily go pro*</p>
            <div id="Starts" className="w-[45%] flex justify-between">
              <span>x</span>
              <span>x</span>
              <span>x</span>
              <span>x</span>
              <span>x</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
