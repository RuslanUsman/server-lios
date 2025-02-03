const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Обслуживание статических файлов из папки 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Обслуживание видео файлов из папки 'videos'
app.use('/videos', express.static(path.join(__dirname, 'videos')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
