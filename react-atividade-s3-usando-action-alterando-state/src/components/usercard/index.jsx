import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import { useState } from "react";

const UserCard = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    console.log(user);
    dispatch(changeName(name));
  };

  return (
    <div>
      <h2>User name: {user.name}</h2>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default UserCard;
