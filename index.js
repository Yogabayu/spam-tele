import axios from "axios";

async function autoSpam() {
  try {
    let counter = 0;

    const spamInterval = setInterval( async () => {
      await axios
        .get(
          "https://api.telegram.org/bot[botId]/sendMessage?parse_mode=markdown&chat_id=[chatID]&text=Berhasil Kirim SMS dari Jauh  %0AKepada  : _Saya Sendiri_,%0A𝐦𝐞𝐬𝐬𝐚𝐠𝐞 : _dari sini_"
        )
        .then(() => {
          counter++;
          if (counter === 10) {
            clearInterval(spamInterval); // Menghentikan interval setelah 10 kali
          }
        })
        .catch(error => {
          console.error("Error:", error);
          clearInterval(spamInterval); // Menghentikan interval jika terjadi kesalahan
        });
    }, 100);
  } catch (error) {
    console.error("Error:", error);
  }
}

autoSpam();
