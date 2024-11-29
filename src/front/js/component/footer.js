import React, { Component } from "react";
import "../../styles/home.css";

export const Footer = () => (
	<footer className="footer mt-5 py-3">
	 <div className="row align-items-start container ">
		<div className="First-Column col">
		<h5 className="m-3 text-light">Sobre nosotros</h5>
		<a href="https://i.pinimg.com/236x/99/17/b8/9917b8cbf2a4183bfe58eee29a0f139c.jpg" className="About-Us m-3 text-light" >Acerca de *nombredepágina.com*</a>
		<p className="m-3 text-light">Términos y condiciones</p>
		
		</div>
		<div className="Second-Column col">
		<h5 className="m-3 text-light">Contáctanos</h5>
		<p className="m-3 text-light">Atención al cliente</p>
		<p className="m-3 text-light">Garantía de servicio</p>
		<p className="m-3 text-light">Más información sobre servicios</p>
		</div>
		<div className="Third-Column col ">
		<h5 className="mt-3 text-light">Formas de pago</h5>
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
