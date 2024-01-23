import { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Please enter a valid phone number");
      return;
    }
    setShowOtp(true);
  };

  const onOtpSubmit = (otp) => {
    alert(`OTP received: ${otp}`);
    console.log(otp);
  };

  return (
    <div>
      {!showOtp ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput lenght={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
