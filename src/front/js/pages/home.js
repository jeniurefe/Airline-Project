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
			      <div id="carouselRecomendations" className="carousel slide">
				      <div className="carousel-inner ">
						  <div className="carousel-item active">
							
						    <RecomendationsCards/>
						  </div>
						  <div className="carousel-item">
						    <RecomendationsCards/>
						  </div>
						  <div className="carousel-item">
						    <RecomendationsCards/>
						  </div>
						  <div className="carousel-item">
						    <RecomendationsCards/>
						  </div>
						  <div className="carousel-item">
						    <RecomendationsCards/>
						  </div>
						  <div className="carousel-item">
						    <RecomendationsCards/>
						  </div>
						  <button className="carousel-control-prev"  type="button" data-bs-target="#carouselRecomendations" data-bs-slide="prev">
                           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                           <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#carouselRecomendations" data-bs-slide="next">
                           <span className="carousel-control-next-icon" aria-hidden="true"></span>
                           <span className="visually-hidden">Next</span>
                          </button>
					 </div>
				  </div>

				</div>
			</div>
			<div className="Recomendations-Hotels container mt-5 border border-danger border-0 rounded">
			<h1 className="text-start p-2">Alojamientos destacados</h1>
			<div className="Hotels-Cards pb-3">
			<div className="overflow-auto">
				     <div className="row d-flex flex-row flex-nowrap">
                       <RecomendationsCards/> <RecomendationsCards/>  <RecomendationsCards/> <RecomendationsCards/>  <RecomendationsCards/> <RecomendationsCards/> {/*Hay que mapear la carta, para que conforme se vayan agregando, vayan apareciendo las cartas */}
					 </div>
				  </div>
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
