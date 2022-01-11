import FeaturedProducts from "../components/Products/FeaturedProduct";
import Footer from "../components/Footer/Footer";
import LandingPage from "../components/LandingPage";
import NavBarContainer from "../components/NavBar/NavBarContainer";

function Home() {
  return (
    <NavBarContainer>
      <LandingPage />
      <FeaturedProducts />
      <Footer />
    </NavBarContainer>
  );
}

export default Home;
