import React from 'react';
import './App.scss';
import Header from './components/header';
import Headline from './components/headline';

function App() {
  return (
    <div className='App'>
      <Header />
      <section className='main'>
        <Headline header='Posts' desc='click the button to render posts' />
      </section>
    </div>
  );
}

export default App;
