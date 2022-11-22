import { Outlet } from 'react-router-dom';
import CategoriesMenu from "../components/categories-menu.component";

const Home = () => {
  return (
    <div>
      <CategoriesMenu />
    </div>
  );
}

export default Home;