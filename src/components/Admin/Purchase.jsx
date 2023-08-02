import React, { useState } from 'react';
import { useCoins } from '../Context/darkcoins'; // Import the useCoins function

const Purchase = () => {
    const [amount, setAmount] = useState(0);
    const { coins, updateCoins } = useCoins(); // Use the coins value and updateCoins function from the context

    const handlePurchase = () => {
        if (coins >= amount) {
            // Perform the purchase logic here
            // Deduct the purchase amount from coins
            updateCoins(-amount);
            setAmount(0); // Clear the entered amount
        } else {
            alert("Insufficient coins. You don't have enough BatCoins for this purchase.");
        }
    };

    return (
        <div>
            <h2>Purchase</h2>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Enter Amount</label>
                <input
                    type="number"
                    className="form-control"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="coins" className="form-label">Current Coins</label>
                <input
                    type="number"
                    className="form-control"
                    id="coins"
                    value={coins}
                    readOnly
                />
            </div>
            <button type="button" className="btn btn-primary" onClick={handlePurchase}>Purchase</button>
        </div>
    );
};

export default Purchase;
