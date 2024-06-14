import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";

const Home = () => {
  const [category, setCategory] = useState("all");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;