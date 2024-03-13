import Image from "next/image";

const DashboardHome = () => {
  return (
    <div>
        {/* avatar */}
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <Image width={20} height={20} alt="user avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
  );
};
export default DashboardHome;
