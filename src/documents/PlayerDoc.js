import spaceworld from '../assets/spaceworld.png'

const PlayerDoc = {
    name: 'Bulbasaur',
    health: 150,
    currentHealth: 150,
    level: 10,
    sprite: {
        width: '100px',
        height: '100px',
        background: `url(${spaceworld})`,
        backgroundPosition: '-35px -45px',
    },
    moveset: [
        {
            title: 'Vine Whip',
            damage: 20,
            animation: {
                width: '50px', 
                height: '50px', 
                background: 'green',
                position: 'absolute',
                animation: 'action 1s linear',
            },
            effectAnimation: {
                width:'150px', 
                height:'150px', 
                background: 'white',
                position: 'absolute',
                left: '15em',
                animation: 'blinker 2s linear 0s 2',
              }
        },
        {
            title: 'Razor Leaf',
            damage: 40,
        }
    ]
  }

export default PlayerDoc