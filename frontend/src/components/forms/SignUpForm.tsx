import React from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { UserRegisterDto } from "../../lib/dto";

interface SignUpFormProps {
    onFormSubmit: (data: UserRegisterDto) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onFormSubmit }) => {
    const { control, handleSubmit, reset } = useForm<UserRegisterDto>({
        defaultValues: { password: "", username: "", email: "" },
    });

    const onSubmit = (data: UserRegisterDto) => {
        onFormSubmit(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="flex flex-col items-start w-full">
                    <label
                        htmlFor="username"
                        className="text-lg font-poppins text-neutral-700 align-top mb-2"
                    >
                        Username
                    </label>
                </div>

                <Controller
                    name="username"
                    control={control}
                    render={({ field }) => (
                        <Input {...field} placeholder="username" />
                    )}
                />
            </div>
            <div>
                <div className="flex flex-col items-start w-full">
                    <label
                        htmlFor="email"
                        className="text-lg font-poppins text-neutral-700 align-top mb-2"
                    >
                        Login
                    </label>
                </div>

                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <Input {...field} placeholder="email" />
                    )}
                />
            </div>
            <div>
                <div className="flex flex-col items-start w-full">
                    <label
                        htmlFor="password"
                        className="text-lg font-poppins text-neutral-700 align-top mb-2"
                    >
                        Password
                    </label>
                </div>

                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            placeholder="passwords"
                            type="password"
                        />
                    )}
                />
            </div>
            <Button type="submit">Sign Up</Button>
        </form>
    );
};

export default SignUpForm;
