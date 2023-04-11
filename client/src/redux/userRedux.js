import axios from 'axios';
import { API_URL } from '../config';

export const getUser = ({ users }) => users.user;
export const getUserByLogin = ({ user }, login) =>
  user.find((user) => user.login === login);

  
// action name creator
const reducerName = 'users';
const createActionName = (actionName) => `app/${reducerName}/${actionName}`;

const LOAD_USERS = createActionName('LOAD_USERS');

const LOGIN_USER = createActionName('LOGIN_USER');
const LOGOUT_USER = createActionName('LOGOUT_USER');

export const loadUsers = (payload) => ({ payload, type: LOAD_USERS });
export const loginUser = (payload) => ({ payload, type: LOGIN_USER });
export const logoutUser = (payload) => ({ payload, type: LOGOUT_USER });

export const getAllUsers = (dispatch) => {
  return async (dispatch) => {
    let res = await axios.get(`${API_URL}/users/`);
    dispatch(loadUsers(res.data));
  };
};

export const addRegistrationRequest = (user) => {
  axios.post(`${API_URL}/auth/register`, user);
};

export const addLoginRequest = (user) => {
  return async (dispatch) => {
    let res = await axios.post(`${API_URL}/auth/login`, user, {
      withCredentials: true,
      headers: {
        Authorization: `user=${user.email}; SameSite=Lax`,
      },
    });
    dispatch(loginUser(res.data));
    sessionStorage.setItem('user', JSON.stringify(res.data));
  };
};

// initial state
const initialState = {
  data: [],
};

// action creators
const userReducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_USERS:
      return { ...statePart, data: [...action.payload] };
    default:
      return statePart;
  }
};

export default userReducer;
