const express = require('express');
const app = express();
const port = 8080;
const connection = require('./connector');

// Use Express middleware for parsing URL-encoded and JSON data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/orders', async (req, res) => {
  try {
    let { offset, limit } = req.query;

    // Validate and set default values for offset and limit
    offset = Number.isInteger(+offset) && +offset >= 0 ? +offset : 0;
    limit = Number.isInteger(+limit) && +limit > 0 ? +limit : 10;

    const [data] = await connection.query('SELECT * FROM orders LIMIT ? OFFSET ?', [+limit, +offset]);
    const [totalPageData] = await connection.query('SELECT COUNT(*) AS count FROM orders');

    // Send JSON response
    res.status(200).json({
      status: 200,
      data: data,
      totalRecords: totalPageData[0].count,
      
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      error: 'Internal Server Error'
    });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

module.exports = app;
