const runningPath = {
  title: 'Running Path',
  type: 'path',
  image: null,
  description: [`You are out for your daily run in City Park.  You're just starting to get into your rhythm when a squirrel leaps from a 
                nearby tree onto your shoulder!  Startled, you stop and try to pull it off you, but the little guy dives into your 
                fanny pack, clearly fiending for a Luna Bar hit.  In a flash, he leaps down and away and sits up on a nearby bench,
                waving something at you- your wallet!`,
  'You\'re on the main running path, with no squirrel in sight.'
  ],
  items: [    
    {
      key: 'squirrel',
      image: null,
      description: 'Your squirrel nemesis has your wallet!'
    }
  ],
  directions: {
    e: 'meadow',
    s: 'garden'
  },
  use(energy) {
    const action = 'You dive for the little guy, thinking of all your hard earned rewards cards, but he easily dodges you and runs off into the park';
    return { energy, action };
  }
};

const meadow = {
  title: 'Meadowlark Meadow',
  type: 'path',
  image: null,
  description: [`You follow the path into the open meadow, one of your favorite parts of the park.  The sun is out and there are birds everywhere.  
                There is one sitting on a wire very close to you, looking at you.`,
  'The meadow is sunny and open, with birds everywhere.'
  ],
  items: [
    {
      key: 'bird',
      image: null,
      description: 'Bird on a Wire',
    }
  ],
  directions: {
    w: 'runningPath'
  },
  use(energy) {
    const pass = { energy : energy + 6, action: 'You sang to the bird and gained 6 energy!' };
    const fail = { energy: energy, action : 'You are too exhausted to even care about the bird, and stare listlessly at it until it flies away.' };

    return (energy > 2) ? pass : fail;
  }
};

const garden = {
  title: 'A Secluded Garden',
  type: 'path',
  image: null,
  description: [`You walk into a secluded little garden.  You've seen it before, but never explored it during your runs.  The landscaping is simple,
                with a large bush in the middle.  You seem to hear chittering sounds from nearby.`,
  'A quiet little garden.  There are benches and bushes, but apparently nothing interesting.'],
  items: [
    {
      key: 'bush',
      image: null,
      description: 'An interesting looking bush....'
    }
  ],
  directions: {
    n: 'runningPath',
    e: 'aTallHill'
  },
  use(energy) {
    const pass = { energy: energy - 5, action: 'You spent five minutes poking around a bush. It\'s just a bush. You spent 5 energy.'  };
    const fail = { energy, action: 'You don\'t have the energy to even bother, and keep wandering'  };

    return (energy > 2) ? pass : fail;
  }
};

const aTallHill = {
  title: 'Mount Hill',
  type: 'hill',
  image: null,
  description: [`You climb the tall hill you've always avoided on your runs.  It is exhausting, but there are lots of tall 
                oaks and pines at the summit, lots of places for squirrels to hide.`,
  'You\'ve reached the top of the tall hill, but all the trees are empty.  There\'s a beautiful view of the city, though.'],
  items: [
    {
      key: 'squirrel',
      image: null,
      description: 'Your squirrel nemesis has your wallet!'
    }
  ],
  directions: {
    w: 'garden'
  },
  use(energy) {
    const pass = { energy: energy - 40, action: `You manage to corner your squirrel nemesis up a tree. He attempts to leap to the next 
                  tree, but you manage to grab him by the tail and wrestle your wallet from his grubby little paws and fall to the grass 
                  exhausted, but with your Ben & Jerry's card safe in your possession.` };
    const fail = { energy: energy, action: `You chase the squirrel up the tree, but you do not have the energy to corner the fast little 
                  bugger. He jumps from the tree with your wallet and escapes.`  };
    
    return (energy > 39) ? pass : fail;
  }
};

export const rooms = {
  runningPath,
  meadow,
  garden,
  aTallHill
};

export const start = runningPath;