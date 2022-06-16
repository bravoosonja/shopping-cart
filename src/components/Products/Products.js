// Components
import ProductItem from "./ProductItem";
import Card from "../UI/Card";
// Images
import Product1Image from "../../assets/images/image-product-1.jpg";
import Product1Thumb from "../../assets/images/image-product-1-thumbnail.jpg";
import Product2Image from "../../assets/images/image-product-2.jpg";
import Product2Thumb from "../../assets/images/image-product-2-thumbnail.jpg";
import Product3Image from "../../assets/images/image-product-3.jpg";
import Product3Thumb from "../../assets/images/image-product-3-thumbnail.jpg";
import Product4Image from "../../assets/images/image-product-4.jpg";
import Product4Thumb from "../../assets/images/image-product-4-thumbnail.jpg";

const PRODUCTS = [
  {
    id: "p1",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.",
    price: 125.0,
    image: { Product1Image },
    thumbnail: { Product1Thumb },
  },
  {
    id: "p2",
    name: "Cool Sneakers",
    description:
      "These cool sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.",
    price: 75.0,
    image: { Product2Image },
    thumbnail: { Product2Thumb },
  },
  {
    id: "p3",
    name: "Awesome Sneakers",
    description:
      "These awesome sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.",
    price: 105.0,
    image: { Product3Image },
    thumbnail: { Product3Thumb },
  },
  {
    id: "p4",
    name: "Regular Sneakers",
    description:
      "These regular sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.",
    price: 65.0,
    image: { Product4Image },
    thumbnail: { Product4Thumb },
  },
];

const Products = () => {
  const allProducts = PRODUCTS.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
      image={product.image}
      thumbnail={product.thumbnail}
    />
  ));
  return (
    <main>
      <Card>{allProducts}</Card>
    </main>
  );
};

export default Products;
