import { updateStart, updateError, updateSuccess } from "./useSlice.js";
import axios from "axios";

export const updateAll = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post("/v1/update", user);
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateError());
  }
};
