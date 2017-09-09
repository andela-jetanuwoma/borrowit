import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://127.0.0.1:3002/mock/',
  'Content-Type': 'application/x-www-form-urlencoded',
  timeout: 10000
});

instance.get = (url) => {
  if (url === 'api/requests') {
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

export default instance;
