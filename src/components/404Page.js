import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';

export class Page404 extends Component {
  state = {
    goToHome: false
  };

  goToHome = event => {
    event.preventDefault();
    this.setState({ goToHome: true });
  };

  render() {
    if (this.state.goToHome === true) {
      return <Redirect to="/" />;
    }
    debugger
    const pathName = this.props.location.pathname;
    let errorText = "This is an invalid page !!!"
    if(pathName.includes("/questions/") ){
    errorText = "The Question you are looking for Doesn't exists anymore!!!"
    }
    return (
      <div className="equal width row">
        <div className="column">
          <h1 className="ui icon center aligned header">
            <i aria-hidden="true" className="game icon"></i>404
            <div className="sub header">
              {errorText}
            </div>
          </h1>
        </div>
        <div className="column">
          <h4 className="ui  center aligned header">
            <button
              className="ui right center aligned labeled icon medium button blue"
              onClick={this.goToHome}
            >
              <i className="right home icon"></i>
              Home
            </button>
          </h4>
        </div>
      </div>
    );
  }
}

export default withRouter(Page404);
