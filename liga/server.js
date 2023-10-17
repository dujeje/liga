const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// Vezivanje na vanjsku bazu podataka na Renderu
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());

app.post('/dbliga', async (req, res) => {
  try {
    const { name, competitors, scoringSystem } = req.body;
    if (!name || !competitors || !scoringSystem) {
      return res.status(400).json({ error: "Svi podaci o natjecanju su obavezni." });
    }

    const query = "INSERT INTO dbliga (name, competitors, scoring_system) VALUES ($1, $2, $3) RETURNING *";
    const values = [name, competitors, scoringSystem];

    const result = await pool.query(query, values);

    res.status(201).json({ message: "Natjecanje uspješno spremljeno.", data: result.rows[0] });
  } catch (error) {
    console.error("Greška prilikom spremanja natjecanja:", error);
    res.status(500).json({ error: "Greška prilikom spremanja natjecanja." });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
