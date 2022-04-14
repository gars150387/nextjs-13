import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About } from "../view/About";
import { Contact } from "../view/Contact";
import { Design } from "../view/Design";
import { Home } from "../view/Home";
import { Footer } from "../components/Footer";
import { NavbarWebsite } from "../components/Navbar";
import { Error404 } from "../view/Error404";


export const RouteMain = () => {
	return (
		<div>
			<BrowserRouter>
					<NavbarWebsite />
					<Routes>
						<Route exact path="/" component={ Home } />
						<Route exact path="/about" component={ About } />
						<Route exact path="/design" component={ Design } />
						<Route exact path="/contact" component={ Contact } />
						<Route component={ Error404 } />
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};
