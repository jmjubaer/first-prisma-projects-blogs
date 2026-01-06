import { Prisma, User } from "../../../generated/prisma/client";
import { prisma } from "../../config/db";

const createUserIntoDb = async (
    payload: Prisma.UserCreateInput
): Promise<User> => {
    const result = await prisma.user.create({
        data: payload,
    });
    return result;
};

const getUsersFromDb = async () => {
    const result = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            phone: true,
            pictures: true,
            status: true,
            isVerified: true,
            createdAt: true,
            updatedAt: true,
            posts: true, // alternative way to use "include" for relational data
        },

        // user for relational data population, use when not using select
        // include: {
        //     posts: true,
        // },
    });
    return result;
};
const getSingleUserFromDb = async (id: number) => {
    const result = await prisma.user.findUniqueOrThrow({
        where: {
            id, // Replace with actual unique identifier
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            phone: true,
            pictures: true,
            status: true,
            isVerified: true,
            createdAt: true,
            updatedAt: true,
        },
    });
    console.log(result);
    return result;
};
const updateUserIntoDb = async (id: number, payload: any) => {
    const result = await prisma.user.update({
        where: {
            id, // Replace with actual unique identifier
        },
        data: payload,
    });
    console.log(result);
    return result;
};
const deleteUserFromDb = async (id: number) => {
    const result = await prisma.user.delete({
        where: {
            id, // Replace with actual unique identifier
        },
    });
    console.log(result);
    return result;
};

export const userServices = {
    createUserIntoDb,
    getUsersFromDb,
    getSingleUserFromDb,
    updateUserIntoDb,
    deleteUserFromDb,
};
