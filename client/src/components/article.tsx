import { DeleteOutline, Edit } from "@mui/icons-material";
import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteArticle } from "../store/slices/articleSlice";
import { AppDispatch } from "../store/store";

export interface ArticleProps {
    id: string;
    title: string;
    description: string;
    image: string;
    onClick: () => void; // נוסיף את onClick כאן
}

const Article: React.FC<ArticleProps> = (props: ArticleProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const handleDelete = () => {
        dispatch(deleteArticle(props.id));
    };

    return (
        <Grid item key={props.id}>
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={props.image}
                    alt={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <Button
                    size="small"
                    color="primary"
                    sx={{ margin: '1rem' }}
                    onClick={props.onClick}
                >
                    לקריאת המאמר
                </Button>
                <Button onClick={handleDelete}><DeleteOutline></DeleteOutline></Button>
            </Card>
        </Grid>
    );
}

export default Article;