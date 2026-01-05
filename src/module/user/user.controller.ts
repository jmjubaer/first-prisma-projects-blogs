import { Request, Response } from "express";
import { userServices } from "./user.services";

const createUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.createUserIntoDb(req.body);
        res.send(result);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

export const userController = {
    createUser,
};
