import { Outlet } from "react-router-dom";
import PublicHeader from "../../components/shared/PublicHeader";

function PublicLayout() {
  return (
    <div>
      <PublicHeader/>

      <main>
        <Outlet />
      </main>

      <footer>Public Footer</footer>
    </div>
  );
}

export default PublicLayout;