import React, { Component } from "react";


export class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <footer className="footer_pg fixed-bottom">
          <div className="text-center p-2">
            ©2023 Copyright RugnaSeva 

          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;