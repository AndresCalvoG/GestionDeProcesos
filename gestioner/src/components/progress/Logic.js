import React, { useState } from "react";

class Logic {
  constructor() {
    this.state = { load: 0, valor: 0 };
  }

  suma() {
    if (this.state.valor >= 100) {
      this.state.valor = 0;
      this.state.load = this.state.valor;
    } else {
      this.state.valor++;
      this.state.load = this.state.valor;
      //console.log(this.state.load);
    }
    return this.state.load;
  }
}

const logic = new Logic();

export default logic;
