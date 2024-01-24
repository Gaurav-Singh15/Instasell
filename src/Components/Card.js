import {CalloutCard} from '@shopify/polaris';
import React from 'react';

function Example(props) {
  return (
    <CalloutCard
      title={props.rishabh.title}
      illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
      primaryAction={{
        content: props.rishabh.button,
        url: '#',
      }}
    >
      <p>{props.rishabh.text}</p>
    </CalloutCard>
  );
}

export default Example;