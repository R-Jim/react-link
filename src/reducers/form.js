export const FORM_SUBMIT_START = 'form/FORM_SUBMIT_START';
export const FORM_SUBMIT_SUCCESS = 'form/FORM_SUBMIT_SUCCESS';
export const FORM_SUBMIT_FAIL = 'form/FORM_SUBMIT_FAIL';
export const TOGGLE_MODAL = 'form/TOGGLE_MODAL';
const UPDATE_FORM_VALUE = 'form/UPDATE_FORM_VALUE';
const RESET_FORM = 'form/RESET_FORM';
export const CLEAR_ERROR = 'form/CLEAR_ERROR';

const initialState = {
  passwordChangeModalForm: {
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

export const selectForm = ({ form }, formName) => form[formName]

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

export const toggleModal = (formName, isOpen) => ({
  type: TOGGLE_MODAL,
  payload: {
    formName,
    isOpen,
  }
})

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      const { payload } = action;
      const { formName, isOpen } = payload;
      const form = state[formName];
      return {
        ...state,
        [formName]: {
          ...form,
          properties: {
            isOpen
          }
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

