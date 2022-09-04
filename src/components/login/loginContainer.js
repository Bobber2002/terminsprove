const LoginContainer = () => {
  return (
    <div className="px-5 py-12 flex flex-col h-full">
      <div className="mb-12 pt-10 flex flex-col justify-center pl-5">
        <h2 className="font-bold text-5xl text-yellow-400 pb-3">
          Believe Yourself
        </h2>
        <p className="font-bold text-lg">Train like a pro</p>
      </div>
      <div>
        <p className="font-bold pb-4">Log in with your credentials</p>
        <div className="h-full flex flex-col gap-4">
          <div className="h-12 bg-white flex items-center px-6 border border-[#9e9e9e] rounded-full">
            <form action="">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email..."
                className="outline-none"
              />
            </form>
          </div>
          <div className="w-full h-12 bg-white flex items-center px-6 border border-[#9e9e9e] rounded-full">
            <form action="">
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter your password..."
                className="outline-none"
              />
            </form>
          </div>
          <div className="w-full h-12 bg-yellow-400 flex items-center rounded-full">
            <form action="" className="h-full w-full">
              <input type="button" value="LOG IN" onClick={()=>console.log('Login')} className="h-full w-full"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
