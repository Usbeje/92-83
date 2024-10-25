/*!-======[ Preparing Configuration ]======-!*/
await import("./toolkit/set/string.prototype.js");
await "./toolkit/set/global.js".r();

/*!-======[ Mudules Imports ]======-!*/
const readline = await import("readline");
const fs = await import("fs");
const chalk = await import("chalk");
const TelegramBot = (await import('node-telegram-bot-api')).default; // Menggunakan import untuk modul ESM

/*!-======[ Functions Imports ]======-!*/
Data.helper = (await "./helpers/client.js".r()).default;
Data.utils = (await "./helpers/utils.js".r()).default;

async function launch() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = (text) => new Promise((resolve) => rl.question(text, resolve));

    // Masukkan token bot Telegram Anda di sini
    const token = '7509744768:AAF9py0gQGdO61IecG_oPPkVtjs0gli8l3I';
    const bot = new TelegramBot(token, { polling: true }); // Inisialisasi bot

    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, 'Bot Telegram Anda sudah aktif!');
    });

    // Menangani pesan yang diterima
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        // Lakukan sesuatu dengan pesan di sini
        if (msg.text) {
            bot.sendMessage(chatId, `Anda mengirim: ${msg.text}`);
        }
    });

    // Kode lain yang mungkin Anda miliki
}

launch();
