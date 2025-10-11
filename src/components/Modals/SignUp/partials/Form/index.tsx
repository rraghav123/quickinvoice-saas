
import {Input} from "../../../../ui/input.tsx";
import { Button } from "../../../../ui/button.tsx";

function Form({
    showPassword,
    setShowPassword,
              }: { showPassword: boolean; setShowPassword: (showPassword: boolean) => void }) {
    return (
        <form className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
                <Input
                    type="text"
                    placeholder="your first name"
                />
                <Input
                    type="text"
                    placeholder="your last name"
                />
            </div>

            <div className="grid grid-cols-2 gap-3">
                <Input
                    type="date"
                    placeholder="month-day-year"
                />
                <Input
                    type="email"
                    placeholder="Enter your email"
                />
            </div>

            <div className="relative">
                <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2 text-gray-500"
                >
                    {showPassword ? "🙈" : "👁️"}
                </button>
            </div>

            <Button
                variant="default"
                type="submit"
                className="w-full py-2 rounded-md font-medium transition cursor-pointer"
            >
                Start your free trial
            </Button>
        </form>
    )
}

export default Form;
