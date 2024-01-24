import React from 'react';
import CardWithSubsection from './NewCard';
import CardWithMultipleSections from './Card3';
import {Card, Tag , Button} from '@shopify/polaris';
import Card1 from './Card1';

const App = () => {
  return (
    <div style={{paddingTop:'10px' , paddingBottom:'20px', backgroundColor:'beige', paddingLeft:'30px'}}>
      <h1 style={{fontSize:'30px', margin: '20px', fontWeight: 'bold'}}>Instant dive into your Performance Metrics</h1>
      <div style={{fontSize:'20px', paddingLeft:'20px'}}>
      <div style={{display: 'flex', paddingLeft:'20px'}}>
      <div >
      <Button>LifeTime</Button>
      </div>
      <div style={{paddingLeft:'10px'}}>
      <Button>Last Week</Button>
      </div>
      <div style={{paddingLeft:'10px'}}>
      <Button>Last Month</Button>
      </div>
      <div style={{paddingLeft:'10px'}}>
      <Button>Last Year</Button>
      </div>
      <div style={{paddingLeft:'10px'}}>
      <Button>Customize Time Line</Button>
      </div>
      </div>
      
      
      
      </div>
      <div style={styles.container}>      
      <div style={{ ...styles.box, ...styles.largeBox}}>
        <Card1/>
      </div>
      <div style={{ ...styles.box, ...styles.mediumBox }}>
        <CardWithSubsection/>
      </div>
      <div style={{ ...styles.box, ...styles.smallBox }}>
        <CardWithMultipleSections/>
      </div>
    </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    //border: '2px solid #333',
    borderRadius: '8px',
  },
  largeBox: {
    display: 'flex',
    height: '400px',
    width: '500px',
    marginLeft: '70px',
  },
  mediumBox: {
    display: 'flex',
    height: '400px',
    width: '200px'
  },
  smallBox: {
    display: 'flex',
    height: '400px',
    width: '500px',
    marginRight: '70px',
  },
};

export default App;