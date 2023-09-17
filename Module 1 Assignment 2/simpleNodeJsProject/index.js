// Student Name: Saurabh Kale
// Student ID: 1223450319
// Date: 08/26/2023

const fs = require('fs');

try {
  const data = fs.readFileSync(`${__dirname}/samples_document_txt_sample1.txt`, 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
