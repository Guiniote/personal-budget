const Yup = require('yup')

exports.loginValidationSchema = Yup.object({
  eMail: Yup.string().email('Dirección de mail inválida').required('Obligatorio'),
  password: Yup.string().required('Obligatorio'),
})
