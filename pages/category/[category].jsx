import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import FeaturedProducts from "../../components/Products/FeaturedProduct";
import { getProductsByCategory } from "../api/products/[category]";

const CategoryPage = ({ products }) => {
  const router = useRouter();
  return (
    <Box>
      <Heading>Results for {router.query.category}</Heading>
      <Box>
        {products.map((product) => (
          <FeaturedProducts key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}
