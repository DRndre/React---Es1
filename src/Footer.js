import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MyFooter = () => {
    return (
        <footer className="bg-dark w-100 text-white text-center p-3" style={{ minHeight: "30vh" }}>
            <h3 style={{ marginTop: "50px" }}>This is my footer!</h3>
        </footer>
    );
}

export default MyFooter;