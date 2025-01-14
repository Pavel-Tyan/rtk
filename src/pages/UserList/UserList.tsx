import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router";
import styles from "./UserList.module.css";

export const UserList = () => {
  const navigate = useNavigate();
  const users = useAppSelector((state) => state.users.userList);

  return (
    <div className={styles["wrapper"]}>
      {users.map((user) => (
        <button key={user.id} onClick={() => navigate(`/${user.id}`)}>
          <p>{user.name}</p>
        </button>
      ))}
    </div>
  );
};
