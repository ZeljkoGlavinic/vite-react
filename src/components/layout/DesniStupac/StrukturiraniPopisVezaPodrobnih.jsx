import { procitajJSON } from '../../../utils/procitajJSON'
import { VezaPodrobno } from './VezaPodrobno'

const StrukturiraniPopisPodrobnihVeza = () => {
	const PodrobneStavke = procitajJSON()
	console.log(PodrobneStavke)

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
