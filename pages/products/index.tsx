import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import { GetServerSideProps } from 'next';

type Product = {
    id: number;
    name: string;
    title: string;
    price: number;
    image: string;
};

type ProductsPageProps = {
    products: Product[];
};

const ProductsPage = ({ products }: ProductsPageProps) => {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return { props: { products } };
};

export default ProductsPage;
