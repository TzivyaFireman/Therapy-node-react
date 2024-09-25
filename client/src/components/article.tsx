import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

export interface ArticleProps {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

const Article: React.FC<ArticleProps> = (props: ArticleProps) => {
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