import './style.scss'
import { FiClock, FiLock, FiChevronDown,FiThumbsUp, FiMessageSquare, FiShare2,FiGlobe } from 'react-icons/fi'
import { useState } from 'react'

type UserPublicationProps = {

  username: string
  avatarURL: string
  state: boolean
  description: string
}


export function UserPublication({ username, avatarURL,state,description}: UserPublicationProps) {

  const [like,setLike] = useState(false)
  const [value ,setvalue] = useState(0)

  return (
    <div id="publication">
      <div className="header">
        <img src={avatarURL} alt="" />
        <div>
          <h1>{username}</h1>
          <div className="text-container">
            <div>
              <FiClock />
              <p>há cerca de 8 horas</p>
            </div>
            <div>
              {state ? <FiGlobe />: <FiLock />}
              {state ? <p>Público</p> : <p>Somente eu</p>} 
            </div>
          </div>
        </div>
        <FiChevronDown size={25} color="#000"/>
      </div>
      <div id="content">
        <h1>{state ? description : 'Essa publicação está configurada no modo privado "somente eu"'}</h1>
        <div>
          <div>
            <p><FiThumbsUp />{like ? "1 pessoa curtiu isso" : "seja o primeiro a curtir"}</p>
          </div>
          <div>
            <p>0 Comentarios</p>
            <p>{value} Compartilhamentos</p>
          </div>
        </div>
      </div>
      <div id="button-area">
        <button onClick={() => {
          setLike(!like)
        }}><FiThumbsUp size={25}/>{like ? "remover curtida" : "curtir"}</button>
        <button><FiMessageSquare size={25}/>Comentar</button>
        <button onClick={() => {
          setvalue(value + 1)
        }}><FiShare2 size={25}/>Compartilhar</button>
      </div>
    </div>
  )
}