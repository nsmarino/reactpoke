import spaceworld from '../assets/spaceworld.png'

const CloudDoc = {
    name: 'Bulbasaur',
    health: 150,
    currentHealth: 150,
    level: 10,
    sprite: {
        border: '1px solid green',
        width: '100px',
        height: '100px',
        background: `url(${spaceworld})`,
        backgroundPosition: '-35px -45px',
    },
    moveset: [
        {
            title: 'Electric Shock',
            damage: 20,
        },
        {
            title: 'Fire Blast',
            damage: 10,
        }
    ]
  }

export default CloudDoc