import * as ClassCreateApi from "../Api/CreateClassRequest";

export const createClass = async (classData) => {
  try {
    const { data } = await ClassCreateApi.createClass(classData);
    console.log("Class created successfully:", data);
  } catch (error) {
    console.error("Error creating class:", error);
    throw error;
  }
};
