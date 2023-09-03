import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const { isLogin } = useSelector((state) => state.user);

  if (!isLogin) {
    return <Navigate to='/login' />
  }

  return <div>{children}</div>;
};

export default AuthLayout;
