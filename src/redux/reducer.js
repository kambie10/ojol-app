import {combineReducers} from 'redux';

const initialState = {
  name: 'David Maulana',
};

const initialStateRegister = {
  title: 'Register Page',
  desc: 'Ini adalah desc untuk Register',
};

const RegisterReducer = (state = initialStateRegister, action) => {
  return state;
};

const initialStateLogin = {
  info: 'Tolong masukan password anda',
  isLogin: true,
};

const LoginReducer = (state = initialStateLogin, action) => {
  return state;
};

const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
});

export default reducer;
