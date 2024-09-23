import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { useAppSelector, useAppDispatch } from '@store/hooks'

import { useEffect } from "react";
import { getAllCategories } from "@store/categories/categoriesSllice";
const Categories = () => {



  const { loading, error, records } = useAppSelector((state) => state.categories)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(records.length==0){
      dispatch(getAllCategories());
    }
  }, [dispatch]);

  const dataRow = records.length > 0 ? records.map((ele, i) => {
    return (
      <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2" key={i}>
        <Category item={ele} />
      </Col>
    )
  }) : "There are no categories th show";
  return (
    <Container>
      <Row>
        {dataRow}
      </Row>
    </Container>
  );
};

export default Categories;
