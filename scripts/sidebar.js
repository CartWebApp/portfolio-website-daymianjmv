document.getElementById('openSidebar').addEventListener('click', function () {
    document.getElementById('sidebar').style.width = '20vw'; // Open the sidebar
    document.getElementById('openSidebar').classList.add('hidden'); // Hide the open button
    document.getElementById('body').classList.add('blurred'); // Blur the content
});

document.getElementById('closeSidebar').addEventListener('click', function () {
    document.getElementById('sidebar').style.width = '0'; // Close the sidebar
    document.getElementById('openSidebar').classList.remove('hidden'); // Show the open button
    document.getElementById('body').classList.remove('blurred'); // Remove blur from the content
});