import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const MyPieChart = ({ budgets }) => {
  const data = budgets?.map((item) => ({
    name: item.category, // Pie slice name
    value: item.maximum, // Pie slice size
  })) || [];

  const COLORS = budgets?.map((item) => item.theme) || ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const limit = budgets.reduce((acc, item) => acc + item.maximum, 0);

  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0];
      return (
        <div className="flex gap-[5px] px-[7px] py-[1px] txt2 bg-[#252525] rounded-md text-[#f5f5e0]">
          <h4>{name}</h4>
          <p>${value}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full relative h-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value" // Specifies the value field in data for the Pie chart
            cx="50%" // Center X position (middle of the chart)
            cy="50%" // Center Y position (middle of the chart)
            outerRadius="100%" // Makes sure the pie takes up 100% the container's size
            innerRadius="65%" // hole for "donut" effect
            paddingAngle={0} // No padding between slices
            startAngle={100} // Starts from the top
            endAngle={-270} // Completes a full rotation
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]} // Assign colors to slices
                style={{ outline: 'none' }} // Disable blue square on click
              />
            ))}
          </Pie>
          {/* Use the custom Tooltip */}
          {/* <Tooltip content={<CustomTooltip />} /> i rather not have it */}
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute flex flex-col gap-[10px] left-[50%] top-[50%] transform translate-y-[-50%] translate-x-[-50%]">
        <p className="txt5">$338</p> {/* ill update thislater */}
        <p className="thinSubText">of ${limit} limit</p>
      </div>
    </div>
  );
};

export default MyPieChart;
