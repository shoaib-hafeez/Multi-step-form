import React, { useContext } from "react";
import Step1 from "./Step-1";
import Step2 from "./Step-2";
import Step3 from "./Step-3";

import { StepContext } from "../context/StepContext";

const MultiStepForm = () => {
    const { 
        handleNextStep,
        handlePreviousStep,
        validateStep,
        handleSubmit,
        currentStep 
    } = useContext(StepContext);

    const steps = [<Step1 />, <Step2 />, <Step3 />];

    return (
        <div className="form-container">
            {/* <h1>Multi-Step Form</h1> */}
            {steps[currentStep - 1] }
            <div className="navigation-buttons">
                {currentStep > 1 && (
                    <button onClick={handlePreviousStep}>Previous</button>
                )}
                {currentStep < steps.length ? (
                    <button
                        onClick={handleNextStep}
                        disabled={!validateStep(currentStep)}
                    >
                        Next
                    </button>
                ) : (
                    <button onClick={handleSubmit} disabled={!validateStep(currentStep)}>
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
};

export default MultiStepForm;
