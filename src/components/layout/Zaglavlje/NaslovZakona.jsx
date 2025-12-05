function NaslovZakona({ naziv, poveznica, saptac }) {
	return (
		<div className="naslov-zakona">
			<h1>
				<a href={poveznica} title={saptac}>
					{naziv}
				</a>
			</h1>
		</div>
	)
}

export default NaslovZakona
