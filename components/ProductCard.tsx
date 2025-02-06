import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
    product: {
        id: number;
        name: string;
        title: string;
        price: number;
        image: string;
    };
};

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition transform duration-300 hover:scale-105 m-4 ml-4">
            <div className="relative w-full h-56 overflow-hidden rounded-t-xl">
                <Image
                    src={product.image}
                    alt={product.title}
                    layout="responsive"
                    width={400}
                    height={400}
                    objectFit="contain"
                    className="rounded-t-xl"
                />
            </div>

            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
                    {product.title}
                </h2>
                <p className="text-xl font-bold text-blue-600 mb-4">
                    ${product.price.toFixed(2)}
                </p>
                <div className="flex items-center justify-between">
                    <button
                        className="snipcart-add-item bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                        data-item-id={product.id}
                        data-item-name={product.title}
                        data-item-price={product.price}
                        data-item-url={`/products/${product.id}`}
                        data-item-image={product.image}
                    >
                        Add to Cart
                    </button>

                    <Link href={`/products/${product.id}`} className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200">
                        View Details

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
