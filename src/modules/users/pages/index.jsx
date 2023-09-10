import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Index = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

    const deleteUser = (idToDelete) => {
      axios.get(`http://localhost:3800/userdelete/${idToDelete}`)
        .then((res) => {
          toast.success(res.data.message);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err); 
          toast.error("An error occurred");
        });
    };

  useEffect(() => {
    axios.get("http://localhost:3800/userlist")
      .then((res) => {
        toast.success(res.data.message);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        
        {data.map((ele) => (
          <tr key={ele.id}>
            <td>{ele.name}</td>
            <td>{ele.email}</td>
            <td>
              <button onClick={() => deleteUser(ele.id)}>
                Delete
              </button>
            </td>
            <td>
              <button onClick={() => navigate("/user/view/"+ele.id)}>
                View
              </button>
            </td>
            <td>
              <button onClick={() => navigate("/user/update/" + ele.id)}>
                Edit
              </button>
            </td>
            
          </tr>
        ))}
      </table>
    </>
  );
};

export default Index;
