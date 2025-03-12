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
        const { name, email, address, city, zipCode, cardNumber, expiryDate } = formData;
    
        switch (step) {
            case 1:
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return name.trim() !== "" && emailRegex.test(email.trim());
    
            case 2:
                const zipCodeRegex = /^\d{5}$/;
                return address.trim() !== "" && city.trim() !== "" && zipCodeRegex.test(zipCode.trim());
    
            case 3:
                const cardNumberRegex = /^\d{16}$/;
                const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
                return cardNumberRegex.test(cardNumber.trim()) && expiryDateRegex.test(expiryDate.trim());
    
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

export default StepProvider;