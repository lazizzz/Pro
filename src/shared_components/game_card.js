import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect } from "react";
import { GameContext } from "../utilities/gameContext";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

function GameCard({ game }) {
      //useEffect AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
//   


  const { gameCart, setGameCart } = useContext(GameContext);
  // Function to delete the game from the database
  function deleteGame(gameId) {
    axios.delete(`http://localhost:3000/persons/${gameId}`).then(() => {
      alert("Ok Zor Boldi Pizdes!!!!");
    });
  }
  //
  // Add cart function
  function addCart() {
    let newArr = [...gameCart];
    newArr.push(game);
    setGameCart(newArr);
  }
  //
  return (
    <div
    data-aos="flip-up"
    data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration="500"
      key={game.id}
      className="card   w-[350px] card-bg shadow-2xl my-10 rounded-xl"
    >
      <div className="card-header aspect-video mx-3 mt-12">
        <img
          className="w-[350px] h-[300px] rounded-lg object-cover"
          src={game.imageURL}
          alt="tailwind-card-image"
        />
      </div>
      <div className=" respon-card card-body">
        <a href="#">
          <h4 className="font-semibold card-txt ml-4 mt-2 text-lg font-mono">{game.title}</h4>
        </a>
        <p className="opcacity-60 mb-4 line-clamp-2 ml-4 mt-4 card-txt">{game.description}</p>
        <p className=" font-bold mb-5">{game.price}$</p>
        <Link
          to={`/About/${game.id}`}
          className="button  text-zinc w-2/5 ml-4 card-txt"
        >
          Read More
        </Link>
        <button
          onClick={() => deleteGame(game.id)}
          type="submit"
          className="text-white bg-black rounded-lg py-2  ml-10 w-2/5"
        >
          Delete
        </button>
        <button
          onClick={addCart}
          className="card-txt uppercase py-3 w-4/5 mx-auto border-2 border-green-500 rounded-xl text-green-500 font-bold m-5 ml-4 cursor-pointer duration-200 active:scale-95  hover:text-white hover:bg-green-500"
          type="submit"
        >
          Add to Favorite 
        </button>
      </div>
    </div>
  );
}

export default GameCard;
