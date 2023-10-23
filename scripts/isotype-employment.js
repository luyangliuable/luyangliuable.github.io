const isotypeEmploymentYearOnChange = (e) => {
    embedIsotypeEmploymentChart(parseInt( e.target.value ));
};   

const embedIsotypeEmploymentChart = (year) => {
    const generateIsotypeValues = (dataset) => {
        const res = [];

        const employmentMales = Math.round(dataset["Employment Males"] / 100) * 100;
        const employmentFemales = Math.round(dataset["Employment Females"] / 100) * 100;

        for (var i = 0; i < employmentMales; i += 100) {
            res.push({"classification": "Gender", "Gender": "Male", "Number of Employees (x10000)": i/100 + 1});
        }

        for (var i = 0; i < employmentFemales; i += 100) {
            res.push({"classification": "Gender", "Gender": "Female", "Number of Employees (x10000)": i/100 + 1});
        }

        return res;
    };


    const isotypeEmploymentData = generateIsotypeValues( employmentRate.filter(item => item.year === year)[0] );


    var isotypeEmployment = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "width": 800,
        "background": "transparent",
        "title": {
            "text": `Comparison of Male and Female Employment in Units of 100 Employees for Year ${year}`,
            "color": "white"
        },
        "height": 200,
        "config": graphSettings.config,
        "transform": [
            {
                "calculate": "{'Male': '🧍‍♂️', 'Female': '🧍‍♀️'}[datum.Gender]",
                "as": "emoji"
            },
            {"window": [{"op": "rank", "as": "rank"}], "groupby": ["classification", "Gender"]}
        ],
        "data": { values: isotypeEmploymentData },
        "mark": {"type": "text", "baseline": "middle", "color": "white"},
        "encoding": {
            "x": {
                "field": "Number of Employees (x10000)",
                "type": "quantitative",
                "axis": {"grid": false},
                "scale": { "domain": [0, 20] }
            },
            "y": {"field": "Gender", "type": "ordinal", "axis": {"grid": false}},
            "text": {"field": "emoji", "type": "nominal"},
            "size": {"value": 50}
        }
    };

    vegaEmbed('#isotype-employment', isotypeEmployment);
}

document.addEventListener("DOMContentLoaded", function () {
    embedIsotypeEmploymentChart(2000);
});
