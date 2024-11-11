import { updateUserById, disableUserById } from '../services/user.action';

export const updateUserController = async (userId: string, updates: object) => {
    const updatedUser = await updateUserById(userId, updates);
    return updatedUser;
};

export const desactivateUserController = async (userId: string) => {
    await disableUserById(userId);
};
