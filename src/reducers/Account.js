const UPDATE_FORM_VALUE = "account/UPDATE_FORM_VALUE";

const initialState = {
  username: 'testing',
  password: '',
  email: '',
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