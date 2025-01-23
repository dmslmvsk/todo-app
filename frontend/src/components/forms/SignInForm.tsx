import React from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "../ui/Input";
import Button from "../ui/Button";

interface FormData {
    username: string;
    password: string;
}

interface SignInFormProps {
    onFormSubmit: (username: string, password: string) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onFormSubmit }) => {
    const { control, handleSubmit, reset } = useForm<FormData>({
        defaultValues: { password: "", username: "" },
    });

    const onSubmit = (data: FormData) => {
        onFormSubmit(data.password, data.username);
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
                        <Input {...field} placeholder="Username" />
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
                            placeholder="Password"
                            type="password"
                        />
                    )}
                />
            </div>
            <Button type="submit">Sign In</Button>
        </form>
    );
};

export default SignInForm;
