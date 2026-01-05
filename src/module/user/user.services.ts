import { prisma } from "../../config/db";

const createUserIntoDb = async (payload: any) => {
    try {
        const result = await prisma.user.create({
            data: payload,
        });
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const userServices = {
    createUserIntoDb,
};
