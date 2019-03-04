export const UNAUTHORIZED = 0;
export const ADMIN = 1;
export const USER = 2;

const UPDATE_FORM_VALUE = "account/UPDATE_FORM_VALUE";

const initialState = {
  username: 'testing',
  password: '',
  email: '',
  accountType: UNAUTHORIZED
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

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_VALUE: {
      const { payload } = action;
      const { fieldName, value } = payload;
      return { ...state, [fieldName]: value };
    }
    default: return state;
  }
}

export default accountReducer;