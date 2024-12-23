import React, { Component } from "react";
import "../../styles/index.css";

export const Footer = () => (
	<footer className="footer mt-5 py-3">
		<div className="container">
			<div className="row align-items-start">
				<div className="First-Column col">
					<h5 className="m-3 text-light">Sobre nosotros</h5>
					<p><a href="" className="Footer-Links m-3" >Acerca de *nombredepágina.com*</a></p> {/*el link debe ser a la página correspondiente  */}
					<p><a href="" className="Footer-Links m-3">Términos y condiciones</a></p>
				</div>
				<div className="Second-Column col">
					<h5 className="m-3 text-light">Contáctanos</h5>
					<p><a href="" className="Footer-Links m-3">Atención al cliente</a></p>
					<p><a href="" className="Footer-Links m-3">Garantía de servicio</a></p>
					<p><a href="" className="Footer-Links m-3">Más información sobre servicios</a></p>
					<div className="Social-Icons d-flex justify-content-start">
						<i className="fa-brands fa-facebook fa-lg m-1 "></i>
						<i className="fab fa-instagram-square fa-lg m-1"></i>
						<i className="fab fa-whatsapp-square fa-lg m-1"></i>
					</div>
				</div>
				<div className="Third-Column col">
					<h5 className="mt-3 text-light">Formas de pago</h5>
					<div className="Payment-Icons d-flex justify-content-start">
						<div><i className="fa-brands fa-cc-visa fa-xl m-1"></i></div>
						<div><i className="fa-brands fa-cc-mastercard fa-xl m-1"></i></div>
						<div><i className="fa-brands fa-apple-pay fa-xl m-1"></i></div>
						<div><i className="fa-brands fa-cc-paypal fa-xl m-1"></i></div>
					</div>
				</div>
			</div>
		</div>
	</footer>
);
