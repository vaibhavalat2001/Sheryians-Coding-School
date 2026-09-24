export const createProduct = async (req, res) => {
  //   const { title, description, price, sizes } = req.body;
  console.log(req.files);
  console.log(req.body);

  return res.status(200).json({
    message: "dummy response received",
  });
};
