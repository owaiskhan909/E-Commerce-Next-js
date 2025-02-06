type CartItemProps = {
    item: {
        id: number;
        name: string;
        price: number;
        image: string;
    };
};

const CartItem = ({ item }: CartItemProps) => {
    return (
        <div className="border rounded-lg p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p>${item.price}</p>
            <button className="bg-red-500 text-white py-2 px-4 rounded">Remove</button>
        </div>
    );
};

export default CartItem;
