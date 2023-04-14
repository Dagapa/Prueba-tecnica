import { LoginData } from "types";

export const verifyLogin = (data: LoginData): boolean => {
  return data.email === "grupoASD@gmail.com" && data.password === "Rjs2022*";
};