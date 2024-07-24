import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./componetnts/navibar";
import Footer from "./componetnts/footer";
import Items from "./componetnts/items";
import ShowFulItem from "./componetnts/ShowFulItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      items: [
        {
          id: 1,
          title: "Lambar Gambar",
          img: "img1.jpg",
          desc: "Lambar gambar 2005 nascut in africa domnitor al microfonului",
          category: "cars",
          price: "9999",
        },
        {
          id: 2,
          title: "Lambar Gambar",
          img: "img2.jpg",
          desc: "Lambar gambar 2005 nascut in africa domnitor al microfonului",
          category: "cars",
          price: "9999",
        },
        {
          id: 3,
          title: "Lambar Gambar",
          img: "img3.jpg",
          desc: "Lambar gambar 2005 nascut in africa domnitor al microfonului",
          category: "cars",
          price: "9999",
        },
        {
          id: 4,
          title: "Lambar Gambar",
          img: "img4.png",
          desc: "Lambar gambar 2005 nascut in africa domnitor al microfonului",
          category: "cars",
          price: "9999",
        },
        {
          id: 5,
          title: "Lambar Gambar",
          img: "img5.jpg",
          desc: "Lambar gambar 2005 nascut in africa domnitor al microfonului",
          category: "cars",
          price: "9999",
        },
        {
          id: 6,
          title: "Lambar Gambar",
          img: "img6.jpg",
          desc: "Lambar gambar 2005 nascut in africa domnitor al microfonului",
          category: "cars",
          price: "9999",
        },
      ],
      showFulItem: false,
      fullItem: {},
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <NavBar orders={this.state.order} onDelete={this.deleteOrder}></NavBar>
        <Items
          onShowItem={this.onShowItem}
          items={this.state.items}
          onAdd={this.addToOrder}
        ></Items>
        {this.state.showFulItem && (
          <ShowFulItem
            item={this.state.fullItem}
            onShowItem={this.onShowItem}
            onAdd={this.addToOrder}
          ></ShowFulItem>
        )}
        <Footer></Footer>
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFulItem: !this.state.showFulItem });
  }

  deleteOrder(id) {
    this.setState({ order: this.state.order.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.order.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ order: [...this.state.order, item] });
  }
}

export default App;
