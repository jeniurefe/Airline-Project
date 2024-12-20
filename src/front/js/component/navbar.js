import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">
                    <img width="55" height="55" src="https://img.icons8.com/stickers/100/airplane-front-view.png" alt="airplane-front-view" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <img width="20" height="20" src="https://img.icons8.com/pastel-glyph/64/expand-arrow.png" alt="expand-arrow" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item hstack gap-3">
                            <Link className="nav-link text-white border-start" aria-current="page" to="#">Reservar</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ofertas
                            </a>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Home</a></li>
                                <li><a class="dropdown-item" href="#">Home</a></li>
                                <li><a class="dropdown-item" href="#">Home</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Check-IN</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Connect Miles</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Información
                            </a>
                            <ul className="dropdown-menu t" aria-labelledby="navbarDropdownMenuLink" style={{ width: '750px', height: 'auto' }}>
                                <div className="row">
                                    <div className="col">
                                        <h2 className="mt-2 p-2"> Información</h2>
                                        <li><a className="dropdown-item" href="#">Estado de vuelos</a></li>
                                        <li><a className="dropdown-item" href="#">Atención al cliente</a></li>
                                        <li><a className="dropdown-item" href="#">Equipaje</a></li>
                                        <li><a className="dropdown-item" href="#">Requisitos</a></li>
                                    </div>
                                    <div className="col">
                                    <img className="rounded-end" width="350" height="300" src="https://i.pinimg.com/736x/42/94/7f/42947f5d3e8e4b86813561066fc16936.jpg" alt="" />
                                    </div>
                                </div>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex ms-auto">
                        <a className="btn btn-outline-light" href="#">Iniciar Sesión</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};