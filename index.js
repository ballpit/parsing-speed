var mm = require('music-metadata');
const util = require('util')

console.time('{duration: true}');
mm.parseFile('./test-1.mp3', {duration: true})
  .then(function (metadata) {
    console.timeEnd('{duration: true}')
    // console.log(util.inspect(metadata, { showHidden: false, colors: true }));
    return Promise.resolve()
  })
  .catch(function (err) {
    console.error(err.message);
    return Promise.resolve()
  })
  .then(() => {
    console.time('{duration: false}');
    return mm.parseFile('./test-1.mp3', {duration: false
  })})
  .then(function (metadata) {
    console.timeEnd('{duration: false}');
    // console.log(util.inspect(metadata, { showHidden: false, colors: true }));
  })
  .catch(function (err) {
    console.error(err.message);
  })
