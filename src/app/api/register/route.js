import mongoose from 'mongoose';
import { User } from '../../models/User';

export async function POST(req) {
    try {
        const body = await req.json();
        await mongoose.connect(process.env.MONGO_URL);

        const createUser = await User.create(body);
        return Response.json(createUser);

    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}