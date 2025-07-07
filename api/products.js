import products from './product_data.js'; // Assuming this imports your product array

const handler = async (req, res) => {
  const method = req.method;
  const id = req?.query?.id || req?.params?.id;
  console.log("Request method:", method, "ID:", id);
  const search_key = req?.query?.search_key || "";
  const productId = parseInt(id);

  // Parse limit and offset from query parameters
  const limit = req?.query?.limit ? parseInt(req.query.limit) : 10; // Default limit to 10
  const offset = req?.query?.offset ? parseInt(req.query.offset) : 0; // Default offset to 0

  switch (method) {
    case 'GET':
      let result = products;

      if (search_key) {
        result = products.filter(p =>
          p?.name?.toLowerCase().includes(search_key.toLowerCase())
        );
      }

      if (id) {
        const product = products.find(p => p.id === productId);
        if (!product) return res.status(404).json({ message: 'Not found', code: 404 });
        return res.status(200).json({
          message: "success get product",
          data: product,
          code: 200
        });
      }

      // Apply limit and offset for product list retrieval
      const paginatedResult = result.slice(offset, offset + limit);

      res.status(200).json({
        message: "success get products",
        data: {
          search_key,
          products: paginatedResult,
          total_data: result.length, // total_data should reflect the count before pagination
          limit: limit,
          offset: offset
        },
        code: 200
      });
      break;

    case 'POST':
      const newProduct = { id: Date.now(), ...req.body };
      products.push(newProduct);
      res.status(201).json({
        message: "success create product",
        data: newProduct,
        code: 201
      });
      break;

    case 'PUT':
      const index = products.findIndex(p => p.id === productId);
      if (index === -1) return res.status(404).json({ message: 'Not found', code: 404 });
      products[index] = { ...products[index], ...req.body };
      res.status(200).json({
        message: "success update product",
        data: products[index],
        code: 200
      });
      break;

    case 'DELETE':
      const initialLength = products.length;
      products = products.filter(p => p.id !== productId);
      if (products.length === initialLength) return res.status(404).json({ message: 'Not found', code: 404 });
      res.status(200).json({
        message: "success delete product",
        code: 200
      });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;