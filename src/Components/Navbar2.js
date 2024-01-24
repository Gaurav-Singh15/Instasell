import React from 'react'
import {Text , Divider , Icon} from '@shopify/polaris';
import {
    SettingsIcon
  } from '@shopify/polaris-icons';

  import {
    PersonIcon
  } from '@shopify/polaris-icons';

  import {
    CaretDownIcon
  } from '@shopify/polaris-icons';
import AutocompleteExample from './Search';
import LayoutExample from './First';
import App from './Secondsection';
import Third from './ThirdSection';

function Navbar2() {
  return (
    <div>
        <div style={{
            height: '65px', 
            backgroundColor: 'white',
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '1rem',
            paddingRight: '1rem',
    }}>

<div style={{marginLeft: '1rem'}}>
          <a href='' style={{textDecoration:'none'}}><Text variant="headingLg" as="p">
              Home
            </Text></a>
          </div>
          <div style={{marginLeft: '2rem'}}>
          <a href='' style={{textDecoration:'none'}}><Text variant="headingLg" as="p">
              Orders
            </Text></a>
          </div>
          <div style={{marginLeft: '2rem'}}>
          <a href='' style={{textDecoration:'none'}}><Text variant="headingLg" as="p">
              Integrations
            </Text></a>
          </div>
          <div style={{marginLeft: '2rem'}}>
          <a href='' style={{textDecoration:'none'}}><Text variant="headingLg" as="p">
              Tracking Page
            </Text></a>
          </div>

          <Icon
  source={CaretDownIcon}
  tone="base"
/>
          
<div style={{marginLeft: '2rem', flexGrow: 1}}>
<a href='' style={{textDecoration:'none'}}><Text variant="headingLg" as="p">
              Partner With Us
            </Text></a>
          </div>

          <div style={{marginLeft: '3rem', marginRight: '1rem'}}>
            <AutocompleteExample/>
          </div>

          <Icon
  source={PersonIcon}
  tone="base"
/>

          <div style={{ marginRight: '1rem'}}>
          <a href='' style={{textDecoration:'none'}}><Text variant="headingLg" as="p">
              Account
            </Text></a>
          </div>

          <Icon source={SettingsIcon}  tone="base"/>
          <div style={{ marginRight: '1rem'}}>
          <a href='' style={{textDecoration:'none'}}><Text variant="headingLg" as="p">
              Settings
            </Text></a>
            </div>

        </div>
        <Divider borderColor="border-inverse" />

        <LayoutExample/>
        
        <App/>

        <Third/>
    </div>
  )
}

export default Navbar2
