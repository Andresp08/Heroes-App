import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return <></>;
  return <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  
  const heroUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col">
      <div className="card" style={{ minHeight: '310px' }}>
        <div className="row no-gutters">
          <div className="col-5">
            <img
              className="card-fluid card-img"
              src={heroUrl}
              alt={superhero}
              style={{ minHeight: '310px' }}
            />
          </div>
          {/*col-4*/}
          <div className="col-7">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              <CharactersByHero alter_ego={alter_ego} characters={characters}  />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link className="btn btn-outline-success" to={`/hero/${id}`}>Ver más</Link>
            </div>
          </div>
          {/*col-8*/}
        </div>
      </div>
    </div>
  );
};
