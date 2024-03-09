import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Navbar.js";
import MyFooter from "./Footer.js";
import Welcome from "./Welcome.js";

function EpiBooks() {
    return (
        <div>
            <MyNav />
            <Welcome />
            <MyFooter />
        </div>
    )
}

export default EpiBooks;