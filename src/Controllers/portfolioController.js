exports.create = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from portfolioController > create"});
}

exports.read = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from portfolioController > read"});
}

exports.delete = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from portfolioController > delete"});
}

exports.update = async (req, res)=>{
    res.status(200).json({status:"success", data:"Can contain any information from portfolioController > update"});
}