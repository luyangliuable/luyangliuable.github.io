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

const t = 
      {
          "2000": 6.6,
          "2001": 5.9,
          "2002": 6.5,
          "2003": 5.6,
          "2004": 5.4,
          "2005": 5.5,
          "2006": 5.3,
          "2007": 4.9,
          "2008": 4.5,
          "2009": 5.2,
          "2010": 5.3,
          "2011": 4.9,
          "2012": 5.3,
          "2013": 5.7,
          "2014": 6.3,
          "2015": 6.4,
          "2016": 5.9,
          "2017": 6,
          "2018": 5.6,
          "2019": 4.6,
          "2020": 4.9,
          "2021": 6.2,
          "2022": 4.2,
          "2023": 3.7
      };

const r = [];

Object.keys(t).forEach(year => {
    const unemployment_rate = t[year];

    r.push({Year: year, "Unemployment Rate": unemployment_rate});
});

console.log(JSON.stringify(r));
