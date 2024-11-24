import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-5 py-3">
	 <div className="row align-items-start">
		<div className="First-Column col">
		<h5 className="m-3">Sobre nosotros</h5>
		<p className="m-3">Acerca de *nombre de aerolinea* </p>
		<p className="m-3">Trabaja con nosotros</p>
		<p className="m-3">Alianzas y beneficios</p>
		</div>
		<div className="Second-Column col">
		<h5 className="m-3">Contáctanos</h5>
		<p className="m-3">Atención al cliente</p>
		<p className="m-3">Términos y condiciones</p>
		<p className="m-3">Empleo</p>
		</div>
		<div className="Third-Column col ">
		<h5 className="mt-3">Formas de pago</h5>
		<div className="Icons d-flex justify-content-start">
			<div><i className="fa-brands fa-cc-visa fa-xl m-1"></i></div>
			<div><i class="fa-brands fa-cc-mastercard fa-xl m-1"></i></div>
			<div ><i class="fa-brands fa-apple-pay fa-xl m-1"></i></div>
			<div><i class="fa-brands fa-cc-paypal fa-xl m-1"></i></div>
		</div>
		</div>
	 </div>
	</footer>
);
