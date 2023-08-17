import Nav from "../Nav/Nav";
import "./MainLayout.scss";

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Nav />
      <div className="content-page">{children}</div>
    </div>
  );
}

export default MainLayout;
