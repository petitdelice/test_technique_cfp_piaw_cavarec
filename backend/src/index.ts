import app from './app';


const PORT: number = 8080;


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Swagger at http://localhost:${PORT}/api-docs`);
});
