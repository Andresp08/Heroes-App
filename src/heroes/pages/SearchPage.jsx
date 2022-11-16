import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";

export const SearchPage = () => {
  const navigate = useNavigate();

  //trae el pathname = /search y el search = ?q="batman"
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);

    console.log({ searchText });
  };

  return (
    <>
      <h2>Search</h2>

      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching...</h4>

          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results....</h4>

          <div className="alert alert-info">Search a heroe</div>
          <div className="alert alert-danger">
            No hero with: <b>{q.length > 0 ? q : 'search...' }</b>{" "}
          </div>

          {/* <HeroCard {...hero} /> */}
        </div>
      </div>
      {/*row*/}
    </>
  );
};
