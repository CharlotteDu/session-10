Vue.component('bar-chart', {
  extends: VueChartJs.Bar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["AB","BC","MB","NB","NL","NS","NT","ON","PE","QC","SK","YT","NONE Specified"],
      datasets: [
        {
          label: 'Nombre de fraudes',
          backgroundColor: '#f87979',
          data: [92,60,18,10,6,11,0,348,2,189,25,0,6],
          datalabels: {
            align: 'end',
            anchor: 'end'
          },
        },
        {
          label: 'Montant des fraudes (en millier de dollars)',
          backgroundColor: '#a6bddb',
          data: [123.32958,44.33104,16.91827,8.76505,1.550,4.120,0,223.69222,0,116.52037,17.04626,0,11.181],
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
              min : 0,
              max : 400,

              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            categoryPercentage: 0.8,
            barPercentage: 0.9
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
