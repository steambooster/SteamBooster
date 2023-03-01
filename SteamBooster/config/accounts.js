var configsArray = [];
var config;

// 1. Hesap (İstediğiniz kadar çok hesap yükseltebilirsiniz.)
config = {};
config.username = 'username'; // Hesap kullanıcı adı
config.password = 'password'; // Hesap şifresi
config.sharedSecret = ''; // Paylaşılan sır (yalnızca 2FA), steam guard kodu için boş bırakın.
config.enableStatus = true; // Görünmez kalmak istiyorsanız bunu false olarak ayarlayın.
config.gamesAndStatus = [
	'SteamBooster...', // Özel durumunuz (bir oyun olarak sayılır, özel durumla yalnızca 31 oyunu yükseltebilirsiniz.)
	730,
]; // Oyunların virgülle ayrılmış kimlikleri. Örnek: CSGO = 730
config.replyMessage = ''; // Yanıt mesajı yoksa boş bırakın.
config.receiveMessages = false; // Terminalde aldığınız mesajları loglara kaydetmek istiyor musunuz?
config.saveMessages = false; // Aldığınız mesajları bir dosyaya kaydetmek istiyor musunuz?
configsArray.push(config);

// 2.hesap (birçok hesabı istediğiniz kadar yükseltebilirsiniz.)
config = {};
config.username = 'username'; // Hesap kullanıcı adı
config.password = 'password'; // Hesap şifresi
config.sharedSecret = ''; // Paylaşılan sır (yalnızca 2FA), steam guard kodu için boş bırakın.
config.enableStatus = true; // Görünmez kalmak istiyorsanız bunu false olarak ayarlayın.
config.gamesAndStatus = [730, 570]; // // Oyunların virgülle ayrılmış kimlikleri. Örnek: CSGO = 730
config.replyMessage = ''; // Yanıt mesajı yoksa boş bırakın.
config.receiveMessages = false; // Terminalde aldığınız mesajları loglara kaydetmek istiyor musunuz?
config.saveMessages = false; // Aldığınız mesajları bir dosyaya kaydetmek istiyor musunuz?
configsArray.push(config);

module.exports = configsArray;
