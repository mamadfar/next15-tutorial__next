import {revalidatePath} from "next/cache";
import {auth, currentUser} from "@clerk/nextjs/server";

type MockUser = {
    id: number;
    name: string;
}

const MockUsers = async () => {

    const authObj = await auth();
    const userObj = await currentUser();

    const res = await fetch('https://6741097dd0b59228b7f210b0.mockapi.io/users');
    const users: MockUser[] = await res.json();

    const addUser = async (formData: FormData) => {
        'use server';
        const name = formData.get('name');
        const res = await fetch('https://6741097dd0b59228b7f210b0.mockapi.io/users', {
            method: 'POST',
            body: JSON.stringify({ name }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer token' // If we had a token that we don't want to expose
            }
        });
        const newUser: MockUser = await res.json();
        revalidatePath('/mock-users'); //? Revalidate the page after adding a new user
        console.log(newUser);
    }

    return (
        <div className="py-10">
            <form action={addUser} className="mb-4">
                <input type="text" name="name" required className="border p-2 mr-2 rounded text-black"/>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
            </form>
            <div className="grid grid-cols-4 gap-4 py-10">
                {users.map(user => (
                    <div key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MockUsers;
