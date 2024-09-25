import { Router } from 'express';
import { ArticleController } from '../controllers/articleController';
import { ArticleService } from '../services/articleService';

const articleService = new ArticleService();
const articleController = new ArticleController(articleService);
const router = Router();

router.post('/articles', articleController.createArticle.bind(articleController));
router.get('/articles', articleController.getAllArticles.bind(articleController));
router.get('/articles/:id', articleController.getArticleById.bind(articleController));
router.put('/articles/:id', articleController.updateArticle.bind(articleController));
router.delete('/articles/:id', articleController.deleteArticle.bind(articleController));

export default router;