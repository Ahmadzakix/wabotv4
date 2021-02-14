const fun = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Show Bot Details
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Show Blocked User
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Show All Chat User
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Show Connection Bot Speed
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 FUN 〉*
   ╽
   ┠≽ *${prefix}alay* <text>
   ┃ *Desc* : Changing Words Into Alay
   ┠──────────────╼
   ┠≽ *${prefix}bucin*
   ┃ *Desc* : Send a Random Slave of Love
   ┠──────────────╼
   ┠≽ *${prefix}trust*
   ┃ *Desc* : Send a Random Truth
   ┠──────────────╼
   ┠≽ *${prefix}dare*
   ┃ *Desc* : Send a Random Dare
   ┠──────────────╼
   ┠≽ *${prefix}simi* <text>
   ┃ *Desc* : Talk to Simi
   ┠──────────────╼
   ┠≽ *${prefix}say* <text>
   ┃ *Desc* : Saying:
   ┠──────────────╼
   ┠≽ *${prefix}gantengcek*
   ┃ *Desc* : Random Ganteng %
   ┠──────────────╼
   ┠≽ *${prefix}cantikcek*
   ┃ *Desc* : Random Cantik %
   ┠──────────────╼
   ┠≽ *${prefix}watak* 
   ┃ *Desc* : Send a Random Watak
   ┠──────────────╼
   ┠≽ *${prefix}hobby* 
   ┃ *Desc* : Send a Random Hobby
   ╿ *${ownerName}*,
   ┠──────────────╼
   ┠≽ *${prefix}Persengay
   ┃ *Desc* : Seberapa gay diri lu
   ╰╼≽ *Developer © ${botName}`
}
exports.fun = fun
