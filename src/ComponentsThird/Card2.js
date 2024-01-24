import React from 'react';
import {Box, Button, ButtonGroup, Card, Text} from '@shopify/polaris';

function CardWithSection() {
  return (
    <Card roundedAbove="sm">
      <Text as="h2" variant="headingSm">
        Exclusive Onboarding Support for High-Volume Brands
      </Text>
      <Box paddingBlockStart="200">
        <Text as="p" variant="bodyMd">
          Unlock personalized guidance! Book a one-on-one onboarding call to Streamline experience.
        </Text>
      </Box>
      <ButtonGroup>
      <Button variant="primary">Schedule a call</Button>
    </ButtonGroup>
    </Card>
  );
}

export default CardWithSection;