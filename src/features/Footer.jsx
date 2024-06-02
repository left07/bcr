import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaRegEnvelope,
  FaTwitch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialMediaData = [
    { icon: <FaFacebook />, platform: "Facebook" },
    { icon: <FaInstagram />, platform: "Instagram" },
    { icon: <FaTwitter />, platform: "Twitter" },
    { icon: <FaRegEnvelope />, platform: "Email" },
    { icon: <FaTwitch />, platform: "Twitch" },
  ];

  const renderSocialMediaIcons = socialMediaData.map((data, index) => {
    return (
      <i
        key={index}
        className="bg-primary p-2 me-3 rounded-circle align-item-center text-white"
        title="{data.platform}"
      >
        {data.icon}
      </i>
    );
  });
  return (
    <section id="footer">
      <div className="container my-7">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h6>Jalan Suroyo No. 161 Kota Denpasar 672000</h6>
            <p className="fw-bold">binarcarrental@gmail.com</p>
            <p className="fw-bold">08x-xxx-xxx-xxx</p>
          </div>
          
        
        </div>
      </div>
    </section>
  );
};
export default Footer;
