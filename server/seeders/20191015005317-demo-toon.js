"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "toons",
      [
        {
          title: "The World Of Memory",
          genre: 3,
          image:
            "https://prodimage.images-bn.com/pimages/9781421571201_p0_v1_s600x595.jpg",
          created_by: 1,
          description:
            'The final Yu-Gi-Oh! story! After hundreds of battles, Yugi has finally gathered all the Egyptian God Cards... the key to unlocking his memories of his past life as an Egyptian pharaoh. When Ryo Bakura gives him the Millennium Eye, Yugi opens the door to the "world of memory", and his mind travels back in time to ancient Egypt, when the magic and monsters were real! Now Yugi and his friends must explore the world of Yugi\'s forgotten past...and fight an enemy who has been waiting for them for 3,000 years!',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Magician's Genesis",
          genre: 3,
          image:
            "https://prodimage.images-bn.com/pimages/9781421571218_p0_v1_s550x406.jpg",
          created_by: 1,
          description:
            "Yu-Gi-Oh's mind has traveled 3,000 years back in time, to relive his life as a pharaoh in ancient Egypt! But his life may not last long, because the mad tomb-robber Bakura--vessel of the monstrous spirit Diabound--has invaded the palace to slaughter the pharaoh and his priests! Can the Gods of Egypt stop Bakura's vengeance? Can Yugi and his friends find a way to join Yu-Gi-Oh in the \"world of memory\"? To protect the kingdom, high priest Seto comes up with a ruthless plan. But will his draconian measures stop evildoers like Bakura...or only create more of them?",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "The Return Bakura",
          genre: 3,
          image:
            "https://prodimage.images-bn.com/pimages/9781421571973_p0_v1_s550x406.jpg",
          created_by: 1,
          description:
            "The spirits of Yugi and his friends have traveled to ancient Egypt, when the monsters were real and Yugi's alter ego was king! But the mad tomb-robber Bakura has sworn to destroy the kingdom and take the Millennium Items...from the pharaoh's dead body! As Bakura's monstrous spirit Diabound rains death upon the city, Yu-Gi-Oh must resort to his trump cards: the Three Egyptian Gods. But is there actually more than one Bakura? And if the heroes have really traveled to the past, can they change the course of history...or are they caught in the hands of time?",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("toons", null, {});
  }
};
