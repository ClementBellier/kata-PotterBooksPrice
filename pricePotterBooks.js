const calculatePricePotterBooks = booksPurchased => {
  let totalPrice = 0;
  const numberOfBooks = booksPurchased.length;

  if (areAllSameBooks(booksPurchased)) return 8 * numberOfBooks;

  let numberOfBooksPerTome = getNumberOfBooksPerTome(booksPurchased);

  while (areStillBooks(numberOfBooksPerTome)) {
    let numberOfDifferentBooks =
      getNumberOfDifferentBooks(numberOfBooksPerTome);
    const maxBookPerTome = Math.max(...numberOfBooksPerTome);
    const minBookPerTome = Math.min(...numberOfBooksPerTome);
    const booksWithMaxBooksPerTome = getBooksWith(
      maxBookPerTome,
      numberOfBooksPerTome
    );
    const booksWithMinBooksPerTome = getBooksWith(
      minBookPerTome,
      numberOfBooksPerTome
    );

    if (
      numberOfDifferentBooks === 5 &&
      booksWithMaxBooksPerTome === 3 &&
      booksWithMinBooksPerTome === 2
    ) {
      totalPrice += calculDiscount(4) * 2;
      numberOfBooksPerTome = numberOfBooksPerTome.map(book =>
        book === maxBookPerTome ? (book -= 2) : --book
      );
    } else {
      totalPrice += calculDiscount(numberOfDifferentBooks);
      numberOfBooksPerTome = numberOfBooksPerTome.map(book =>
        book > 0 ? --book : 0
      );
    }
  }
  return totalPrice;
};

const areAllSameBooks = booksPurchased => {
  return booksPurchased.every(book => booksPurchased[0] === book);
};
const getNumberOfBooksPerTome = booksPurchased => {
  return booksPurchased.reduce((acc, val) => {
    acc[val] = ++acc[val] || 1;
    return acc;
  }, Array(5).fill(0));
};
const areStillBooks = numberOfBooksPerTome => {
  return !numberOfBooksPerTome.every(book => book === 0);
};
const getNumberOfDifferentBooks = numberOfBooksPerTome => {
  let numberOfDifferentBooks = 0;
  numberOfBooksPerTome.forEach(numberOfBook => {
    if (numberOfBook > 0) numberOfDifferentBooks++;
  });
  return numberOfDifferentBooks;
};
const calculDiscount = numberOfBooks => {
  const basePrice = 8;
  const discounts = { 0: 1, 1: 1, 2: 0.95, 3: 0.9, 4: 0.8, 5: 0.75 };
  return numberOfBooks * basePrice * discounts[numberOfBooks];
};
const getBooksWith = (maxOrMin, numberOfBooksPerTome) => {
  return numberOfBooksPerTome.filter(book => book === maxOrMin).length;
};
export default calculatePricePotterBooks;
