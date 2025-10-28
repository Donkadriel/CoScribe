const ctx = document.getElementById("articleChart").getContext("2d");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Total Views",
        data: [1800, 2200, 1900, 2800, 2600, 3500, 3400, 3100],
        borderColor: "#000",
        borderWidth: 1.8,
        fill: false,
        tension: 0.4,
        pointRadius: 0, // removes dots
      },
      {
        label: "Unique Views",
        data: [900, 1300, 1100, 1800, 1600, 2000, 2100, 1900],
        borderColor: "#555",
        borderWidth: 1.8,
        fill: false,
        tension: 0.4,
        pointRadius: 0, // removes dots
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // moves legend below chart
        labels: {
          color: "#000",
            boxWidth: 0,        // hides the colored box
             usePointStyle: false // disables the small circle
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 900 },
        grid: { color: "#eee" }
      },
      x: {
        grid: { display: false }
      }
    }
  }
});




//Engagement Container 

const engagementCtx = document.getElementById("engagementChart").getContext("2d");

new Chart(engagementCtx, {
  type: "bar",
  data: {
    labels: ["Generative", "Future", "Mindful", "Sustainable", "Digital"],
    datasets: [
      {
        label: "Likes",
        data: [450, 400, 480, 300, 420],
        backgroundColor: "#B96A2E", // chart brown
        // borderRadius: 4,
         borderRadius: { topLeft: 4, topRight: 4, bottomLeft: 4, bottomRight: 4 }, // bottom only
        barThickness: 30,
        barPercentage: 0.6,   // width of each bar within group
        categoryPercentage: 1 // spacing between groups
      },
      {
        label: "Shares",
        data: [150, 120, 180, 100, 130],
        backgroundColor: "#00CFEA", // chart cyan
        borderRadius: 4,
        barThickness: 30
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#000",
          usePointStyle: true,
          boxWidth: 10,
          boxHeight: 10,
          usePointStyle: false // disables the small circle
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 150,
          color: "#555"
        },
        grid: {
          color: "#eee"
        }
      },
      x: {
        ticks: { color: "#555" },
        grid: { display: false }
      }
    }
  }
});