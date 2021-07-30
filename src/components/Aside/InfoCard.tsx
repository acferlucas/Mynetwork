import './infocard.scss'


type InfoCardProps = {
  texto: string;
  type: string;
}

export function InfoCard({texto, type }: InfoCardProps){
  return(
      <div className={type}>
            <div>
              <p>{texto}</p>
              <span>50%</span>
            </div>
          </div>
  )
}