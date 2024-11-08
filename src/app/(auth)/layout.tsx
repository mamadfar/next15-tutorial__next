import React, {ReactNode} from 'react';

const AuthLayout = ({children}: {children: ReactNode}) => {
    return (
        <div>
            <h1>Auth Layout</h1>
            {children}
        </div>
    );
};

export default AuthLayout;
