export const LOAD_RESOURCE = 'resource/LOAD_RESOURCE';

const initialState = {
  countries: [],
}

export const selectResource = ({ resource }) => (resource)

export const loadResource = (resourceName, value) => ({
  type: LOAD_RESOURCE,
  payload: {
    resourceName,
    value
  }
})

const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RESOURCE: {
      const { payload } = action;
      const { resourceName, value } = payload;
      return {
        ...state,
        [resourceName]: value
      }
    }
    default: return state;
  }
}

export default resourceReducer;
