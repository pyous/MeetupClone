import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  var uri ='mongodb://localhost/meetupME';
  mongoose.connect(uri,{ useMongoClient: true});
  mongoose.connection
    .once('open', () => console.log('Mongodb running'))
    .on('error', err => console.error(err))
};