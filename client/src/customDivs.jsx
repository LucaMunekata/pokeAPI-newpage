import { Link } from "react-router-dom";

export function renderDivs(count, sprites) {
  if (count === 1) {
    if (!sprites["e1"]) return null;
    else
      return (
        <>
          <div
            className="pokemon-evolution-img"
            style={{ height: "9.766vw", width: "9.766vw" }}
          >
            <Link
              to={`/pokemon/${sprites["e1"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e1"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
        </>
      );
  } else if (count === 2) {
    if (!sprites["e1"] || !sprites["e2"]) return null;
    else
      return (
        <>
          <div
            className="pokemon-evolution-img"
            style={{ left: "6.170vw", height: "9.766vw", width: "9.766vw" }}
          >
            <Link
              to={`/pokemon/${sprites["e1"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e1"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <p className="arrow right"></p>
          <div
            className="pokemon-evolution-img"
            style={{ left: "22.106vw", height: "9.766vw", width: "9.766vw" }}
          >
            <Link
              to={`/pokemon/${sprites["e2"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e2"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
        </>
      );
  } else if (count === 3) {
    if (!sprites["e1"] || !sprites["e2"] || !sprites["e3"]) return null;
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
              to={`/pokemon/${sprites["e1"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e1"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <p className="arrow right" style={{ left: "32.66%" }}></p>
          <div
            className="pokemon-evolution-img"
            style={{ left: "14.138vw", height: "9.766vw", width: "9.766vw" }}
          >
            <Link
              to={`/pokemon/${sprites["e2"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e2"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <p className="arrow right" style={{ left: `64.33%` }}></p>
          <div
            className="pokemon-evolution-img"
            style={{ left: "26.090vw", height: "9.766vw", width: "9.766vw" }}
          >
            <Link
              to={`/pokemon/${sprites["e3"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e3"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
        </>
      );
  } else if (count === 4) {
    if (!sprites["e1"] || !sprites["e2"] || !sprites["e3"] || !sprites["e4"])
      return null;
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
              to={`/pokemon/${sprites["e1"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e1"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <p className="arrow right" style={{ left: "32.66%", top: "25%" }}></p>
          <div
            className="pokemon-evolution-img"
            style={{
              top: "1.08533vw",
              left: "15.766vw",
              height: "6.510vw",
              width: "6.510vw",
            }}
          >
            <Link
              to={`/pokemon/${sprites["e2"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e2"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <p
            className="arrow right"
            style={{ left: `32.66%`, top: "calc(25% + 6.510vw)" }}
          ></p>
          <div
            className="pokemon-evolution-img"
            style={{
              top: "1.08533vw",
              left: "27.718vw",
              height: "6.510vw",
              width: "6.510vw",
            }}
          >
            <Link
              to={`/pokemon/${sprites["e3"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e3"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <p className="arrow right" style={{ left: "64.33%", top: "25%" }}></p>
          <div
            className="pokemon-evolution-img"
            style={{
              top: "8.68066vw",
              left: "15.766vw",
              height: "6.510vw",
              width: "6.510vw",
            }}
          >
            <Link
              to={`/pokemon/${sprites["e4"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e4"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <p
            className="arrow right"
            style={{ left: `64.33%`, top: "calc(25% + 6.510vw)" }}
          ></p>
          <div
            className="pokemon-evolution-img"
            style={{
              top: "8.68066vw",
              left: "27.718vw",
              height: "6.510vw",
              width: "6.510vw",
            }}
          >
            <Link
              to={`/pokemon/${sprites["e5"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e5"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
        </>
      );
  } else if (count === 5) {
    if (!sprites["e1"] || !sprites["e2"] || !sprites["e3"] || !sprites["e4"])
      return null;
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
              to={`/pokemon/${sprites["e1"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e1"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <p className="arrow right" style={{ left: "32.66%" }}></p>
          <div
            className="pokemon-evolution-img"
            style={{ left: "14.138vw", height: "9.766vw", width: "9.766vw" }}
          >
            <Link
              to={`/pokemon/${sprites["e2"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e2"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <p className="arrow right" style={{ left: "64.33%", top: "25%" }}></p>
          <div
            className="pokemon-evolution-img"
            style={{
              top: "1.08533vw",
              left: "27.718vw",
              height: "6.510vw",
              width: "6.510vw",
            }}
          >
            <Link
              to={`/pokemon/${sprites["e3"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e3"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <p
            className="arrow right"
            style={{ left: `64.33%`, top: "calc(25% + 6.510vw)" }}
          ></p>
          <div
            className="pokemon-evolution-img"
            style={{
              top: "8.68066vw",
              left: "27.718vw",
              height: "6.510vw",
              width: "6.510vw",
            }}
          >
            <Link
              to={`/pokemon/${sprites["e4"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e4"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
        </>
      );
  } else if (count === 6) {
    if (!sprites["e1"] || !sprites["e2"] || !sprites["e3"]) return null;
    else
      return (
        <>
          <div
            className="pokemon-evolution-img"
            style={{ left: "6.170vw", height: "9.766vw", width: "9.766vw" }}
          >
            <Link
              to={`/pokemon/${sprites["e1"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e1"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <p className="arrow right"></p>
          <div
            className="pokemon-evolution-img"
            style={{
              top: "1.08533vw",
              left: "25.2765vw",
              height: "6.510vw",
              width: "6.510vw",
            }}
          >
            <Link
              to={`/pokemon/${sprites["e2"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e2"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <div
            className="pokemon-evolution-img"
            style={{
              top: "8.68066vw",
              left: "25.2765vw",
              height: "6.510vw",
              width: "6.510vw",
            }}
          >
            <Link
              to={`/pokemon/${sprites["e3"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e3"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
        </>
      );
  } else if (count === 7) {
  } else if (count === 8) {
    if (!sprites["e1"] || !sprites["e2"] || !sprites["e3"]) return null;
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
              to={`/pokemon/${sprites["e1"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e1"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <p className="arrow right" style={{ left: "32.66%" }}></p>
          <div
            className="pokemon-evolution-img"
            style={{
              top: "1.62775vw",
              left: "14.138vw",
              height: "4.8825vw",
              width: "4.8825vw",
            }}
          >
            <Link
              to={`/pokemon/${sprites["e2"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e2"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <div
            className="pokemon-evolution-img"
            style={{
              top: "1.62775vw",
              left: "20.1135vw",
              height: "4.8825vw",
              width: "4.8825vw",
            }}
          >
            <Link
              to={`/pokemon/${sprites["e3"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e3"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <div
            className="pokemon-evolution-img"
            style={{
              top: "1.62775vw",
              left: "26.089vw",
              height: "4.8825vw",
              width: "4.8825vw",
            }}
          >
            <Link
              to={`/pokemon/${sprites["e4"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e4"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <div
            className="pokemon-evolution-img"
            style={{
              top: "1.62775vw",
              left: "32.0645vw",
              height: "4.8825vw",
              width: "4.8825vw",
            }}
          >
            <Link
              to={`/pokemon/${sprites["e5"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e5"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <div
            className="pokemon-evolution-img"
            style={{
              top: "9.76575vw",
              left: "14.138vw",
              height: "4.8825vw",
              width: "4.8825vw",
            }}
          >
            <Link
              to={`/pokemon/${sprites["e6"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e6"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <div
            className="pokemon-evolution-img"
            style={{
              top: "9.76575vw",
              left: "20.1135vw",
              height: "4.8825vw",
              width: "4.8825vw",
            }}
          >
            <Link
              to={`/pokemon/${sprites["e7"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e7"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <div
            className="pokemon-evolution-img"
            style={{
              top: "9.76575vw",
              left: "26.089vw",
              height: "4.8825vw",
              width: "4.8825vw",
            }}
          >
            <Link
              to={`/pokemon/${sprites["e8"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e8"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
          <div
            className="pokemon-evolution-img"
            style={{
              top: "9.76575vw",
              left: "32.0645vw",
              height: "4.8825vw",
              width: "4.8825vw",
            }}
          >
            <Link
              to={`/pokemon/${sprites["e9"].id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={
                  sprites["e9"].sprites.other["official-artwork"].front_default
                }
              ></img>
            </Link>
          </div>
        </>
      );
  } else if (count === 9) {
  }
}
