import { Request, Response } from 'express';
import { ArticleService } from '../services/articleService';

export class ArticleController {
    private articleService: ArticleService;

    constructor(articleService: ArticleService) {
        this.articleService = articleService;
        console.log("kkk ",articleService);
        
    }

    // יצירת מאמר חדש
    async createArticle(req: Request, res: Response): Promise<void> {
        console.log("*");
        
        // try {
        const { title, description, image, content } = req.body;
        console.log("article", this.articleService);
        const newArticle = await this.articleService.createArticle({
            title,
            description,
            image,
            content,
        });
        console.log("*");
        res.status(201).json(newArticle);
        // } catch (error) {
        //     res.status(500).json({ message: 'Failed to create article', error });
        // }
    }

    // קבלת כל המאמרים
    async getAllArticles(req: Request, res: Response): Promise<void> {
        try {
            const articles = await this.articleService.getAllArticles();
            res.status(200).json(articles);
        } catch (error) {
            res.status(500).json({ message: 'Failed to get articles', error });
        }
    }

    // קבלת מאמר לפי מזהה
    async getArticleById(req: Request, res: Response): Promise<void> {
        try {
            const articleId = req.params.id;
            const article = await this.articleService.getArticleById(articleId);
            if (!article) {
                res.status(404).json({ message: 'Article not found' });
            } else {
                res.status(200).json(article);
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to get article', error });
        }
    }

    // עדכון מאמר קיים
    async updateArticle(req: Request, res: Response): Promise<void> {
        try {
            const articleId = req.params.id;
            const updateData = req.body;
            const updatedArticle = await this.articleService.updateArticle(articleId, updateData);
            if (!updatedArticle) {
                res.status(404).json({ message: 'Article not found' });
            } else {
                res.status(200).json(updatedArticle);
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to update article', error });
        }
    }

    // מחיקת מאמר
    async deleteArticle(req: Request, res: Response): Promise<void> {
        try {
            const articleId = req.params.id;
            const deletedArticle = await this.articleService.deleteArticle(articleId);
            if (!deletedArticle) {
                res.status(404).json({ message: 'Article not found' });
            } else {
                res.status(200).json({ message: 'Article deleted successfully' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to delete article', error });
        }
    }
}
