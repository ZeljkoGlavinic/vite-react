import NaslovZakona from './NaslovZakona'
import NarodneNovine from './NarodneNovine'
import DatumiVazenja from './DatumiVazenja'

function Zaglavlje() {
  return (
    <header className="zaglavlje">
      <NaslovZakona />
      <NarodneNovine />
      <DatumiVazenja />
    </header>
  )
}

export default Zaglavlje