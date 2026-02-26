export function filterProfane(text: string): string {
    const profaneWords = ["kerfuffle", "sharbert", "fornax"];
    let filteredText = text;

    for (const word of profaneWords) {
        const regex = new RegExp(`\\b${word}\\b`, "gi");
        filteredText = filteredText.replace(regex, "****");
    }

    return filteredText;
}