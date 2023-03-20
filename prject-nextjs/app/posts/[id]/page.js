export default function Post({ params }) {
  const { id } = params;
  return <h1>this is post id: {id}</h1>;
}
