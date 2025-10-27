import { useState } from "react";
import {Chromium, X} from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";

import { Button } from "../../ui/button.tsx";
import Divider from "../../common/Divider";
import Modal from "../../common/Modal";

import Form from './partials/Form'
import TnC from './partials/TnC'
import {useAuthContext} from "../../../Context/AuthContext.tsx";


const SignupForm = ({ onClose }: { onClose: () => void}) => {
    const [showPassword, setShowPassword] = useState(false);

    const {handleSuccess, handleError} = useAuthContext()

    return (
        <Modal>
            <div className="flex items-center justify-center bg-background">
                <div className="w-full max-w-md bg-background rounded-2xl shadow p-8">
                    <Modal.Header onClose={() => {}}>
                        <h1 className="text-3xl font-bold text-center">Get a Free trial</h1>
                        <p className="text-center text-gray-500 mt-1">No Credit card required</p>
                        <X className="text-primary w-5 h-5 absolute top-5 right-5 cursor-pointer" onClick={onClose} />
                    </Modal.Header>

                    <Modal.Content>
                        <div className="p-2">
                            <GoogleLogin onSuccess={handleSuccess} onError={handleError} theme="filled_black" />
                        </div>
                        <Divider text="or with your email below" />

                        <Form showPassword={showPassword} setShowPassword={setShowPassword} />

                        <TnC />

                        <hr className="my-6 text-sidebar-accent-foreground" />

                        <p className="text-center text-sm">
                            Already a customer?{" "}
                            <a href="#" className="text-primary font-medium hover:underline">
                                Sign in
                            </a>
                        </p>
                    </Modal.Content>

                </div>
            </div>
        </Modal>
    );
};

export default SignupForm;