import Image from "next/image";

const DashboardHome = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        {/* avatar */}
        <div className="avatar online">
          <div className="w-12 rounded-full object-cover">
            <Image
              width={100}
              height={100}
              alt="user avatar"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <p className="text-gray-600 font-medium text-sm">Hey, Chandler Bing</p>
      </div>
    </div>
  );
};
export default DashboardHome;
