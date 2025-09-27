const Login = () => {
  return (
    <div className="container mx-auto px-6">
    
      <div>
        <form>
          <input type="email" className="border w-full my-1 rounded"></input>
          <input type="password" className="border w-full my-1 rounded"></input>
          <input
            type="submit"
            value="Login"
            className="border w-full my-1 rounded bg-amber-200"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Login;
