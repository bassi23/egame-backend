# E-Game Backend

install dependencies:
  $ npm install

run the app:
  $ DEBUG=egame-backend:* npm start

with nodemon:
  $ npm run server

## Database endpoints

GET user's data
  $ http://localhost:3000/user/$USERNAME

Insert and Update
  $ http://localhost:3000/user/levels

Level 1.1
  $ this.$store.dispatch({
  $   type: 'insertAndUpdate',
  $   level: 'level1_1',
  $   data: $DATA_OBJECT,
  $ })

Level 1.2
  $ this.$store.dispatch({
  $   type: 'insertAndUpdate',
  $   level: 'level1_2',
  $   data: $DATA_OBJECT,
  $ })
