function countWords(text) {
    const words = text.split(/\s+/);
    const wordCount = new Map();

    for (const word of words) {
        const lowerWord = word.toLowerCase();
        wordCount.set(lowerWord, (wordCount.get(lowerWord) || 0) + 1);
    }

    return wordCount;
}
