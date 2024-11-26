import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import RecomendationsCards from "../component/recomendationsCards";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const handleTabClick = (tabId) => {
		const tabs = document.querySelectorAll(".tab");
		const contents = document.querySelectorAll(".tab-content");

		tabs.forEach((tab) => tab.classList.remove("active"));
		contents.forEach((content) => content.classList.remove("active"));

		document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add("active");
		document.getElementById(tabId).classList.add("active");
	};

	return (
		<div className="container-fluid">
			<div className="tab-container p-3 mt-5">
				<div class="row align-items-start">
					<div className="tabs">
						<div className="tab active" data-tab="flight" onClick={() => handleTabClick("flight")}>BOOK A FLIGHT</div>
						<div className="tab" data-tab="flight-hotel" onClick={() => handleTabClick("flight-hotel")}>Flight & Hotel</div>
						<div className="tab" data-tab="hotel" onClick={() => handleTabClick("hotel")}>HOTEL</div>
						<div className="tab" data-tab="car" onClick={() => handleTabClick("car")}>CARS</div>
					</div>
				</div>
				<div className="container">
					<div className="row mt-4">
						<div className="col-12 d-flex justify-content-start align-items-center gap-2">
							<button type="button" className="btn btn-outline-light round-button"></button>Ida y Vuelta
							<button type="button" className="btn btn-outline-light round-button"></button>Solo Vuelta
						</div>
					</div>


					<div className="row mt-5">
						<div className="col d-flex justify-content-start align-items-center gap-3">
							<div className="flight-booking-container">
								<form className="booking-form"></form>
								<div className="form-group">
									<img width="24" height="24" src="https://img.icons8.com/material-rounded/24/airplane-take-off.png" alt="airplane-take-off" />
									<label>Ingrese el Origen:</label>
									<input type="text" placeholder="Ciudad de origen" />
								</div>
							</div>

							{/* Switch entre Origen y Destino */}
							<div className="switch-container d-flex align-items-center">
								<button
									type="button"
									className="btn btn-outline switch-btn"
									onClick={() => console.log("Switch entre Origen y Destino")}
								>
									<img width="24" height="24" src="https://img.icons8.com/forma-light-filled/24/switch.png" alt="switch"/>
								</button>
							</div>

							<div className="form-group">
								<img width="24" height="24" src="https://img.icons8.com/fluency-systems-filled/50/airplane-landing.png" alt="airplane-landing" />
								<label>Ingrese el Destino:</label>
								<input type="text" placeholder="Ciudad de destino" />
							</div>
						</div>

						<br></br><br></br><br></br>
						<div className="col order-1 d-flex justify-content-start align-items-center gap-2">
							<div className="form-group"> <label>Fecha de Ida:</label> <input type="date" /> </div><div className="form-group"> <label>Fecha Vuelta:</label> <input type="date" /> </div>
						</div>
						<div className="col order-5 d-flex justify-content-start align-items-center gap-2">
							<div className="form-group"> <label>Pasajero/Clase:</label> <input type="text" placeholder="Número de pasajeros / Clase" /></div>
							<div class="d-grid gap-2 d-md-flex justify-content-md-end">
								<button class="btn btn-light" type="button">Button</button>
							</div>

						</div>
					</div>
				</div>
			</div>

			<br></br><br></br><br></br>

			<div className="Recomendations-Destinations container border border-danger border-0 rounded ">

				<h1 className="text-start p-2">Destinos recomendados</h1>
				<div className="Destinations-Cards pb-3">

					<RecomendationsCards /> {/*Hay que mapear la carta, para que conforme se vayan agregando, vayan apareciendo las cartas */}
				</div>
			</div>
			<div className="Recomendations-Hotels container mt-5 border border-danger border-0 rounded">
				<h1 className="text-start p-2">Alojamientos destacados</h1>
				<div className="Hotels-Cards pb-3">
					<RecomendationsCards /> {/*Hay que mapear la carta, para que conforme se vayan agregando, vayan apareciendo las cartas */}
				</div>
			</div>
			<div className="Recomendations-Cars container mt-5 border border-danger border-0 rounded">
				<h1 className="text-start p-2">Carros de alquiler recomendados</h1>
				<div className="Cars-Cards pb-3">
					<RecomendationsCards /> {/*Hay que mapear la carta, para que conforme se vayan agregando, vayan apareciendo las cartas */}
				</div>
			</div>
		</div>
	);
};