function levenshtein(a, b) {
    const matrix = [];

    let i;
    for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    let j;
    for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
            if (b.charAt(i-1) === a.charAt(j-1)) {
                matrix[i][j] = matrix[i-1][j-1];
            } else {
                matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                        Math.min(matrix[i][j-1] + 1, // insertion
                                                 matrix[i-1][j] + 1)); // deletion
            }
        }
    }

    return matrix[b.length][a.length];
}


function leftJoin(houseData, rentData) {
    return houseData.map(house => {
        
        let minDistance = Infinity;
        let closestRentData = null;

        for (const rent of rentData) {
            if (parseInt(rent.Year) !== parseInt(house.Year)) {
                continue;
            }

            const distance = levenshtein(rent.Suburb.toUpperCase(), house.Suburb.toUpperCase());

            if (distance < minDistance) {
                minDistance = distance;
                closestRentData = rent;
            }
        }

        return {
            ...house,
            rentPrice: closestRentData ? closestRentData.Price : null
        };
    });
}

function classifyData(original, classificationData) {
    original.forEach((record) => {
        let bestMatch = "";
        let minDistance = Infinity;

        for (const suburbGroup in classificationData) {
            const suburbs = suburbGroup.split('-');
            for (const suburb of suburbs) {
                const distance = levenshtein(record.Suburb.toLowerCase(), suburb.toLowerCase());
                if (distance < minDistance) {
                    minDistance = distance;
                    bestMatch = suburbGroup;
                }
            }
        }

        if (bestMatch) {
            record['Classification'] = classificationData[bestMatch];
        }
    });

    return original;
}
