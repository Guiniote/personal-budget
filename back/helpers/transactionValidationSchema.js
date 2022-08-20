const Yup = require('yup')

exports.transactionValidationSchema = Yup.object({
  categoryId: Yup.mixed().required('Obligatorio'),
  concept: Yup.string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .max(40, 'Debe tener como mucho 40 caracteres')
    .required('Obligatorio'),
  amount: Yup.number().positive('El valor debe ser positivo').required('Obligatorio'),
  date: Yup.date().max(new Date(), 'No se pueden cargar gastos futuros').required('Obligatorio'),
  transactionTypeId: Yup.mixed().required('Obligatorio'),
})
