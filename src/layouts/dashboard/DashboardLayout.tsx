import { Outlet } from "react-router-dom";

import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";

function DashboardLayout() {
  return (
    <div>
      <DashboardSidebar />

      <div>
        <DashboardHeader />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;