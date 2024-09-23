import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;
interface IProps{
  item:{id:number ,title:string , prefix:string , img:string},

}
const Category = ({item}:IProps) => {
  return (
    <div className={category}>
      <Link to={`/categories/products/${item.prefix}`} style={{"textDecoration":"none"}}>
        <div className={categoryImg}>
          <img
            src={item.img}
            alt="Cat type"
          />
        </div>
        <h4 className={categoryTitle}>{item.title}</h4>
      </Link>
    </div>
  );
};

export default Category;
