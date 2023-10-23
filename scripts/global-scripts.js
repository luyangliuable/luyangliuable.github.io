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
        "view": {
            "strokeWidth": 0 
        },
        "legend": {
            "labelColor": "white",
            "titleColor": "white"
        }
    },
};

console.log(household_size);

// const r = [];

// for (var eachItem of household_size) {
//     const number_of_people = eachItem["Number of People"];

//     if ( number_of_people !== "Total") {
//         Object.keys(eachItem).forEach((item) => {
//             if (item !== 'Total' && item !== 'Number of People' && item !== 'Area') {
//                 const number_of_actual_people = eachItem[item];
//                 r.push({
//                     People: number_of_people,
//                     Population: number_of_actual_people,
//                     Year: item
//                 });
//             }
//         });
//     }

// }
// console.log(JSON.stringify(r));

