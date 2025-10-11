import {Button} from "../../ui/button.tsx";
import {useModal} from "../../../Context/ModalContext.tsx";
import SignUp from "../../Modals/SignUp";

function CTASection() {
    const {openModal, closeModal} = useModal()
    return (
        <section className="px-6 py-20 bg-primary">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    Ready to streamline your invoicing?
                </h2>
                <p className="text-xl text-primary-foreground/80 mb-8">
                    Join thousands of freelancers who save hours every week with QuickInvoice.
                </p>
                <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 cursor-pointer"
                    onClick={() =>  {
                        window.scrollTo(0, 0);
                        openModal(<SignUp onClose={closeModal} />)
                    }}
                >
                    Start Your Free Trial
                </Button>
            </div>
        </section>
    )
}

export default CTASection;