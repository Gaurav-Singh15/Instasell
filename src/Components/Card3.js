import React from 'react';
import {Box, Card, Layout, Text} from '@shopify/polaris';
import Example from './Card';
import CountCards from './CountCards';

let cardObject = [
    {
        text : 'Order',
        number : '80'
    },
    {
        text : 'Tracking Page Views',
        number : '44'
    }

]

function CardWithMultipleSections(props) {
  return (
    <Card roundedAbove="sm">
      <Text as="h2" variant="headingSm">
        <div>
            <h1 style={{fontSize:'15px', fontWeight:'bold'}}>Tracking Page Views Vs Orders</h1>
        </div>
      </Text>
      <Box paddingBlockStart="200">
        <Text as="p" variant="bodyMd">
          <div style={{marginTop:'20px', marginBottom:'10px'}}>
          Understand user enagegement patterns and optimize your tracking page for enhanced customer experiences.
          </div>
        </Text>
      </Box> 
      <Box paddingBlockStart="200px">
        <div style={{marginTop:'20px'}}>
        <CountCards att ={cardObject[0]}/>
        </div>
      </Box>
      <Box paddingBlockStart="200px" paddingBlock="200px">
        <div style={{marginTop:'20px', marginBottom:'20px'}}>
        <CountCards att ={cardObject[1]}/>
        </div>
      </Box>
    </Card>
  );
}

export default CardWithMultipleSections;