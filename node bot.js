const mineflayer = require('mineflayer');

// Membuat bot tanpa autentikasi Mojang
const bot = mineflayer.createBot({
  host: process.env.SERVER_HOST || 'localhost', // Ambil dari env atau default 'localhost'
  port: parseInt(process.env.SERVER_PORT) || 25565, // Ambil dari env atau default 25565
  username: 'OfflineBot' // Username bot untuk offline mode
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  bot.chat(`Hi ${username}, you said: ${message}`);
});

bot.on('spawn', () => {
  console.log('Bot has spawned!');
});
