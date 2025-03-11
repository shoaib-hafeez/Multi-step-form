// Step2.js (Step 2 Component)
import { useContext } from "react";
import { StepContext } from "../context/StepContext";

const Step2 = () => {
    const {formData , handleInputChange} = useContext(StepContext);
    return (
        <div className="step">
            <h2>Step 2: Address Information</h2>
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                
            />
            <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Step2;