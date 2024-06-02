import { Link } from "react-router-dom";

const CtaBanner = () => {
  return (
    <section id="CtaBanner">
      <div className="container my-5">
        <div className="row">
          <div className="card bg-primary h-100 p-5">
            <div className="card-body text-center">
              <h1 className="card-title my-2 text-white">
                Sewa Mobil di (Lokasimu) Sekarang
              </h1>
              <p className="p-md-4 lead card-text my-2 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <Link to="/cars" className="btn btn-success fw-bold">
                Mulai Sewa Mobil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CtaBanner;
