import React from "react";
import FlexBox from "../flex-box";

import { CheckboxInput } from "./styles";

// Checkbox component
interface CheckboxProps {
  size?: string;
  label: string | React.ReactNode;
  checked: boolean;
  onChange: () => void;
  color?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  color,
}) => {
  return (
    <FlexBox alignItems={"center"}>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={onChange}
        borderColor={color || "gray"}
      />
      {label && label}
    </FlexBox>
  );
};

export default Checkbox;
