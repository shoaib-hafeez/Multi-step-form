import { useContext } from "react";
import { StepContext } from "../context/StepContext";


const Step1 = () => {
    const {formData , handleInputChange} = useContext(StepContext);
    return (
        <div className="step">
            <h2>Step 1: Personal Information</h2>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
            />
        </div>
    );
};

export default Step1;