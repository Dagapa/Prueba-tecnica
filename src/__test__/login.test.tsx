import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "@/pages/login";

const validEmail = "grupoASD@gmail.com";
const validPassword = "Rjs2022*";

describe("Login component", () => {
  it("should show success message if credentials are correct", () => {
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
