const transactionFormat = (transaction) => {
  const transactionFormated = {
    id: transaction.id,
    userId: `${transaction.user.name} ${transaction.user.surname}`,
    concept: transaction.concept,
    categoryId: transaction.category.categoryName,
    amount: transaction.amount,
    date: transaction.date,
    transactionTypeId: transaction.transactionType.transactionTypeName,
  }
  return transactionFormated
}

module.exports = {
  transactionFormat,
}
