import { Zaglavlje, LijeviStupac, DesniStupac, Podnozje } from './'

const Omotac = () => {
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
