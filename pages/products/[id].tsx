import { GetServerSideProps } from 'next';
import Image from 'next/image';

type Product = {
    id: number;
    name: string;
    title: string;
    description: string;
    price: number;
    image: string;
};

type ProductPageProps = {
    product: Product | null;
};

const ProductPage = ({ product }: ProductPageProps) => {
    return (
        <div>
            {product ? (
                <div className='ml-7 p-4'>
                    <h1 className="text-3xl font-bold m-2">{product.title}</h1>
                    <Image src={product.image} alt={product.title} width={500} height={500} />
                    <p m-2>{product.description}</p>
                    <h4 m-2>Price: ${product.price}</h4>
                    <button
                        className="snipcart-add-item bg-blue-600 text-white px-4 py-2 rounded m-2 ml-0"
                        data-item-id={product.id}
                        data-item-name={product.title}
                        data-item-price={product.price}
                        data-item-url={`/products/${product.id}`}
                        data-item-image={product.image}
                    >
                        Add to Cart
                    </button>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params as { id: string };
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();

    return { props: { product } };
};

export default ProductPage;
