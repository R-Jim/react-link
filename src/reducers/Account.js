export const UNAUTHORIZED = 0;
export const ADMIN = 1;
export const USER = 2;

const LOAD_ACCOUNT = 'account/LOAD_ACCOUNT';
const CHANGE_PASSWORD = 'account/CHANGE_PASSWORD';
const REGISTER_ACCOUNT = 'account/REGISTER_ACCOUNT';
const UPDATE_FORM_VALUE = 'account/UPDATE_FORM_VALUE';
const ACCOUNT_PROFILE_UPDATE = 'account/ACCOUNT_PROFILE_UPDATE';

const initialState = {
  accounts: [
    { username: 'user', password: 'user', fullname: 'user a user', email: 'user@gmail.com', cakeDay: '24/11/1997', accountType: USER },
    { username: 'admin', password: 'admin', email: 'admin@gmail.com', accountType: ADMIN }
  ],
  currentAccount: {
    username: 'testing',
    password: '',
    email: '',
    accountType: UNAUTHORIZED,
  }
}

export const updateFormValue = (fieldName, value) => {
  return {
    type: UPDATE_FORM_VALUE,
    payload: {
      fieldName,
      value
    }
  }
}

export const register = ({ username, password, email, fullname, dob }) => {
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

export const loadAccount = (username) => {
  return {
    type: LOAD_ACCOUNT,
    payload: {
      username
    }
  }
}

export const changePassword = (username, newPassword) => {
  return {
    type: CHANGE_PASSWORD,
    payload: {
      username,
      newPassword,
    }
  }
}

export const checkExistUsername = ({ account }, username) => {
  return account.accounts.some((acc) => acc.username === username);
}

export const selectAccount = (state, username, password) => {
  const { account } = state;
  return account.accounts.find((acc) => acc.username === username && acc.password === password);
}

export const selectCurrentAccount = ({ account }) => account.currentAccount;

export const selectAccountList = (state) => {
  const { account } = state;
  return account.accounts;
}

export const accountProfileUpdate = (account) => ({
  type: ACCOUNT_PROFILE_UPDATE,
  payload: account,
})

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_VALUE: {
      const { payload } = action;
      const { fieldName, value } = payload;
      return { ...state, [fieldName]: value };
    }
    case REGISTER_ACCOUNT: {
      const { payload } = action;
      const accounts = [...state.accounts].concat({ ...payload, accountType: USER });
      return {
        ...state,
        accounts
      }
    }
    case LOAD_ACCOUNT: {
      const { username } = action.payload;
      const currentAccount = state.accounts.find(acc => acc.username === username);
      return {
        ...state,
        currentAccount,
      }
    }
    case CHANGE_PASSWORD: {
      const { username, newPassword } = action.payload;
      const currentAccount = state.accounts.find(acc => acc.username === username);
      currentAccount.password = newPassword;
      return {
        ...state,
        currentAccount,
      }
    }
    case ACCOUNT_PROFILE_UPDATE: {
      const { username, fullname } = action.payload;
      const currentAccount = state.accounts.find(acc => acc.username === username);
      currentAccount.fullname = fullname;
      return {
        ...state,
        currentAccount,
      }
    }
    default: return state;
  }
}

export default accountReducer;
