import spaceworld from '../assets/spaceworld.png'

const enemyDoc = {
    name: 'Charmander',
    health: 100,
    currentHealth: 100,
    level: 8,
    gender: '♂',
    sprite: {
        width: '100px',
        height: '100px',
        background: `url(${spaceworld})`,
        backgroundPosition: `-900px -45px`,
    },
    moveset: [
        {
            title: 'Fireball',
            damage: 10,            
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