import * as actionTypes from "../constants/actionTypes";

const setDialog = (dialog = false, action) => {
  switch (action.type) {
    case actionTypes.SETDIALOG:
      return !dialog;
    default:
      return dialog;
  }
};

export default setDialog;
