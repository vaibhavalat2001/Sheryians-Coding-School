const createFiles = (req, res) => {
    try {
        console.log(req.files);   
        console.log(req. body);
       return res.status(200).json({
        message: "form created successfully"
       })
        
    } catch (error) {
        return res.status(500).json({
            message: "invalid server error"
        })
    }
}
  
module.exports = createFiles