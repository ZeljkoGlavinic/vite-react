import { procitajJSON } from '../../../utils/procitajJSON'
import { VezaPodrobno } from './VezaPodrobno'

function StrukturiraniPopisPodrobnihVeza() {
	const PodrobneStavke = procitajJSON()

	return (
		<ul>
			{PodrobneStavke.map((stavka) => {
				let { poveznica, naslov, razina } = stavka
				return (
					<VezaPodrobno
						punaPoveznica={poveznica}
						naslov={naslov}
						razina={razina}
						key={poveznica}
					/>
				)
			})}
		</ul>
	)
}
export default StrukturiraniPopisPodrobnihVeza
