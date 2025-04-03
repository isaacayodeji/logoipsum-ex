import { AnalyticsDashboard } from "./components/AnalyticDashboard"
import { UserChart } from "./components/Chart"
import { Statistics } from "./components/Statistics"

 const Dashboard = () => {
  return (
    <main className="flex flex-col gap-3">
      <Statistics/>
      <UserChart/>
      <AnalyticsDashboard/>
    </main>
  )
}

export default Dashboard