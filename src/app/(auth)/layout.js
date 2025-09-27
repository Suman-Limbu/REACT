
const AuthLayout = ({children}) => {
  return (
    <div>  <h1 className="text-2xl text-green-600 bg-green-100 text-center rounded-2xl">
        welcome to ShopNest
      </h1>
      {children}
</div>
  )
}

export default AuthLayout;