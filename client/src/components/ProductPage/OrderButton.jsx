import React from "react";
import wpImg from "../../assets/icons/whatsapp-icon.png";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const WPButton = ({ title, price, quantity }) => {
  const phoneNumber = "7797607126"; // Replace with your WhatsApp number in international format
  const navigate = useNavigate();

  const handleClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setTimeout(()=>{
        navigate("/login");
      },1000)
      toast.error("Please login first"); // Show error message
    } else {
      const message = `Hello!\n\nI would like to place an order for the following product:\n\n*Product Title:* ${title}\n*Price:* ${price}\n*Quantity:* ${quantity}\n\nCould you please provide me with the next steps? Thank you!`;
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
        className="w-full md:w-[30%] bg-[#44EF69] p-4 md:p-6 m-4 rounded-full flex items-center justify-center relative cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={wpImg}
          alt=""
          className="w-[40px] md:w-[56px] h-auto absolute left-0 m-3"
        />
        <span className="text-xl md:text-3xl font-bold text-white">
          Order Now!
        </span>
      </div>
      <ToastContainer />
    </>
  );
};

export default WPButton;
