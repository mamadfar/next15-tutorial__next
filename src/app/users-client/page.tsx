'use client'

import {useEffect, useState} from "react";

type TUser = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const UsersClient = () => {

    const [users, setUsers] = useState<TUser[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) throw new Error('Failed to fetch users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError('Failed to fetch users');
                if (error instanceof Error) {
                    setError(`Failed to fetch users: ${error.message}`);
                }
            } finally {
                setLoading(false);
            }
        }
        void fetchUsers();
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

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

export default UsersClient;
