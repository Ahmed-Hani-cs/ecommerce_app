import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getProductsByCatPrefix, productsCleanUp } from "@store/products/productsSllice";
const Products = () => {
  const { loading, error, records } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const params = useParams();
  useEffect(() => {
    if(params.prefix && typeof params.prefix=="string"){
      dispatch(getProductsByCatPrefix(params.prefix)) 
    }
    return () => {
      // cleanup
      dispatch(productsCleanUp())
    }
  }, [dispatch , params.prefix])
  const dataRow = records.length>0 ? records.map((ele,i)=>{
    return(
      <Col key={i} xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
        <Product {...ele}/>
      </Col>
    )
  }):"it's no products to Show " ;

  return (
    <Container>
      <Row>
        {dataRow}
      </Row>
    </Container>
  );
};

export default Products;
