export default function shuffle(array: Array<any>) {
  // Loop through the array
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap the elements at positions i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}