import Zaglavlje from './Zaglavlje/Zaglavlje'
import LijeviStupac from './LijeviStupac/LijeviStupac'
import DesniStupac from './DesniStupac/DesniStupac'
import Podnozje from './Podnozje/Podnozje'

function Omotac() {
	return (
		<div className="omotac">
			<Zaglavlje />
			<div className="glavni-sadrzaj">
				<LijeviStupac />
				<DesniStupac />
			</div>
			<Podnozje />
		</div>
	)
}

export default Omotac
