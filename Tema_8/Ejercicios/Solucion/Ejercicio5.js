function filterAndGroup(array) {
    try {
        if (!Array.isArray(array)) {
            throw new Error("El argumento debe ser un array.");
        }

        const grouped = {
            mayores: [],
            menores: []
        };

        for (const obj of array) {
            if (typeof obj.edad !== 'number' || typeof obj.nombre !== 'string') {
                throw new Error("Cada objeto debe tener una propiedad 'nombre' (string) y 'edad' (número).");
            }

            if (obj.edad >= 18) {
                grouped.mayores.push(obj);
            } else {
                grouped.menores.push(obj);
            }
        }

        return grouped;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}