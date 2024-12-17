import React from "react";
import wpImg from "../../assets/icons/whatsapp-icon.png";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const OrderButton = ({ title, price, quantity, length, width }) => {
  const phoneNumber = import.meta.env.PHONE_NUMBER;
  // Replace with your WhatsApp number in international format
  const navigate = useNavigate();

  const handleClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      toast.error("Please login first"); // Show error message
    } else {
      const message = `Hello!\n\nI would like to place an order for the following product:\n\n*Product Title:* ${title}\n*Price:* ₹${price}\n*Quantity:* ${quantity}${
        length ? `\n*Length:* ${length} ft` : ""
      }${
        width ? `\n*Width:* ${width} ft` : ""
      }\n\nCould you please provide me with the next steps? Thank you!`;
      const encodedMessage = encodeURIComponent(message);
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
        "_blank"
      );
    }
  };

  return (
    <>
      <div
        className="w-[50%] bg-[#44EF69] p-2 md:p-4 my-4 rounded-md flex items-center justify-center relative gap-4 cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={wpImg}
          alt=""
          className="w-[40px] md:w-[56px] h-auto absolute left-0 mx-3"
        />
        <span className="text-xl md:text-2xl ml-4 font-bold text-white">
          Order Now!
        </span>
      </div>
      <ToastContainer />
    </>
  );
};

export default OrderButton;
