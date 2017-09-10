import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://127.0.0.1:3002/mock/',
  'Content-Type': 'application/x-www-form-urlencoded',
  timeout: 10000
});

instance.post = (url) => {
  if (url === 'api/request/1/accept') {
    return Promise.resolve(1);
  }
}

instance.get = (url) => {
  if (url === '/api/requests') {
    return Promise.resolve({
      data: [
        {
          id: 1,
          fullName: 'Etanuwoma Jude',
          slackHandle: '@wapjude',
          itemName: 'Android Charger',
          ownerComment: 'Please return as given no glitch biko',
          description: 'White charger plus usb cord that is a very good state and ready to go'
        },
        {
          id: 2,
          fullName: 'Demilade Mary',
          slackHandle: '@marydemi',
          itemName: 'Car',
          ownerComment: 'Please return as given no glitch biko',
          description: 'A brand new toyota highlander'
        },
        {
          id: 2,
          fullName: 'Demilade Mary',
          slackHandle: '@marydemi',
          itemName: 'Car',
          ownerComment: 'Please return as given no glitch biko',
          description: 'A brand new toyota highlander'
        },
        {
          id: 2,
          fullName: 'Demilade Mary',
          slackHandle: '@marydemi',
          itemName: 'Car',
          ownerComment: 'Please return as given no glitch biko',
          description: 'A brand new toyota highlander'
        },
        {
          id: 2,
          fullName: 'Demilade Mary',
          slackHandle: '@marydemi',
          itemName: 'Car',
          ownerComment: 'Please return as given no glitch biko',
          description: 'A brand new toyota highlander'
        },
        {
          id: 2,
          fullName: 'Demilade Mary',
          slackHandle: '@marydemi',
          itemName: 'Car',
          ownerComment: 'Please return as given no glitch biko',
          description: 'A brand new toyota highlander'
        }
      ]
    });
  } else if (url === 'api/requests/1/leased') {
    return Promise.resolve({
      data: [
        {
          id: 1,
          fullName: 'Etanuwoma Jude',
          slackHandle: '@wapjude',
          itemName: 'Android Charger',
          ownerComment: 'Please return as given no glitch biko',
          description: 'White charger plus usb cord that is a very good state and ready to go'
        },
        {
          id: 2,
          fullName: 'Demilade Mary',
          slackHandle: '@marydemi',
          itemName: 'Car',
          ownerComment: 'Please return as given no glitch biko',
          description: 'A brand new toyota highlander'
        }
      ]
    });
  }
}

instance.post = (url) => {
  if (url === '/api/request') {
    return Promise.resolve({
      id: Date.now(),
      fullName: 'Joshua Udensi',
      slackHandle: '@silicon_valley',
      itemName: 'Thor\s Hammer',
      ownerComment: 'If you spoil am, oyinbo rekpete',
      description: 'Thor\'s Hammer'
    })
  } else if (url === 'api/request/1/accept') {
    return Promise.resolve(1);
  }
}

export default instance;
