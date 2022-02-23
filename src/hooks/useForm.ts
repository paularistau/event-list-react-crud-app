import React from "react";

interface IField {
  regex: RegExp;
  message: string;
}

interface ITypes {
  email: IField;
  password: IField;
  number: IField;
}

const types: ITypes = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha precisa ter 1 caracter maíusculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres.",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize números apenas.",
  },
};

const useForm = (type?: keyof ITypes) => {
  const [value, setValue] = React.useState<string>("");

  function validate(value: string) {
    if (!type) return true;
    if (value.length === 0) {
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      return false;
    } else {
      return true;
    }
  }

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
