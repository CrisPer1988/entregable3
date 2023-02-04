import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import LocationInfo from "./components/LocationInfo";
import ResidentInfo from "./components/ResidentInfo";
import getRandomLocation from "./utils/getRandomLocation";
import Pagination from "./components/Pagination";

function App() {
  const [location, setLocation] = useState();
  const [numberLocation, setNumberLocation] = useState(getRandomLocation());
  const [hasError, setHasError] = useState(false);
  const [currentPage, setCurrentePage] = useState(1);
  const residentsPerPage = 10;

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
      });
  }, [numberLocation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.inputLocation.value.trim().length === 0) {
      setNumberLocation(getRandomLocation());
    } else {
      setNumberLocation(e.target.inputLocation.value.trim());
    }
    e.target.inputLocation.value = e.target.inputLocation.value.trim();
  };

  console.log(numberLocation);

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
    <div className="app">
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
        <h2 className="app__error">
          ❌ Hey! you must provide an id from 1 to 126 🥺
        </h2>
      ) : (
        <>
          <LocationInfo location={location} />
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
  );
}

export default App;
