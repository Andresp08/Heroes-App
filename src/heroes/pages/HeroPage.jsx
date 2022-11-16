import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroeById(id), [id]);

  const onNavigateBack = () => {
    hero.publisher == "Marvel Comics" ? navigate("/marvel") : navigate("/dc");
  };

  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }

  return (
    <div className="row mt-5 mb-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: {hero.alter_ego}</b>
          </li>
          <li className="list-group-item">
            <b>Publisher: {hero.publisher}</b>
          </li>
          <li className="list-group-item">
            <b>First appearance: {hero.first_appearance}</b>
          </li>
        </ul>

        <h6 className="mt-3 px-3">
          Characters:
          <p>{hero.characters}</p>
          <button
            className="px-3 btn btn-outline-primary"
            onClick={onNavigateBack}
          >
            &laquo; Back
          </button>
        </h6>
      </div>
    </div>
  );
};
