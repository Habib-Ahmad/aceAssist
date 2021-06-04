import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Toastr from "toastr";
import RegularInputBox from "../components/InputBoxes/RegularInputBox";
import api from "../utils/api";
import { ADMIN_TOKEN } from "../utils/token";
import { ADMIN_ROLE } from "../utils/localstorage";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    try {
      const { data } = await api.post("/admin/login", state);
      localStorage.setItem(ADMIN_TOKEN, data.token);
      localStorage.setItem(ADMIN_ROLE, data.role);
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
