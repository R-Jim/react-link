export const UPDATE_FORM_VALUE = "login/UPDATE_FORM_VALUE";
export const LOGIN_START = "login/LOGIN_START";
export const LOGIN_SUCCESS = "login/LOGIN_SUCCESS";
export const LOGIN_FAILED = "login/LOGIN_FAILED";

const initialState = {
  username: '',
  password: '',
  loggedIn: false,
  isLogging: false,
  error: '',
}

export const selectError = ({ login }) => login.error;

export const selectUsername = ({ login }) => login.username;

export const selectPassword = ({ login }) => login.password;

export const selectLoggedIn = ({ login }) => login.loggedIn;

export const selectLoginStatus = ({ login }) => login.isLogging;

export const updateFormValue = (fieldName, value) => {
  return {
    type: UPDATE_FORM_VALUE,
    payload: {
      fieldName,
      value,
    }
  }
}

export const login = () => {
  return {
    type: LOGIN_START,
  }
}

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  }
}

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: {
      error,
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
    case LOGIN_START: {
      return {
        ...state,
        isLogging: true,
        loggedIn: false,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLogging: false,
        loggedIn: true,
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isLogging: false,
        loggedIn: false,
        error: 'Username or password incorrect',
      }
    }
    default: return state;
  }
}

export default loginReducer;
