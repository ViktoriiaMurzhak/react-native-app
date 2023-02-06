import * as firebase from 'firebase'
import 'firebase/auth'
// import 'firebase/storage'
// import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD4oRr0_UP8bjJN6iG8k0klO1DnBWOgDjk',
  authDomain: 'react-native-app-8af93.firebaseapp.com',
  projectId: 'react-native-app-8af93',
  storageBucket: 'react-native-app-8af93.appspot.com',
  messagingSenderId: '263427434741',
  appId: '1:263427434741:web:f7f97728d9ec80295dfdbc',
  measurementId: 'G-6LJQPCKZ1Q',
}

export default firebase.initializeApp(firebaseConfig)
