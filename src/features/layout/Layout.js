import Header from "../../shared/header/header";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <section>
      <Header />
      <div style={{ marginTop: '2%' }}>
        <Outlet />
      </div>

    </section>
  );
};

export default Layout;