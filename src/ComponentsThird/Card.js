import React from 'react';
import {Box, Button, ButtonGroup, Card, FormLayout, Text, TextField} from '@shopify/polaris';

function CardWithMultipleSections2() {
  return (
    <Card roundedAbove="sm">
      <Text as="h2" variant="headingSm">
      Elevate Your Brand Aesthetics with Custom Tracking Page Styles.
      </Text>
    
      <div style={{paddingTop:'10px'}}>
      <Box paddingBlockStart="200">
        <Text as="p" variant="bodyMd">
          Immerse Your customers in a branded experience by personalizing the colors on your tracking page.
        </Text>
      </Box>
      </div>

      <Box paddingBlockStart="200">
      <FormLayout>
      <Text as="h2" variant="headingSm">
      Accent Color
      <TextField placeholder='FF9898' />
      </Text>
      <Text as="h2" variant="headingSm">
      Text Color
      <TextField placeholder='571010'/>
      </Text>
      <Text as="h2" variant="headingSm">
      Background Color
      <TextField placeholder='FFEAEA'/>
      </Text>
      <ButtonGroup>
      <Button>Preview</Button>
      <Button variant="primary">Apply Colors</Button>
    </ButtonGroup>
      
      
    </FormLayout>

      </Box>
    </Card>
  );
}

export default CardWithMultipleSections2;