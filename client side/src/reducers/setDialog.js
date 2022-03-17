const setDialog = (dialog = false, action) => {
  switch (action.type) {
    case "SETDIALOG":
      return !dialog;
    default:
      return dialog;
  }
};

export default setDialog;
