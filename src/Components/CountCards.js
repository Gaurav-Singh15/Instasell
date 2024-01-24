import React from 'react'
import {Box, Card, Layout, Text} from '@shopify/polaris';

function CountCards(props) {
  return (
    <div>
      <Card roundedAbove="sm">
      <Text as="h2" variant="headingSm">
        <div >
            <h1 style={{fontSize:'15px', fontWeight:'bold'}}>{props.att.text}</h1>
        </div>
      </Text>
      <Box paddingBlockStart="200">
        <Text as="p" variant="bodyMd">
          {props.att.number}
        </Text>
      </Box> 
    </Card>
    </div>
  )
}

export default CountCards
