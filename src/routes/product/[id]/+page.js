console.log("hello from browser");

export function load({params}) {
  console.log(params.id);
  return { id: params.id }
}