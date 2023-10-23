import axios from 'axios';

const base = 'https://connections-api.herokuapp.com/';

axios.defaults.baseURL = base;

export const register = ({ email, password, name }) => {
  return axios.post('users/signup', { name, email, password });
};

export const login = ({ email, password }) => {
  return axios.post('users/login', { email, password });
};

export const logout = token => {
  return axios.post(
    'users/logout',
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const fetchUser = token => {
  return axios.get(
    base + 'users/current',
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const postContact = ({ token, number, name }) => {
  return axios.post(
    '/contacts',
    { name, number },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const getContacts = token => {
  return axios.get(
    '/contacts',
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const killContact = ({id, token})=>{

return axios.delete("contacts/"+id,{
  headers: {
    Authorization: token,
  },
})
}

export const metamorphContacts = ({id, token, name, number})=>{
return axios.patch("contacts/"+id,{name, number},{
  headers: {
    Authorization: token,
  },})
}
