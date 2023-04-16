const users = [
  {
    id: 1,
    name: 'Jane Doe',
    email: 'jane@lorem.com',
    phone: '+90 555 678 12 23',
    avatar: '/src/assets/images/female.png',
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
    ],
    todos: [
      {
        id: 1,
        checked: false
      },
      {
        id: 2,
        checked: true
      },
      {
        id: 3,
        checked: false
      },
      {
        id: 4,
        checked: true
      },
      {
        id: 5,
        checked: false
      },
      {
        id: 6,
        checked: true
      },
      {
        id: 7,
        checked: false
      },
      {
        id: 8,
        checked: true
      },
      {
        id: 9,
        checked: false
      },
      {
        id: 10,
        checked: true
      },
      {
        id: 11,
        checked: false
      },
      {
        id: 12,
        checked: true
      },
      {
        id: 13,
        checked: false
      },
      {
        id: 14,
        checked: true
      },
      {
        id: 15,
        checked: false
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
    ],
    todos: [
      {
        id: 1,
        checked: true
      },
      {
        id: 2,
        checked: true
      },
      {
        id: 3,
        checked: false
      },
      {
        id: 4,
        checked: false
      },
      {
        id: 5,
        checked: false
      },
      {
        id: 6,
        checked: true
      },
      {
        id: 7,
        checked: true
      },
      {
        id: 8,
        checked: false
      },
      {
        id: 9,
        checked: false
      },
      {
        id: 10,
        checked: true
      },
      {
        id: 11,
        checked: false
      },
      {
        id: 12,
        checked: false
      },
      {
        id: 13,
        checked: true
      },
      {
        id: 14,
        checked: true
      },
      {
        id: 15,
        checked: false
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
    ],
    todos: [
      {
        id: 1,
        checked: true
      },
      {
        id: 2,
        checked: false
      },
      {
        id: 3,
        checked: true
      },
      {
        id: 4,
        checked: false
      },
      {
        id: 5,
        checked: false
      },
      {
        id: 6,
        checked: false
      },
      {
        id: 7,
        checked: false
      },
      {
        id: 8,
        checked: true
      },
      {
        id: 9,
        checked: true
      },
      {
        id: 10,
        checked: true
      },
      {
        id: 11,
        checked: false
      },
      {
        id: 12,
        checked: true
      },
      {
        id: 13,
        checked: false
      },
      {
        id: 14,
        checked: true
      },
      {
        id: 15,
        checked: true
      }
    ]
  },
  {
    id: 4,
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 555 123 4567',
    avatar: '/src/assets/images/john.jpeg',
    location: 'New York, USA',
    company: 'XYZ Corporation',
    website: 'johnsmith.com',
    albums: [
      {
        id: 1,
        photos: [
          {
            id: 1,
            url: 'https://randomwordgenerator.com/img/picture-generator/55e7dc444c56aa14f1dc8460962e33791c3ad6e04e507441722872d6914bcd_640.jpg'
          },
          {
            id: 2,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e1d0434a56af14f1dc8460962e33791c3ad6e04e50744172277ed79e45c5_640.jpg'
          },
          {
            id: 3,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e8d34b4a57ad14f1dc8460962e33791c3ad6e04e50744172297cdd9349cc_640.jpg'
          },
          {
            id: 4,
            url: 'https://randomwordgenerator.com/img/picture-generator/53e1d24b4a5ba914f1dc8460962e33791c3ad6e04e507440772f7cd79f4dc3_640.jpg'
          }
        ]
      },
      {
        id: 2,
        photos: [
          {
            id: 1,
            url: 'https://randomwordgenerator.com/img/picture-generator/55e8d5424f51ab14f1dc8460962e33791c3ad6e04e507440742e7dd59f4dc3_640.jpg'
          },
          {
            id: 2,
            url: 'https://randomwordgenerator.com/img/picture-generator/55e4d4414856ae14f1dc8460962e33791c3ad6e04e50744172287ed39645c3_640.jpg'
          },
          {
            id: 3,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e1d14a4a52a414f1dc8460962e33791c3ad6e04e5074417d2e72dd934ac7_640.jpg'
          },
          {
            id: 4,
            url: 'https://randomwordgenerator.com/img/picture-generator/52e0d7414a5aad14f1dc8460962e33791c3ad6e04e507440712f7bd6954bc5_640.jpg'
          }
        ]
      },
      {
        id: 3,
        photos: [
          {
            id: 1,
            url: 'https://randomwordgenerator.com/img/picture-generator/5fe1dd4b425bb10ff3d8992cc12c30771037dbf85254794e722679dc914e_640.jpg'
          },
          {
            id: 2,
            url: 'https://randomwordgenerator.com/img/picture-generator/crazy-horse-memorial-4577682_640.jpg'
          },
          {
            id: 3,
            url: 'https://randomwordgenerator.com/img/picture-generator/5fe3d7444d52b10ff3d8992cc12c30771037dbf85257714b752d72dd964f_640.jpg'
          },
          {
            id: 4,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e2d54a4253aa14f1dc8460962e33791c3ad6e04e50744172297bd59749c5_640.jpg'
          }
        ]
      }
    ],
    posts: [
      {
        id: 1,
        title: 'Yoganın Faydaları: Yoganın Zihin ve Vücut Sağlığına Etkileri',
        body: 'Yoga, stresi azaltmaya, vücut esnekliğini artırmaya ve zihin sağlığını iyileştirmeye yardımcı olan faydalı bir egzersiz yöntemidir.'
      },
      {
        id: 2,
        title: 'Sürdürülebilirlik: Sürdürülebilir Yaşam Tarzı Nasıl Oluşturulur?',
        body: 'Sürdürülebilir bir yaşam tarzı benimsemek için geri dönüşüm yapmak, enerji tasarrufu sağlamak, organik gıdalar tüketmek ve çevre dostu ürünleri kullanmak gibi çeşitli adımlar atılabilir.'
      },
      {
        id: 3,
        title: 'Kariyer Planlama: Kariyer Hedefleri Belirleme ve Başarılı Olma Yolları',
        body: 'Kariyer planlama, hedeflerin belirlenmesi, iş deneyimlerinin kazanılması, kendini geliştirme ve networking yapma gibi adımlarla başarılı bir şekilde gerçekleştirilebilir.'
      },
      {
        id: 4,
        title: 'Dijital Pazarlama: Dijital Pazarlama Yöntemleri Nelerdir?',
        body: 'Dijital pazarlama, sosyal medya pazarlaması, e-posta pazarlaması, arama motoru optimizasyonu ve içerik pazarlaması gibi çeşitli yöntemler kullanılarak, ürün ve hizmetlerin internet üzerinden pazarlanmasına olanak tanır.'
      }
    ],
    todos: [
      {
        id: 1,
        checked: false
      },
      {
        id: 2,
        checked: false
      },
      {
        id: 3,
        checked: false
      },
      {
        id: 4,
        checked: true
      },
      {
        id: 5,
        checked: true
      },
      {
        id: 6,
        checked: false
      },
      {
        id: 7,
        checked: true
      },
      {
        id: 8,
        checked: true
      },
      {
        id: 9,
        checked: true
      },
      {
        id: 10,
        checked: false
      },
      {
        id: 11,
        checked: true
      },
      {
        id: 12,
        checked: true
      },
      {
        id: 13,
        checked: false
      },
      {
        id: 14,
        checked: false
      },
      {
        id: 15,
        checked: true
      }
    ]
  },
  {
    id: 5,
    name: 'Maria Rodriguez',
    email: 'm.rodriguez@example.com',
    phone: '+34 91 234 5678',
    avatar: '/src/assets/images/maria.jpeg',
    location: 'Madrid, Spain',
    company: 'ABC Company',
    website: 'mariarodriguez.com',
    albums: [
      {
        id: 1,
        photos: [
          {
            id: 1,
            url: 'https://randomwordgenerator.com/img/picture-generator/53e0d74b4250ad14f1dc8460962e33791c3ad6e04e50744172277fd09549cd_640.jpg'
          },
          {
            id: 2,
            url: 'https://randomwordgenerator.com/img/picture-generator/52e4d7414c55ab14f1dc8460962e33791c3ad6e04e50744075277cdc954ec1_640.jpg'
          },
          {
            id: 3,
            url: 'https://randomwordgenerator.com/img/picture-generator/54e7dd454d5aa514f1dc8460962e33791c3ad6e04e507440742e7dd59f4dc3_640.jpg'
          },
          {
            id: 4,
            url: 'https://randomwordgenerator.com/img/picture-generator/54e8d74b4b56aa14f1dc8460962e33791c3ad6e04e507440752f72d69e4ec0_640.jpg'
          }
        ]
      },
      {
        id: 2,
        photos: [
          {
            id: 1,
            url: 'https://randomwordgenerator.com/img/picture-generator/55e0d1464d52aa14f1dc8460962e33791c3ad6e04e507441722a72dc9244c4_640.jpg'
          },
          {
            id: 2,
            url: 'https://randomwordgenerator.com/img/picture-generator/53e0d04b4d5ab10ff3d8992cc12c30771037dbf85254784a722e7cd09645_640.jpg'
          },
          {
            id: 3,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e2d64a4d50a814f1dc8460962e33791c3ad6e04e507441722a72dd9f4dc1_640.jpg'
          },
          {
            id: 4,
            url: 'https://randomwordgenerator.com/img/picture-generator/52e0d5434354a414f1dc8460962e33791c3ad6e04e5074417d2d73d29e44c4_640.jpg'
          }
        ]
      },
      {
        id: 3,
        photos: [
          {
            id: 1,
            url: 'https://randomwordgenerator.com/img/picture-generator/5fe5d5434f4faa0df7c5d57bc32f3e7b1d3ac3e455517349772672d595_640.jpg'
          },
          {
            id: 2,
            url: 'https://randomwordgenerator.com/img/picture-generator/5ee8d2414d50b10ff3d8992cc12c30771037dbf85254794e73287ad49048_640.jpg'
          },
          {
            id: 3,
            url: 'https://randomwordgenerator.com/img/picture-generator/57e6d6424a55a514f1dc8460962e33791c3ad6e04e507440762879dc9e49c1_640.jpg'
          },
          {
            id: 4,
            url: 'https://randomwordgenerator.com/img/picture-generator/52e2dd464e5bb10ff3d8992cc12c30771037dbf85254784973267cd79e49_640.jpg'
          }
        ]
      }
    ],
    posts: [
      {
        id: 1,
        title: 'Kripto Paralar: Kripto Paraların Geleceği Hakkında Neler Bilinmeli?',
        body: 'Kripto paralar, blockchain teknolojisi üzerinde çalışan ve merkezi olmayan bir yapıya sahip olan dijital para birimleridir. Gelecekte, kripto paraların kullanım alanları artabilir ve finans sektöründe önemli bir rol oynayabilirler.'
      },
      {
        id: 2,
        title: 'Sağlıklı Beslenme: Sağlıklı Bir Beslenme Planı Nasıl Oluşturulur?',
        body: 'Sağlıklı bir beslenme planı oluşturmak için çeşitli besin gruplarından yeterli miktarda alım sağlamak, işlenmiş gıdalardan uzak durmak, öğün atlamamak ve su tüketimine dikkat etmek gibi adımlar atılabilir.'
      },
      {
        id: 3,
        title: 'E-ticaret: E-ticaret Sitesi Açmak İçin Neler Gereklidir?',
        body: 'E-ticaret sitesi açmak için öncelikle bir ürün veya hizmet seçimi yapmak, bir web sitesi oluşturmak, güvenli ödeme yöntemleri belirlemek ve pazarlama stratejileri geliştirmek gibi adımlar atılması gerekmektedir.'
      }
    ],
    todos: [
      {
        id: 1,
        checked: false
      },
      {
        id: 2,
        checked: true
      },
      {
        id: 3,
        checked: false
      },
      {
        id: 4,
        checked: true
      },
      {
        id: 5,
        checked: false
      },
      {
        id: 6,
        checked: true
      },
      {
        id: 7,
        checked: false
      },
      {
        id: 8,
        checked: true
      },
      {
        id: 9,
        checked: false
      },
      {
        id: 10,
        checked: true
      },
      {
        id: 11,
        checked: true
      },
      {
        id: 12,
        checked: false
      },
      {
        id: 13,
        checked: false
      },
      {
        id: 14,
        checked: false
      },
      {
        id: 15,
        checked: false
      }
    ]
  }
]

export default users
