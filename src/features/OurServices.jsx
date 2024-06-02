import { FaCheckCircle } from "react-icons/fa";

const OurServices = () => {
  const servicesCars = [
    {
      service: "Sewa Mobil Dengan Supir di Bali 12 Jam",
    },
    {
      service: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    },
    {
      service: "Sewa Mobil Jangka Panjang Bulanan",
    },
    {
      service: "Gratis Antar - Jemput Mobil di Bandara",
    },
    {
      service: "Layanan Airport Transfer / Drop In Out",
    },
  ];

  const renderServices = servicesCars.map((service, index) => {
    return (
      <li className="d-flex align-items-center" key={index}>
        <FaCheckCircle className="text-success fs-4 me-3 my-2" />
        {service.service}
      </li>
    );
  });

  return (
    <section id="OurService">
      <div className="container mt-6">
        <div className="row p-md-6">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="/src/assets/images/img_service.png"
              alt="img_service"
            />
          </div>
          <div className="col-xl-6 p-4">
            <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul className="list-unstyled">{renderServices}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurServices;
