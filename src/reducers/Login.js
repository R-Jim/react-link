import { ADMIN, USER, UNAUTHORIZED } from '../reducers/Account';
const UPDATE_FORM_VALUE = "login/UPDATE_FORM_VALUE";
const REGISTER_ACCOUNT = "login/REGISTER_ACCOUNT";
const CHECK_EXIST = "login/CHECK_EXIST";
const LOGIN = "login/LOGIN";

const initialState = {
  username: '',
  password: '',
  accountType: UNAUTHORIZED,
  accounts: [
    { username: 'admin', password: 'admin', accountType: ADMIN }
  ],
  loggedIn: false,
  exist: false,
}

export const updateFormValue = (fieldName, value) => {
  return {
    type: UPDATE_FORM_VALUE,
    payload: {
      fieldName,
      value,
    }
  }
}

export const login = (username, password) => {
  return {
    type: LOGIN,
    payload: {
      username,
      password
    }
  }
}

export const register = (username, password, email, fullname, dob) => {
  return {
    type: REGISTER_ACCOUNT,
    payload: {
      username,
      password,
      email,
      fullname,
      dob,
    }
  }
}

export const checkExist = (username) => {
  return {
    type: CHECK_EXIST,
    payload: {
      username
    }
  }
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_VALUE: {
      const { payload } = action;
      const { fieldName, value } = payload;
      return {
        ...state,
        [fieldName]: value
      }
    }
    case LOGIN: {
      const { payload } = action;
      const { username, password } = payload;
      const { accounts } = state;
      const account = accounts.find((account) => account.username === username && account.password === password);
      const loggedIn = accounts.some((account) => account.username === username && account.password === password);
      return {
        ...state,
        loggedIn,
        accountType: account.accountType
      }
    }
    case REGISTER_ACCOUNT: {
      const { payload } = action;
      const { username, password, email, fullname, dob } = payload;
      const accounts = [...state.accounts].concat({ username, password, email, fullname, dob, accountType: USER });
      return {
        ...state,
        accounts
      }
    }
    case CHECK_EXIST: {
      const { payload } = action;
      const { username } = payload;
      const { accounts } = state;
      const exist = accounts.some((account) => account.username === username);
      return {
        ...state,
        exist,
      }
    }
    default: return state;
  }
}

export default loginReducer;
