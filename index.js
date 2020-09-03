const express = require('express');
const cors = require('cors');
const monk = require('monk');
const yup = require('yup');
const {nanoid} = require('nanoid');
const { static } = require('express');
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

const db = monk(process.env.MONGO_URL);
const urls = db.get('urls');
urls.createIndex({ alias : 1 }, { unique: true });

const schema = yup.object().shape({
  alias: yup.string().trim().matches(/[\w\-]/),
  url: yup.string().trim().url().required()
});

app.get('/:id', async (req, res) => {
  const { id : alias } = req.params;
  try {
    const url = await urls.findOne({ alias });
    if(url){
      res.redirect(url.url);
    }
    res.redirect(`/?error=${alias} not found`);
  } catch (error) {
    res.redirect('/?error=Link not foundkd');
  }
});

app.post('/url', async (req, res, next) => {
  let {alias, url} = req.body;
  
  try {
    await schema.validate({
      alias,
      url
    });

    if (!alias) {
      alias = nanoid(6);
    } else {
      const existing = await urls.findOne({alias});
      if(existing){
        throw new Error('Alias already in use');
      }
    }
    alias = alias.toLowerCase();
    const newUrl = ({
      alias,
      url
    });
    const created = await urls.insert(newUrl);

    const data = {
      alias: created.alias,
      message: created.message
    }
    
    res.json(data);


  } catch (error) {
    next(error);
  }

});

app.use((error, req, res, next) => {
  if(error.status) {
    res.status(error.status);
  } else {
    res.status(500);
  }
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'Error' : error.stack
  })
});

const port = process.env.PORT  || 4000;

app.listen(port, () => {
  console.log(`listeing on http://localhost:${port}`);
});