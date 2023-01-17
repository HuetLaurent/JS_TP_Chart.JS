let eleve = [
    {class : "Français", notes : [15, 14, 2, 7, 7, 9, 16]},
    {class : "Math", notes : [18, 16, 11, 14, 14, 15, 12]},
    {class : "Anglais", notes : [12, 12, 9, 15, 15, 16, 14]},
    {class : "Histoire", notes : [8, 10, 11, 10, 12, 12, 13]},
    {class : "SVT", notes : [12, 17, 14, 15, 14, 13, 16]}
];

  //chartes

  new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["Français", "Math", "Anglais", "Histoire", "SVT"],
      datasets: [
        {
          label: "exam1",
          backgroundColor: "#CC2828",
          data: [133,221,783,2478]
        }, {
          label: "exam2",
          backgroundColor: "#2843CC",
          data: [408,547,675,734]
        }, {
          label: "exam3",
          backgroundColor: "#8e5ea2",
          data: [408,547,675,734]
        }, {
          label: "exam4",
          backgroundColor: "#8e5ea2",
          data: [408,547,675,734]
        }, {
          label: "exam5",
          backgroundColor: "#8e5ea2",
          data: [408,547,675,734]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions)'
      }
    }
});