import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://borrow-it-now.herokuapp.com/api/v1',
  'Content-Type': 'application/x-www-form-urlencoded',
  timeout: 10000
});

// instance.get = (url) => {
//   if (url === '/requests') {
//     return Promise.resolve({
//       data: [
//         {
//           id: 1,
//           fullName: 'Etanuwoma Jude',
//           slackHandle: '@wapjude',
//           itemName: 'Android Charger',
//           ownerComment: 'Please return as given no glitch biko',
//           description: 'White charger plus usb cord that is a very good state and ready to go'
//         },
//         {
//           id: 2,
//           fullName: 'Demilade Mary',
//           slackHandle: '@marydemi',
//           itemName: 'Car',
//           ownerComment: 'Please return as given no glitch biko',
//           description: 'A brand new toyota highlander'
//         },
//         {
//           id: 2,
//           fullName: 'Demilade Mary',
//           slackHandle: '@marydemi',
//           itemName: 'Car',
//           ownerComment: 'Please return as given no glitch biko',
//           description: 'A brand new toyota highlander'
//         },
//         {
//           id: 2,
//           fullName: 'Demilade Mary',
//           slackHandle: '@marydemi',
//           itemName: 'Car',
//           ownerComment: 'Please return as given no glitch biko',
//           description: 'A brand new toyota highlander'
//         },
//         {
//           id: 2,
//           fullName: 'Demilade Mary',
//           slackHandle: '@marydemi',
//           itemName: 'Car',
//           ownerComment: 'Please return as given no glitch biko',
//           description: 'A brand new toyota highlander'
//         },
//         {
//           id: 2,
//           fullName: 'Demilade Mary',
//           slackHandle: '@marydemi',
//           itemName: 'Car',
//           ownerComment: 'Please return as given no glitch biko',
//           description: 'A brand new toyota highlander'
//         }
//       ]
//     });
//   } else if (url === '/requests/leased') {
//       return Promise.resolve({
//         data: [
//           {
//             id: 1,
//             fullName: 'Etanuwoma Jude',
//             slackHandle: '@wapjude',
//             itemName: 'Android Charger',
//             ownerComment: 'Please return as given no glitch biko',
//             description: 'White charger plus usb cord that is a very good state and ready to go'
//           },
//           {
//             id: 2,
//             fullName: 'Demilade Mary',
//             slackHandle: '@marydemi',
//             itemName: 'Car',
//             ownerComment: 'Please return as given no glitch biko',
//             description: 'A brand new toyota highlander'
//           }
//         ]
//     });
//   } else if(url === '/users/me') {
//     return Promise.resolve({
//       name: 'Joshua Udensi',
//       email: 'joshua.udensi@andela.com',
//       id: Date.now(),
//       profile_image: 'https://avatars2.githubusercontent.com/u/26272640?v=4&u=605ecf715aff548c4da67a61439afd4eca7d55fa&s=400'
//     });
//   }
// }

// instance.post = (url) => {
//   if (url === '/request') {
//     return Promise.resolve({
//       id: Date.now(),
//       fullName: 'Joshua Udensi',
//       slackHandle: '@silicon_valley',
//       itemName: 'Thor\s Hammer',
//       ownerComment: 'If you spoil am, oyinbo rekpete',
//       description: 'Thor\'s Hammer'
//     });
//   } else if (url === '/request/1/accept') {
//     return Promise.resolve(1);
//   }
// }

const setAuthorizationToken = (token) => {
  const defaultHeaders = instance.defaults.headers.common || {};
  
  defaultHeaders['Access-Control-Allow-Origin'] = 'https://borrowit.herokuapp.com/';

  if (token) {
    defaultHeaders.authorization = `Bearer ${token}`;
  } else {
    delete defaultHeaders.authorization;
  }
}

export {
  setAuthorizationToken,
  instance,
};
