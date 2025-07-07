import { productCategories } from './data.js'; // Assuming this imports your product array
import { extractIdFromUrl } from './utils.js';

const handlerProductCategory = async (req, res) => {
  const api_key = req.headers['x-api-key'];
  if (api_key != "a9d709e0") {
    return res.status(403).json({
      message: "Ensure you have the correct credentials",
      data: null,
      code: 403
    });
  }
  const method = req.method;
  const id = req?.query?.id || req?.params?.id || extractIdFromUrl(req.url);
  const search_key = req?.query?.search_key || "";
  const productId = parseInt(id);

  // Parse limit and offset from query parameters
  const limit = req?.query?.limit ? parseInt(req.query.limit) : 10; // Default limit to 10
  const offset = req?.query?.offset ? parseInt(req.query.offset) : 0; // Default offset to 0

  switch (method) {
    case 'GET':
      let result = productCategories;

      if (search_key) {
        result = productCategories.filter(p =>
          p?.name?.toLowerCase().includes(search_key.toLowerCase())
        );
      }

      if (id) {
        const productCategory = productCategories.find(p => p.id === productId);
        if (!productCategory) return res.status(404).json({ message: 'Not found', code: 404 });
        return res.status(200).json({
          message: "success get product category",
          data: productCategory,
          code: 200
        });
      }

      // Apply limit and offset for product list retrieval
      const paginatedResult = result.slice(offset, offset + limit);

      res.status(200).json({
        message: "success get product categories",
        data: {
          search_key,
          product_categories: paginatedResult,
          total_data: result.length, // total_data should reflect the count before pagination
          limit: limit,
          offset: offset
        },
        code: 200
      });
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handlerProductCategory;