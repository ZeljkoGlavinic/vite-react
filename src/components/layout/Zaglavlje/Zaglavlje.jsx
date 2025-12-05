import { NaslovZakona, NarodneNovine, DatumiVazenja } from './'

function Zaglavlje() {
	const MetaPodaciAkta = {
		naziv: 'Zakon o gradnji',
		NN: '153/2013, 20/2017, 39/2019, 125/2019, 145/2024',
		datum: '1.1.2015.',
		protokol: 'https://',
		osnovniURL: 'www.zakon.hr',
		poveznica: '/z/690/zakon-o-gradnji',
		akronim: 'ZoG',
	}  
  const {naziv, NN, datum, poveznica, protokol, osnovniURL, akronim} = MetaPodaciAkta
  const punaPoveznica = protokol + osnovniURL + poveznica
  const saptac = `${naziv} - (${akronim})`

	return (
		<header className="zaglavlje">
			<NaslovZakona naziv={naziv} poveznica={punaPoveznica} saptac={saptac} />
			<NarodneNovine NN={NN} />
			<DatumiVazenja datum={datum} />
		</header>
	)
}

export default Zaglavlje
