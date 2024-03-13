import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = ({children}) => {
  return (
    <>
      <div className="grid grid-cols-12">
        {/* sidebar */}
        <div className="">
       <Sidebar/>
        </div>

        {/* content */}
        <div className="col-span-12 lg:col-span-11  mt-16 lg:mt-0 px-6 py-4 lg:px-1">
          {children}
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
