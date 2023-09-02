import "./index.scss";
import { FunctionComponent, useState } from "react";
import { StringInput } from "../components/core/StringInput/StringInput";
import { INPUT_TYPE } from "../components/core/StringInput/StringInput.types";
import { CW_IMAGES } from "../constants/images";

export const Task1 = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isValidEmail = (email: string): boolean => {
    return Boolean(
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    );
  };

  return (
    <div id="Task-1" className="page-container">
      <div className="logo-container">
        <img
          style={{ height: "7rem" }}
          className="crossworker-img"
          src={CW_IMAGES.cw_logo}
        />
      </div>

      <>
        <StringInput
          label="Email"
          currentValue={email}
          onChange={(e) => {
            setEmail(e);
          }}
          trimSpacesAtStartAndEnd={true}
          isValid={isValidEmail(email.trim())}
          errorMessage={"Please enter a valid email"}
          isMandatory={true}
          placeholder={"Email Address"}
        />
        <StringInput
          label="Password"
          type={INPUT_TYPE.password}
          currentValue={password}
          onChange={(e) => {
            setPassword(e);
          }}
          isValid={isValidEmail(password)}
          isMandatory={true}
          onBlur={(e) => console.log(e)}
          placeholder={"Type password here"}
        />
        <div className="forget-password-container">
          <div className="forget-password-label">Forgot password?</div>
        </div>
        <button className="login-button">Login</button>
      </>
    </div>
  );
};

export default Task1;
