import Input from "../ui/Input";
import Button from "../ui/Button";
import { Controller, useForm } from "react-hook-form";

interface FormData {
    todo: string;
}

interface AddTodoFormProps {
    onFormSubmit: (todoText: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onFormSubmit }) => {
    const { control, handleSubmit, reset } = useForm<FormData>({
        defaultValues: { todo: "" },
    });

    const onSubmit = (data: FormData) => {
        onFormSubmit(data.todo); // Отправляем текст задачи
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center"
        >
            <div className="flex flex-col items-start w-full">
                <label
                    htmlFor="todo"
                    className="text-lg font-poppins text-neutral-700 align-top mb-2"
                >
                    Add to list
                </label>
            </div>

            <Controller
                name="todo"
                control={control}
                render={({ field }) => (
                    <Input
                        {...field}
                        placeholder="Enter your todo"
                        className="mb-6"
                    />
                )}
            />
            <Button type="submit">Add to list</Button>
        </form>
    );
};

export default AddTodoForm;
