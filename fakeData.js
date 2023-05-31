export const fakeData = {
    anasayfa: "Ana Sayfa",
    title: 'Hizmetlerimiz',
    hizmetlerimiz: [
      {
        title: 'Teknik Hizmetlerimiz',
        subItems: [
          { title: 'Frontend Teknolojileri', link: '/frontend' },
          { title: 'Backend Teknolojileri', link: '/backend' },
          { title: 'AWS Hizmetleri', link: '/aws' }
        ]
      },
      {
        title: 'Danışmanlık Hizmetlerimiz',
        subItems: [
          { title: 'Teknik Destek', link: '/teknik-destek' },
          { title: 'Bilgilendirme Hizmetleri', link: '/bilgilendirme' },
          { title: 'Mentorluk Hizmetleri', link: '/mentorluk' }
        ],
        additionalItems: {
          title: 'Danışmanlık Eğitimleri',
          subItems: [
            { title: 'Sertifikalı Danışmanlık Hizmeti', link: '/sertifikali-danismanlik' },
            { title: 'Kurumsal Danışmanlık Hizmeti', link: '/kurumsal-danismanlik' },
            { title: 'Hatalı Altyapı Onarımı', link: '/hatalı-altyapı' }
          ]
        }
      },
      {  
      }
    ],
    
    hakkimizda: {
      title: "Hakkımızda",
      subItems: ['Biz Kimiz?', 'Kurumsal', 'Vizyon', 'Misyon'],
      referanslarimiz: {
        title: "Referanslarımız",
        gecmisReferanslar: ['x referansı', 'y referansı', 'z referansı'],
        gelecekReferanslar: ['a referansı', 'b referansı', 'c referansı']
      }
    },
    iletisim: 'İletişim',
    kayitOl: 'Kayıt Ol',
    girisYap: 'Giriş Yap',
    color: 'black',

  };