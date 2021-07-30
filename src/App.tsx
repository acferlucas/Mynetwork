import React from 'react';
import { UserCard } from './components/Card/UserCard'
import { UserPublication } from './components/Publication/UserPublication'
import { Aside } from './components/Aside/Aside'

import userpostIMG from './assets/feeduser.png'
import matheusIMG from './assets/matheus.png'
import vieneIMG from './assets/viene.png'


import { FaEdit } from 'react-icons/fa'
import { FaImages } from 'react-icons/fa'
import { FaVideo } from 'react-icons/fa'

import './style/global.scss'
import './style/main.scss'

function App() {
  return (
    <main>
      <UserCard name="Lucas acfer" 
                tagname="@lucasacfer" 
                description="Front end Developer" 
                location="Recife/Pernambuco - Brasil"
              />
        <div>
            <div id="div-content">
              <div>
                  <FaEdit  size={30} color="#C5C5C5"/>
                  <textarea placeholder="Escreva uma publicação"></textarea>
                </div>
              <div>
                <FaImages size={25} color="#C5C5C5" />
                <FaVideo size={25} color="#C5C5C5" />
              </div>
            </div>
            <div id="div-footer">
              <p>Ou <a href="#">publique um artigo</a> na inCicle</p>
            </div>
            <UserPublication 
              username="Matheus Acfer" 
              avatarURL={matheusIMG} 
              state={false} description="none" />
            <UserPublication 
              username="Igor Rodrigues" 
              avatarURL={userpostIMG} 
              state={true} description="kkkkkk, primeiro poste" />
              <UserPublication 
              username="Viene Santos" 
              avatarURL={vieneIMG} 
              state={true} description="Ultimante estou me divertindo bastante com react"/>
        </div>
        <Aside />
    </main>
  );
}

export default App;
