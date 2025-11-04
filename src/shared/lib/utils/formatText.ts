export const formatText = (text: string, spacing: string) => {
	const formattedText = text.replace(/\s{4,}/g, `\n\n${spacing}`)
	return spacing + formattedText
}