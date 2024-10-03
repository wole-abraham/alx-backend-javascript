export default function guardall(mathFunction) {
  const queue = [];
  try {
    mathFunction();
    queue.push(mathFunction());
  } catch ({ name, message }) {
    queue.push(`${name}: ${message}`);
  }
  queue.push('Guardrail was processed');

  return queue;
}
