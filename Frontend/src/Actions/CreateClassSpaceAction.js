import * as api from "../Api/CreateClassSpaceRequest";

export const createClassSpace = (classSpaceData) => async (dispatch) => {
  try {
    dispatch({ type: "UPLOAD_START" });
    const { data } = await api.createClassSpace(classSpaceData);
    dispatch({ type: "UPLOAD_SUCCESS", data });
    console.log(data);
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL", error });
  }
};

export const getClassSpaces = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_START" });
    const { data } = await api.getClassSpaces();
    dispatch({ type: "FETCH_SUCCESS", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "FETCH_FAIL", error });
  }
};
