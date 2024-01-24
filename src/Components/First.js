import {
    Page,
    Layout,
    LegacyCard,
    ResourceList,
    Thumbnail,
    Text,
    Card,
  } from '@shopify/polaris';
  import React from 'react';
import Example from './Card';
  
  let cardObject = [
    {
        text : 'Your oredr details from the last 30 days have been successfully synced. Check them out now!',
        title : 'Order Sync Successfull!' ,
        button : 'Explore Your Orders'
      },
      {
        text : 'Tailor your Email Experience: Set the Sender Email and Choose Notification Triggers',
        title : 'Customize Customer Notification',
        button : 'Configure Notifications'
      },
      {
        text : `Include the link to your Stores Navigation Menu.`,
        title : 'Your Tracking Link Has been generated',
        button : 'Go To Navigation Menu'
      }
  ]


  function LayoutExample() {
    return (
      <div style={{paddingBottom:'30px', paddingLeft:'20px'}}>
        <Page fullWidth>
        <h1 style={{fontSize:'30px', margin: '20px', fontWeight: 'bold'}}>Welcome, John Mathew!!</h1>
        <Layout>
            
            
          <Layout.Section variant="oneThird">
            <Example rishabh={cardObject[0]}/>
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <Example rishabh={cardObject[1]}/>
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <Example rishabh={cardObject[2]} />
          </Layout.Section>
        </Layout>
      </Page>
      </div>
    );
  }

  export default LayoutExample;