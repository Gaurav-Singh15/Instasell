import React from 'react';
import {Box, Button, ButtonGroup, Card, FormLayout, Text, TextField} from '@shopify/polaris';

function CardWithMultipleSections3() {
  return (
    <div style={{}}>
        <Card roundedAbove="sm" >
      <Text as="h2" variant="headingSm">
      Seemlessly Integrate Custom HTML Elements
      </Text>
    
      <div style={{paddingTop:'10px'}}>
      <Box paddingBlockStart="200">
        <Text as="p" variant="bodyMd">
          Unleash Creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.
        </Text>
      </Box>
      </div>

        <div style={{paddingTop:'20px'}}>
        <Text as="p" variant="bodyMd">
         HTML Link
        </Text>
            <textarea style={{height:'100px', width:'320px', borderRadius:'5px'}} placeholder='Value'></textarea>
        </div>


      <ButtonGroup>
      <Button>Preview</Button>
      <Button variant="primary">Apply Changes</Button>
    </ButtonGroup>

      
    </Card>
    </div>
  );
}

export default CardWithMultipleSections3;
