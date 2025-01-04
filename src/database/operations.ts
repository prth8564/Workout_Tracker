import  client  from "./DBclient.js";

export async function getUsers(email:string){
  const res = await client.query(`Select u.email,u.password_hash,u.user_id from users u where u.email = '${email}'`);
  return res.rows[0];
}
async function getWorkouts(email: string) {
  const res = await client.query(
    `Select w. from users u JOIN workouts w ON u.user_id = w.user_id Where u.email =${email} ORDER BY w.date ASC`
  );
  for (let dbItem of res.rows) {
    console.log(dbItem);
  }
}
export async function insertWorkout(
  user_id: string,
  duration: number,
  description: string
) {
  const res =
    await client.query(`INSERT INTO workouts (user_id, duration, notes)
    VALUES 
    (${user_id}, ${duration}, ${description})
`);
}

async function insertWorkoutExercises(
  workout_id: string,
  exercise_id: string,
  sets: number,
  reps: number,
  weight: number
) {

  const res =
    await client.query(`INSERT INTO workout_exercises (workout_id, exercise_id, sets, reps, weight)
    VALUES 
    (${workout_id}, ${exercise_id}, ${sets}, ${reps}, ${weight})
`);

}

export async function insertUsers(name:string, email:string, password:string) {
  const res = await client.query(`INSERT INTO users(name,email,password_hash)
VALUES('${name}','${email}','${password}')`);
  return;

}
