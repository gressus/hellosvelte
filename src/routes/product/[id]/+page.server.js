console.log('hello from server')

export function load({ params }) {
  console.log(params.id);
  // return { id_from_server: params.id };
}