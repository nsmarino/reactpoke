import villainAvatar from '../assets/avatars/villainAvatar.png'

const villainDoc = {
    name: 'Enemy',
    health: 100,
    currentHealth: 100,
    level: 8,
    avatar: villainAvatar,
    moveset: [
        {
            title: 'Strike',
            damage: 10,
            order: 1,
        },
        {
            title: 'Shock',
            damage: 5,
            order: 2,
        
        }
    ],
    thinking: [
        'Enemy is deciding what to do...',
        'Enemy attacked using BIG CANNON',
        'Enemy struck Cloud for 1,000,000 damage'
    ]
  }

export default villainDoc