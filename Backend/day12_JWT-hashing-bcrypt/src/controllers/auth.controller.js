export const getUser = async (req, res) => {
  try {
    return res.status(200).json({
      message: "User get successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "invalid server error",
    });
  }
};
