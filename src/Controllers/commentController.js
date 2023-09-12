exports.create = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from commentController > create"});
}

exports.read = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from commentController > read"});
}

exports.delete = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from commentController > delete"});
}

exports.update = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from commentController > update"});
}