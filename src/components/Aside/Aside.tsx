import './style.scss'
import { InfoCard } from './InfoCard'
import { FiCode } from 'react-icons/fi'
import { BiCake } from 'react-icons/bi'
import { FaHourglassEnd } from 'react-icons/fa'

export function Aside(){
  return (
    <aside>
      <div id="data">
        <h1><FiCode />Eficiência</h1>
        <div className="hr"></div>
        <section id="info">
          <div>
            <InfoCard texto="Atividades 23/106" type="activity"/>
            <InfoCard texto="Atividades 23/106" type="projetcs"/>
          </div>
          <InfoCard texto="Atividades 23/106" type="total"/>
        </section>
        <ul>
          <li>
            <h3>Atividades</h3>
            <p>Pendentes 3</p>
            <hr />
            <p>Pendentes 3</p>
            <hr />
            <p>Pendentes 3</p>
          </li>
          <li className="projetos">
            <h3>Projetos</h3>
            <p>Pendentes 3</p>
            <hr />
            <p>Pendentes 3</p>
            <hr />
            <p>Pendentes 3</p>
          </li>
          <li className="total-li">
            <h3>Total</h3>
            <p>Pendentes 3</p>
            <hr />
            <p>Pendentes 3</p>
            <hr />
            <p>Pendentes 3</p>
          </li>
        </ul>
      </div>
      <div className="birtday">
        <h1><BiCake size={40} color="#73767D"/>Aniversariantes</h1>
        <div className="hr"></div>
        <p>Nenhum dos seus amigos comemora aniversario hoje</p>
      </div>
      <div className="birtday pendencia">
        <h1><FaHourglassEnd size={35} color="#73767D"/>Pendências</h1>
        <div className="hr preference">seg, 21 de jun</div>
        <p>Voce não possui nenhuma pendência para hoje</p>
      </div>
    </aside>
  )
}