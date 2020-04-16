import spaceworld from '../assets/spaceworld.png'

const PlayerDoc = {
    name: 'Bulbasaur',
    health: 100,
    currentHealth: 100,
    level: 10,
    xp: 25,
    gender: '♂',
    sprite: {
        width: '100px',
        height: '100px',
        background: `url(${spaceworld})`,
        backgroundPosition: '-35px -45px',
    },
    moveset: [
        {
            title:'Vine Whip',
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
        }
    ]
  }

export default PlayerDoc