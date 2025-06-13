export async function getTasks() {
  const res = await fetch('http://localhost:5000/api/tasks');
  return res.json();
}
