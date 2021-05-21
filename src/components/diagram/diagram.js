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

    this._createColorsArray(this.setup);
    this._addSumValues();
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

  _createColorsArray(colors) {
    const chartCtx = this.chart.getContext('2d');
    colors.forEach((el) => {
      const gradientOne = chartCtx.createLinearGradient(0, 0, 0, 220);
      gradientOne.addColorStop(0, el[0]);
      if (el[1]) gradientOne.addColorStop(1, el[1]);
      this.colors.push(gradientOne);
    });
  }

  _addSumValues() {
    const sum = this.dataset.reduce((prev, current) => prev + current);
    const circleNum = this.chart.parentNode.querySelector('.js-diagram__circle-num');
    circleNum.insertAdjacentText('afterbegin', sum);
  }
}

export default Diagram;
