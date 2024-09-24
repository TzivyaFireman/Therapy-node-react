import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

export interface ArticleProps {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

const Article: React.FC<ArticleProps> = (props: ArticleProps) => {
    return (
        <Grid item xs={12} sm={6} md={4} key={props.id}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="200"
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
                    href={props.link}
                    sx={{ margin: '1rem' }}
                >
                    לקריאת המאמר
                </Button>
            </Card>
        </Grid>
    );
}

export default Article;