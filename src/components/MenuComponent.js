import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';


export default function MenuComponent(props) {
  const menu = props.dishes.map(dish => {
    return (
      <div className='col-12 col-md-5 m-1' key={dish.id}>
        <Card
          onClick={() => props.onClick(dish.id)}
          >
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <h4><CardTitle style={{ fontWeight: "bold" }}>{dish.name}</CardTitle></h4>
          </CardImgOverlay>
        </Card>
      </div>
    )
  })

  return(
    <div className='row'>{menu}</div>
  )
}
