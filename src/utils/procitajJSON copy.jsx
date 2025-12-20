export async function procitajJSONdatoteku(imeDatoteke) {
	const modul = await import(`../data/${imeDatoteke}`)
	return modul.default || []
}
