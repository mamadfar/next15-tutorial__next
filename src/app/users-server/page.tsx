import React from 'react';

type TUser = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const UsersServer = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: TUser[] = await response.json();

    return (
        <ul className="space-y-4 p-4">
            {users.map(user => (
                <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                    <h2 className="text-lg font-bold">{user.name}</h2>
                    <p className="text-gray-500">{user.email}</p>
                </li>
            ))}
        </ul>
    );
};

export default UsersServer;
