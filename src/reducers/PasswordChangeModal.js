export const PASSWORD_CHANGE_START = 'passwordChangeModal/PASSWORD_CHANGE_START';
export const PASSWORD_CHANGE_SUCCESS = 'passwordChangeModal/PASSWORD_CHANGE_SUCCESS';
export const PASSWORD_CHANGE_FAIL = 'passwordChangeModal/PASSWORD_CHANGE_FAIL';
export const OPEN_MODAL = 'passwordChangeModal/OPEN_MODAL';
export const CLOSE_MODAL = 'passwordChangeModal/CLOSE_MODAL';
const UPDATE_FORM_VALUE = 'passwordChangeModal/UPDATE_FORM_VALUE';
const RESET_FORM = 'passwordChangeModal/RESET_FORM';

const initialState = {
  isOpen: false,
  oldPassword: '',
  newPassword: '',
  passwordChanged: false,
  passwordChanging: false,
  error: '',
}

export const selectIsOpen = ({ passwordChangeModal }) => passwordChangeModal.isOpen

export const selectFormData = ({ passwordChangeModal }) => passwordChangeModal


export const toggleModal = (isOpen) => {
  return {
    type: (isOpen) ? OPEN_MODAL : CLOSE_MODAL
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

export const changePassword = () => ({
  type: PASSWORD_CHANGE_START,
})

export const changePasswordSuccess = () => ({
  type: PASSWORD_CHANGE_SUCCESS,
})

export const changePasswordFail = () => ({
  type: PASSWORD_CHANGE_FAIL,
})

export const resetForm = () => ({
  type: RESET_FORM
})

const passwordChangeModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        isOpen: true
      }
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        isOpen: false
      }
    }
    case UPDATE_FORM_VALUE: {
      const { payload } = action;
      const { fieldName, value } = payload;
      return {
        ...state,
        [fieldName]: value
      }
    }
    case PASSWORD_CHANGE_START: {
      return {
        ...state,
        passwordChanging: true,
        passwordChanged: false,
      }
    }
    case PASSWORD_CHANGE_SUCCESS: {
      return {
        ...state,
        passwordChanging: false,
        passwordChanged: true,
      }
    }
    case PASSWORD_CHANGE_FAIL: {
      return {
        ...state,
        passwordChanging: false,
        passwordChanged: false,
        error: 'Old password not match'
      }
    }
    case RESET_FORM: {
      return initialState
    }
    default: {
      return state
    }
  }
}

export default passwordChangeModalReducer;
