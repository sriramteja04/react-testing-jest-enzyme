import React from 'react';
import './App.scss';
import Header from './components/header';
import Headline from './components/headline';

const tempArr = [
  {
    fName: 'Sri Ram Teja',
    lName: 'Komerisetti',
    email: 'sriramteja04@gmail.com',
    age: 24,
    onlineStatus: true
  }
];

function App() {
  return (
    <div className='App'>
      <Header />
      <section className='main'>
        <Headline header='Posts' desc='click the button to render posts' tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
