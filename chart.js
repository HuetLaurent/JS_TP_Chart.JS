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
          label: "examen 1",
          backgroundColor: "#7F7F7F",
          data: [eleve[0].notes[0],eleve[1].notes[0],eleve[2].notes[0],eleve[3].notes[0],eleve[4].notes[0], 20]
        }, {
          label: "examen 2",
          backgroundColor: "#B2B2B2",
          data: [eleve[0].notes[1],eleve[1].notes[1],eleve[2].notes[1],eleve[3].notes[1],eleve[4].notes[1]]
        }, {
          label: "examen 3",
          backgroundColor: "#7F7F7F",
          data: [eleve[0].notes[2],eleve[1].notes[2],eleve[2].notes[2],eleve[3].notes[2],eleve[4].notes[2]]
        }, {
          label: "examen 4",
          backgroundColor: "#B2B2B2",
          data: [eleve[0].notes[3],eleve[1].notes[3],eleve[2].notes[3],eleve[3].notes[3],eleve[4].notes[3]]
        }, {
          label: "examen 5",
          backgroundColor: "#7F7F7F",
          data: [eleve[0].notes[4],eleve[1].notes[4],eleve[2].notes[4],eleve[3].notes[4],eleve[4].notes[4]]
        }, {
          label: "examen 6",
          backgroundColor: "#B2B2B2",
          data: [eleve[0].notes[5],eleve[1].notes[5],eleve[2].notes[5],eleve[3].notes[5],eleve[4].notes[5]]
        }, {
          label: "examen 7",
          backgroundColor: "#7F7F7F",
          data: [eleve[0].notes[6],eleve[1].notes[6],eleve[2].notes[6],eleve[3].notes[6],eleve[4].notes[6]]
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