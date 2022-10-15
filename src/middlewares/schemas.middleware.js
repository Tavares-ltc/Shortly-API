import joi from "joi";

const auxParam = (param) => {
  return (req, res, next) => {
    res.locals.param = param;
    next();
  };
};

async function verifySchema(req, res, next) {
  const param = res.locals.param;
  if (!param) {
    return res.sendStatus(401);
  }
  switch (param) {
    case "signup":
      const signupSchema = joi.object({
        name: joi.string().max(50).required(),
        email: joi.string().max(50).required(),
        password: joi.string().required(),
        confirmPassword: joi.string().required(),
      });

      const signupValidation = signupSchema.validate(req.body, {
        abortEarly: false,
      });
      if (signupValidation.error) {
        const errors = signupValidation.error.details.map(
          (value) => value.message
        );
        res.status(422);
        return res.send(errors);
      }
      if (req.body.password !== req.body.confirmPassword) {
        res.status(422);
        return res.send("Error: Password and confirm password does not match.");
      }
      next();
      break;

    case "signin":
      const signinSchema = joi.object({
        email: joi.string().max(50).required(),
        password: joi.string().required(),
      });

      const signinValidation = signinSchema.validate(req.body, {
        abortEarly: false,
      });
      if (signinValidation.error) {
        const errors = signinValidation.error.details.map(
          (value) => value.message
        );
        res.status(422);
        return res.send(errors);
      }
      next();
      break;

    case "postURL":
      const urlSchema = joi.object({
        url: joi.string().required(),
      });
      const urlValidation = urlSchema.validate(req.body, { abortEarly: false });
      if (urlValidation.error) {
        const errors = urlValidation.error.details.map(
          (value) => value.message
        );
        res.status(422);
        return res.send(errors);
      }

      const URL = req.body;

      if (isValidURL(URL)) {
        return res.sendStatus(422);
      }
      next();

    default:
  }
}
function isValidURL(str) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

export { auxParam, verifySchema };
