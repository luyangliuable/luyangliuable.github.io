const mostLiveableCity = [
    {"Year": 2023, "Rank": 1, "City": "Vienna", "Ratings": 98.4, "Country": "Austria"},
    {"Year": 2023, "Rank": 2, "City": "Copenhagen", "Ratings": 98.0, "Country": "Denmark"},
    {"Year": 2023, "Rank": 3, "City": "Melbourne", "Ratings": 97.7, "Country": "Australia"},
    {"Year": 2023, "Rank": 4, "City": "Sydney", "Ratings": 97.4, "Country": "Australia"},
    {"Year": 2023, "Rank": 5, "City": "Vancouver", "Ratings": 97.3, "Country": "Canada"},
    {"Year": 2023, "Rank": 6, "City": "Zurich", "Ratings": 97.1, "Country": "Switzerland"},
    {"Year": 2023, "Rank": 7, "City": "Calgary", "Ratings": 96.8, "Country": "Canada"},
    {"Year": 2023, "Rank": 8, "City": "Geneva", "Ratings": 96.8, "Country": "Switzerland"},
    {"Year": 2023, "Rank": 9, "City": "Toronto", "Ratings": 96.5, "Country": "Canada"},
    {"Year": 2023, "Rank": 10, "City": "Osaka", "Ratings": 96.0, "Country": "Japan"},
    {"Year": 2022, "Rank": 1, "City": "Vienna", "Ratings": 99.1, "Country": "Austria"},
    {"Year": 2022, "Rank": 2, "City": "Copenhagen", "Ratings": 98.0, "Country": "Denmark"},
    {"Year": 2022, "Rank": 3, "City": "Zurich", "Ratings": 96.3, "Country": "Switzerland"},
    {"Year": 2022, "Rank": 4, "City": "Calgary", "Ratings": 96.3, "Country": "Canada"},
    {"Year": 2022, "Rank": 5, "City": "Vancouver", "Ratings": 96.1, "Country": "Canada"},
    {"Year": 2022, "Rank": 6, "City": "Geneva", "Ratings": 95.9, "Country": "Switzerland"},
    {"Year": 2022, "Rank": 7, "City": "Frankfurt", "Ratings": 95.7, "Country": "Germany"},
    {"Year": 2022, "Rank": 8, "City": "Toronto", "Ratings": 95.4, "Country": "Canada"},
    {"Year": 2022, "Rank": 9, "City": "Amsterdam", "Ratings": 95.3, "Country": "Netherlands"},
    {"Year": 2022, "Rank": 10, "City": "Melbourne", "Ratings": 95.1, "Country": "Australia"},
    {"Year": 2021, "Rank": 1, "City": "Auckland", "Ratings": 96.0, "Country": "New Zealand"},
    {"Year": 2021, "Rank": 2, "City": "Osaka", "Ratings": 94.2, "Country": "Japan"},
    {"Year": 2021, "Rank": 3, "City": "Adelaide", "Ratings": 94.0, "Country": "Australia"},
    {"Year": 2021, "Rank": 4, "City": "Wellington", "Ratings": 93.7, "Country": "New Zealand"},
    {"Year": 2021, "Rank": 5, "City": "Tokyo", "Ratings": 93.7, "Country": "Japan"},
    {"Year": 2021, "Rank": 6, "City": "Perth", "Ratings": 93.3, "Country": "Australia"},
    {"Year": 2021, "Rank": 7, "City": "Zurich", "Ratings": 92.8, "Country": "Switzerland"},
    {"Year": 2021, "Rank": 8, "City": "Geneva", "Ratings": 92.5, "Country": "Switzerland"},
    {"Year": 2021, "Rank": 9, "City": "Melbourne", "Ratings": 92.5, "Country": "Australia"},
    {"Year": 2021, "Rank": 10, "City": "Brisbane", "Ratings": 92.4, "Country": "Australia"},
    {"Year": 2020, "Rank": 1, "City": "Vienna", "Ratings": 99.1, "Country": "Austria"},
    {"Year": 2020, "Rank": 2, "City": "Copenhagen", "Ratings": 98.0, "Country": "Denmark"},
    {"Year": 2020, "Rank": 3, "City": "Zurich", "Ratings": 96.3, "Country": "Switzerland"},
    {"Year": 2020, "Rank": 4, "City": "Calgary", "Ratings": 96.3, "Country": "Canada"},
    {"Year": 2020, "Rank": 5, "City": "Vancouver", "Ratings": 96.1, "Country": "Canada"},
    {"Year": 2020, "Rank": 6, "City": "Geneva", "Ratings": 95.9, "Country": "Switzerland"},
    {"Year": 2020, "Rank": 7, "City": "Frankfurt", "Ratings": 95.7, "Country": "Germany"},
    {"Year": 2020, "Rank": 8, "City": "Toronto", "Ratings": 95.4, "Country": "Canada"},
    {"Year": 2020, "Rank": 9, "City": "Amsterdam", "Ratings": 95.3, "Country": "Netherlands"},
    {"Year": 2020, "Rank": 10, "City": "Melbourne", "Ratings": 95.1, "Country": "Australia"},
    {"Year": 2019, "Rank": 1, "City": "Vienna", "Ratings": 99.1, "Country": "Austria"},
    {"Year": 2019, "Rank": 2, "City": "Melbourne", "Ratings": 98.4, "Country": "Australia"},
    {"Year": 2019, "Rank": 3, "City": "Sydney", "Ratings": 98.1, "Country": "Australia"},
    {"Year": 2019, "Rank": 4, "City": "Osaka", "Ratings": 97.7, "Country": "Japan"},
    {"Year": 2019, "Rank": 5, "City": "Calgary", "Ratings": 97.5, "Country": "Canada"},
    {"Year": 2019, "Rank": 6, "City": "Vancouver", "Ratings": 97.3, "Country": "Canada"},
    {"Year": 2019, "Rank": 7, "City": "Tokyo", "Ratings": 97.2, "Country": "Japan"},
    {"Year": 2019, "Rank": 8, "City": "Toronto", "Ratings": 97.2, "Country": "Canada"},
    {"Year": 2019, "Rank": 9, "City": "Copenhagen", "Ratings": 96.8, "Country": "Denmark"},
    {"Year": 2019, "Rank": 10, "City": "Adelaide", "Ratings": 96.6, "Country": "Australia"},
    {"Year": 2018, "Rank": 1, "City": "Vienna", "Ratings": 99.1, "Country": "Austria"},
    {"Year": 2018, "Rank": 2, "City": "Melbourne", "Ratings": 98.4, "Country": "Australia"},
    {"Year": 2018, "Rank": 3, "City": "Osaka", "Ratings": 97.7, "Country": "Japan"},
    {"Year": 2018, "Rank": 4, "City": "Calgary", "Ratings": 97.5, "Country": "Canada"},
    {"Year": 2018, "Rank": 5, "City": "Sydney", "Ratings": 97.4, "Country": "Australia"},
    {"Year": 2018, "Rank": 6, "City": "Vancouver", "Ratings": 97.3, "Country": "Canada"},
    {"Year": 2018, "Rank": 7, "City": "Tokyo", "Ratings": 97.2, "Country": "Japan"},
    {"Year": 2018, "Rank": 8, "City": "Toronto", "Ratings": 97.2, "Country": "Canada"},
    {"Year": 2018, "Rank": 9, "City": "Copenhagen", "Ratings": 96.8, "Country": "Denmark"},
    {"Year": 2018, "Rank": 10, "City": "Adelaide", "Ratings": 96.6, "Country": "Australia"},
    {"Year": 2017, "Rank": 1, "City": "Melbourne", "Ratings": 97.5, "Country": "Australia"},
    {"Year": 2017, "Rank": 2, "City": "Vienna", "Ratings": 97.4, "Country": "Austria"},
    {"Year": 2017, "Rank": 3, "City": "Vancouver", "Ratings": 97.3, "Country": "Canada"},
    {"Year": 2017, "Rank": 4, "City": "Toronto", "Ratings": 97.2, "Country": "Canada"},
    {"Year": 2017, "Rank": 5, "City": "Adelaide", "Ratings": 96.6, "Country": "Australia"},
    {"Year": 2017, "Rank": 6, "City": "Calgary", "Ratings": 96.6, "Country": "Canada"},
    {"Year": 2017, "Rank": 7, "City": "Perth", "Ratings": 95.9, "Country": "Australia"},
    {"Year": 2017, "Rank": 8, "City": "Auckland", "Ratings": 95.7, "Country": "New Zealand"},
    {"Year": 2017, "Rank": 9, "City": "Helsinki", "Ratings": 95.6, "Country": "Finland"},
    {"Year": 2017, "Rank": 10, "City": "Hamburg", "Ratings": 95.0, "Country": "Germany"},
    {"Year": 2016, "Rank": 1, "City": "Melbourne", "Ratings": 97.5, "Country": "Australia"},
    {"Year": 2016, "Rank": 2, "City": "Vienna", "Ratings": 97.4, "Country": "Austria"},
    {"Year": 2016, "Rank": 3, "City": "Vancouver", "Ratings": 97.3, "Country": "Canada"},
    {"Year": 2016, "Rank": 4, "City": "Toronto", "Ratings": 97.2, "Country": "Canada"},
    {"Year": 2016, "Rank": 5, "City": "Adelaide", "Ratings": 96.6, "Country": "Australia"},
    {"Year": 2016, "Rank": 6, "City": "Calgary", "Ratings": 96.6, "Country": "Canada"},
    {"Year": 2016, "Rank": 7, "City": "Perth", "Ratings": 95.9, "Country": "Australia"},
    {"Year": 2016, "Rank": 8, "City": "Auckland", "Ratings": 95.7, "Country": "New Zealand"},
    {"Year": 2016, "Rank": 9, "City": "Helsinki", "Ratings": 95.6, "Country": "Finland"},
    {"Year": 2016, "Rank": 10, "City": "Hamburg", "Ratings": 95.0, "Country": "Germany"}
    ]
