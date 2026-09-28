const fs = require("fs-extra");
const path = require("path");
const moment = require("moment-timezone");

module.exports.config = {
  name: "admin",
  aliases: ["admininfo", "infoadmin", "owner", "ownerinfo"],
  version: "2.0.0",
  hasPermssion: 0,
  credits: "MOYNUL ISLAM FARABY",
  description: "Show Owner Information",
  commandCategory: "info",
  usages: "admin",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {
  const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");
  const ownerPhoto = path.join(__dirname, "cache", "owner.jpg");

  const body = `
┌───────────────⭓
│ 𝗢𝗪𝗡𝗘𝗥 𝗗𝗘𝗧𝗔𝗜𝗟𝗦
├───────────────
│ 👤 𝐍𝐚𝐦𝐞 : MOYNUL ISLAM FARABY
│ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫 : Male
│ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧 : Single
│ 🎂 𝐀𝐠𝐞 : 18+
│ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧 : Islam
│ 🎓 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : HSC
│ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : Jessore
└───────────────⭓

┌───────────────⭓
│ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
├───────────────
│ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
│ https://www.facebook.com/share/14iQDCKR6pR/
│ 💬 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽:
│ https://wa.me/01757547364
└───────────────⭓

┌───────────────⭓
│ 🕒 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗧𝗶𝗺𝗲
├───────────────
│ ${time}
└───────────────⭓
`;

  if (!fs.existsSync(ownerPhoto)) {
    return api.sendMessage(
      body + "\\n\\n⚠️ Owner photo পাওয়া যায়নি। cache/owner.jpg ফাইলটি রাখো।",
      event.threadID,
      event.messageID
    );
  }

  return api.sendMessage(
    { body, attachment: fs.createReadStream(ownerPhoto) },
    event.threadID,
    event.messageID
  );
};
