import React, { Component } from "react";
import { AiOutlineDelete } from "react-icons/ai";
export default class Order extends Component {
  render() {
    return (
      <div className="item">
        <img
          className="img-item"
          src={"." + this.props.item.image}
          alt="Фото товара"
        />

        <div className="title">
          <h2>{this.props.item.title}</h2>
          <b>
            {this.props.item.regular_price.value +
              " " +
              this.props.item.regular_price.currency}
          </b>
        </div>

        <AiOutlineDelete
          className="delete"
          onClick={() => this.props.onDelete(this.props.item.id)}
        />
      </div>
    );
  }
}
