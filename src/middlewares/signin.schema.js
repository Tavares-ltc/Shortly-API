import joi from 'joi';

const signinSchema = joi.object({
    email: joi.string().max(50).required() ,
    password: joi.string().required() 
})

function verifySigninSchema(req, res, next){
    const validation = signinSchema.validate(req.body, {abortEarly: false});
    if(validation.error){
       const errors =  validation.error.details.map(value => value.message);
       res.status(422);
       return res.send(errors);
    }
    next()
}

export default verifySigninSchema;