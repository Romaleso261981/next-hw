// eslint-disable-next-line @typescript-eslint/no-require-imports
const sql = require("better-sqlite3");
const db = sql("cars.db");

const cars = [
  {
    brand: "Volga",
    year: 2024,
    price: 125878,
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSRY1AoiYdAkV0Z9r5BTH1CoEKOidHJ2DOsxg%26s&w=256&q=75"
  }
];

db
  .prepare(
    `
    CREATE TABLE IF NOT EXISTS cars
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        brand TEXT,
        year NUMBER,
        price NUMBER,
        image TEXT
    )
`
  )
  .run();

async function initData() {
  const stmt = db.prepare(`
        INSERT INTO cars
        VALUES (null,
                @brand,
                @year,
                @price,
                @image)
    `);

  for (const car of cars) {
    stmt.run(car);
  }
}

initData();
