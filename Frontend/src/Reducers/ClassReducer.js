const initialState = { uploading: false, classes: [], loading: false };

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLASS_UPLOAD_START":
      return { ...state, uploading: true };
    case "CLASS_UPLOAD_SUCCESS":
      return {
        ...state,
        uploading: false,
        classes: [...state.classes, action.data],
      };
    case "CLASS_UPLOAD_FAIL":
      return { ...state, uploading: false };
    case "CLASS_FETCH_START":
      return { ...state, loading: true };
    case "CLASS_FETCH_SUCCESS":
      return { ...state, loading: false, classes: action.data };
    case "CLASS_FETCH_FAIL":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default classReducer;
