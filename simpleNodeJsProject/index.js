const fs = require('fs');

try {
  const data = fs.readFileSync(`${__dirname}/samples_document_txt_sample1.txt`, 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
