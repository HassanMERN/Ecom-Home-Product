import React, { useEffect } from "react";
import Related from "../sections/RelatedItems";
import ProductDetails from "../components/ProductDetails";
import { Trending } from "../jsonData/Trending";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = React.useState();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const desiredProduct = Trending.find((obj) => obj.id === id);
      setProduct(desiredProduct);
    }
  }, [id]);

  return (
    <div className="container">
      {product && (
        <>
          <div className="product-detail-heirarchy">
            Account / {product.category} / {product.label}{" "}
          </div>
          <ProductDetails product={product} />
          <Related />
        </>
      )}
    </div>
  );
}

export default ProductDetail;
