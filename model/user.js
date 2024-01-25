const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  // _id: ObjectId,
  _id: String,
  // Level 1
  level1_1: Schema.Types.Mixed,
  level1_2: Schema.Types.Mixed,
  level1_3: Schema.Types.Mixed,
  level1_4: Schema.Types.Mixed,
  // Level 2
  level2_1: Schema.Types.Mixed,
  level2_2: Schema.Types.Mixed,
  level2_3: Schema.Types.Mixed,
  level2_4: Schema.Types.Mixed,
  // Level 3
  level3_1: Schema.Types.Mixed,
  level3_2: Schema.Types.Mixed,
  level3_3: Schema.Types.Mixed,
  level3_4: Schema.Types.Mixed,
  // Level 4
  level4_1: Schema.Types.Mixed,
  level4_2: Schema.Types.Mixed,
  level4_3: Schema.Types.Mixed,
  level4_4: Schema.Types.Mixed,
  // Level 5
  level5_1: Schema.Types.Mixed,
  level5_2: Schema.Types.Mixed,
  level5_3: Schema.Types.Mixed,
  level5_4: Schema.Types.Mixed,
  // Level 6
  level6_1: Schema.Types.Mixed,
  level6_2: Schema.Types.Mixed,
  level6_3: Schema.Types.Mixed,
  level6_4: Schema.Types.Mixed,
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;
