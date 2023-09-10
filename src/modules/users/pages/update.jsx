import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Update = () => {
  const { user_id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleOnChange = (e) =>
    setDetails({...details, [e.target.name]: e.target.value,
    });

  const handleUpdateUser = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:3800/userupdate/${user_id}`, details)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/user/index");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error updating user");
      });
  };

  return (
    <form>
      <label>Name:</label>
      <br />
      <input
        type="text"
        name="name"
        value={details.name}
        onChange={handleOnChange}
      />
      <br />
      <label>Email:</label>
      <br />
      <input
        type="text"
        name="email"
        value={details.email}
        onChange={handleOnChange}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        type="text"
        name="phone"
        value={details.phone}
        onChange={handleOnChange}
      />
      <br />
      <button onClick={handleUpdateUser}>Update</button>
    </form>
  );
};

export default Update;
