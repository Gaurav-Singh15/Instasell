import React from 'react'
import {Button, Card, Tag} from '@shopify/polaris';

function Card1() {
  return (
    <div>
        <Card>
        <div style={{display:'flex', paddingLeft:'10px'}}>
            <h1 style={{fontWeight:'bold', paddingBottom:'10px'}}>Shipment Details</h1>
            <h1 style={{paddingLeft:'200px'}}>Order Count : 6246</h1>
        </div>
      <div style={{display: 'flex'}}>
      <div>
      <Button>Delivered</Button>
      </div>
      <div style={{paddingLeft:'10px'}}>
      <Button>Out For Delivery</Button>
      </div>
      <div style={{paddingLeft:'10px'}}>
      <Button>Intransit</Button>
      </div>
      <div style={{paddingLeft:'10px'}}>
      <Button>Pending</Button>
      </div>
      </div>
      <div>
        <img src='https://tse2.mm.bing.net/th?id=OIP.ZCLOCZ0YmcXPftuJkmuNEgHaE7&pid=Api&P=0&h=180' style={{height:'250px', alignContent:'center'}}></img>
      </div>
        </Card>
    </div>
  )
}

export default Card1
