import { useState } from "react";
import {Chromium, X} from "lucide-react";

import { Button } from "../../ui/button.tsx";
import Divider from "../../common/Divider";
import Modal from "../../common/Modal";

import Form from './partials/Form'
import TnC from './partials/TnC'

const SignupForm = ({ onClose }: { onClose: () => void}) => {
    const [showPassword, setShowPassword] = useState(false);

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
                        <Button variant="outline" className="flex items-center justify-center w-full mt-6 rounded-md py-2 transition">
                            <Chromium className="text-2xl mr-2" />
                            <span className="font-medium text-foreground">Sign up with Google</span>
                        </Button>

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