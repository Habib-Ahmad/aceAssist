import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Toastr from "toastr";
import RegularInputBox from "../components/InputBoxes/RegularInputBox";
import api from "../utils/api";
import { ADMIN_TOKEN } from "../utils/token";
<<<<<<< HEAD
import { USER_DATA } from "../utils/localstorage";
=======
import { ADMIN_DATA } from "../utils/localstorage";
>>>>>>> 78e51c350a4c95d3aa5facf4a7522a2908915c88

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    try {
      const { data } = await api.post("/admin/login", state);
      localStorage.setItem(ADMIN_TOKEN, data.token);
<<<<<<< HEAD
      localStorage.setItem(USER_DATA, JSON.stringify(data.userData));
=======
      localStorage.setItem(ADMIN_DATA, JSON.stringify(data.userData));
>>>>>>> 78e51c350a4c95d3aa5facf4a7522a2908915c88
      Toastr.success("Success");
      window.location.replace("/home");
    } catch (error) {
      Toastr.error("Invalid credentials");
    }
  };
  return (
    <div className="home flex justify-center items-center h-screen w-screen">
      <div className="w-2/5">
        <RegularInputBox
          name="email"
          value={state.email}
          cb={(e) => setState({ ...state, email: e.target.value })}
          label="Email"
          type="email"
        />
        <RegularInputBox
          name="password"
          value={state.password}
          cb={(e) => setState({ ...state, password: e.target.value })}
          label="Password"
          type="password"
        />
        <div className="w-full mt-4 flex justify-center">
          <Button
            onClick={login}
            className="w-6/12 ml-2"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
