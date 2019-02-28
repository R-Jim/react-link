const UPDATE_FORM_VALUE = "register/UPDATE_FORM_VALUE"

const initialState = {
  username: '',
  password: '',
  email: '',
  fullname: '',
  dob: '',
  registered: false,
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
    default: return state;
  }
}

export default registerReducer;
