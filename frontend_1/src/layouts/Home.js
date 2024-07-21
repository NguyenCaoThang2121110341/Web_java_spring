import Blog from "../pages/home/Blog";
import Category from "../pages/home/Category";
import Product from "../pages/home/product/Product";
import Slider from "../pages/home/Slider";
import Testimonial from "../pages/home/Testimonial";

function Home(props) {
  return (
    <>
      <Slider />
      <Category />
      <Product />
      <Testimonial />
      <Blog />
    </>
  );
}

export default Home;
