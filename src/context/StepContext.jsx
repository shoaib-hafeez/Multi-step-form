import { createContext, useState } from "react";

export const StepContext = createContext();

const StepProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        zipCode: "",
        cardNumber: "",
        expiryDate: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep((prev) => prev + 1); // Safe update
        }
    };

    const handlePreviousStep = () => {
        setCurrentStep((prev) => prev - 1); // Safe update
    };

    const validateStep = (step) => {
        switch (step) {
            case 1:
                return formData.name.trim() !== "" && formData.email.trim() !== "";
            case 2:
                return formData.address.trim() !== "" && formData.city.trim() !== "" && formData.zipCode.trim() !== "";
            case 3:
                return formData.cardNumber.trim() !== "" && formData.expiryDate.trim() !== "";
            default:
                return false;
        }
    };

    const handleSubmit = () => {
        alert("Form submitted successfully!");
        console.log("Form Data:", formData);
        setFormData({
            name: "",
            email: "",
            address: "",
            city: "",
            zipCode: "",
            cardNumber: "",
            expiryDate: "",
        });
    };

    return (
        <StepContext.Provider value={{
            currentStep,
            setCurrentStep,
            formData,
            handleInputChange,
            handleNextStep,
            handlePreviousStep,
            validateStep, 
            handleSubmit
        }}>
            {children}
        </StepContext.Provider>
    );
};

export default StepProvider; // Default export add kiya
