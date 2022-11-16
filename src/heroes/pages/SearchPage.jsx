import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroeByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();

  //trae el pathname = /search y el search = ?q="batman"
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroeByName(q);

  const showSearch = q.length === 0;
  const showError =  q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div className="my-5">
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

          {/*Render alert conditional*/}
          <div
            className="alert alert-info"
            style={{ display: showSearch ? '' : 'none' }}
          >
            <p>Search a heroe</p>
          </div>

          <div
            className="alert alert-danger"
            style={{ display: showError ? '' : 'none' }}
          >
            <p>
              No hero with: <b>{q}</b>{" "}
            </p>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
      {/*row*/}
    </div>
  );
};
