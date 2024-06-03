import { useParams } from "react-router-dom";
import { useGetCarByIdQuery } from "../../services/apiSlice";

const Car = () => {
  const { id } = useParams();
  const {
    data: car,
    isLoading,
    // error
  } = useGetCarByIdQuery(id);
  // console.log(isLoading);

  const renderSpiner = (
    <div className="container mt-7 ">
      <div className="row justify-content-center">
        <div
          className="spinner-border text-success"
          style={{ width: "7rem", height: "7rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isLoading ? (
        renderSpiner
      ) : (
        <>
          <section id="searchCarInput">
            <div className="container mt-7">
              <div className="row justify-content-center">
                <div className="col-xl-11 col-md-12">
                  <div className="card shadow">
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-xl-3">
                            <div className="mb-3">
                              <label
                                htmlFor="carName"
                                className="form-label mb-1"
                              >
                                Nama Mobil
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="carName"
                                placeholder="Ketik nama/tipe mobil"
                              />
                            </div>
                          </div>

                          <div className="col-xl-3">
                            <div className="mb-3">
                              <label
                                htmlFor="category"
                                className="form-label mb-1"
                              >
                                Kategori
                              </label>
                              <select className="form-control" id="category">
                                <option value="">Pilih Kategori</option>
                                <option value="">2 - 4 Orang</option>
                                <option value="">4 - 6 Orang</option>
                                <option value="">6 - 8 Orang</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-xl-2">
                            <div className="mb-3">
                              <label
                                htmlFor="price"
                                className="form-label mb-1"
                              >
                                Harga
                              </label>
                              <select className="form-control" id="price">
                                <option value="0-0">Pilih Harga</option>
                                <option value="100000-500000">
                                  100,000 - 500,000
                                </option>
                                <option value="500000-1000000">
                                  500,000 - 1,000,000
                                </option>
                                <option value="1000000-2000000">
                                  1,000,000 - 2,000,000
                                </option>
                                <option value="2000000-3000000">
                                  2,000,000 - 3,000,000
                                </option>
                                <option value="3000000-4000000">
                                  3,000,000 - 4,000,000
                                </option>
                                <option value="5000000-10000000">
                                  5,000,000 - 10,000,000
                                </option>
                              </select>
                            </div>
                          </div>

                          <div className="col-xl-2">
                            <div className="mb-3">
                              <label
                                htmlFor="status"
                                className="form-label mb-1"
                              >
                                Status
                              </label>
                              <select className="form-control" id="status">
                                <option value="">Pilih Status</option>
                                <option value="">Tidak Tersedia</option>
                                <option value="">Tersedia</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-xl-2 d-flex align-items-end">
                            <div className="mb-3">
                              <button
                                type="submit"
                                className="btn btn-success same-height d-flex align-self-center"
                              >
                                Cari Mobil
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-7">
                  <div className="card p-4 shadow">
                    <h5>Tentang Paket</h5>
                    <h5>Include</h5>
                    <ul>
                      <li>
                        <p>
                          Apa saja yang termasuk dalam paket misal durasi max 12
                          jam
                        </p>
                      </li>
                      <li>
                        <p>Sudah termasuk bensin selama 12 jam</p>
                      </li>
                      <li>
                        <p>Sudah termasuk Tiket Wisata</p>
                      </li>
                      <li>
                        <p>Sudah termasuk pajak</p>
                      </li>
                    </ul>
                    <h5>Exclude</h5>
                    <ul>
                      <li>
                        <p>Tidak termasuk biaya makan sopir Rp 75.000/hari</p>
                      </li>
                      <li>
                        <p>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </p>
                      </li>
                      <li>
                        <p>Tidak termasuk akomodasi penginapan</p>
                      </li>
                    </ul>
                    <h5>Refund, Reschedule, Overtime</h5>
                    <ul>
                      <li>
                        <p>Tidak termasuk biaya makan sopir Rp 75.000/hari</p>
                      </li>
                      <li>
                        <p>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </p>
                      </li>
                      <li>
                        <p>Tidak termasuk akomodasi penginapan</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-5">
                  <div className="card p-4 shadow">
                    <img
                      src={car?.image}
                      className="card-img-top"
                      alt={car?.name}
                    />
                    <h5 className="card-title mt-3">{car?.name}</h5>
                    <p className="card-text">
                      {car?.category === "medium"
                        ? "4 - 6 orang"
                        : car?.category === "large"
                        ? "8 - 12 penumpang"
                        : "2 - 4 penumpang"}
                    </p>
                    <div className="row">
                      <div className="col-6">Total</div>
                      <div className="col-6 text-end">Rp. {car?.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default Car;
