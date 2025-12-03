import { NaslovZakona, NarodneNovine, DatumiVazenja } from './'

function Zaglavlje() {
	const MetaPodaciAkta = {
		naziv: 'Zakon o gradnji',
		NN: '153/2013, 20/2017, 39/2019, 125/2019, 145/2024',
		datum: '1.1.2015.',
		poveznica: '/z/690/zakon-o-gradnji',
		protokol: 'https://',
		osnovniURL: 'www.zakon.hr',
		akronim: 'ZoG',
	}
  const naziv = MetaPodaciAkta.naziv
  const NN = MetaPodaciAkta.NN
  const datum = MetaPodaciAkta.datum  

	return (
		<header className="zaglavlje">
			<NaslovZakona naziv={naziv} />
			<NarodneNovine NN={NN} />
			<DatumiVazenja datum={datum} />
		</header>
	)
}

export default Zaglavlje
