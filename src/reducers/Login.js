const UPDATE_FORM_VALUE = "login/UPDATE_FORM_VALUE";
const LOGIN = "login/LOGIN";

const initialState = {
  username: '',
  password: '',
  admin: { username: 'admin', password: 'admin' },
  requestLogin: false,
  loggedIn: false,
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

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_VALUE: {
      const payload = action.payload;
      const fieldName = payload.fieldName;
      const value = payload.value;
      return {
        ...state,
        [fieldName]: value
      }
    }
    case LOGIN: {
      const payload = action.payload;
      const username = payload.username;
      const password = payload.password;
      const admin = state.admin;
      const loggedIn = admin.username == username && admin.password == password;
      return {
        ...state,
        loggedIn: loggedIn,
        requestLogin: true,
      }
    }
    default: return state;
  }
}

export default loginReducer;
