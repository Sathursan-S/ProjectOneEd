// const initialState = { uploading: false, classes: [], loading: false };
//
// const classReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "UPLOAD_START":
//       return { ...state, uploading: true };
//     case "UPLOAD_SUCCESS":
//       return {
//         ...state,
//         uploading: false,
//         classes: [...state.classes, action.data],
//       };
//     case "UPLOAD_FAIL":
//       return { ...state, uploading: false };
//     case "FETCH_START":
//       return { ...state, loading: true };
//     case "FETCH_SUCCESS":
//       return { ...state, loading: false, classes: action.data };
//     case "FETCH_FAIL":
//       return { ...state, loading: false };
//     default:
//       return state;
//   }
// };
//
// export default classReducer;

// src/reducers/classReducer.js
// src/reducers/classReducer.js
import {
  FETCH_CLASSES_REQUEST,
  FETCH_CLASSES_SUCCESS,
  FETCH_CLASSES_FAILURE,
  FETCH_CLASS_BY_ID_REQUEST,
  FETCH_CLASS_BY_ID_SUCCESS,
  FETCH_CLASS_BY_ID_FAILURE,
} from '../Actions/ClassActions';

const initialState = {
  loading: false,
  classes: [],
  error: '',
  currentClass: null, // to store details of the current class by ID
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CLASSES_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: action.payload,
        error: '',
      };
    case FETCH_CLASSES_FAILURE:
      return {
        ...state,
        loading: false,
        classes: [],
        error: action.payload,
      };
    case FETCH_CLASS_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        currentClass: null,
      };
    case FETCH_CLASS_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        currentClass: action.payload,
        error: '',
      };
    case FETCH_CLASS_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        currentClass: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default classReducer;




