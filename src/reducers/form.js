export const FORM_SUBMIT_START = 'form/FORM_SUBMIT_START';
export const FORM_SUBMIT_SUCCESS = 'form/FORM_SUBMIT_SUCCESS';
export const FORM_SUBMIT_FAIL = 'form/FORM_SUBMIT_FAIL';
export const UPDATE_FORM_PROPERTY = 'form/UPDATE_FORM_PROPERTY';
const LOAD_DATA_TO_FORM = 'form/LOAD_DATA_TO_FORM';
const UPDATE_FORM_VALUE = 'form/UPDATE_FORM_VALUE';
const RESET_FORM = 'form/RESET_FORM';
export const CLEAR_ERROR = 'form/CLEAR_ERROR';
export const LOAD_RESOURCES_TO_FORM = 'form/LOAD_RESOURCES_TO_FORM';

export const PASSWORD_CHANGE_FORM = 'PASSWORD_CHANGE_FORM';
export const EDIT_PROFILE_FORM = 'EDIT_PROFILE_FORM';

const initialState = {
  PASSWORD_CHANGE_FORM: {
    properties: {
      isOpen: false,
    },
    data: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    status: {
      loading: false,
      submited: false,
    },
    error: ''
  },
  EDIT_PROFILE_FORM: {
    data: {
      fullname: '',
      email: '',
      cakeDay: '',
    },
    status: {
      loading: false,
      submited: false,
    },
    error: ''
  }
}

export const submitForm = (formName) => ({
  type: FORM_SUBMIT_START,
  payload: formName,
})

export const formSubmitSuccess = (formName) => ({
  type: FORM_SUBMIT_SUCCESS,
  payload: {
    formName,
  }
})

export const formSubmitFail = (formName, error) => ({
  type: FORM_SUBMIT_FAIL,
  payload: {
    formName,
    error,
  }
})

export const selectForm = ({ form }, formName) => form[formName];

export const selectResources = ({ form }) => form.resources;

export const updateFormValue = (formName, fieldName, value) => ({
  type: UPDATE_FORM_VALUE,
  payload: {
    formName,
    fieldName,
    value,
  }
})

export const resetForm = (formName) => ({
  type: RESET_FORM,
  payload: {
    formName
  }
})

export const updateFormProperty = (formName, fieldName, value) => ({
  type: UPDATE_FORM_PROPERTY,
  payload: {
    formName,
    fieldName,
    value,
  }
})

export const loadDataToForm = (formName, data) => ({
  type: LOAD_DATA_TO_FORM,
  payload: {
    formName,
    data,
  }
})

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_PROPERTY: {
      const { payload } = action;
      const { formName, fieldName, value } = payload;
      const form = state[formName]
      const { properties } = form;
      return {
        ...state,
        [formName]: {
          ...form,
          properties: {
            ...properties,
            [fieldName]: value,
          }
        }
      }
    }
    case LOAD_DATA_TO_FORM: {
      const { payload } = action;
      const { formName, data } = payload;
      const form = state[formName]
      return {
        ...state,
        [formName]: {
          ...form,
          data,
        }
      }
    }
    case UPDATE_FORM_VALUE: {
      const { payload } = action;
      const { formName, fieldName, value } = payload;
      const form = state[formName]
      const { data } = form;
      return {
        ...state,
        [formName]: {
          ...form,
          data: {
            ...data,
            [fieldName]: value,
          }
        }
      }
    }
    case FORM_SUBMIT_START: {
      const formName = action.payload;
      const form = state[formName];
      return {
        ...state,
        [formName]: {
          ...form,
          status: {
            loading: true,
            submited: false,
          }
        }
      }
    }
    case FORM_SUBMIT_SUCCESS: {
      const formName = action.payload;
      const form = state[formName];
      return {
        ...state,
        [formName]: {
          ...form,
          status: {
            loading: false,
            submited: true,
          }
        }
      }
    }
    case FORM_SUBMIT_FAIL: {
      const { formName, error } = action.payload;
      const form = state[formName];
      return {
        ...state,
        [formName]: {
          ...form,
          status: {
            loading: false,
            submited: false,
          },
          error
        }
      }
    }
    case RESET_FORM: {
      const { formName } = action.payload;
      return {
        ...state,
        [formName]: initialState[formName]
      }
    }
    default:
      return state
  }
}

export default formReducer;
