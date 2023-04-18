import { fireEvent, render, screen } from "@testing-library/react";
import {
  email as validEmail,
  password as validPassword,
} from "@/__mocks__/credentialsMock";
import "@testing-library/jest-dom";
import Login from "@/pages/login";

describe("Login component", () => {
  it("valida si las credenciales son incorrectas", () => {
    render(<Login />);

    // Simular que se ingresa un email y contraseña válidos pero no escritos correctamente
    const emailInput = screen.getByPlaceholderText("email");
    const passwordInput = screen.getByPlaceholderText("password");
    fireEvent.change(emailInput, { target: { value: "grupoasd@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "rJs2022*" } });
    const submitButton = screen.getByText("Login");
    fireEvent.click(submitButton);

    // Verificar que el email y contraseña ingresados son invalidos
    expect(emailInput).not.toHaveValue(validEmail);
    expect(passwordInput).not.toHaveValue(validPassword);
  });
  it("valida si las credenciales son correctas", () => {
    render(<Login />);

    // Simular que se ingresa un email y contraseña válidos y correctos
    const emailInput = screen.getByPlaceholderText("email");
    const passwordInput = screen.getByPlaceholderText("password");
    fireEvent.change(emailInput, { target: { value: validEmail } });
    fireEvent.change(passwordInput, { target: { value: validPassword } });
    const submitButton = screen.getByText("Login");
    fireEvent.click(submitButton);

    // Verificar que el email y contraseña ingresados son correctos
    expect(emailInput).toHaveValue(validEmail);
    expect(passwordInput).toHaveValue(validPassword);
  });
});
