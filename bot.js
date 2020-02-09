client.on("message", async msg => {
  let prefixler = ["!", "*","/", ";", ":", "#", "?", "&", "+", "-", "$", "%", ">", "<", "~",] //prefixleri tanımladık.
  let alfabe = ['a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', 'ğ', 'h', 'ı', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'ö', 'p', 'r', 's', 'ş', 't', 'u', 'ü', 'v', 'y', 'z', 'q', 'w', 'x']; // alfabeyi tanımladık

  //alfabe tanımlama sebebimiz **a!** gibi prefixlerin kullanılması
  let alvin = db.fetch(`us_${msg.channel.id}`)  //veriyi çektik
  if(alvin) {  //veri varsa işlem başlasın 
  if(prefixler.some(prefix => alfabe.some(harf => msg.content.startsWith(harf+prefix) || msg.content.startsWith(prefix)))){
    msg.delete(7000)  //mesaj prefix ile başlıyorsa mesajı silsin 
  }
    if(msg.author.bot === true){
      msg.delete(7000) // mesaj sahibi botsa mesaj silsin dedik.
    }
  }
});
