import {NextRequest} from "next/server";
import {users} from "@/app/users/route";

export const GET = async (_req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    const {id} = await params
    const user = users.find(user => user.id === parseInt(id))
    return Response.json(user)
}