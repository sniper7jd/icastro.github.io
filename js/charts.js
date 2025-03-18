// Data for the pie chart
const data = [{
    type: "pie",
    labels: ["Orion", "Ursa Major", "Cassiopeia", "Leo", "Cygnus", "Scorpius", "Canis Major"],
    values: [20, 15, 12, 18, 10, 14, 11],
    textinfo: "label+percent",
    insidetextorientation: "radial"
}];

const layout = {
    title: "Most Popular Constellations",
    margin: { t: 50, b: 20, l: 20, r: 20 }
};


Plotly.newPlot("chart", data, layout); // Desktop chart
Plotly.newPlot("chart-mobile", data, layout); // Mobile chart
