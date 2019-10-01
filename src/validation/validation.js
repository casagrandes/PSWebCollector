const Joi = require('@hapi/joi');

// Registration Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .max(30)
      .required(),
    lastName: Joi.string()
      .max(30)
      .required(),
    email: Joi.string()
      .min(8)
      .required()
      .email({ minDomainSegments: 2 }),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/),
  });
  // in JOI version 16 api version change to schema.validate instead of Joi.validate
  return schema.validate(data);
};

// Login Validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .min(8)
      .required()
      .email({ minDomainSegments: 2 }),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .min(6)
      .required()
  });
  return schema.validate(data);
};

// PS post validation
const psAddValidation = data => {
  const schema = Joi.object({
    name: Joi.string()
      .required(),
    user: Joi.string()
      .required(),
    os: Joi.string()
      .required(),
    osVersion: Joi.string()
      .required(),
    domain: Joi.string()
      .required(),
    domainRole: Joi.string()
      .required(),
    adminPassStatus: Joi.string()
      .required(),
    thermalState: Joi.string()
      .required(),
    diskFreeSpaceGB: Joi.number()
      .required(),
    biosName: Joi.string()
      .required(),
    biosStatus: Joi.string()
      .required(),
    biosManufacturer: Joi.string()
      .required(),
    cpuName: Joi.string()
      .required(),
    cpuSocket: Joi.string()
      .required(),
    cpuMaxClock: Joi.number()
      .required(),
    cpuCores: Joi.number()
      .required(),
    cpuVirtCores: Joi.number()
      .required(),
    gpuName: Joi.string()
      .required(),
    ramGB: Joi.number()
      .required(),
    deviceGuid: Joi.string()
      .required()
  });
  return schema.validate(data);
}

// TODO - add validation for api calls

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.psAddValidation = psAddValidation;