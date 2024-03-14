import { getAllPatients } from "@/api/getAllPatients";
import DashboardHome from "@/components/Dashboard/DashboardHome/DashboardHome";


const DashboardPage = async() => {
  const patients = await getAllPatients()
  
  return (
    <div>
        <DashboardHome patients={patients}/>
    </div>
  );
};
export default DashboardPage;
