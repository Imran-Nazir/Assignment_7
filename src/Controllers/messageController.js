exports.create = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from messageController > create"});
}

exports.read = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from messageController > read"});
}

exports.delete = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from messageController > delete"});
}

exports.update = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from messageController > update"});
}