import spaceworld from '../assets/spaceworld.png'

const enemyDoc = {
    name: 'Charmander',
    health: 100,
    currentHealth: 100,
    level: 8,
    sprite: {
        border: '1px solid red',
        width: '100px',
        height: '100px',
        background: `url(${spaceworld})`,
        backgroundPosition: `-900px -45px`,
    },
    moveset: [
        {
            title: 'Strike',
            damage: 10,
        },
        {
            title: 'Shock',
            damage: 5,
        }
    ],
  }

export default enemyDoc