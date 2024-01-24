import React from 'react';
import {Box, Button, ButtonGroup, Card, Icon, Text} from '@shopify/polaris';
import { StarFilledIcon, WalletIcon, WandIcon, WorkIcon } from '@shopify/polaris-icons';

function CardWithSection2() {
  return (
    <Card roundedAbove="sm">
      <Text as="h2" variant="headingSm">
        Explore Our Integrated Ecosystem
      </Text>
      <Box paddingBlockStart="200">
        <Text as="p" variant="bodyMd">
          Discover a variety of popular integrations tailored for your convenience.
        </Text>
      </Box>
      <Box>
      <div style={{display:'flex', flexFlow:'row'}}>
      <Icon
  source={StarFilledIcon}
  tone="base"
/>
<Icon
  source={WalletIcon}
  tone="base"
/>
<Icon
  source={WorkIcon}
  tone="base"
/>
<Icon
  source={WandIcon}
  tone="base"
/>
      </div>
      </Box>
      <ButtonGroup>
      <Button variant="primary">Explore Integrations</Button>
    </ButtonGroup>
    </Card>
  );
}

export default CardWithSection2;