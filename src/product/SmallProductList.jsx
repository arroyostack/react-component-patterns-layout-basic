

export const SmallProductList = ( { product } ) => {
    const { name, age } = product;
    return (
        <p>Name: { name }. Age: { age } </p>
    );
};
