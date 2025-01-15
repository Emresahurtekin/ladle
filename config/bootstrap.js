const seedContact = require('../scripts/seed-contact');

module.exports = async ({ strapi }) => {
  if (process.env.NODE_ENV === 'development') {
    // Geliştirme ortamında otomatik veri oluştur
    await seedContact.seedContact({ strapi });
  }
};