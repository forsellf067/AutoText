index.js
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;

const sentences = [
  'مرحبا! كيف حالك؟',
  'اليوم جميل جدًا.',
  'تعلم البرمجة ممتع.',
  'هل تحب القهوة؟',
  'أنا بوت ديسكورد!',
  'كل 15 ثانية أرسل رسالة.',
  'اللغة العربية رائعة.',
  'هل جربت بايثون؟',
  'الذكاء الاصطناعي مذهل.',
  'ابقَ إيجابيًا!'
];

client.once('ready', () => {
  console.log(`✅ تم تسجيل الدخول كبوت: ${client.user.tag}`);

  const channel = client.channels.cache.get(CHANNEL_ID);
  if (!channel) {
    console.log('❌ لم يتم العثور على القناة. تأكد من رقم ID');
    return;
  }

  setInterval(() => {
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    channel.send(randomSentence).catch(console.error);
  }, 15000);
});

client.login(TOKEN);
