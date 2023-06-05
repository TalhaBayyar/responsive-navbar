export const fakeData = [
    {
      text: 'Anasayfa',
      link: '#',
      order: 1,
      css: 'text-white',
      type: "mainButton",
      children: []
    },
    
    {
      text: 'Hizmetlerimiz',
      link: '#',
      order: 2,
      css: 'text-white',
      type: "mainButton",
      children: [
        {
          text: 'Teknik Hizmetlerimiz',
          link: '#',
          order: 1,
          css: 'text-gray-600',
          type: "parentButton",
          children: [
            { text: 'Frontend Teknolojileri', link: '#', order: 1, css: 'text-gray-400', type: "childButton" },
            { text: 'Backend Teknolojileri', link: '#', order: 2, css: 'text-gray-400', type: "childButton" },
            { text: 'AWS Hizmetleri', link: '#', order: 3, css: 'text-gray-400', type: "childButton" }
          ]
        },
        {
          text: 'Danışmanlık Hizmetlerimiz',
          link: '#',
          order: 2,
          css: 'text-gray-600',
          type: "parentButton",
          children: [
            { text: 'Teknik Destek', link: '#', order: 1, css: 'text-gray-400', type: "childButton" },
            { text: 'Bilgilendirme Hizmetleri', link: '#', order: 2, css: 'text-gray-400', type: "childButton" },
            { text: 'Mentorluk Hizmetleri', link: '#', order: 2, css: 'text-gray-400', type: "childButton" },
            {
              text: 'Danışmanlık Eğitimleri',
              link: '#',
              order: 1,
              css: 'text-gray-400',
              type: "childButton",
              children: [
                { text: 'Sertifikalı Danışmanlık Hizmeti', link: '#', order: 1, css: 'text-gray-400', type: "childButton" },
                { text: 'Kurumsal Danışmanlık Hizmeti', link: '#', order: 2, css: 'text-gray-400', type: "childButton" }
              ]
            },
            { text: 'Eğitim Öğretim Planlama', link: '#', order: 2, css: 'text-gray-400', type: "childButton" },
            { text: 'Yazılım Danışmanlığı', link: '#', order: 3, css: 'text-gray-400', type: "childButton" },
            { text: 'Proje Danışmanlığı', link: '#', order: 4, css: 'text-gray-400', type: "childButton" }
          ]
        },
        {
          text: 'Hatalı Altyapı Onarımı',
          link: '#',
          order: 3,
          css: 'text-gray-600',
          type: "parentButton",
          children: []
        }
      ]
    },
    {
      text: 'Hakkımızda',
      link: '#',
      order: 3,
      css: 'text-white',
      type: "mainButton",
      children: [
        { text: 'Biz Kimiz?', link: '#', order: 1, css: 'text-gray-600', type: "parentButton" },
        { text: 'Kurumsal', link: '#', order: 2, css: 'text-gray-600', type: "parentButton" },
        {
          text: 'Referanslarımız',
          link: '#',
          order: 3,
          css: 'text-gray-600',
          type: "parentButton",
          children: [
            {
              text: 'Geçmiş Referanslar',
              link: '#',
              order: 1,
              css: 'text-gray-400',
              type: "childButton",
              children: [
                { text: 'x referansı', link: '#', order: 1, css: 'text-gray-400', type: "childButton" },
                { text: 'y referansı', link: '#', order: 2, css: 'text-gray-400', type: "childButton" },
                { text: 'z referansı', link: '#', order: 3, css: 'text-gray-400', type: "childButton" }
              ]
            },
            {
              text: 'Gelecek Referanslar',
              link: '#',
              order: 2,
              css: 'text-gray-400',
              type: "childButton",
              children: [
                { text: 'a referansı', link: '#', order: 1, css: 'text-gray-400', type: "childButton" },
                { text: 'b referansı', link: '#', order: 2, css: 'text-gray-400', type: "childButton" },
                { text: 'c referansı', link: '#', order: 3, css: 'text-gray-400', type: "childButton" }
              ]
            }
          ]
        },
        { text: 'Vizyon', link: '#', order: 4, css: 'text-gray-600', type: "parentButton" },
        { text: 'Misyon', link: '#', order: 5, css: 'text-gray-600', type: "parentButton" }
      ]
    },
    {
      text: 'İletişim',
      link: '#',
      order: 4,
      css: 'text-white',
      type: "mainButton",
      children: []
    },
    {
      text: 'Kayıt Ol',
      link: '#',
      order: 5,
      css: 'text-white',
      type: "mainButton",
      children: []
    },
    {
      text: 'Giriş Yap',
      link: '#',
      order: 6,
      css: 'text-white',
      type: "mainButton",
      children: []
    },
    
  ];
  
  { /*
  
  
      Navbar veri yapısı şu şekildedir:
  
          1. Anasayfa
          2. Hizmetlerimiz
            1. Teknik Hizmetlerimiz
                * Frontend Teknolojileri
                * Backend Teknolojileri
                * AWS Hizmetleri
            2. Danışmanlık Hizmetlerimiz
                * Teknik Destek
                * Bilgilendirme Hizmetleri
                * Mentorluk Hizmetleri 
                1.Danışmanlık Eğitimleri
                  * Sertifikalı Danışmanlık Hizmeti
                  * Kurumsal Danışmanlık Hizmeti
                * Eğitim Öğretim Planlama
                * Yazılım Danışmanlığı
                * Proje Danışmanlığı
              3. Hatalı Altyapı Onarımı
          3. Hakkımızda
            1. Biz Kimiz?
            2. Kurumsal
            3. Referanslarımız
                1. Geçmiş Referanslar
                  * x referansı
                  * y referansı
                  * z referansı
                2. Gelecek Referanslar
                  * a referansı
                  * b referansı
                  * c referansı
            4. Vizyon
            5. Misyon
          4. İletişim
          5. Kayıt Ol
          6. Giriş Yap    
  
  
  
          * Buton metni
          * Butonun yönlendirme linki
          * Butonun sıra numarası
          * Buttonların genel CSS özelliği (varsayılan bir özellik de tanımlanacak)
          * Butonun işlevi [mainButton, parentButton, childButton]
  
  */
  }