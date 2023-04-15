const users = [
  {
    id: 1,
    name: 'Jane Doe',
    email: 'jane@lorem.com',
    phone: '+90 555 678 12 23',
    avatar: '/src/assets/images/pretty.png',
    location: 'Çamlıca, Timko Sk No:20, 06200 Yenimahalle/Ankara',
    company: 'N2Mobil',
    website: 'www.janedoe.com',

    albums: [
      {
        id: 1,
        photos: [
          {
            id: 1,
            url: 'https://randomwordgenerator.com/img/picture-generator/53e3d44a4e5baa14f1dc8460962e33791c3ad6e04e507440762e7ad3964acc_640.jpg'
          },
          {
            id: 2,
            url: 'https://randomwordgenerator.com/img/picture-generator/53e1d7464a50ad14f1dc8460962e33791c3ad6e04e507749742c78d6904bc0_640.jpg'
          },
          {
            id: 3,
            url: 'https://randomwordgenerator.com/img/picture-generator/hammock-2036336_640.jpg'
          },
          {
            id: 4,
            url: 'https://randomwordgenerator.com/img/picture-generator/g299ae5d83ec4efdbdca98a4bda15e28e07c155a83d6af94769e03fa43341d10f028a1db9aaf9e1347089ab9b2e3e4423_640.jpg'
          }
        ]
      },
      {
        id: 2,
        photos: [
          {
            id: 1,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e7d54b4a5ba814f1dc8460962e33791c3ad6e04e5074417c2e7dd3974ec4_640.jpg'
          },
          {
            id: 2,
            url: 'https://randomwordgenerator.com/img/picture-generator/5fe6d34a4f5bb10ff3d8992cc12c30771037dbf852547940772c7cdd9f44_640.jpg'
          },
          {
            id: 3,
            url: 'https://randomwordgenerator.com/img/picture-generator/55e3d3414855a514f1dc8460962e33791c3ad6e04e5074417c2f7dd6974dc7_640.jpg'
          },
          {
            id: 4,
            url: 'https://randomwordgenerator.com/img/picture-generator/wal-2722172_640.jpg'
          }
        ]
      },
      {
        id: 3,
        photos: [
          {
            id: 1,
            url: 'https://randomwordgenerator.com/img/picture-generator/gcfdc95dc0e5282b10447ab08260f3dad2caea579d077f7fe4241f1d8121fe5f030f8e34291d4a10ce42721bd2885d7b6_640.jpg'
          },
          {
            id: 2,
            url: 'https://randomwordgenerator.com/img/picture-generator/gae45c3737ca3f55f20e1eec2d3d58f1d5bb6a5544872670f170a02bce2ce5c5ae57adad2511fedb76f3fef7733421f1e_640.jpg'
          },
          {
            id: 3,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e4d0404d5baf14f1dc8460962e33791c3ad6e04e5074417d2e72d3964ec7_640.jpg'
          },
          {
            id: 4,
            url: 'https://randomwordgenerator.com/img/picture-generator/50e7dc4a4855b10ff3d8992cc12c30771037dbf85254784a70287fd09e44_640.jpg'
          }
        ]
      }
    ],
    posts: [
      {
        id: 1,
        title: 'Araç Takip Sistemleri: Nedir ve Ne İşe Yararlar?',
        body: 'Araç takip sistemleri, araçların konumunu ve hareketlerini izleyen, bu bilgiyi merkezi bir veritabanında depolayan ve raporlayan teknolojik sistemlerdir. Bu sistemler, işletmelerin sahip oldukları araçları izleyerek operasyonel verimliliği arttırmalarına yardımcı olur. Araç takip sistemleri aynı zamanda, araçların güvenliğini sağlamak, yakıt tüketimini azaltmak ve araçların bakımını planlamak için de kullanılır.'
      },
      {
        id: 2,
        title: 'Araç Takip Sistemleri: İşletmeler için Avantajları Nelerdir?',
        body: 'Araç takip sistemleri, işletmelerin araçlarını daha verimli bir şekilde kullanmalarına yardımcı olur.'
      },
      {
        id: 3,
        title: 'Araç Takip Sistemleri: GPS Tabanlı Araç Takip Sistemleri',
        body: 'GPS tabanlı araç takip sistemleri, araçların konumunu GPS teknolojisi kullanarak izler ve bu bilgiyi merkezi bir veritabanında depolar.'
      }
    ]
  },
  {
    id: 2,
    name: 'Jhon Doe',
    email: 'jhon@lorem.com',
    phone: '+90 532 469 32 78',
    avatar: '/src/assets/images/man.png',
    location: 'Çamlıca, Timko Sk No:20, 06200 Yenimahalle/Ankara',
    company: 'N2Mobil',
    website: 'jhondoe.com',
    albums: [
      {
        id: 1,
        photos: [
          {
            id: 1,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e5d0424d54a814f1dc8460962e33791c3ad6e04e507440752972d29e4ec4_640.jpg'
          },
          {
            id: 2,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e1d5434953aa14f1dc8460962e33791c3ad6e04e5074417d2c7ed1954dc2_640.jpg'
          },
          {
            id: 3,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e9d3414e54b10ff3d8992cc12c30771037dbf85254784a70287bd39144_640.jpg'
          },
          {
            id: 4,
            url: 'https://randomwordgenerator.com/img/picture-generator/54e3dd434a52a514f1dc8460962e33791c3ad6e04e50744172287ed29049cd_640.jpg'
          }
        ]
      },
      {
        id: 2,
        photos: [
          {
            id: 1,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e1d14a4b52ac14f1dc8460962e33791c3ad6e04e50744074267bd6944bcc_640.jpg'
          },
          {
            id: 2,
            url: 'https://randomwordgenerator.com/img/picture-generator/53e0d0434e57a914f1dc8460962e33791c3ad6e04e5074417d2e7ed6964dc2_640.jpg'
          },
          {
            id: 3,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e4d6434a53ae14f1dc8460962e33791c3ad6e04e50744075287bd49449c6_640.jpg'
          },
          {
            id: 4,
            url: 'https://randomwordgenerator.com/img/picture-generator/55e4d6404354a814f1dc8460962e33791c3ad6e04e507440762a7cd1934cc4_640.jpg'
          }
        ]
      },
      {
        id: 3,
        photos: [
          {
            id: 1,
            url: 'https://randomwordgenerator.com/img/picture-generator/54e5d4444c57af14f1dc8460962e33791c3ad6e04e507441722a72dc924ac5_640.jpg'
          },
          {
            id: 2,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e6dd464d50a414f1dc8460962e33791c3ad6e04e507749712a72dd9545c1_640.jpg'
          },
          {
            id: 3,
            url: 'https://randomwordgenerator.com/img/picture-generator/dan-meyers-XzFOfXOMq-4-unsplash.jpg'
          },
          {
            id: 4,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e7dd474c50ad14f1dc8460962e33791c3ad6e04e5074417c2d78d1954cc7_640.jpg'
          }
        ]
      }
    ],
    posts: [
      {
        id: 1,
        title: 'Araç Takip Sistemleri: Akıllı Araç Takip Sistemleri',
        body: 'Akıllı araç takip sistemleri, araçların yanı sıra sürücü davranışlarını, yakıt tüketimini ve diğer önemli verileri izleyerek daha detaylı bir analiz sağlar.'
      },
      {
        id: 2,
        title: 'Araç Takip Sistemleri: Araç Takip Sistemleri Nasıl Çalışır?',
        body: 'Araç takip sistemleri, araçlara yüklenen GPS cihazları aracılığıyla araçların konumunu ve hareketlerini izler ve bu bilgiyi merkezi bir veritabanına kaydeder.'
      },
      {
        id: 3,
        title: 'Araç Takip Sistemleri: Araç Takip Sistemleriyle Yakıt Tasarrufu Nasıl Yapılır?',
        body: 'Araç takip sistemleri, araçların yakıt tüketimini izleyerek gereksiz yakıt harcamalarını önlemeye yardımcı olur.'
      },
      {
        id: 4,
        title: 'Araç Takip Sistemleri: Araç Takip Sistemleriyle Bakım Planlaması Nasıl Yapılır?',
        body: 'Araç takip sistemleri, araçların bakım zamanlamasını izleyerek daha düzenli bir bakım planlaması yapılmasına yardımcı olur.'
      }
    ]
  },
  {
    id: 3,
    name: 'Nazlı UYSAL',
    email: 'nazli.uysal@lorem.com',
    phone: '+90 543 269 14 73',
    avatar: '/src/assets/images/woman.png',
    location: 'Çamlıca, Timko Sk No:20, 06200 Yenimahalle/Ankara',
    company: 'N2Mobil',
    website: 'nazliuysal.com',
    albums: [
      {
        id: 1,
        photos: [
          {
            id: 1,
            url: 'https://randomwordgenerator.com/img/picture-generator/52e3d54a4855ae14f1dc8460962e33791c3ad6e04e507749742c78d6944cc3_640.jpg'
          },
          {
            id: 2,
            url: 'https://randomwordgenerator.com/img/picture-generator/55e2d0424a52ac14f1dc8460962e33791c3ad6e04e507440752972d3924bc6_640.jpg'
          },
          {
            id: 3,
            url: 'https://randomwordgenerator.com/img/picture-generator/free-to-use-sounds-GKny6GKQ_QM-unsplash.jpg'
          },
          {
            id: 4,
            url: 'https://randomwordgenerator.com/img/picture-generator/53e8d2434f5bb10ff3d8992cc12c30771037dbf85254784c772d7ddc9e44_640.jpg'
          }
        ]
      },
      {
        id: 2,
        photos: [
          {
            id: 1,
            url: 'https://randomwordgenerator.com/img/picture-generator/55e5d3454954ac14f1dc8460962e33791c3ad6e04e5074417d2e72d6904bc4_640.jpg'
          },
          {
            id: 2,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e2dd4b4256aa14f1dc8460962e33791c3ad6e04e50744172297bd49649c5_640.jpg'
          },
          {
            id: 3,
            url: 'https://randomwordgenerator.com/img/picture-generator/55e6d1464955a514f1dc8460962e33791c3ad6e04e507440702d79d39e49c6_640.jpg'
          },
          {
            id: 4,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e2d54a4d55a814f1dc8460962e33791c3ad6e04e507440762e7adc974ec2_640.jpg'
          }
        ]
      },
      {
        id: 3,
        photos: [
          {
            id: 1,
            url: 'https://randomwordgenerator.com/img/picture-generator/53e0d7464e50ac14f1dc8460962e33791c3ad6e04e50744172277ed7924ac6_640.jpg'
          },
          {
            id: 2,
            url: 'https://randomwordgenerator.com/img/picture-generator/frog-540812_640.jpg'
          },
          {
            id: 3,
            url: 'https://randomwordgenerator.com/img/picture-generator/52e2d444495bab14f1dc8460962e33791c3ad6e04e507440742e7dd5974cc7_640.jpg'
          },
          {
            id: 4,
            url: 'https://randomwordgenerator.com/img/picture-generator/52e3d541435ba814f1dc8460962e33791c3ad6e04e5074417c2e7dd29045c2_640.jpg'
          }
        ]
      }
    ],
    posts: [
      {
        id: 1,
        title: 'Araç Takip Sistemleri: Araç Takip Sistemleriyle Güvenli Sürüş Nasıl Sağlanır?',
        body: 'Araç takip sistemleri, sürücülerin hız limitlerine uymalarını, trafik kurallarına uymalarını ve daha güvenli sürüş yapmalarını sağlayarak kazaların önlenmesine yardımcı olur.'
      },
      {
        id: 2,
        title: 'Araç Takip Sistemleri: Araç Takip Sistemlerinde Kullanılan Teknolojiler',
        body: 'Araç takip sistemleri, GPS, GSM, GPRS, Wi-Fi gibi teknolojileri kullanarak araçların konumunu ve hareketlerini izler ve bu bilgiyi merkezi bir veritabanında depolar.'
      },
      {
        id: 3,
        title: 'Araç Takip Sistemleri: Araç Takip Sistemleriyle Yolculuk Planlaması Nasıl Yapılır?',
        body: 'Araç takip sistemleri, araçların seyahat rotalarını ve tahmini varış sürelerini izleyerek daha etkili bir yolculuk planlaması yapılmasına yardımcı olur.'
      },
      {
        id: 4,
        title:
          'Araç Takip Sistemleri: Araç Takip Sistemleriyle Müşteri Memnuniyeti Nasıl Arttırılır?',
        body: 'Araç takip sistemleri, müşterilere daha hızlı ve doğru teslimatlar yapılmasına yardımcı olur, böylece müşteri memnuniyeti artar.'
      },
      {
        id: 5,
        title: 'Araç Takip Sistemleri: Araç Takip Sistemleriyle Personel Takibi Nasıl Yapılır?',
        body: 'Araç takip sistemleri, işletmelerin sahada çalışan personelinin konumunu ve hareketlerini izleyerek personel takibini kolaylaştırır.'
      }
    ]
  }
]

export default users
