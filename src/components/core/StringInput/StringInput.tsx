import "./StringInput.scss";
import React, { ReactElement, useState } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { INPUT_TYPE, StringInputProps } from "./StringInput.types";

export function StringInput(props: StringInputProps): ReactElement {
  const [onBlurValue, setOnBlurValue] = useState(false);
  const [onHideText, setOnHideText] = useState<boolean>(true);
  const inputIsInvalid =
    props.isValid === false && props.currentValue && onBlurValue;

  return (
    <div className="string-input-container">
      {props.label ? (
        <div className="input-label">
          {props.label}
          {props.showMandatoryAsterisk && (
            <span className="mandatory-asterisk">*</span>
          )}
        </div>
      ) : null}
      <input
        className="string-input"
        aria-label={props.label || props.placeholder}
        type={
          props.type === INPUT_TYPE.password
            ? onHideText
              ? INPUT_TYPE.password
              : INPUT_TYPE.text
            : props.type
        }
        maxLength={props.maxLength}
        minLength={props.minLength}
        min={props.minNumber}
        max={props.maxNumber}
        value={props.currentValue || ""}
        disabled={props.isDisabled}
        onChange={
          props.isDisabled
            ? undefined
            : (event: React.ChangeEvent<HTMLInputElement>): void => {
                props.onChange && props.onChange(event.target.value);
              }
        }
        onBlur={!props.isDisabled ? () => setOnBlurValue(true) : undefined}
        onFocus={
          props.isDisabled || !props.onFocus
            ? undefined
            : (event: React.FocusEvent<HTMLInputElement>): void =>
                props.onFocus && props.onFocus(event.target.value)
        }
        placeholder={props.placeholder}
      />
      {props.type === INPUT_TYPE.password ? (
        <div className="hide-text-icon">
          {onHideText ? (
            <VisibilityOff onClick={() => setOnHideText(!onHideText)} />
          ) : (
            <Visibility
              color="primary"
              onClick={() => setOnHideText(!onHideText)}
            />
          )}
        </div>
      ) : (
        <></>
      )}

      {inputIsInvalid && props.errorMessage ? (
        <div className="error-message">{props.errorMessage}</div>
      ) : null}
    </div>
  );
}
