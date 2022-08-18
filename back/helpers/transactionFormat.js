const transactionFormat = (transaction, mode) => {
  let transactionFormated = {}
  if (mode === 'one') {
    transactionFormated = {
      id: transaction.id,
      user: transaction.user.id,
      concept: transaction.concept,
      category: transaction.category.id,
      amount: transaction.amount,
      date: transaction.date,
      transactionType: transaction.transactionType.id,
    }
  } else {
    transactionFormated = {
      id: transaction.id,
      user: `${transaction.user.name} ${transaction.user.surname}`,
      concept: transaction.concept,
      category: transaction.category.categoryName,
      amount: transaction.amount,
      date: transaction.date,
      transactionType: transaction.transactionType.transactionTypeName,
    }
  }
  return transactionFormated
}

module.exports = {
  transactionFormat,
}
