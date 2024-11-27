// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Listen for user input from stdin
process.stdin.on('data', (data) => {
  // Convert input to string and remove trailing newline/whitespace
  const name = data.toString().trim();

  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Exit the program
  process.exit();
});

// Listen for the 'exit' event to display the closing message
process.on('exit', () => {
  console.log('This important software is now closing');
});
