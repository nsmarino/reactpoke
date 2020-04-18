import React from 'react';

import Triangle from './Triangle'

const Connector = () => {
  return (
    <div>
    <Triangle shape='10px 0px 0px 10px' />
    <div style={{width: '10px', height: '38px', backgroundColor: 'black'}}></div>
    <Triangle shape='0px 0px 10px 10px' />
    </div>
  )
}

export default Connector