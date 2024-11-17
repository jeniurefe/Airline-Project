import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardsHome from "../component/cardsHome";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>

			<br></br><br></br><br></br>

			<div className="Recomendations container border border-danger border-0 rounded ">
<div className="Destinations">
<h1 className="text-start">Destinos Recomendados</h1>
</div>
 <CardsHome/> {/*Hay que mapear la carta, para que conforme se vayan agregando, vayan apareciendo las cartas */}
			</div>
		</div>
	);
};
