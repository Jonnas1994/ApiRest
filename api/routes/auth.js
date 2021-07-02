module.exports.isAuthorized  = function(req, res, next) {

    if(req.headers.hasOwnProperty("authorization")){
        next();
    }else{
        
        return res.status(401).json("error: 'Ops! Você Não tem autorização, Go back 🤣!'");
    }
}