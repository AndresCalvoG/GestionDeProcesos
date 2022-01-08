var texto = "hola mundo";

test("debe tener un texto", () => {
  expect(texto).toMatch(/mundo/);
});
