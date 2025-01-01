function processArray(array, callback) {
    try {
        if (!Array.isArray(array) || array.length === 0) {
            throw new Error("El array no puede estar vacío.");
        }
        if (typeof callback !== 'function') {
            throw new Error("El segundo argumento debe ser una función.");
        }

        const result = [];
        for (const item of array) {
            result.push(callback(item));
        }

        return result;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}