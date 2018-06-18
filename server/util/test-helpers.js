import mongoose from 'mongoose';
import mockgoose from 'mockgoose';

export function connectDB(t, done) {
  mockgoose(mongoose).then(() => {
    mongoose.createConnectiimport mongoose from 'mongoose';
const Schema = mongoose.Schema;
mongoose.plugin(schema=>{schema.options.usePushEach=true});
const laneSchema = new Schema({
	name: { type: 'String', required: true},
	notes: [{ type: Schema.ObjectId, ref: 'Note', required: true}],
	id: {type: 'String', required: true, unique: true}
});

laneSchema.pre('find', function(next) {
	this.populate('notes');
	next();
});

function populateNotes(next) {
	this.populate('notes');
	next();
}

laneSchema.pre('find', populateNotes);
laneSchema.pre('findOne', populateNotes);
laneSchema.pre('findOneAndUpdate', populateNotes);

export default mongoose.model('Lane', laneSchema);
on('mongodb://localhost:27017/mern-test', err => {
      if (err) t.fail('Unable to connect to test database');
      done();
    });
  });
}

export function dropDB(t) {
  mockgoose.reset(err => {
    if (err) t.fail('Unable to reset test database');
  });
}
