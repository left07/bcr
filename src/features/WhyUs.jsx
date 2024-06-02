import { FaRegThumbsUp, FaTag, FaRegClock, FaMedal } from "react-icons/fa";

const WhyUs = () => {
  const cardData = [
    {
      icon: <FaRegThumbsUp className="text-white" />,
      iconBg: "bg-warning",
      title: "Mobil Lengkap",
      text: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    },
    {
      icon: <FaTag className="text-white" />,
      iconBg: "bg-primary",
      title: "Layanan 24 Jam",
      text: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    },
    {
      icon: <FaRegClock className="text-white" />,
      iconBg: "bg-danger",
      title: "Harga Murah",
      text: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    },
    {
      icon: <FaMedal className="text-white" />,
      iconBg: "bg-success",
      title: "Sopir Profesional",
      text: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    },
  ];

  const renderCards = cardData.map((card, index) => {
    return (
      <div className="col-md-4 col-xl-3 my-2" key={index}>
        <div className="card h-100">
          <div className="card-body">
            <div className="card-icon-container my-3">
              <i className={`card-icon ${card.iconBg} p-2 rounded-circle`}>
                {card.icon}
              </i>
            </div>
            <h5 className="card-title my-2">{card.title}</h5>
            <p className="card-text my-2">{card.text}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="WhyUs">
      <div className="container mb-6">
        <div className="row">
          <h2>Why Us?</h2>
          <p>Mengapa harus pilih Binar Car Rental</p>
        </div>
        <div className="row">{renderCards}</div>
      </div>
    </section>
  );
};
export default WhyUs;
