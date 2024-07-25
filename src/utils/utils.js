// utils.js
export const toggleBackgroundColor = (isDarkMode, setIsDarkMode) => {
  
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  // Toggle the isDarkMode state
  setIsDarkMode(!isDarkMode);
  // Change body background color according to current isDarkMode state
  document.body.style.backgroundColor = isDarkMode ? '#f4f4f4' : 'black';
  header.style.backgroundColor = isDarkMode ? '#3498db' : '#0a3d62';
  // Change header background color according to current isDarkMode state
  footer.style.backgroundColor = isDarkMode ? '#3498db' : '#0a3d62'; // Change to a darker shade of blue
};
