import React from 'react';
import './index.css'; // Correct the import statement for your CSS file

function Footer() {
    return (
        <footer>
            <div className="column">
                <h1>Brands</h1>
                <div className="column-inner">
                    <div className="columns">
                        <p>Apple</p>
                        <p>Samsung</p>
                        <p>Nokia</p>
                        <p>Casio</p>
                        <p>Black + Decker</p>
                        <p>Lego</p>
                        <p>Nikon</p>
                    </div>
                    <div className="columns">
                        <p>Anex</p>
                        <p>Dell</p>
                        <p>HP</p>
                        <p>Q Mobile</p>
                        <p>Philips</p>
                        <p>Fitbit</p>
                        <p>Braun</p>
                    </div>
                </div>
            </div>
            <div className="column">
                <h1>Customer Service</h1>
                <div className="column-inner">
                    <div className="columns">
                        <p>Apple</p>
                        <p>Samsung</p>
                        <p>Nokia</p>
                        <p>Casio</p>
                        <p>Black + Decker</p>
                        <p>Lego</p>
                        <p>Nikon</p>
                    </div>
                </div>
            </div>
            <div className="column">
                <h1>Questions</h1>
                <div className="column-inner">
                    <div className="columns">
                        <p>Apple</p>
                        <p>Samsung</p>
                        <p>Nokia</p>
                        <p>Casio</p>
                        <p>Black + Decker</p>
                        <p>Lego</p>
                        <p>Nikon</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
