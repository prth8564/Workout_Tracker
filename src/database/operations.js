const { client } = require("./DBclient.js");

async function getUsers(email) {
  const res = await client.query(
    `Select u.email,u.password_hash,u.user_id from users u where u.email = '${email}'`
  );
  return res.rows[0];
}
async function getWorkouts(email) {
  const res = await client.query(
    `Select w. from users u JOIN workouts w ON u.user_id = w.user_id Where u.email =${email} ORDER BY w.date ASC`
  );
  for (let dbItem of res.rows) {
    console.log(dbItem);
  }
}
async function insertWorkout(user_id, duration, description) {
  const res =
    await client.query(`INSERT INTO workouts (user_id, duration, notes)
    VALUES 
    (${user_id}, ${duration}, ${description})
`);
}

async function insertWorkoutExercises(
  workout_id,
  exercise_id,
  sets,
  reps,
  weight
) {
  const res =
    await client.query(`INSERT INTO workout_exercises (workout_id, exercise_id, sets, reps, weight)
    VALUES 
    (${workout_id}, ${exercise_id}, ${sets}, ${reps}, ${weight})
`);
}

async function insertUsers(name, email, password) {
  const res = await client.query(`INSERT INTO users(name,email,password_hash)
VALUES('${name}','${email}','${password}')`);
  return;
}

module.exports = {
  insertUsers,
  insertWorkoutExercises,
  insertWorkout,
  getUsers,
  getWorkouts,
};
