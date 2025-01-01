function categorizeNumbers(numbers) {
    try {
        if (!Array.isArray(numbers)) {
            throw new Error("El argumento debe ser un array.");
        }
        if (!numbers.every(num => typeof num === 'number')) {
            throw new Error("Todos los elementos del array deben ser números.");
        }

        const result = {
            positivos: [],
            negativos: [],
            ceros: []
        };

        for (const num of numbers) {
            if (num > 0) {
                result.positivos.push(num);
            } else if (num < 0) {
                result.negativos.push(num);
            } else {
                result.ceros.push(num);
            }
        }

        return result;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}