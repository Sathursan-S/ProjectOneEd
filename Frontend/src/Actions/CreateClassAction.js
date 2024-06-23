import * as api from "../Api/CreateClassRequest";

export const createClass = (classData) => async (dispatch) => {
  try {
    dispatch({ type: "UPLOAD_START" });
    const { data } = await api.createClass(classData);
    dispatch({ type: "UPLOAD_SUCCESS", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL", error });
  }
};

export const getClasses = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_START" });
    const { data } = await api.getClasses();
    dispatch({ type: "FETCH_SUCCESS", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "FETCH_FAIL", error });
  }
};
