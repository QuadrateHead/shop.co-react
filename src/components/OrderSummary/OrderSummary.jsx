import React, { useState, useMemo } from "react";
import "./OrderSummary.scss";

// In a real app this would come from an API — hardcoded here for now
const PROMO_CODES = {
  SAVE20: 20, // 20% off
  SAVE10: 10, // 10% off
  WELCOME15: 15, // 15% off
};

const DELIVERY_FEE = 15;

const OrderSummary = ({ subtotal, onCheckout }) => {
  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null); // { code, percent }
  const [error, setError] = useState("");

  const discountPercent = appliedPromo?.percent ?? 0;
  const discountAmount = useMemo(
    () => (subtotal * discountPercent) / 100,
    [subtotal, discountPercent]
  );

  const total = useMemo(
    () => subtotal - discountAmount + DELIVERY_FEE,
    [subtotal, discountAmount]
  );

  const handleApplyPromo = () => {
    const code = promoInput.trim().toUpperCase();

    if (!code) {
      setError("Please enter a promo code.");
      return;
    }

    const percent = PROMO_CODES[code];

    if (!percent) {
      setError("Invalid promo code.");
      setAppliedPromo(null);
      return;
    }

    setAppliedPromo({ code, percent });
    setError("");
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoInput("");
    setError("");
  };

  return (
    <div className="order-summary">
      <h2 className="order-summary__heading">Order Summary</h2>

      <div className="order-summary__row">
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>

      {appliedPromo && (
        <div className="order-summary__row">
          <span>Discount (-{discountPercent}%)</span>
          <span className="order-summary__discount">
            -${discountAmount.toFixed(0)}
          </span>
        </div>
      )}

      <div className="order-summary__row">
        <span>Delivery Fee</span>
        <span>${DELIVERY_FEE}</span>
      </div>

      <hr></hr>

      <div className="order-summary__row order-summary__row--total">
        <span>Total</span>
        <span>${total}</span>
      </div>

      <div className="order-summary__promo">
        <div className="order-summary__promo-input">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.0766 12.4856L13.7653 3.17438C13.5917 2.99963 13.3851 2.86109 13.1576 2.76679C12.93 2.67248 12.686 2.62429 12.4397 2.62501H3.75001C3.45164 2.62501 3.16549 2.74353 2.95451 2.95451C2.74353 3.16549 2.62501 3.45164 2.62501 3.75001V12.4397C2.62429 12.686 2.67248 12.93 2.76679 13.1576C2.86109 13.3851 2.99963 13.5917 3.17438 13.7653L12.4856 23.0766C12.8372 23.4281 13.3141 23.6255 13.8113 23.6255C14.3084 23.6255 14.7853 23.4281 15.1369 23.0766L23.0766 15.1369C23.4281 14.7853 23.6255 14.3084 23.6255 13.8113C23.6255 13.3141 23.4281 12.8372 23.0766 12.4856ZM13.8113 21.2203L4.87501 12.2813V4.87501H12.2813L21.2175 13.8113L13.8113 21.2203ZM9.37501 7.87501C9.37501 8.17168 9.28703 8.46169 9.12221 8.70836C8.95739 8.95504 8.72312 9.1473 8.44903 9.26083C8.17494 9.37436 7.87334 9.40406 7.58237 9.34619C7.2914 9.28831 7.02413 9.14545 6.81435 8.93567C6.60457 8.72589 6.46171 8.45861 6.40383 8.16764C6.34595 7.87667 6.37566 7.57507 6.48919 7.30098C6.60272 7.02689 6.79498 6.79263 7.04165 6.6278C7.28833 6.46298 7.57834 6.37501 7.87501 6.37501C8.27283 6.37501 8.65436 6.53304 8.93567 6.81435C9.21697 7.09565 9.37501 7.47718 9.37501 7.87501Z" fill="black" fill-opacity="0.4" />
         </svg>
          <input
            type="text"
            placeholder="Add promo code"
            value={promoInput}
            onChange={(e) => setPromoInput(e.target.value)}
            disabled={!!appliedPromo}
          />
        </div>
        {appliedPromo ? (
          <button className="order-summary__promo-btn p-16" onClick={handleRemovePromo}>
            Remove
          </button>
        ) : (
          <button className="p-16 order-summary__promo-btn " onClick={handleApplyPromo}>
            Apply
          </button>
        )}
      </div>

      {error && <p className="order-summary__error">{error}</p>}
      {appliedPromo && (
        <p className="order-summary__success">
          "{appliedPromo.code}" applied — {appliedPromo.percent}% off
        </p>
      )}

      <button className="order-summary__checkout blackBtn" onClick={onCheckout}>
        Go to Checkout
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9H15M15 9L9 3M15 9L9 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default OrderSummary;