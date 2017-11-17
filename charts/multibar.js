Vue.component('multibar-chart', {
  extends: VueChartJs.Bar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["Crise des migrants","Protests of Islam critical PEGIDA movement in Dresden","Crise financière en Grèce","Conflit urkainien"],
      datasets: [
        {
          label: 'Très grande confiance',
          backgroundColor: '#e34a33',
          data: [3,3,4,2],
          datalabels: {
            align: 'end',
            anchor: 'end'
          },
        },
        
        {
          label: 'Grande confiance',
          backgroundColor: '#fdbb84',
          data: [45,37,31,30],
          datalabels: {
          align: 'end',
          anchor: 'end',

          }
        },
        {
          label: 'Sans réponse',
          backgroundColor: '#fee8c8',
          data: [2,4,2,2],
          datalabels: {
          align: 'end',
          anchor: 'end',

          }
        },
        {
          label: 'Peu de confiance',
          backgroundColor: '#deebf7',
          data: [41,41,46,52],
          datalabels: {
          align: 'end',
          anchor: 'end',

          }
        },
        {
          label: 'Très peu de confiance',
          backgroundColor: '#9ecae1',
          data: [9,15,17,14],
          datalabels: {
          align: 'end',
          anchor: 'end',

          }
        },
      ]
    };

    var options = this.options || {
      tooltips: {
        enabled: false
      },
      legend: {
        display: true
      },
			plugins: {
				datalabels: {
          display: true,
					color: '#c46060',
					font: {
						weight: 'bold'
					},
					formatter: Math.round
				}
			},
      scales: {
        yAxes:  [
          {
            display: false,
            ticks: {
              min: 0,
              max : 70,

              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            categoryPercentage: 0.8,
            barPercentage: 0.8
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
