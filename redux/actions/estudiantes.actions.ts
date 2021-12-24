

// Types
import { GET_DATA } from "../actionTypes";
import { Student } from "../../types";

export const setEstudiantes = (data: Student[]) => ({
  type: GET_DATA,
  payload: data,
});
