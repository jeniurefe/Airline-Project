import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import RecomendationsCards from "../component/recomendationsCards";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const [activeTab, setActiveTab] = useState("flight");

	const handleTabClick = (tabId) => {
		setActiveTab(tabId);
	};

	const [origin, setOrigin] = useState("");
	const [destination, setDestination] = useState("");

	const handleSwitch = (e) => {
		const switchContainer = e.currentTarget.closest(".switch-container");
		switchContainer.classList.add("rotate");
		setTimeout(() => switchContainer.classList.remove("rotate"), 500);

		setOrigin(destination);
		setDestination(origin);
	};


	return (
		<div className="container-fluid">
			<div className="tab-container p-3 mt-5">
				<div className="row align-items-start">
					<div className="tabs">
						<div
							className={`tab ${activeTab === "flight" ? "active" : ""}`}
							onClick={() => handleTabClick("flight")}
						>
							BOOK A FLIGHT
						</div>
						<div
							className={`tab ${activeTab === "flight-hotel" ? "active" : ""}`}
							onClick={() => handleTabClick("flight-hotel")}
						>
							Flight & Hotel
						</div>
						<div
							className={`tab ${activeTab === "hotel" ? "active" : ""}`}
							onClick={() => handleTabClick("hotel")}
						>
							HOTEL
						</div>
						<div
							className={`tab ${activeTab === "car" ? "active" : ""}`}
							onClick={() => handleTabClick("car")}
						>
							CARS
						</div>
					</div>
				</div>
				<div className="container">
					{activeTab === "flight" && (
						<div id="flight" className="tab-content active">
							{/* Flight booking content here */}
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio1"
									value="option1"
								/>
								<label className="form-check-label" htmlFor="inlineRadio1">
									Ida y Vuelta
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio2"
									value="option2"
								/>
								<label className="form-check-label" htmlFor="inlineRadio2">
									Solo vuelta
								</label>
							</div>
							<div className="row mt-5">
								<div className="col order-first d-flex justify-content-start align-items-center gap-3">
									<div className="origin-container">
										<div className="form-group">
											<img
												width="24"
												height="24"
												src="https://img.icons8.com/material-rounded/24/airplane-take-off.png"
												alt="airplane-take-off"
											/>
											<label className="label">From</label>
											<input
												type="text"
												placeholder="Enter City or Airport"
												className="input-field"
												value={origin}
												onChange={(e) => setOrigin(e.target.value)}
											/>
										</div>
									</div>

									<div className="switch-container d-flex align-items-center">
										<button
											type="button"
											className="btn btn-outline switch-btn"
											onClick={handleSwitch}
										>
											<img
												width="24"
												height="24"
												src="https://img.icons8.com/forma-light-filled/24/switch.png"
												alt="switch"
											/>
										</button>
									</div>

									<div className="destination-container">
										<div className="form-group">
											<img
												width="24"
												height="24"
												src="https://img.icons8.com/fluency-systems-filled/50/airplane-landing.png"
												alt="airplane-landing"
											/>
											<label className="label">To</label>
											<input
												type="text"
												placeholder="Enter Destination"
												className="input-field"
												value={destination}
												onChange={(e) => setDestination(e.target.value)}
											/>
										</div>


									</div>
									<div className="col align-items-center">
									<div className="form-group">
											<label>Fecha de Ida:</label>
											<input type="date" />
										</div><div className="form-group"><label>Fecha Vuelta:</label><input type="date" /></div>
									</div>
									<div className="col order-last d-flex justify-content-end gap-2">
										<div className="form-group">
											<label>Pasajero-Clase:</label>
											<input type="text" placeholder="Número de pasajeros / Clase" />
										</div>
										<div class="d-grid gap-2 d-md-flex justify-content-md-end">
											<button class="btn btn-light" type="button">Button</button>
										</div>

									</div>

								</div>
							</div>

						</div>
					)}
					{activeTab === "flight-hotel" && (
						<div id="flight-hotel" className="tab-content active">
							<p>Flight & Hotel booking content</p>
						</div>
					)}
					{activeTab === "hotel" && (
						<div id="hotel" className="tab-content active">
							<p>Hotel booking content</p>
						</div>
					)}
					{activeTab === "car" && (
						<div id="car" className="tab-content active">
							<p>Car rental booking content</p>
						</div>
					)}
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
					<div id="carouselRecomendations" className="carousel slide">
						<div className="carousel-inner ">
							<div className="carousel-item active">

								<RecomendationsCards />
							</div>
							<div className="carousel-item">
								<RecomendationsCards />
							</div>
							<div className="carousel-item">
								<RecomendationsCards />
							</div>
							<div className="carousel-item">
								<RecomendationsCards />
							</div>
							<div className="carousel-item">
								<RecomendationsCards />
							</div>
							<div className="carousel-item">
								<RecomendationsCards />
							</div>
							<button className="carousel-control-prev" type="button" data-bs-target="#carouselRecomendations" data-bs-slide="prev">
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

<<<<<<< HEAD

			<div className="Recomendations-Hotels container mt-5 border border-danger border-0 rounded">
				<h1 className="text-start p-2">Alojamientos destacados</h1>
				<div className="Hotels-Cards pb-3">
					<div className="overflow-auto">
						<div className="row d-flex flex-row flex-nowrap">
							<RecomendationsCards /> <RecomendationsCards />  <RecomendationsCards /> <RecomendationsCards />  <RecomendationsCards /> <RecomendationsCards /> {/*Hay que mapear la carta, para que conforme se vayan agregando, vayan apareciendo las cartas */}
						</div>
					</div>
				</div>

			</div>
=======
>>>>>>> b955fa01a07e58ceb0ef9e5933b916592356189c
			<div className="Recomendations-Cars container mt-5 border border-danger border-0 rounded">
				<h1 className="text-start p-2">Carros de alquiler recomendados</h1>
				<div className="Cars-Cards pb-3">
					<RecomendationsCards /> {/*Hay que mapear la carta, para que conforme se vayan agregando, vayan apareciendo las cartas */}
				</div>
			</div>
		</div>
	);
};