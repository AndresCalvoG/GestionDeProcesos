var texto = "Hola Mundo";

test("Debe contener un texto", () => {
  expect(texto).toMatch(/Mundo/);
});
