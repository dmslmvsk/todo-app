import React from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { UserLoginDto } from "../../lib/dto";

interface SignInFormProps {
    onFormSubmit: (data: UserLoginDto) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onFormSubmit }) => {
    const { control, handleSubmit, reset } = useForm<UserLoginDto>({
        defaultValues: { password: "", email: "" },
    });

    const onSubmit = (data: UserLoginDto) => {
        onFormSubmit(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="flex flex-col items-start w-full">
                    <label
                        htmlFor="email"
                        className="text-lg font-poppins text-neutral-700 align-top mb-2"
                    >
                        email
                    </label>
                </div>

                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <Input {...field} placeholder="Email" type="email" />
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
