import { NaslovZakona, NarodneNovine, DatumiVazenja } from './'

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