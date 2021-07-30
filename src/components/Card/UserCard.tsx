import './style.scss'
import userIMG from '../../assets/user.png'
import { FaLocationArrow } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaSchool } from 'react-icons/fa'


type UserCardProps = {
  name: string;
  tagname: string;
  description: string;
  location: string;
}

export function UserCard({name ,tagname,description,location}: UserCardProps){

  console.log(userIMG)
  return(
    <div id="user-card">
        <div>
          <img src={userIMG} alt="Foto do usuario" />
          <div className="text-container">
            <h1>{name}</h1>
            <strong>{tagname}</strong>
            <span>{description}</span>
          </div>
          <footer>
            <p><FaLocationArrow /> {location}</p>
            <div>
              <div><FaHome size={20}/><p>inCicle </p></div>
              <div><FaSchool size={20} /> <p>Uninorte</p></div>
            </div>
          </footer>
        </div>
      </div>
  )
}