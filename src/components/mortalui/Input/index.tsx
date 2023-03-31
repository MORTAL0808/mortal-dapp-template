import React, { useState } from 'react';
import { Input as DaisyInput } from 'daisyui';

interface InputProps {
  className?: string;
  style?: React.CSSProperties;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  bordered?: boolean;
  valid?: boolean;
}

const Input: React.FC<InputProps> = ({
  className,
  style,
  prefix,
  suffix,
  defaultValue,
  value,
  onChange,
  maxLength,
  bordered = true,
  valid,
}) => {
  const [inputValue, setInputValue] = useState(defaultValue || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <DaisyInput
      className={className}
      style={style}
      label={prefix}
      labelPosition="before"
      append={suffix}
      value={value || inputValue}
      onChange={handleChange}
      maxLength={maxLength}
      rounded={bordered}
      valid={valid}
    />
  );
};

export default Input;
