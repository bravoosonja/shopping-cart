// Components
import ProductItem from "./ProductItem";
import Card from "../UI/Card";

const PRODUCTS = [
  {
    id: "p1",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.",
    price: 125.0,
    image: require("../../assets/images/image-product-1.jpg"),
    thumbnail: require("../../assets/images/image-product-1-thumbnail.jpg"),
  },
  {
    id: "p2",
    name: "Cool Sneakers",
    description:
      "These cool sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.",
    price: 75.0,
    image: require("../../assets/images/image-product-2.jpg"),
    thumbnail: require("../../assets/images/image-product-2-thumbnail.jpg"),
  },
  {
    id: "p3",
    name: "Awesome Sneakers",
    description:
      "These awesome sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.",
    price: 105.0,
    image: require("../../assets/images/image-product-3.jpg"),
    thumbnail: require("../../assets/images/image-product-3-thumbnail.jpg"),
  },
  {
    id: "p4",
    name: "Regular Sneakers",
    description:
      "These regular sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.",
    price: 65.0,
    image: require("../../assets/images/image-product-4.jpg"),
    thumbnail: require("../../assets/images/image-product-4-thumbnail.jpg"),
  },
];

const Products = () => {
  const allProducts = PRODUCTS.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      image={product.image}
      description={product.description}
      price={product.price}
    />
  ));

  return (
    <main>
      <Card>{allProducts}</Card>
    </main>
  );
};

export default Products;
