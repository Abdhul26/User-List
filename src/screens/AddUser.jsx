import MainScreen from "../components/MainScreen";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./adduser.css";

const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <MainScreen title="List Of User Details">
        <div className="box">
          <input
            type="text"
            placeholder="Name"
            {...register("Name", { required: true, maxLength: 80 })}
          />
          <div className="gender">
            <h4>Gender</h4>
            <select
              value="Gender"
              name="Gender"
              {...register("Gender", { required: true })}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type="tel"
            placeholder="Mobile number"
            {...register("Mobile number", {
              required: true,
              maxLength: 10,
              pattern: /^\d{10}$/,
            })}
          />
          <input
            type="number"
            placeholder="Pincode"
            {...register("Pincode", {
              required: true,
              pattern: /^\d{6}$/,
            })}
          />

          <div className="city">
            <h4>city</h4>
            <select {...register}>
              <option value="Chennai">Chennai</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Banglore">Banglore</option>
              <option value="Kolkatta">Kolkatta</option>
            </select>
          </div>

          <input className="submit" type="submit" />
        </div>
      </MainScreen>
    </form>
  );
};

export default AddUser;
