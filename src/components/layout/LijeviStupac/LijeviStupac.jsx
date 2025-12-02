import IzbornikZakona from './IzbornikZakona'
import IzbornikGlavnihNaslova from './IzbornikGlavnihNaslova'

function LijeviStupac() {
  return (
    <aside className="lijevi-stupac">
      <IzbornikZakona />
      <IzbornikGlavnihNaslova />
    </aside>
  )
}

export default LijeviStupac