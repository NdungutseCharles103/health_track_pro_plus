import express from 'express';
import sequelize from './config/db';
import router from './routes';
import cors from 'cors'

export const app = express();
app.use(express.json());

app.use('/api', router);
app.use(cors({
  origin: '*'
}))

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);
const port = process.env.PORT || 3010
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}. You can access the API at http://localhost:${port}`);
  });
});
