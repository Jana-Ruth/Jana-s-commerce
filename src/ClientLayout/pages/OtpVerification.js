import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SummaryApi from '../../common';

const OtpVerification = () => {
    const [data, setData] = useState(["", "", "", "", "", ""]);
    const navigate = useNavigate();
    const inputRef = useRef([]);
    const location = useLocation();

    useEffect(() => {
        if (!location?.state?.email) {
            navigate("/forgot-password");
        }
    }, [location, navigate]);

    const isOtpComplete = data.every(el => el);

    const handleInputChange = (e, index) => {
        const { value } = e.target;
        if (/^\d$/.test(value) || value === "") {
            const updatedData = [...data];
            updatedData[index] = value;
            setData(updatedData);

            // Move focus to next input if value is entered, or back if deleted
            if (value && index < 5) {
                inputRef.current[index + 1].focus();
            } else if (!value && index > 0) {
                inputRef.current[index - 1].focus();
            }
        }
    };

    const handlePaste = (e) => {
        const pastedData = e.clipboardData.getData("Text");
        if (pastedData.length === 6 && /^\d+$/.test(pastedData)) {
            const newData = pastedData.split("");
            setData(newData);
            newData.forEach((digit, index) => {
                inputRef.current[index].value = digit;
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(SummaryApi.forgot_password_otp_verification.url, {
                method: SummaryApi.forgot_password_otp_verification.method,
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ otp: data.join(""), email: location?.state?.email })
            });

            const result = await response.json();

            if (result.success) {
                toast.success(result.message);
                setData(["", "", "", "", "", ""]);
                navigate("/reset-password", {
                    state: {
                        data: result,
                        email: location?.state?.email
                    }
                });
            } else if (result.error) {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <section className='mx-auto px-2'>
            <div className='w-full h-screen flex justify-center items-center bg-gray-100'>
                <form
                    className='md:w-2/5 p-20 rounded-lg shadow-md mx-auto bg-white flex flex-col'
                    onSubmit={handleSubmit}
                >
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        className="w-48 h-16 object-contain mx-auto mb-6"
                    />
                    <h2 className="text-xl font-bold text-center mb-4">Enter OTP</h2>
                    <div className='flex flex-col gap-4 w-full mb-6'>
                        <label htmlFor='otp' className="text-gray-700 font-medium">Enter Your OTP:</label>
                        <div className='flex items-center gap-2 justify-between mt-3'>
                            {data.map((value, index) => (
                                <input
                                    key={"otp" + index}
                                    type='text'
                                    id='otp'
                                    ref={(ref) => inputRef.current[index] = ref}
                                    value={value}
                                    onChange={(e) => handleInputChange(e, index)}
                                    onPaste={handlePaste}
                                    maxLength={1}
                                    className='bg-blue-50 w-full max-w-16 p-2 border rounded outline-none focus:border-primary-200 text-center font-semibold'
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!isOtpComplete}
                        className={`${
                            isOtpComplete ? "bg-subMain hover:bg-blue-700" : "bg-gray-500"
                        } text-white py-2 rounded font-semibold my-3 tracking-wide`}
                    >
                        Verify OTP
                    </button>

                    <p>
                        Already have an account? <Link to="/login" className='font-semibold text-subMain hover:text-blue-800'>Login</Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default OtpVerification;
