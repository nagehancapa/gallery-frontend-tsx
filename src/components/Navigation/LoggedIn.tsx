import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser, selectArtist } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isArtist = useSelector(selectArtist);

  const loginLogoutControls = isArtist && (
    <Nav.Link as={Link} to="/startAuction">
      Start an auction
    </Nav.Link>
  );

  return (
    <>
      {loginLogoutControls}
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{user.email}</Nav.Item>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
