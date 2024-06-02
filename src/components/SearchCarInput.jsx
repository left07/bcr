import { useState } from "react";
import { useGetCarsQuery } from "../services/apiSlice";
import ShowCars from "./ShowCars";
import ShowCarsLoader from "./ShowCarsLoader";

const SearchCarInput = () => {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [isRented, setIsRented] = useState();
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const handlePriceChange = (e) => {
    const [min, max] = e.target.value.split("-").map(Number);
    setMinPrice(min);
    setMaxPrice(max);
  };

  const {
    data: cars,
    isLoading,
    // error,
  } = useGetCarsQuery({
    name,
    category,
    isRented,
    minPrice,
    maxPrice,
    page,
    pageSize,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPageSize(20);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  //   console.log(cars);

  return (
    <>
      <section id="searchCarInput">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-xl-11 col-md-12">
              <div className="card shadow">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xl-3">
                        <div className="mb-3">
                          <label htmlFor="carName" className="form-label mb-1">
                            Nama Mobil
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="carName"
                            placeholder="Ketik nama/tipe mobil"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-xl-3">
                        <div className="mb-3">
                          <label htmlFor="category" className="form-label mb-1">
                            Kategori
                          </label>
                          <select
                            className="form-control"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            <option value="">Pilih Kategori</option>
                            <option value={"small"}>2 - 4 Orang</option>
                            <option value={"medium"}>4 - 6 Orang</option>
                            <option value={"large"}>6 - 8 Orang</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-xl-2">
                        <div className="mb-3">
                          <label htmlFor="price" className="form-label mb-1">
                            Harga
                          </label>
                          <select
                            className="form-control"
                            id="price"
                            value={`${minPrice}-${maxPrice}`}
                            onChange={handlePriceChange}
                          >
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
                          <label htmlFor="status" className="form-label mb-1">
                            Status
                          </label>
                          <select
                            className="form-control"
                            id="status"
                            value={isRented}
                            onChange={(e) => setIsRented(e.target.value)}
                          >
                            <option value="">Pilih Status</option>
                            <option value={true}>Tidak Tersedia</option>
                            <option value={false}>Tersedia</option>
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

      <ShowCars cars={cars} />
      {isLoading && <ShowCarsLoader />}

      <section id="pagination">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-5 d-flex  justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  {/* Previous Button */}
                  <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(page - 1)}
                      aria-label="Previous"
                    >
                      &laquo;
                    </button>
                  </li>

                  {/* Page Buttons */}
                  {(() => {
                    const maxVisiblePages = 5; // Adjust this number as needed
                    const halfVisible = Math.floor(maxVisiblePages / 2);
                    let startPage = Math.max(1, page - halfVisible);
                    let endPage = Math.min(
                      cars?.pageCount,
                      startPage + maxVisiblePages - 1
                    );

                    // Adjust for edge cases
                    if (endPage - startPage + 1 < maxVisiblePages) {
                      startPage = Math.max(1, endPage - maxVisiblePages + 1);
                    }

                    return Array.from(
                      { length: endPage - startPage + 1 },
                      (_, index) => (
                        <li
                          className={`page-item ${
                            page === startPage + index ? "active" : ""
                          }`}
                          key={startPage + index}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(startPage + index)}
                          >
                            {startPage + index}
                          </button>
                        </li>
                      )
                    );
                  })()}

                  {/* Next Button */}
                  <li
                    className={`page-item ${
                      cars && cars.length < pageSize ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(page + 1)}
                      aria-label="Next"
                    >
                      &raquo;
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchCarInput;
