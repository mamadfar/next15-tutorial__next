import React, {ReactNode} from 'react';

const ProductsLayout = ({children}: {children: ReactNode}) => {
    return (
        <div>
            <h1>Products Layout</h1>
            {children}
        </div>
    );
};

export default ProductsLayout;
