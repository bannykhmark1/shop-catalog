import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="item">
        <img
          className="img-item"
          src={"." + this.props.item.image}
          alt="Фото товара"
        />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.sky}</p>
        <b>
          {this.props.item.regular_price.value +
            " " +
            this.props.item.regular_price.currency}
        </b>
        <div
          className="add-to-card"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          +
        </div>
        <></>
      </div>
    );
  }
}
