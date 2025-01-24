import { useSearchParams } from "react-router";
import SignInForm from "../components/forms/SignInForm";
import SignUpForm from "../components/forms/SignUpForm";
import Button from "../components/ui/Button";
import { UserRegisterDto } from "../lib/dto";
import axios from "axios";

const AuthPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const type = searchParams.get("type") || "sign-in";

    console.log("Type is:", type);

    const handleSignIn = () => {
        console.log("Sign In submitted");
    };

    const handleSignUp = async (data: UserRegisterDto) => {
        const response = await axios.post(
            "http://localhost:8080/api/user/register",
            data
        );
        console.log(response);
    };

    const toggleSearchParams = () => {
        setSearchParams({ type: type === "sign-in" ? "sign-up" : "sign-in" });
    };

    return (
        <main>
            {type === "sign-in" ? (
                <SignInForm onFormSubmit={handleSignIn} />
            ) : (
                <SignUpForm onFormSubmit={handleSignUp} />
            )}
            <div className="flex flex-col items-center justify-center gap-2">
                <h3 className="font-montserrat text-neutral-700 text-xl">
                    {type === "sign-in"
                        ? "Do not have an account?"
                        : "Already have an account?"}
                </h3>
                <Button onClick={toggleSearchParams} className="bg-slate-400">
                    {type === "sign-in" ? "Sign Up" : "Sign In"}
                </Button>
            </div>
        </main>
    );
};

export default AuthPage;
