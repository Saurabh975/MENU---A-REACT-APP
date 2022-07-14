import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import Moment from 'react-moment';

const RenderDish = ({ dish }) => {
  if (dish != null) {
    return (<div className="col-12 col-md-5 m-1">
      <Card key={dish.id}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <h4><CardTitle style={{ fontWeight: "bold" }}>{dish.name}</CardTitle></h4>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>)
  }
  else return (<div></div>)
}

const renderComments = (dish) => {
  if (dish != null)
    return (
      <div className="col-12 col-md-5 m-1">
        <ul className="list-unstyled">
          <h4>COMMENT</h4>
          {
            dish.comments.map(item => {
              return (
                <li key={item.id}>
                  {item.comment}<br />
                  --{item.author}, <Moment format="MMM Do, YYYY">{item.date}</Moment>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  else return (
    <div></div>
  )
}

export default function DishdetailComponent(dish) {

  // console.log(dish)
  return (
    <div className="row">
      <RenderDish dish={dish} />
      {/* {renderComments(dish)} */}
    </div>
  )
}