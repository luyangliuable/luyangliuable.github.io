const graphSettings = {
    width: 400,
    height: 250,
    schema: "https://vega.github.io/schema/vega-lite/v5.json",
    config: {
        "text": {
            "color": "white"
        },
        "title": {
            "color": "white"
        },
        "axis": {
            "domainColor": "white",
            "tickColor": "white",
            "labelColor": "white",
            "titleColor": "white"
        },
        "legend": {
            "labelColor": "white",
            "titleColor": "white"
        }
    },
};

// function resizeCanvasToParent() {
//     const canvases = document.querySelectorAll('canvas');

//     canvases.forEach((canvas) => {
//         var rect = canvas.parentNode.getBoundingClientRect();
//         canvas.width = rect.width;
//         canvas.height = rect.height;
//     });
// }


// let transformedData = [];

// employmentRate.forEach((item) => {
//     const category = item.Year;
//     delete item.Year;
    
//     for (const [key, value] of Object.entries(item)) {
//         const year = parseInt(key.split('-')[1]);
//         let existingEntry = transformedData.find((d) => d.year === year);
        
//         if (!existingEntry) {
//             existingEntry = { year };
//             transformedData.push(existingEntry);
//         }

//         existingEntry[category] = value;
//     }
// });

// console.log(JSON.stringify( transformedData ));

