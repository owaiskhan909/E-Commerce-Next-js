import Image from 'next/image';

type ProductDetailProps = {
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        image: string;
    };
};

const ProductDetail = ({ product }: ProductDetailProps) => {
    return (
        <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <Image
                src={`/images/products/${product.image}`}
                alt={product.name}
                width={500}
                height={500}
            />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductDetail;
