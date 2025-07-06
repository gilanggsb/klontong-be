import express from 'express';
import handler from './api/products.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.all('/api/products', handler);
app.all('/api/products/:id', handler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});