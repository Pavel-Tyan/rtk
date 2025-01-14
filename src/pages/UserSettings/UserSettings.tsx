import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userActions } from "../../redux/userSlice";
import { Link, useLocation } from "react-router";
import styles from "./UserSettings.module.css";
export const UserSettings = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[1];

  const user = useAppSelector((state) =>
    state.users.userList.find((user) => user.id === id)
  );

  const [name, setName] = useState<string>(user?.name || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(userActions.updateUserNameById({ id, newName: name }));
  };

  return (
    <div className={styles["wrapper"]}>
      <Link to={"/"}>Return to main page</Link>
      <input type="text" value={name} onChange={handleChange}></input>
      <button onClick={handleClick}>Save</button>
    </div>
  );
};
