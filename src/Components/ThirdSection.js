import React from 'react';
import CardWithSubsection from './NewCard';
import CardWithMultipleSections from './Card3';
import CardWithMultipleSections2 from '../ComponentsThird/Card';
import CardWithMultipleSections3 from '../ComponentsThird/Card3';
import CardWithSection from '../ComponentsThird/Card2';
import CardWithSection2 from '../ComponentsThird/Card4';

const Third = () => {
  return (
    <div style={{paddingTop:'30px', paddingLeft:'30px'}}>
      <h1 style={{fontSize:'30px', marginTop: '20px', fontWeight: 'bold'}}>Discover the Heart of Our Personality</h1>
      <div style={styles.container}>      
      <div style={{ ...styles.box, ...styles.largeBox}}>
        <CardWithMultipleSections2/>
      </div>
      <div style={{ ...styles.box, ...styles.mediumBox, display: 'flex', flexFlow: 'column wrap', width : '350px', justifyContent: 'space-between'}}>
        <div>
            <CardWithSection/>
        </div>
        <div style={{paddingTop:'20px',width : '350px' }}>
            <CardWithSection2/>
        </div>
      </div>
      <div style={{ ...styles.box, ...styles.smallBox, display: 'flex', alignItems: 'stretch' }}>
        <CardWithMultipleSections3/>
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
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
    flexWrap: 'wrap'
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '5rem',
    fontWeight: 'bold',
    //border: '2px solid #333',
    borderRadius: '8px',
  },
  largeBox: {
    height: '400px',
    width: '400px',
    marginLeft: '70px',
  },
  mediumBox: {
    height: '400px',
    width: '600px'
  },
  smallBox: {
    height: '400px',
    width: '400px',
    marginRight: '70px',
  },
};

export default Third;