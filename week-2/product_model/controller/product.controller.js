import Product from "../model/product.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    console.error("error: ", error);
  }
};

export const createProduct = async (req, res) => {
  console.log(req.body);
  try {
    // const user = await User.create(req.body)
    // res.status(201).send(user);

    //or

    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
