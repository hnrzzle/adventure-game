const vastForest = {
  title: 'The Vast Forest',
  image: 'URL',
  description: 'THIS IS WHERE THE DESCRIPTION FOR THE VAST FOREST GOES',
  items: [],
  directions: {
    e: 'meadow',
    s: 'garden'
  }
};

const meadow = {
  title: 'Meadowlark Meadow',
  image: 'URL',
  description: 'The meadow',
  items: [
    {
      key: 'bird',
      description: 'Bird on a Wire',
    }
  ],
  directions: {
    w: 'vastForest'
  },
  use(item, energy) {
    const pass = 'You sang to the bird and gained 6 energy!';
    const fail = 'You are too exhausted to even care about the bird and you pass out';

    return (energy > 2) ? pass : fail;
  }
};

const garden = {
  title: 'A Nice Garden',
  image: 'URL',
  description: 'The garden duh',
  items: [
    {
      key: 'bush',
      description: 'An interesting looking bush... sounds like chittering coming from nearby.'
    }
  ],
  directions: {
    n: 'vastForest',
    e: 'aTallHill'
  },
  use(item, energy) {
    const pass = 'You spent five minutes poking around a bush. It\'s just a bush. You spent 5 energy.';
    const fail = 'You don\'t have the energy to even bother, and keep wandering';

    return (energy > 2) ? pass : fail;
  }
};

const aTallHill = {
  title: 'Mount Hill',
  image: 'URL',
  description: 'You see your squirrel nemesis in a tree, do you chase him?',
  items: [
    {
      key: 'squirrel',
      description: 'Your squirrel nemesis has your wallet!'
    }
  ],
  directions: {
    w: 'garden'
  },
  use(item, energy) {
    const pass = 'You manage to corner your squirrel nemesis up a tree. He attempts to leap to the next tree, but you manage to grab him by the tail and wrestle your wallet from his grubby little paws and fall to the grass exhausted, but with your Ben & Jerry\'s card safe in your possession.';
    const fail = 'You chase the squirrel up the tree, but you do not have the energy to corner the fast little bugger. He jumps from the tree with your wallet and escapes.';
    
    return (energy > 39) ? pass : fail;
  }
};




const treasure = {
  title: 'room name',
  image: 'image',
  description: 'string',
  items: [],
  doors: {
    s: 'greatHall'
  }
};

export const Rooms = {
  treasure
};

export const start = dankChamber;