import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const MyPieChartBudgets = ({ budgets }) => {
  const data = budgets?.map((item) => ({
    name: item.category,
    value: item.maximum,
  })) || [];

  const COLORS = budgets?.map((item) => item.theme) || ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const LIGHT_COLORS = COLORS.map((color) => `${color}90`); // Lighter colors (90% opacity)
  const limit = budgets.reduce((acc, item) => acc + item.maximum, 0); // all budgets together

  return (
    <div className="w-full relative h-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* Outer Ring - Darker */}
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius="100%" // Slightly bigger for the outer ring
            innerRadius="78%" // Increase inner radius to remove gaps
            paddingAngle={0}
            startAngle={100}
            endAngle={-270}
            stroke="none" // Prevents border outlines
          >
            {data.map((_, index) => (
              <Cell key={`outer-cell-${index}`} fill={COLORS[index % COLORS.length]} style={{ outline: "none" }} />
            ))}
          </Pie>

          {/* Inner Ring - Lighter */}
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius="78%" // Slightly overlaps the outer ring
            innerRadius="65%" // Keeps the effect smooth
            paddingAngle={0}
            startAngle={100}
            endAngle={-270}
            stroke="none" // Prevents border outlines
          >
            {data.map((_, index) => (
              <Cell key={`inner-cell-${index}`} fill={LIGHT_COLORS[index % LIGHT_COLORS.length]} style={{ outline: "none" }} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center Text */}
      <div className="absolute flex flex-col gap-[10px] left-[50%] top-[50%] transform translate-y-[-50%] translate-x-[-50%]">
        <p className="txt5">$338</p>
        <p className="thinSubText">of ${limit} limit</p>
      </div>
    </div>
  );
};

export default MyPieChartBudgets;
