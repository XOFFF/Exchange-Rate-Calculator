import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Rate from "./Rate/Rate";
import About from "./About/About";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCookie: true };
  }

  toggleCookie = () => {
    this.setState({
      showCookie: false,
    });
  };

  render() {
    return (
      <div className="site">
        <Header />
        <div className="container">
          <main>
            <Routes>
              <Route exact path="/" Component={Rate} />
              <Route exact path="/about" Component={About} />
            </Routes>
          </main>
        </div>

        <div
          className="container"
          id="cookie_info"
          style={{ display: this.state.showCookie ? "block" : "none" }}
        >
          <div className="site-content">
            <div className="submit-content">
              On our website we use cookies to collect technical information.
              <br />
              In particular, for personalized operation of the site, we process
              the IP address of the region of your location.&nbsp;
              <button
                className="btn btn-primary btn-sm"
                onClick={this.toggleCookie}
              >
                OK
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
