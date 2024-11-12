import { Router, Response, NextFunction } from 'express';
import { updateUserController, desactivateUserController } from '../user/user.controller';
import { authMiddleware } from '../auth/authMiddleware';
import { AuthRequest } from '../custom';


const userRoutes = Router();

async function UpdateUser(request: AuthRequest, response: Response) {
  try {
    const userId = request.params.userId || request.user?.id;
    if (!userId) throw new Error('User ID is missing');

    const updates = request.body;
    const updatedUser = await updateUserController(userId, updates);

    response.status(200).json({
      message: 'User updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    response.status(400).json({
      message: (error as Error).message,
    });
  }
}

async function DesactivateUser(request: AuthRequest, response: Response) {
  try {
    const userId = request.params.userId || request.user?.id;
    if (!userId) throw new Error('User ID is missing');

    await desactivateUserController(userId);
    response.status(200).json({
      message: 'User deactivated successfully',
    });
  } catch (error) {
    response.status(400).json({
      message: (error as Error).message,
    });
  }
}

const updateUserPermissionMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const userIdFromParams = req.params.userId || req.user?.id;
  const userIdFromToken = req.user?.id;

  if (req.user?.hasPermission('edit_user') || userIdFromToken === userIdFromParams) {
      return next();
  }

  return res.status(403).json({ message: 'Acceso denegado' });
};

const deleteUserPermissionMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const userIdFromParams = req.params.userId || req.user?.id;
  const userIdFromToken = req.user?.id;

  if (req.user?.hasPermission('delete_user') || userIdFromToken === userIdFromParams) {
      return next();
  }

  return res.status(403).json({ message: 'Acceso denegado' });
};

userRoutes.put('/update/:userId?', authMiddleware, updateUserPermissionMiddleware, UpdateUser);
userRoutes.delete('/desactivate/:userId?', authMiddleware, deleteUserPermissionMiddleware, DesactivateUser);

export default userRoutes;
