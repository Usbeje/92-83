/*!-======[ Preparing Configuration ]======-!*/
await import ("./toolkit/set/string.prototype.js")
await "./toolkit/set/global.js".r()

/*!-======[ Mudules Imports ]======-!*/
const readline = "readline".import()
const fs = "fs".import()
const chalk = "chalk".import()
const TelegramBot = "node-telegram-bot-api".import(); // Mengimpor Telegram Bot
const pino = "pino".import();

/*!-======[ Functions Imports ]======-!*/
Data.helper = (await "./helpers/client.js".r()).default
Data.utils = (await "./helpers/utils.js".r()).default
Data.In = (await "./helpers/interactive.js".r()).default

async function launch() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = (text) => new Promise((resolve) => rl.question(text, resolve));

    // Ganti bagian ini untuk mengonfigurasi Telegram Bot
    const token = '7509744768:AAF9py0gQGdO61IecG_oPPkVtjs0gli8l3I'; // Ganti dengan token bot Telegram Anda
    const bot = new TelegramBot(token, { polling: true }); // Membuat instance bot Telegram

    // Menangani proses dengan Telegram
    console.log(chalk.green('Bot Telegram siap dan menunggu pesan...'));

    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, 'Selamat datang! Kirimkan pesan Anda untuk mulai ngobrol.');
    });

    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        const userInput = msg.text;

        if (userInput && userInput !== '/start') {
            const exs = { cht: msg, Exp: bot, is: {}, store: {} }; // Sesuaikan dengan struktur yang ada
            await Data.utils(exs);
            await Data.helper(exs);
        }
    });
}

launch();
