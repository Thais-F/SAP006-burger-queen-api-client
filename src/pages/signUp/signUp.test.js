import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import SignUp from "./index.js";
import * as services from "../../services/data.js";

jest.mock("../../services/data.js");

describe("Clear mocks - SignUp", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('renders signUp Button', () => {
        
        render(<SignUp/>);

        const buttonElement = screen.getByText("Cadastrar");
        expect(buttonElement).toBeInTheDocument();
    });

    test('renders all Inputs', () => {

        render(<SignUp/>);

        const inputNameElement = screen.getByPlaceholderText("Nome");
        const inputEmailElement = screen.getByPlaceholderText("Email");
        const inputPasswordElement = screen.getByPlaceholderText("Senha");

        expect(inputNameElement).toBeInTheDocument();
        expect(inputEmailElement).toBeInTheDocument();
        expect(inputPasswordElement).toBeInTheDocument();
    });


    test("Should call signUp function and return user's token", async () => {
        const response = { token: "token" }
        services.signUpWithEmailAndPassword.mockResolvedValueOnce(response);

        render(<SignUp />)

        const nameInput = screen.queryByPlaceholderText("Nome")
        const emailInput = screen.queryByPlaceholderText("Email")
        const passwordInput = screen.queryByPlaceholderText("Senha")
        const atendenteOption = screen.queryAllByLabelText("Atendente")
        const signUpButton = screen.queryByText("Cadastrar")

        const email = "thaisFJ@gmail.com"
        const password = "123456"

        userEvent.type(nameInput, "Thais")
        userEvent.type(emailInput, email)
        userEvent.type(passwordInput, password)
        userEvent.type(atendenteOption[0])
        userEvent.click(signUpButton)

        expect(nameInput.value).toBe("Thais");
        expect(emailInput.value).toBe(email);
        expect(passwordInput.value).toBe(password);
        expect(atendenteOption[0].value).toBe("atendente");
        expect(services.signUpWithEmailAndPassword).toHaveBeenCalledTimes(1);
        expect(services.signUpWithEmailAndPassword).toHaveBeenCalledWith({ "email": email, "name": "Thais", "password": password, "role": "atendente" });
    })

    test("Should not call signUp function and return printed errors on screen", async () => {
        const response = { code: "number", message: "errorMessage" }
        services.signUpWithEmailAndPassword.mockResolvedValueOnce(response);

        render(<SignUp />)

        const nameInput = screen.queryByPlaceholderText("Nome")
        const emailInput = screen.queryByPlaceholderText("Email")
        const passwordInput = screen.queryByPlaceholderText("Senha")
        const signUpButton = screen.queryByText("Cadastrar")

        userEvent.type(nameInput, "")
        userEvent.type(emailInput, "")
        userEvent.type(passwordInput, "")
        userEvent.click(signUpButton)

        expect(nameInput.value).toBe("");
        expect(emailInput.value).toBe("");
        expect(passwordInput.value).toBe("");
        expect(services.signUpWithEmailAndPassword).toHaveBeenCalledTimes(0);

        await waitFor(() => {
            const nameError = screen.getByText("Insira seu nome")
            const emailError = screen.getByText("Insira seu email")
            const passwordError = screen.getByText("Insira uma senha")
            const roleError = screen.getByText("Preencha seu cargo")

            expect(nameError).toBeInTheDocument();
            expect(emailError).toBeInTheDocument();
            expect(passwordError).toBeInTheDocument();
            expect(roleError).toBeInTheDocument();
        });
    })

})


