import * as ClassSpaceCreateApi from "../Api/CreateClassSpaceRequest";

export const createClassSpace = async (classSpaceData) => {
  try {
    const { data } = await ClassSpaceCreateApi.createClassSpace(classSpaceData);
    console.log("Class space created successfully:", data);
  } catch (error) {
    console.error("Error creating class:", error);
    throw error;
  }
};
