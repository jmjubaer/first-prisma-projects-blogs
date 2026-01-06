import { Request, Response } from "express";
import { userServices } from "./user.services";

const createUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.createUserIntoDb(req.body);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};
const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await userServices.getUsersFromDb();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.getSingleUserFromDb(
            Number(req.params.id)
        );
        res.status(200).send(result);
        console.log(result);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const updateUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.updateUserIntoDb(
            Number(req.params.id),
            req.body
        );
        res.status(200).send(result);
        console.log(result);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};
const deleteUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.deleteUserFromDb(
            Number(req.params.id)
        );
        res.status(200).send(result);
        console.log(result);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

export const userController = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
};
