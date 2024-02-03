import express from 'express';
import routes from './routes';
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

app.use('/api',routes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});