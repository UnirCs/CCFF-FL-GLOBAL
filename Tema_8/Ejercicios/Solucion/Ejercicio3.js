function uniqueSortedArray(numbers) {
    try {
        if (!Array.isArray(numbers)) {
            throw new Error("El argumento debe ser un array.");
        }
        if (!numbers.every(num => typeof num === 'number')) {
            throw new Error("Todos los elementos del array deben ser números.");
        }

        const uniqueNumbers = Array.from(new Set(numbers));
        return uniqueNumbers.sort((a, b) => a - b);
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}