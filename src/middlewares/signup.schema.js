import joi from 'joi';

const signupSchema = joi.object({
        name: joi.string().max(50).required(),
      email: joi.string().max(50).required(),
      password: joi.string().required(),
      confirmPassword: joi.string().required()
})

async function verifyReqSchema(req, res, next) {
const validation =  signupSchema.validate(req.body, {abortEarly: false});
if(validation.error){
    const errors = validation.error.details.map(value => value.message);
    res.status(422);
    return res.send(errors);
}
if(req.body.password !== req.body.confirmPassword){
  res.status(422)
  return res.send('Error: Password and confirm password does not match.')
}
next();
}

export default verifyReqSchema;