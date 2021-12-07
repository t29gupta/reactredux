import { CREATE_COURSE } from "../types";

export const createCourse = (course) => (dispatch) => {
  dispatch({ type: CREATE_COURSE, course });
};
