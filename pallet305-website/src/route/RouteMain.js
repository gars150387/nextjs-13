import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";

import { NavbarWebsite } from "./component/Navbar";
import { Footer } from "./component/footer";
import { About } from "./views/About";
import { Design } from "./views/Design";
import { Contact } from "./views/Contact";

export const RouteMain = () => {
	return (
		<div>
			<BrowserRouter>
					<NavbarWebsite />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/design">
							<Design />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
			</BrowserRouter>
		</div>
	);
};
