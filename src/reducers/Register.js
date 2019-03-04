const UPDATE_FORM_VALUE = "register/UPDATE_FORM_VALUE";
const REGISTER_START = "register/REGISTER_START";
const REGISTER_SUCCESS = "register/REGISTER_SUCCESS";
const REGISTER_FAILED = "register/REGISTER_FAILED";

const initialState = {
  username: '',
  password: '',
  email: '',
  fullname: '',
  dob: '',
  registered: false,
  isRegistering: false,
}

export const selectUsername = ({ register }) => register.username;
export const selectPassword = ({ register }) => register.password;
export const selectEmail = ({ register }) => register.email;
export const selectFullname = ({ register }) => register.fullname;
export const selectDob = ({ register }) => register.dob;
export const selectRegistered = ({ register }) => register.registered;
export const selectIsRegistering = ({ register }) => register.isRegistering;

export const updateFormValue = (fieldName, value) => {
  return {
    type: UPDATE_FORM_VALUE,
    payload: {
      fieldName,
      value,
    }
  }
}

export const registerStart = () => ({
  type: REGISTER_START
})

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS
})

export const registerFailed = () => ({
  type: REGISTER_FAILED
})

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_VALUE: {
      const { payload } = action;
      const { fieldName, value } = payload;
      return {
        ...state,
        [fieldName]: value
      }
    }
    case REGISTER_START: {
      return {
        ...state,
        isRegistering: true,
        registered: false,
      }
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isRegistering: false,
        registered: true,
      }
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        isRegistering: false,
        registered: false,
        error: 'Username existed',
      }
    }
    default: return state;
  }
}

export default registerReducer;
