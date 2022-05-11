import { request, response } from 'express';

//Creamos la variable ADMIN
const ADMIN = true;
const middlewareAuth = (req=request, res=response , next) => {  
    // const isAuth = req.body.rol;
    if (!ADMIN) {
        res.status(401).send({
            meesage : "Route Unauthorized",
            description : 'route /products unauthorized post method'
        })
    }else{
        next();
    }
}

const isUserLogged = (req=request, res=response , next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
}

export {
    middlewareAuth,
    isUserLogged
}

