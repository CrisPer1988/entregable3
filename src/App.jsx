import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import LocationInfo from "./components/LocationInfo";
import ResidentInfo from "./components/ResidentInfo";
import getRandomLocation from "./utils/getRandomLocation";
import Pagination from "./components/Pagination";
import Page404 from "./components/Page404";
import SunMode from "./components/SunMode";

function App() {
  const [location, setLocation] = useState();
  const [numberLocation, setNumberLocation] = useState(getRandomLocation());
  const [hasError, setHasError] = useState(false);
  const [currentPage, setCurrentePage] = useState(1);
  const residentsPerPage = 6;
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${numberLocation}`;
    axios
      .get(url)
      .then((res) => {
        setLocation(res.data);
        setHasError(false);
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
      })
      .finally(() => setIsLoad(false));
  }, [numberLocation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.inputLocation.value.trim().length === 0) {
      setNumberLocation(getRandomLocation());
      e.target.reset();
    } else {
      setNumberLocation(e.target.inputLocation.value.trim());
      e.target.reset();
    }
    e.target.inputLocation.value = e.target.inputLocation.value.trim();
    e.target.reset();
  };

  /* console.log(inputValue); */

  const indexOfLastPost = currentPage * residentsPerPage;
  const indexOfFistPost = indexOfLastPost - residentsPerPage;
  const currentResidents = location?.residents.slice(
    indexOfFistPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => {
    setCurrentePage(pageNumber);
  };

  return (
    <>
      {isLoad ? (
        <div className="container__load">
          <div className="load__container">
            <div className="load"></div>
            <div className="load2"></div>
          </div>
        </div>
      ) : (
        <div className="banner" id="banner"></div>
      )}
      <div className="app">
        <SunMode />
        <a href="#banner" className="arrow__top">
          <i className="bx bxs-up-arrow"></i>
        </a>

        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form__input"
            id="inputLocation"
            type="text"
            placeholder="Search from 1 to 126"
          />
          <button className="form__btn">Search</button>
        </form>

        {hasError ? (
          <Page404 setNumberLocation={setNumberLocation} />
        ) : (
          <>
            <LocationInfo location={location} locationNum={numberLocation} />
            <Pagination
              residentsPerPage={residentsPerPage}
              totalResidents={location?.residents.length}
              paginate={paginate}
              currentPage={currentPage}
            />
            <div className="resident__container">
              {currentResidents?.map((url) => (
                <ResidentInfo key={url} url={url} />
              ))}
            </div>
            <Pagination
              residentsPerPage={residentsPerPage}
              totalResidents={location?.residents.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
