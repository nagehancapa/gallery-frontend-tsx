import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMessage } from "../../store/appState/selectors";
import { Alert } from "react-bootstrap";
import { clearMessage } from "../../store/appState/actions";
import { Message } from "../../store/appState/types";

export default function MessageBox() {
  const message: Message = useSelector(selectMessage);
  const dispatch = useDispatch();
  const showMessage = message !== null;
  if (!showMessage) return null;

  return (
    <Alert
      show={showMessage}
      variant={message.variant}
      dismissible={message.dismissable}
      onClose={() => dispatch(clearMessage())}
    >
      {message.text}
    </Alert>
  );
}
