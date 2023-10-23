import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

function PrivateRoute({ component }) {
  const navigate = useNavigate();
  const { user: obj } = useSelector(getUser);

  useEffect(() => {
    if (!obj.user || !obj.user.name) navigate('/login');
  }, [navigate, obj]);
  return component;
}

export default PrivateRoute;
