const Podnozje = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="podnozje">
			<div className="podnozje-sadrzaj">
				<div className="podnozje-info">
					<p>© {currentYear}. - SPA Aplikacija - Pravni propisi</p>
					<p className="verzija">Verzija 1.0.0</p>
				</div>
			</div>
		</footer>
	)
}

export default Podnozje
