import { StatusBar, View } from 'react-native';

import { Home } from './src/home';

export default function App() {
  return (
    <>
    <StatusBar 
    barStyle="dark-content"
    backgroundColor="transparent"
    translucent
    />
    <Home />
    </>
  );
};
