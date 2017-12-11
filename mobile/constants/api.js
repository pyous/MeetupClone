import { Platform } from 'react-native';

let url;

// if (Platform.OS !== 'ios') { //Android
//     url = 'http://10.0.3.2:3000/api'
// } else { //iOS
//     url = 'http://192.168.1.7:3000/api'
// }

url = 'http://192.168.1.7:3000/api';

export const fetchMeetups = () =>
  fetch(url+'/meetups')
    .then(res => res.json());
