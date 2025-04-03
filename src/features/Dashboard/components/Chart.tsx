import { Area } from "@ant-design/plots";

export const UserChart = () => {
  const config = {
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/stocks.json",
      transform: [
        { type: "filter", callback: (d: any) => d.symbol === "GOOG" },
      ],
    },
    xField: (d: any) => new Date(d.date),
    yField: "price",
    style: {
      fill: "linear-gradient(-90deg, white 0%, #a6acb3 100%)",
    },
    axis: {
      y: { labelFormatter: "~s" },
    },
    line: {
      style: {
        stroke: "#1C1C1C",
        strokeWidth: 2,
      },
    },
  };
  return (
    <div className="grid grid-cols-[1fr_200px] max-md:grid-cols-1 gap-5">
      <div className="bg-[#F7F9FB] rounded-[1rem] p-4 flex flex-col gap-3">
        <div className="flex gap-4 text-[0.8rem]">
          <span>Total Users</span>
          <span>Total Projects</span>
          <span>Operating Status</span>
        </div>
        <Area {...config} className="!h-[300px] !max-w-[600px]" />
      </div>
      <div className="bg-[#F7F9FB] rounded-[1rem] p-4 flex flex-col gap-5">
        <span className="text-[0.85rem] font-[inter-medium]">
          Traffic by Website
        </span>
        <div className="flex gap-3 items-center text-[0.85rem]">
          <span>Google</span>
          <div className="flex gap-1">
            {" "}
            <div className="border-[#1c1c1c] border-[1px] w-[10px] h-[0px]"></div>
            <div className="border-[#1C1C1C66] border-[1px] w-[8px] h-[0px]"></div>
            <div className="border-[#1C1C1C1A] border-[1px] w-[15px] h-[0px]"></div>
          </div>
        </div>
        <div className="flex gap-3 items-center text-[0.85rem]">
          <span>Google</span>
          <div className="flex gap-1">
            {" "}
            <div className="border-[#1c1c1c] border-[1px] w-[10px] h-[0px]"></div>
            <div className="border-[#1C1C1C66] border-[1px] w-[8px] h-[0px]"></div>
            <div className="border-[#1C1C1C1A] border-[1px] w-[15px] h-[0px]"></div>
          </div>
        </div>
        <div className="flex gap-3 items-center text-[0.85rem]">
          <span>Google</span>
          <div className="flex gap-1">
            {" "}
            <div className="border-[#1c1c1c] border-[1px] w-[10px] h-[0px]"></div>
            <div className="border-[#1C1C1C66] border-[1px] w-[8px] h-[0px]"></div>
            <div className="border-[#1C1C1C1A] border-[1px] w-[15px] h-[0px]"></div>
          </div>
        </div>
        <div className="flex gap-3 items-center text-[0.85rem]">
          <span>Google</span>
          <div className="flex gap-1">
            {" "}
            <div className="border-[#1c1c1c] border-[1px] w-[10px] h-[0px]"></div>
            <div className="border-[#1C1C1C66] border-[1px] w-[8px] h-[0px]"></div>
            <div className="border-[#1C1C1C1A] border-[1px] w-[15px] h-[0px]"></div>
          </div>
        </div>
        <div className="flex gap-3 items-center text-[0.85rem]">
          <span>Google</span>
          <div className="flex gap-1">
            {" "}
            <div className="border-[#1c1c1c] border-[1px] w-[10px] h-[0px]"></div>
            <div className="border-[#1C1C1C66] border-[1px] w-[8px] h-[0px]"></div>
            <div className="border-[#1C1C1C1A] border-[1px] w-[15px] h-[0px]"></div>
          </div>
        </div>
        <div className="flex gap-3 items-center text-[0.85rem]">
          <span>Google</span>
          <div className="flex gap-1">
            {" "}
            <div className="border-[#1c1c1c] border-[1px] w-[10px] h-[0px]"></div>
            <div className="border-[#1C1C1C66] border-[1px] w-[8px] h-[0px]"></div>
            <div className="border-[#1C1C1C1A] border-[1px] w-[15px] h-[0px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
