import TestimonialCarousel from "../components/TestimonialCarousel";

const Testimonial = () => {
  return (
    <section id="Testimonial">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h3>Testimonial</h3>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </div>
        </div>
      </div>
      <TestimonialCarousel />
    </section>
  );
};
export default Testimonial;
