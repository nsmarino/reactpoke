import totodileBack from '../assets/totodileBack.png'

const PlayerDoc = {
    name: 'Totodile',
    health: 28,
    currentHealth: 28,
    level: 7,
    xp: 25,
    xpNeeded: 120,
    speed: 20,
    gender: '♂',
    spriteBack: totodileBack,
    moveset: [
        {
            title:'Scratch',
            damage: 10,
            newAnimation:'position:relative; z-index:100; width:100px; height:100px; background:green; animation:action 2s linear;',
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
            title: 'Leer',
            damage: 0,
            newAnimation:'position:relative; z-index:100; width:100px; height:100px; background:green; animation:action 2s linear;',
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
    ],
    pack: [
        {
          title: 'Potion',
          type: 'Buff',
          amount: '20'
        },
        {
            title: 'Pokeball',
            type: 'Ball',
            amount: '50'
        },
    ],
  }

export default PlayerDoc