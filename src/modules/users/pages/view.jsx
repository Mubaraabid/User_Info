import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"
import axios from "axios";

const View = () => {
  const { user_id } = useParams();
  const [details, setDetails] = useState([]);
console.log(user_id);
  useEffect(() => {
    axios.get(`http://localhost:3800/userview/${user_id}`)
      .then((res) => {
        toast.success(res.data.message);
        setDetails(res.data.details);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user_id]);

 console.log(details);
  const navigate = useNavigate()

  return (
    <div>
      {details.map((item) => (
        <div key={item._id}>
          <p><b>ID:</b> {item.id}</p>
          <p><b>Name:</b> {item.name}</p>
          <p><b>Email:</b> {item.email}</p>
          <p><b>Phone:</b> {item.phone}</p>
        </div>
      ))}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default View;

