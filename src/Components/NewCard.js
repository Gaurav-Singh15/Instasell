import React from 'react';
import {BlockStack, Card, Text , Button} from '@shopify/polaris';

function CardWithSubsection() {
  return (
    <Card roundedAbove="sm">
      <BlockStack>
        <BlockStack >
          <Text as="h1" variant="headingSm">
            <div>
                <h1 style={{fontSize:'15px', fontWeight:'bold'}}>Star Facts About Your Orders!!!</h1>
            </div>
          </Text>
          <br/>
        </BlockStack>
        <div>
          <BlockStack>
            <div>
              <Text as="p" variant="bodyMd">
              There are 8 shipments that have been in out for delivery for more than 3 days.               
              </Text>
              <br/>
              <Text as="p" variant="bodyMd">
                There are 5 Shipments in exception right now.
              </Text>
              <br/>
              <Text as="p" variant="bodyMd">
                The maximum chargebacks are from Miami.
              </Text>
              <br/>
              <br/>
            </div>
          </BlockStack>
        </div>
        <div>
          <Text as="p" variant="bodyMd">
          <Button>Check Orders Page</Button>
          </Text>
        </div>
      </BlockStack>
    </Card>
  );
}

export default CardWithSubsection;