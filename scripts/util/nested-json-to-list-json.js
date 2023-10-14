function nestedJsonToListJson (arr) {
    const result = [];

    for (const item of arr) {
        const year = item.Year;

        for (const [key, value] of Object.entries(item)) {
            if (key !== "Year") {
                result.push({
                    Year: year,
                    Suburb: key,
                    Price: value
                });
            }
        }
    }

    return result;
};
