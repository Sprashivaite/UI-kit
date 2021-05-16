import 'chart.js/dist/chart';

class Diagram {
  constructor({
    element, dataset, colors, labels,
  }) {
    this._init({
      element, dataset, colors, labels,
    });
  }

  _init({
    element, dataset, colors, labels,
  }) {
    this.chart = element;
    this.dataset = dataset;
    this.setup = colors;
    this.labels = labels;
    this.colors = [];

    this._createColorsArray();
    new Chart(this.chart, {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: this.colors,
            data: this.dataset,
            cutout: '90%',
            radius: '100%',
            rotation: '180',
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: false,
        },
      },
    });
  }

  _createColorsArray() {
    const chartCtx = this.chart.getContext('2d');

    const gradientOne = chartCtx.createLinearGradient(0, 0, 0, 220);
    const gradientTwo = chartCtx.createLinearGradient(0, 0, 0, 220);
    const gradientThree = chartCtx.createLinearGradient(0, 0, 0, 220);
    const gradientFour = chartCtx.createLinearGradient(0, 0, 0, 220);

    for (let i = 0; i < 4; i += 1) {
      switch (i) {
        case 0:
          gradientOne.addColorStop(0, this.setup[i][0]);
          gradientOne.addColorStop(1, this.setup[i][1]);
          this.colors.push(gradientOne);
          break;
        case 1:
          gradientTwo.addColorStop(0, this.setup[i][0]);
          gradientTwo.addColorStop(1, this.setup[i][1]);
          this.colors.push(gradientTwo);
          break;
        case 2:
          gradientThree.addColorStop(0, this.setup[i][0]);
          gradientThree.addColorStop(1, this.setup[i][1]);
          this.colors.push(gradientThree);
          break;
        case 3:
          gradientFour.addColorStop(0, this.setup[i][0]);
          gradientFour.addColorStop(1, this.setup[i][1]);
          this.colors.push(gradientFour);
          break;
        default:
          break;
      }
    }
  }
}

export default Diagram;
