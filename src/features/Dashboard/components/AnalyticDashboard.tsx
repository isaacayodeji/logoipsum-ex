
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { Bar, Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

export function AnalyticsDashboard() {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Reports Generated data
  const reportsData = {
    labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
    datasets: [
      {
        data: [13000, 25000, 18000, 30000, 10000, 22000],
        backgroundColor: [
          "#818cf8", // Linux - purple
          "#a7f3d0", // Mac - green
          "#1f2937", // iOS - black
          "#93c5fd", // Windows - blue
          "#cbd5e1", // Android - gray
          "#a7f3d0", // Other - green
        ],
        borderRadius: 8,
        borderWidth: 0,
      },
    ],
  }

  // Traffic by Location data
  const trafficData = {
    labels: ["Nigeria", "Ghana", "Kenya", "Benin Republic"],
    datasets: [
      {
        data: [38.6, 22.5, 30.8, 8.1],
        backgroundColor: [
          "#1f2937", // Nigeria - dark gray
          "#a7f3d0", // Ghana - green
          "#93c5fd", // Kenya - blue
          "#cbd5e1", // Benin - light gray
        ],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  }

  // Marketing & SEO data
  const marketingData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [13000, 25000, 18000, 28000, 10000, 22000, 13000, 25000, 18000, 30000, 10000, 22000],
        backgroundColor: [
          "#818cf8", // Jan - purple
          "#a7f3d0", // Feb - green
          "#1f2937", // Mar - black
          "#93c5fd", // Apr - blue
          "#cbd5e1", // May - gray
          "#a7f3d0", // Jun - green
          "#818cf8", // Jul - purple
          "#a7f3d0", // Aug - green
          "#1f2937", // Sep - black
          "#93c5fd", // Oct - blue
          "#cbd5e1", // Nov - gray
          "#a7f3d0", // Dec - green
        ],
        borderRadius: 8,
        borderWidth: 0,
      },
    ],
  }

  // Chart options
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "black",
        bodyColor: "black",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context: { formattedValue: unknown }) => `${context.formattedValue}K`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#6b7280",
          callback: (value: number) => value / 1000 + "K",
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#6b7280",
        },
      },
    },
  }

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "black",
        bodyColor: "black",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context: { label: undefined; formattedValue: number }) => `${context.label}: ${context.formattedValue}%`,
        },
      },
    },
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 py-4 md:py-4">
      <Card className="col-span-1 bg-[#F7F9FB]">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Reports Generated</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[250px]">
            <Bar data={reportsData} options={barOptions} />
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 bg-[#F7F9FB]">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Traffic by Location</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center md:gap-10 justify-between h-[250px]">
            <div className="w-full md:w-1/2 h-full">
              <Doughnut data={trafficData} options={doughnutOptions} />
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <div className="space-y-2">
                {trafficData.labels.map((label, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: trafficData.datasets[0].backgroundColor[index] }}
                      ></span>
                      <span className="text-sm">{label}</span>
                    </div>
                    <span className="text-sm font-medium">{trafficData.datasets[0].data[index]}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 md:col-span-2 bg-[#F7F9FB]">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Marketing & SEO</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[250px]">
            <Bar data={marketingData} options={barOptions} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

