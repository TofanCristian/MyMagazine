import React, { Component } from "react";
import Item from "./Item";
export class Items extends Component {
  render() {
    return (
      <main className="col-11">
        {this.props.items.map((el) => (
          <Item
            onShowItem={this.props.onShowItem}
            key={el.id}
            item={el}
            onAdd={this.props.onAdd}
          ></Item>
        ))}
      </main>
    );
  }
}

export default Items;