import { getRoleNames, getToken } from './../../context/AppContext.jsx';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({roles = ["User"], children }) => {
  
  if(!getToken()) return <Navigate replace to="/login"/>;
  if(!roles.every(value => {
    return getRoleNames()?.includes(value);
  })) return <Navigate replace to="/404"/>;

  return children;
}

export default PrivateRoute;
