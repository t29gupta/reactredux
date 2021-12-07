import { CREATE_COURSE } from "../types";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
