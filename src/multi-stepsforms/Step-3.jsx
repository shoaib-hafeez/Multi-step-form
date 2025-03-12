import { useContext } from "react";
import { StepContext } from "../context/StepContext";

const Step3 = () => {
    const {formData , handleInputChange} = useContext(StepContext);
    return (
        <div className="step">
            <h2>Step 3: Payment Information</h2>
            <input
                type="number"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
            />
            <input
                type="date"
                name="expiryDate"
                placeholder="Expiry Date (MM/YY)"
                value={formData.expiryDate}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Step3;