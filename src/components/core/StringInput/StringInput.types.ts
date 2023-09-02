import React from "react";

export enum INPUT_TYPE {
  text = "text",
  password = "password",
  number = "number",
}

export interface StringInputProps {
  className?: string;
  label?: string;
  currentValue?: string;
  errorMessage?: string;
  isValid?: boolean;
  isDisabled?: boolean;
  isMandatory?: boolean;
  showMandatoryAsterisk?: boolean;
  maxLength?: number;
  minLength?: number;
  minNumber?: number;
  maxNumber?: number;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  trimInput?: boolean;
  placeholder?: string;
  onFocus?: (value: string) => void;
  type?: INPUT_TYPE;
  trimSpacesAtStartAndEnd?: boolean;
  leadingInputIcon?: React.ReactElement; // left
  trailingInputIcon?: React.ReactElement; // right
}
