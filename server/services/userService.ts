import { UserModel, IUser } from '../models/userModel';

export class UserService {
  // פונקציה ליצירת משתמש
  async createUser(name: string, email: string, password: string): Promise<IUser> {
    const user = new UserModel({ name, email, password });
    return user.save();
  }

  // חיפוש משתמש לפי מזהה ייחודי
  async getUserById(id: string): Promise<IUser | null> {
    return UserModel.findOne({ id }).exec();
  }

  // עדכון משתמש לפי מזהה ייחודי
  async updateUser(id: string, updateData: Partial<IUser>): Promise<IUser | null> {
    return UserModel.findOneAndUpdate({ id }, updateData, { new: true }).exec();
  }

  // מחיקת משתמש לפי מזהה ייחודי
  async deleteUser(id: string): Promise<IUser | null> {
    return UserModel.findOneAndDelete({ id }).exec();
  }

  // חיפוש משתמש לפי מייל
  async getUserByEmail(email: string): Promise<IUser | null> {
    return UserModel.findOne({ email }).exec();
  }
}
