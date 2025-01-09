import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import RecomendationsCards from "../component/recomendationsCards";
import SeeMoreCard from "../component/seeMoreCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


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
	
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
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
									<div className="col d-flex align-items-center">
										<div className="form-group">
											<label>Fecha de Ida:</label>
											<input type="date" />
										</div>
										<div className="form-group ms-2">
											<label>Fecha Vuelta:</label><input type="date" />
										</div>
									</div>
									<div className="col order-last d-flex justify-content-end gap-2">
										<div className="dropdown">
											<button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
												Pasajeros & Clases
											</button>
											<ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{ width: '600px', height: 'auto' }}>
												<div className="row">
													<p>Please select the exact number of passengers to view the best prices</p>
													<div className="col-7">
														<li><button className="dropdown-item" type="">Action</button></li>
														<li><button className="dropdown-item" type="">Another action</button></li>
														<li><button className="dropdown-item" type="">Something else here</button></li>
													</div>
													<div className="col-3">Hola</div>
												</div>
											</ul>
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

				<div id="carouselDestinations" className="carousel carousel-dark slide">
						<div className="carousel-inner ">
							<div className="carousel-item active">
								<div className="d-flex justify-content-center gap-3">
								<RecomendationsCards />
								<RecomendationsCards />
								<RecomendationsCards />
								</div>
							</div>
							<div className="carousel-item">
								<div className="d-flex justify-content-center gap-3">
								<RecomendationsCards />
								<RecomendationsCards />
								<SeeMoreCard />
								</div>
							</div>
							
							<button className="carousel-control-prev" type="button" data-bs-target="#carouselDestinations" data-bs-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Previous</span>
							</button>
							<button className="carousel-control-next" type="button" data-bs-target="#carouselDestinations" data-bs-slide="next">
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
					<div id="carouselHotels" className="carousel carousel-dark slide">
						<div className="carousel-inner ">
							<div className="carousel-item active">
								<div className="d-flex justify-content-center gap-3">
								<RecomendationsCards />
								<RecomendationsCards />
								<RecomendationsCards />
								</div>
							</div>
							<div className="carousel-item">
								<div className="d-flex justify-content-center gap-3">
								<RecomendationsCards />
								<RecomendationsCards />
								<SeeMoreCard />
								</div>
							</div>
							<button className="carousel-control-prev" type="button" data-bs-target="#carouselHotels" data-bs-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Previous</span>
							</button>
							<button className="carousel-control-next" type="button" data-bs-target="#carouselHotels" data-bs-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</div>

				</div>
			</div>

			<div className="Recomendations-Cars container mt-5 border border-danger border-0 rounded">
				<h1 className="text-start p-2">Carros de alquiler recomendados</h1>
				<div className="Cars-Cards pb-3">
				<div id="carouselCars" className="carousel carousel-dark slide">
						<div className="carousel-inner ">
							<div className="carousel-item active">
								<div className="d-flex justify-content-center gap-3">
								<RecomendationsCards />
								<RecomendationsCards />
								<RecomendationsCards />
								</div>
							</div>
							<div className="carousel-item">
								<div className="d-flex justify-content-center gap-3">
								<RecomendationsCards />
								<RecomendationsCards />
								<SeeMoreCard/>
								</div>
							</div>
							<button className="carousel-control-prev" type="button" data-bs-target="#carouselCars" data-bs-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Previous</span>
							</button>
							<button className="carousel-control-next" type="button" data-bs-target="#carouselCars" data-bs-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};