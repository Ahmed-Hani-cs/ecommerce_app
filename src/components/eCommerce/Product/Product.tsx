import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
const { product, productImg } = styles;
type TProps = { id: number , title: string , price: string ,cat_prefix: string, img:string}
const Product = ({title , price , cat_prefix , img , id}:TProps) => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src={img}
          alt=""
        />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
