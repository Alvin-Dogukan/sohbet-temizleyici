//Komutlar Dosyası
const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(` ${client.emoji.siren} Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`)
  if (!args[0]) return  message.channel.sendEmbed(new Discord.RichEmbed().setDescription(` ${client.emoji.siren} Aç ya da kapat yaz. \`${prefix}us <aç/kapat>\``).setColor("BLACK"));
 
  if (args[0] == 'aç') {
     if (db.fetch(`us_${message.channel.id}`,'aktif')) return message.channel.send(' | Bu kanalda Bu komut zaten açık durumda.')
db.set(`us_${message.channel.id}`,'aktif')
  message.channel.send('| Ultra sohbet temizle sistemi açıldı. ')
     
    }
  if (args[0] == 'kapat') {
db.delete(`us_${message.channel.id}`)
   message.channel.send(' | Ultra sohbet temizle sistemi kapatıldı. ')
    
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
    kategori:'modersayon'
};

exports.help = {
  name: 'ultrasohbet',
  description: 'Ultra Sohbet Temizleyi Açıp Kapatır',
  usage: '!us aç kapat'
};
