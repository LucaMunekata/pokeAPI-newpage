import { Link } from "react-router-dom";

export function renderDivs(count, sprite, sprite2, sprite3) {
  if (count === 1) {
    if (!sprite) return null;
    else
      return (
        <>
          <div
            className="pokemon-evolution-img"
            style={{ height: "9.766vw", width: "9.766vw" }}
          >
            <Link
              to={`/pokemon/${sprite.id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={sprite.sprites.other["official-artwork"].front_default}
              ></img>
            </Link>
          </div>
        </>
      );
  } else if (count === 2) {
    if (!sprite || !sprite2) return null;
    else
      return (
        <>
          <div
            className="pokemon-evolution-img"
            style={{ left: "6.170vw", height: "9.766vw", width: "9.766vw" }}
          >
            <Link
              to={`/pokemon/${sprite.id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={sprite.sprites.other["official-artwork"].front_default}
              ></img>
            </Link>
          </div>
          <p class="arrow right"></p>
          <div
            className="pokemon-evolution-img"
            style={{ left: "22.106vw", height: "9.766vw", width: "9.766vw" }}
          >
            <Link
              to={`/pokemon/${sprite2.id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={sprite2.sprites.other["official-artwork"].front_default}
              ></img>
            </Link>
          </div>
        </>
      );
  } else if (count === 3) {
    if (!sprite || !sprite2 || !sprite3) return null;
    else
      return (
        <>
          <div
            className="pokemon-evolution-img"
            style={{
              left: "2.186vw",
              height: "9.766vw",
              width: "9.766vw",
            }}
          >
            <Link
              to={`/pokemon/${sprite.id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={sprite.sprites.other["official-artwork"].front_default}
              ></img>
            </Link>
          </div>
          <p className="arrow right" style={{ left: "32.66%" }}></p>
          <div
            className="pokemon-evolution-img"
            style={{ left: "14.138vw", height: "9.766vw", width: "9.766vw" }}
          >
            <Link
              to={`/pokemon/${sprite2.id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={sprite2.sprites.other["official-artwork"].front_default}
              ></img>
            </Link>
          </div>
          <p className="arrow right" style={{ left: `64.33%` }}></p>
          <div
            className="pokemon-evolution-img"
            style={{ left: "26.090vw", height: "9.766vw", width: "9.766vw" }}
          >
            <Link
              to={`/pokemon/${sprite3.id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={sprite3.sprites.other["official-artwork"].front_default}
              ></img>
            </Link>
          </div>
        </>
      );
  }
}
