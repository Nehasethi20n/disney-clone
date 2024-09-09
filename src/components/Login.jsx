/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient";

// eslint-disable-next-line react/prop-types
const Login = ({ setToken }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill out all fields");
      return;
    }
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      console.log(data);
      setToken(data);
      navigate("/homepage");
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div className="grid grid-cols-2 h-screen bg-black">
      <div
        style={{
          backgroundImage: `linear-gradient(to left,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(${"/images/signIn.jpg"})`,
        }}
      ></div>
      <div className="ml-36">
        <h1 className="mt-24 text-xl font-semibold text-white">Log in or sign up to continue</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className="bg-black border border-gray-300 mt-5 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5"
          />

          <input
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
            className="bg-black border border-gray-300 mt-5 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5"
          />

          <button
            type="submit"
            className="mt-10 h-12 bg-blue-700 w-32 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        <div className="mt-3 text-lg font-semibold text-white">
          Don't have an account?
          <span className="text-blue-700 ml-2 hover:underline">
            <Link to="/signup">SignUp</Link>
          </span>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
