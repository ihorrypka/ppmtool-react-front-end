import axios from "axios";
import {
  GET_BACKLOG,
  GET_PROJECT_TASK,
  DELETE_PROJECT_TASK,
  GET_ERRORS
} from "./types";

export const addProjectTask = (
  backlog_id,
  project_task,
  history
) => async dispatch => {
  await axios.post(`/api/backlog/${backlog_id}`, project_task);
  history.push(`/projectBoard/${backlog_id}`);
};
