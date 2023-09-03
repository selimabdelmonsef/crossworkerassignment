import "./index.scss";
import { FunctionComponent, useState } from "react";
import { StringInput } from "../components/core/StringInput/StringInput";
import { INPUT_TYPE } from "../components/core/StringInput/StringInput.types";
import { CW_IMAGES } from "../constants/images";
import { isValidEmail } from "../helpers/isValidEmail";

export const Task1 = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="page-container">
      <div className="logo-container">
        <img
          style={{ height: "7rem" }}
          className="crossworker-img"
          src={CW_IMAGES.cw_logo}
        />
      </div>

      <>
        <StringInput
          className="email-input"
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
