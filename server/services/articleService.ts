import { ArticleModel, IArticle } from '../models/articleModel';
import { v4 as uuidv4 } from 'uuid';  // ייבוא UUID

interface CreateArticleDto {
    title: string;
    description: string;
    image: string;
    content: string;
}

export class ArticleService {
    constructor(){console.log("hi service");
    }
    // יצירת מאמר חדש
    async createArticle(articleData: CreateArticleDto): Promise<IArticle> {
        console.log("*");
        const newArticle = new ArticleModel({
            id: uuidv4(),  // יצירת ID ייחודי אוטומטי
            title: articleData.title,
            description: articleData.description,
            image: articleData.image,
            content: articleData.content,
        });
        console.log("*");
        return newArticle.save();
    }

    // קבלת כל המאמרים
    async getAllArticles(): Promise<IArticle[]> {
        return ArticleModel.find().exec();
    }

    // קבלת מאמר לפי מזהה ייחודי
    async getArticleById(articleId: string): Promise<IArticle | null> {
        return ArticleModel.findOne({ id: articleId }).exec();
    }

    // עדכון מאמר
    async updateArticle(articleId: string, updateData: Partial<IArticle>): Promise<IArticle | null> {
        return ArticleModel.findOneAndUpdate({ id: articleId }, updateData, { new: true }).exec();
    }

    // מחיקת מאמר
    async deleteArticle(articleId: string): Promise<IArticle | null> {
        return ArticleModel.findOneAndDelete({ id: articleId }).exec();
    }
}
