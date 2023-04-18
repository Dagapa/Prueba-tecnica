import { LoginData } from "types";
import {email, password} from "@/__mocks__/credentialsMock"

export const verifyLogin = (data: LoginData): boolean => {
  return data.email === email && data.password === password;
};