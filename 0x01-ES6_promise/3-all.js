import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const prom = Promise.all([uploadPhoto(), createUser()]);
  prom.then((results) => {
    const [photo, user] = results;
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  });
  prom.catch(() => console.log('Signup system offline'));
}
