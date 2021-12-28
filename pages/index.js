import FeaturedProducts from "../components/FeaturedProduct";
import LandingPage from "../components/LandingPage";
import NavBarContainer from "../components/NavBarContainer";

function Home() {
  return (
    <NavBarContainer>
      <LandingPage />
      <FeaturedProducts />
    </NavBarContainer>
  )
}

export default Home;
