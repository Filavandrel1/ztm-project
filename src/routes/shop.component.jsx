import { useContext } from 'react';

import { ProductsContext } from '../contexts/products.context';
import { ProductCard } from '../components/product-card.component';

import '../styles/shop.styles.scss';

export const Shop = () => {
  const {products} = useContext(ProductsContext);
  return(
    <div className="products-conteiner">
      {
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </div>
  )
}