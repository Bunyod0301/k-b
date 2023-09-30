import ProductDetails from "@/components/single-product/ProductDetails";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";
import ProductCrumb from "@/components/single-product/ProductCrumb";
import DescrArea from "@/components/single-product/DescrArea";
import NewProduct from "@/components/single-product/NewProduct";
import NewProductDetail from "@/components/single-product/NewProductDetail";

const SingleProduct = () => {
  return(
    <>
      <Header />
      <ProductCrumb />
      <ProductDetails />
      <DescrArea />
      <NewProduct />
      <NewProductDetail />
      <Footer />
    </>
  )
}
export default SingleProduct;