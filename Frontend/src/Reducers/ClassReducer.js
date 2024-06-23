const initialState = { uploading: false, classes: [], loading: false };

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, uploading: true };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        uploading: false,
        classes: [...state.classes, action.data],
      };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false };
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, classes: action.data };
    case "FETCH_FAIL":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default classReducer;
