import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import RecomendationsCards from "../component/recomendationsCards";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>

			<br></br><br></br><br></br>

			<div className="Recomendations-Destinations container border border-danger border-0 rounded ">

               <h1 className="text-start p-2">Destinos recomendados</h1>
                  <div className="Destinations-Cards pb-3 ">
                  <RecomendationsCards/> {/*Hay que mapear la carta, para que conforme se vayan agregando, vayan apareciendo las cartas */}
				  </div>
			</div>
			<div className="Recomendations-Hotels container mt-5 border border-danger border-0 rounded">
			<h1 className="text-start p-2">Alojamientos destacados</h1>
			   <div className="Hotels-Cards pb-3">
			     <RecomendationsCards/> {/*Hay que mapear la carta, para que conforme se vayan agregando, vayan apareciendo las cartas */}
			   </div>
			</div>
			<div className="Recomendations-Cars container mt-5 border border-danger border-0 rounded">
			<h1 className="text-start p-2">Carros de alquiler recomendados</h1>
			   <div className="Cars-Cards pb-3">
			       <RecomendationsCards/> {/*Hay que mapear la carta, para que conforme se vayan agregando, vayan apareciendo las cartas */}
			   </div>
			</div>
		</div>
	);
};
