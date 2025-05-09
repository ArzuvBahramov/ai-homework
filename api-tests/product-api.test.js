import fetch from 'node-fetch';

describe('Fake Store API Tests', () => {
  let products;

  beforeAll(async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    products = await response.json();
  });

  test('Server response code should be 200', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    expect(response.status).toBe(200);
  });

  test('All products should have valid attributes', () => {
    const defectiveProducts = products.filter(product => {
      return !product.title || 
             product.price < 0 || 
             (product.rating && product.rating.rate > 5);
    });

    console.log('Defective Products:', defectiveProducts);
    expect(defectiveProducts.length).toBe(0);
  });

  test('Product titles should not be empty', () => {
    const emptyTitles = products.filter(product => !product.title);
    console.log('Products with empty titles:', emptyTitles);
    expect(emptyTitles.length).toBe(0);
  });

  test('Product prices should not be negative', () => {
    const negativePrices = products.filter(product => product.price < 0);
    console.log('Products with negative prices:', negativePrices);
    expect(negativePrices.length).toBe(0);
  });

  test('Product ratings should not exceed 5', () => {
    const invalidRatings = products.filter(product => 
      product.rating && product.rating.rate > 5
    );
    console.log('Products with invalid ratings:', invalidRatings);
    expect(invalidRatings.length).toBe(0);
  });
}); 