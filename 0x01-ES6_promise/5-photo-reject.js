export default function uploadPhoto(photo) {
  return Promise.reject(new Error(`${photo} cannot be processed`));
}
