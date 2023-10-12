import express from 'express';
import sequelize from './config/db';
import router from './routes';

export const app = express();
app.use(express.json());

app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

sequelize.sync().then(() => {
  app.listen(3011, () => {
    console.log(`Server is running on port 3000. You can access the API at http://localhost:3010`);
  });
});
