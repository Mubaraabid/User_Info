import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Create = () => {
  const [data, setData] = useState({
    id:Math.random(),
    name: "",
    email: "",
    phone:""
  });
  
  const handleOnChange = (e) =>
    setData({...data, [e.target.name]: e.target.value,
    });
  const handleCreateUser = (e) => {
    e.preventDefault();

setData({
      id:Math.random(),
      name: "",
      email: "",
      phone:"",
    });
      axios.post("http://localhost:3800/usercreate", data)
      .then((res) => toast.success(res.data.message))
      .catch((err) => console.log(err));

    
    toast.success("User Created Successfully");
  };

  return (  
      <form>
      <label>Name:</label>
      <br />
      <input
        type='text'
        name='name'
        value={data.name}
        onChange={handleOnChange}
      />
      <br />
      <label>Email:</label>
      <br />
      <input
        type='text'
        name='email'
        value={data.email}
        onChange={handleOnChange}
      />
      <br />
      <label>Phone:</label>
      <br />
       <input
        type='text'
        name='phone'
        value={data.phone}
        onChange={handleOnChange}
      />
      <br />
      <br />
      <button onClick={handleCreateUser}>Create</button>
    </form>
   
  );
};

export default Create;
