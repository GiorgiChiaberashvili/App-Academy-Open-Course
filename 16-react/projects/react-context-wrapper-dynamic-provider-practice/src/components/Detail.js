import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Detail = () => {
  const { sign } = useContext(HoroscopeContext);

  return (
    <div className="details">
      <img src={sign.backgroundImg} alt={sign.name} />
      <h2>{sign.name}</h2>
      <h4>{sign.date}</h4>
      <h4>{sign.element}</h4>
      <h4>{sign.match}</h4>
      <p>{sign.traits}</p>
    </div>
  );
};

export default Detail;
