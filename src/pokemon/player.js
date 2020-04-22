// import spaceworld from '../assets/spaceworld.png'
// import pokemonSprites from '../assets/pokemonSprites.png'

const PlayerDoc = {
    name: 'Totodile',
    health: 100,
    currentHealth: 100,
    level: 10,
    xp: 25,
    speed: 20,
    gender: '♂',
    spritePosition: '-55px -45px',
    // sprite: {
    //     width: '100px',
    //     height: '100px',
    //     background: `url(${pokemonSprites})`,
    //     backgroundPosition: '-35px -45px',
    // },
    moveset: [
        {
            title:'Vine Whip',
            damage: 20,
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
            title: 'Razor Leaf',
            damage: 40,
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