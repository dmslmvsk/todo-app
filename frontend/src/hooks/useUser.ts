import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { UserLoginDto, UserRegisterDto } from "../lib/dto";

interface RegisterResponse {
    username: string;
    email: string;
    password: string;
}

interface LoginResponse {
    email: string;
    password: string;
}

const registerUser = async (UserRegisterDto: UserRegisterDto) => {
    const response = await axios.post<RegisterResponse>(
        "http://localhost:8080/api/user/register",
        UserRegisterDto
    );
    return response.data;
};

const authenticateUser = async (UserLoginDto: UserLoginDto) => {
    const response = await axios.post<LoginResponse>(
        "http://localhost:8080/api/user/login",
        UserLoginDto
    );
    return response.data;
};

export const useUser = () => {
    // Регистрация
    const registerMutation = useMutation(registerUser);

    // Логин
    const loginMutation = useMutation(authenticateUser);

    return {
        register: registerMutation.mutateAsync,
        registerStatus: registerMutation.status,
        registerError: registerMutation.error,

        login: loginMutation.mutateAsync,
        loginStatus: loginMutation.status,
        loginError: loginMutation.error,
    };
};
