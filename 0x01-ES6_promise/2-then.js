export default function handleResponseFromAPI(promise) {
  promise.then(() => ({ status: 200, body: 'success' }));

  promise.catch(() => new Error());

  promise.finally(() => {
    console.log('Got a response from the API');
  });
  return promise;
}
