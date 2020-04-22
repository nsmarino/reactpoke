import chikoritaFront from '../assets/chikoritaFront.png'

const enemyDoc = {
    name: 'CHIKORITA',
    health: 15,
    currentHealth: 15,
    level: 5,
    xpGiven: 67,
    speed: 10,
    gender: '♂',
    spriteFront: chikoritaFront,
    moveset: [
        {
            title: 'GROWL',
            damage: 0,            
            animation: {
                width: '50px', 
                height: '50px', 
                background: 'red',
                position: 'absolute',
                animation: 'enemyAction 1s linear',
            },
            effectAnimation: {
                width:'150px', 
                height:'150px', 
                background: 'white',
                position: 'absolute',
                left: '1em',
                top: '10em',
                animation: 'blinker 2s linear 0s 2',
              }
        },
        {
            title: 'TACKLE',
            damage: 5,            
            animation: {
                width: '50px', 
                height: '50px', 
                background: 'red',
                position: 'absolute',
                animation: 'enemyAction 1s linear',
            },
            effectAnimation: {
                width:'150px', 
                height:'150px', 
                background: 'white',
                position: 'absolute',
                left: '1em',
                top: '10em',
                animation: 'blinker 2s linear 0s 2',
              }
        },
    ],
  }

export default enemyDoc