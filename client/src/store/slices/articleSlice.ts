import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Article {
    id: string;
    title: string;
    description: string;
    content: string;
    image: string;
}

interface ArticlesState {
    articles: Article[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ArticlesState = {
    articles: [],
    status: 'idle',
    error: null,
};

// Async thunk to fetch articles from server
export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
    const response = await axios.get('http://localhost:3000/articles');
    return response.data;
});

// Async thunk to add a new article to the server
export const addArticle = createAsyncThunk('articles/addArticle', async (newArticle: Omit<Article, 'id'>) => {
    const response = await axios.post('http://localhost:3000/articles', newArticle);
    return response.data;
});

export const deleteArticle = createAsyncThunk('articles/deleteArticle', async (id: string) => {
        const response = await axios.delete(`http://localhost:3000/articles/${id}`);
        return id; // נחזיר את ה-id כדי שנוכל להסיר אותו מה-state
    }
);

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.articles = action.payload;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch articles';
            })
            .addCase(addArticle.fulfilled, (state, action) => {
                state.articles.push(action.payload);
            })
            .addCase(deleteArticle.fulfilled, (state, action) => {
                state.articles = state.articles.filter(article => article.id !== action.payload);
            });
    },
});

export default articlesSlice.reducer;
