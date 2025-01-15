module.exports = {
  async seedContact({ strapi }) {
    try {
      // Önce mevcut contact verilerini kontrol et
      const existingContact = await strapi.entityService.findMany("api::contact.contact");

      // Eğer veri yoksa yeni oluştur
      if (!existingContact || existingContact.length === 0) {
        await strapi.entityService.create("api::contact.contact", {
          data: {
            title: "İletişim",
            description: "İstanbul'un her bölgesinde profesyonel kepçe ve hafriyat hizmetleri için bize ulaşın.",
            address: "Firuzköy Mahallesi, Avcılar / İstanbul",
            phone: "0530 080 99 12",
            email: "info@erkanhafriyat.com",
            workingHours: "7/24 Hizmet",
            mapLocation: {
              lat: 40.993767,
              lng: 28.678901
            },
            publishedAt: new Date()
          }
        });

        console.log('Contact verisi başarıyla oluşturuldu');
      } else {
        console.log('Contact verisi zaten mevcut');
      }
    } catch (error) {
      console.error('Hata:', error);
    }
  }
}; 