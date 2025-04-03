import { StatDownIcon, StatUpIcon } from "@/assets/svg";

export const Statistics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="bg-[#E3F5FF] flex gap-7 justify-center items-center rounded-[1rem] py-4">
        <div className="flex gap-2 flex-col">
          <span className="text-[0.7rem]">Requests</span>
          <span className="font-[inter-medium] text-[1.2rem]">7,256</span>
        </div>
        <div className="flex gap-1">
          <span className="text-[0.7rem]">+11.02%</span>
          <img src={StatUpIcon} alt="" />
        </div>
      </div>
      <div className="bg-[#E5ECF6] flex gap-7 justify-center items-center rounded-md py-4">
        <div className="flex gap-2 flex-col">
          <span className="text-[0.7rem]">KYC</span>
          <span className="font-[inter-medium] text-[1.2rem]">3,671</span>
        </div>
        <div className="flex gap-1">
          <span className="text-[0.7rem]">-0.03%</span>
          <img src={StatDownIcon} alt="" />
        </div>
      </div>
      <div className="bg-[#E3F5FF] flex gap-7 justify-center items-center rounded-md py-4">
        <div className="flex gap-2 flex-col">
          <span className="text-[0.7rem]">Task</span>
          <span className="font-[inter-medium] text-[1.2rem]">156</span>
        </div>
        <div className="flex gap-1">
          <span className="text-[0.7rem]">+15.03%</span>
          <img src={StatUpIcon} alt="" />
        </div>
      </div>
      <div className="bg-[#E5ECF6] flex gap-7 justify-center items-center rounded-md py-4">
        <div className="flex gap-2 flex-col">
          <span className="text-[0.7rem]">Customers</span>
          <span className="font-[inter-medium] text-[1.2rem]">2,318</span>
        </div>
        <div className="flex gap-1">
          <span className="text-[0.7rem]">+6.082%</span>
          <img src={StatUpIcon} alt="" />
        </div>
      </div>
    </div>
  );
};
