import { BugIcon, Person2Icon, Person3Icon, PersonIcon, SubscribeIcon, UserIcon } from "@/assets/svg";

export const Notification = () => {
  return (
    <div className="max-md:hidden bg-[#FFF8F8] rounded-[1.8rem] flex flex-col py-5 px-4 gap-3">
      <span>Notifications</span>
      <div className="flex gap-1 items-start">
        <div className="bg-[#E5ECF6] rounded-full p-[6px]">
          <img src={BugIcon} alt="" />
        </div>
        <div className="flex flex-col">
          {" "}
          <span className="!text-[0.8rem]">You fixed a bug.</span>
          <span className="font-[inter-thin] !text-[0.7rem]">Just now</span>
        </div>
      </div>
      <div className="flex gap-1 items-start">
        <div className="bg-[#E5ECF6] rounded-full p-[6px]">
          <img src={UserIcon} alt="" />
        </div>
        <div className="flex flex-col !text-[0.8rem]">
          {" "}
          <span>New user registered.</span>
          <span className="font-[inter-thin] !text-[0.7rem]">
            59 minutes ago
          </span>
        </div>
      </div>
      <div className="flex gap-1 items-start">
        <div className="bg-[#E5ECF6] rounded-full p-[6px]">
          <img src={BugIcon} alt="" />
        </div>
        <div className="flex flex-col !text-[0.8rem]">
          {" "}
          <span>You fixed a bug.</span>
          <span className="font-[inter-thin] !text-[0.7rem]">12 hours ago</span>
        </div>
      </div>
      <div className="flex gap-1 items-start">
        <div className="bg-[#E5ECF6] rounded-full p-[6px]">
          <img src={SubscribeIcon} alt="" />
        </div>
        <div className="flex flex-col !text-[0.8rem]">
          {" "}
          <span>Andi Lane subscribed to you..</span>
          <span className="font-[inter-thin] !text-[0.7rem]">
            Today, 11:59 AM
          </span>
        </div>
      </div>
      <span className="mt-5">Activities</span>
      <div className="flex gap-1 items-start">
        <img src={PersonIcon} alt="" className="rounded-full" />
        <div className="flex flex-col !text-[0.8rem]">
          {" "}
          <span>Changed the style.</span>
          <span className="font-[inter-thin] !text-[0.7rem]">
            Today, 11:59 AM
          </span>
        </div>
      </div>
      <div className="flex gap-1 items-start">
        <img src={PersonIcon} alt="" className="rounded-full" />
        <div className="flex flex-col !text-[0.8rem]">
          {" "}
          <span>Released a new version.</span>
          <span className="font-[inter-thin] !text-[0.7rem]">
            59 minutes ago
          </span>
        </div>
      </div>
      <div className="flex gap-1 items-start">
        <img src={PersonIcon} alt="" className="rounded-full" />
        <div className="flex flex-col !text-[0.8rem]">
          {" "}
          <span>Submitted a bug.</span>
          <span className="font-[inter-thin] !text-[0.7rem]">12 hours ago</span>
        </div>
      </div>
      <div className="flex gap-1 items-start">
        <img src={PersonIcon} alt="" className="rounded-full" />
        <div className="flex flex-col !text-[0.8rem]">
          {" "}
          <span>Modified A data in Page X.</span>
          <span className="font-[inter-thin] !text-[0.7rem]">
            Today, 11:59 AM
          </span>
        </div>
      </div>
      <div className="flex gap-1 items-start">
        <img src={PersonIcon} alt="" className="rounded-full" />
        <div className="flex flex-col !text-[0.8rem]">
          {" "}
          <span>Deleted a page in Project...</span>
          <span className="font-[inter-thin] !text-[0.7rem]">Feb 2, 2024</span>
        </div>
      </div>
      <span className="mt-5">Contacts</span>
      <div className="flex gap-1 items-center">
        <img src={Person2Icon} alt="" className="rounded-full" />
        <div className="flex flex-col !text-[0.8rem]">
          {" "}
          <span>Natali Craig</span>
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <img src={Person3Icon} alt="" className="rounded-full" />
        <div className="flex flex-col !text-[0.8rem]">
          {" "}
          <span>Drew Cano</span>
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <img src={PersonIcon} alt="" className="rounded-full" />
        <div className="flex flex-col !text-[0.8rem]">
          {" "}
          <span>Andi Lane</span>
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <img src={PersonIcon} alt="" className="rounded-full" />
        <div className="flex flex-col !text-[0.8rem]">
          {" "}
          <span>Koray Okumus</span>
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <img src={PersonIcon} alt="" className="rounded-full" />
        <div className="flex flex-col !text-[0.8rem]">
          {" "}
          <span>Kate Morrison</span>
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <img src={PersonIcon} alt="" className="rounded-full" />
        <div className="flex flex-col !text-[0.8rem]">
          {" "}
          <span>Melody Macy</span>
        </div>
      </div>
    </div>
  );
};
