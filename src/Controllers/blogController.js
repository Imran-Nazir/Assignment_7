exports.create = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from blogController > create"});
}

exports.read = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from blogController > read"});
}

exports.delete = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from blogController > delete"});
}

exports.update = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from blogController > update"});
}