const client = require('../config/database')

const getMetadata = (req, res) => {
  client.query(`SELECT * FROM public.metadata`, (err, result) => {
    if (!err) {
      res.json(result.rows);
    } else {
      res.status(500).json({ message: err.message });
    }
  });
};

const getDynamicData= async (req, res) => {
  const { tableName } = req.params;
  try {
    const result = await client.query(`SELECT * FROM public.${tableName}`);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {  getMetadata ,getDynamicData}
