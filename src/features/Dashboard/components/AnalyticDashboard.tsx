"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { Bar, Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  type ChartData,
  type ChartOptions,
} from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

export function AnalyticsDashboard() {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Define colors for consistent use
  const colors = [
    "#1f2937", // dark gray
    "#a7f3d0", // green
    "#93c5fd", // blue
    "#cbd5e1", // light gray
    "#818cf8", // purple
  ]

  // Reports Generated data
  const reportsData: ChartData<"bar"> = {
    labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
    datasets: [
      {
        data: [13000, 25000, 18000, 30000, 10000, 22000],
        backgroundColor: [
          colors[4], // Linux - purple
          colors[1], // Mac - green
          colors[0], // iOS - black
          colors[2], // Windows - blue
          colors[3], // Android - gray
          colors[1], // Other - green
        ],
        borderRadius: 8,
        borderWidth: 0,
      },
    ],
  }

  // Traffic by Location data with explicit color array
//   const locationColors = [colors[0], colors[1], colors[2], colors[3]]
//   const trafficData: ChartData<"doughnut"> = {
//     labels: ["Nigeria", "Ghana", "Kenya", "Benin Republic"],
//     datasets: [
//       {
//         data: [38.6, 22.5, 30.8, 8.1],
//         backgroundColor: locationColors,
//         borderWidth: 0,
//         // cutout: "70%",
//       },
//     ],
//   }
const locationData = [
    { label: "Nigeria", value: 38.6, color: colors[0] },
    { label: "Ghana", value: 22.5, color: colors[1] },
    { label: "Kenya", value: 30.8, color: colors[2] },
    { label: "Benin Republic", value: 8.1, color: colors[3] },
  ]
  const trafficData: ChartData<"doughnut"> = {
    labels: locationData.map((item) => item.label),
    datasets: [
      {
        data: locationData.map((item) => item.value),
        backgroundColor: locationData.map((item) => item.color),
        borderWidth: 0,
        // cutout: "70%",
      },
    ],
  }

  // Marketing & SEO data
  const marketingData: ChartData<"bar"> = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [13000, 25000, 18000, 28000, 10000, 22000, 13000, 25000, 18000, 30000, 10000, 22000],
        backgroundColor: [
          colors[4], // Jan - purple
          colors[1], // Feb - green
          colors[0], // Mar - black
          colors[2], // Apr - blue
          colors[3], // May - gray
          colors[1], // Jun - green
          colors[4], // Jul - purple
          colors[1], // Aug - green
          colors[0], // Sep - black
          colors[2], // Oct - blue
          colors[3], // Nov - gray
          colors[1], // Dec - green
        ],
        borderRadius: 8,
        borderWidth: 0,
      },
    ],
  }

  // Chart options
  const barOptions: ChartOptions<"bar"> = {
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
          label: (context) => `${context.formattedValue}K`,
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          callback: (value :any ) => value / 1000 + "K",
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

  const doughnutOptions: ChartOptions<"doughnut"> = {
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
          label: (context) => `${context.label}: ${context.formattedValue}%`,
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
                {locationData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                      <span className="text-sm">{item.label}</span>
                    </div>
                    <span className="text-sm font-medium">{item.value}%</span>
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

