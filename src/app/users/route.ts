export const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe 2'},
]

export const GET = async () => {
    return Response.json(users)
}

export const POST = async (req: Request) => {
    const user = await req.json()
    const newUser = {
        id: users.length + 1,
        name: user.name
    }
    users.push(newUser)
    return Response.json(JSON.stringify(newUser), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 201
    })
}