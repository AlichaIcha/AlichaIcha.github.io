// Objek untuk menyimpan semua pengaturan profil
const profileSettings = {
  favicon: "alicha.jpg", // Path ke favicon
  title: "Fadlan Modders | Profile", // Judul halaman
  metaTitle: "Fadlan || Profile", // Meta title untuk SEO
  metaDescription: "Profile Website Fadlan Modders, Creator and Dev", // Deskripsi meta untuk SEO
  metaKeywords: "Fadlan, Fadlan Modders, profile Alicha, siapa Alicha?", // Keywords meta untuk SEO
  metaRobots: "index, follow", // Pengaturan robot meta untuk SEO
  imageSrc: "alicha.jpg", // Path ke gambar profil
  name: "Fadlan Modders", // Nama profil
  occupation: "Creator & Developer", // Pekerjaan atau jabatan
  links: [
    { title: "GitHub", url: "https://github.com/AlichaIcha", icon: "fa-github" }, // Tautan GitHub
    { title: "Instagram", url: "https://www.instagram.com/fadlangenz", icon: "fa-instagram" }, // Tautan Instagram
    { title: "Telegram", url: "https://t.me/FadlanDev", icon: "fa-telegram" }, // Tautan Telegram
    { title: "Email", url: "mailto:jitex.b123@gmail.com", icon: "fa-envelope" }, // Tautan Email
    { title: "WhatsApp", url: "https://wa.me/6281400346604?text=hai", icon: "fa-whatsapp" }, // Tautan WhatsApp
    { title: "YouTube", url: "https://youtube.com/@bfgsbyfadlangenzsubscribe6157", icon: "fa-youtube" } // Tautan YouTube
  ]
};

// Mengatur favicon
document.getElementById('favicon').href = profileSettings.favicon;

// Mengatur judul halaman
document.getElementById('title').textContent = profileSettings.title;

// Mengatur meta tags
document.getElementById('meta-title').content = profileSettings.metaTitle;
document.getElementById('meta-description').content = profileSettings.metaDescription;
document.getElementById('meta-keywords').content = profileSettings.metaKeywords;
document.getElementById('meta-robots').content = profileSettings.metaRobots;

// Mengatur gambar profil
document.getElementById('profile-image').src = profileSettings.imageSrc;

// Mengatur nama profil
document.getElementById('profile-name').textContent = profileSettings.name;

// Mengatur teks pekerjaan atau jabatan
document.getElementById('occupation-text').textContent = profileSettings.occupation;

// Mengatur tautan-tautan
const linkBoxes = document.getElementById('link-boxes');
profileSettings.links.forEach(link => {
  // Hanya menambahkan tautan yang tidak kosong
  if (link.title && link.url) {
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.innerHTML = `<i class="fa ${link.icon}" aria-hidden="true"></i> ${link.title}`;
    linkBoxes.appendChild(linkElement);
  }
});
 
