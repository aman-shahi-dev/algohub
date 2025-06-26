
  const ctx = document.getElementById('myPieChart').getContext('2d');

  const data = {
    labels: ['Graph', 'Trees', 'Dynamic Programming', 'Binary Search', 'Recursion', 'Arrays', 'Strings'],
    datasets: [{
      label: '',
      data: [10,20,40,4,6,8,12],
      backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', 'pink', 'orange', 'yellow', 'aqua'],
      borderWidth: 1
    }]
  };
const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'none',
        labels: {
          font: {
            size: 5 // Optional, if you later enable legend
          }
        }
      },
      title: {
        display: true,
        text: '',
        font: {
          size: 5 // ✅ Title font size increased
        }
      },
      tooltip: {
        bodyFont: {
          size: 14 // ✅ Tooltip font size
        },
        titleFont: {
          size: 16 
        }
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Arial',
            size: 14,
            weight: 'bold',
          }
        }
      },
      y: {
        ticks: {
          font: {
            size: 14 
          }
        }
      }
    }
  }
};


  const myPieChart = new Chart(ctx, config);

