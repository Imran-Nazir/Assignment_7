exports.create = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from productController > create"});
}

exports.read = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from productController > read"});
}

exports.delete = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from productController > delete"});
}

exports.update = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from productController > update"});
}