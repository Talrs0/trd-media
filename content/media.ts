type ImageSlot = { src: string | null; alt: { th: string; en: string }; caption?: { th: string; en: string } };
export const media: Record<"hero" | "network" | "audience" | "campaign" | "venueOverview" | "formats" | "pageBanner" | "dorm" | "restaurant" | "placement" | "about" | "community" | "adFood" | "adMenu" | "footer", ImageSlot> = {
  "hero": {
    "src": "/images/bangkok-network-cream.png",
    "alt": {
      "th": "ภาพแนวคิดการขยายเครือข่ายในกรุงเทพฯ พร้อมสัญลักษณ์จอดิจิทัล",
      "en": "Bangkok network expansion concept with illustrative screen markers"
    },
    "caption": {
      "th": "แนวคิดการขยายเครือข่ายในกรุงเทพฯ · หมุดเป็นตัวอย่างทำเล",
      "en": "Bangkok expansion concept · Illustrative locations"
    }
  },
  "network": {
    "src": "/images/students-screen-flat.png",
    "alt": {
      "th": "ภาพประกอบนักศึกษาเดินผ่านจอโฆษณาแนวตั้งในโถงหอพัก",
      "en": "Students walking past a portrait advertising screen in a dorm lobby"
    },
    "caption": {
      "th": "ภาพประกอบ",
      "en": "Illustration"
    }
  },
  "audience": {
    "src": "/images/audience-community-flat.png",
    "alt": {
      "th": "ภาพประกอบนักศึกษาพูดคุยและทำงานร่วมกันในมหาวิทยาลัย",
      "en": "University students talking and working together on campus"
    },
    "caption": {
      "th": "ภาพประกอบ",
      "en": "Illustration"
    }
  },
  "campaign": {
    "src": "/images/campaign-creative-flat.png",
    "alt": {
      "th": "ภาพประกอบเจ้าของธุรกิจวางแผนโฆษณาบนจอดิจิทัล",
      "en": "Business owner planning a digital screen campaign"
    },
    "caption": {
      "th": "ภาพประกอบ",
      "en": "Illustration"
    }
  },
  "venueOverview": {
    "src": "/images/venue-overview-flat.png",
    "alt": {
      "th": "ภาพประกอบจอโฆษณาที่ทางเข้าหอพักและร้านเครื่องดื่ม",
      "en": "Illustrative advertising screens at a residence and a cafe"
    },
    "caption": {
      "th": "ภาพประกอบ",
      "en": "Illustration"
    }
  },
  "formats": {
    "src": "/images/screen-format-flat.png",
    "alt": {
      "th": "ภาพประกอบการนำชิ้นงานจากคอมพิวเตอร์ไปแสดงบนจอแนวตั้ง",
      "en": "Illustration of creative artwork being displayed on a portrait screen"
    },
    "caption": {
      "th": "ภาพประกอบ",
      "en": "Illustration"
    }
  },
  "pageBanner": {
    "src": null,
    "alt": {
      "th": "",
      "en": ""
    }
  },
  "dorm": {
    "src": "/images/ratchapruek-screen.png",
    "alt": {
      "th": "จอโฆษณา TRD ที่หอพักสตรีราชพฤกษ์",
      "en": "TRD advertising screen at Ratchapruek Women Dormitory"
    }
  },
  "restaurant": {
    "src": "/images/koin-screen.jpg",
    "alt": {
      "th": "จอแสดงโฆษณาชาชักโกอิน",
      "en": "Advertising screen displaying KO-IN Cha Chuck creative"
    }
  },
  "placement": {
    "src": "/images/ratchapruek-laundry.png",
    "alt": {
      "th": "จอโฆษณาในพื้นที่ซักผ้าของหอพัก",
      "en": "Advertising screen in the residence laundry area"
    }
  },
  "about": {
    "src": "/images/ratchapruek-entrance.png",
    "alt": {
      "th": "จอดิจิทัลบริเวณทางเข้าหอพักสตรีราชพฤกษ์",
      "en": "Digital screen by the Ratchapruek residence entrance"
    }
  },
  "community": {
    "src": "/images/ratchapruek-laundry.png",
    "alt": {
      "th": "จอดิจิทัลในพื้นที่ส่วนกลางของหอพัก",
      "en": "Digital advertising screen in a residence shared space"
    }
  },
  "footer": {
    "src": null,
    "alt": {
      "th": "",
      "en": ""
    }
  },
  "adFood": {
    "src": "/images/koin-ad-food.png",
    "alt": {
      "th": "ตัวอย่างชิ้นงานโฆษณาอาหารและเครื่องดื่ม ชาชักโกอิน",
      "en": "KO-IN food and drink advertising creative"
    }
  },
  "adMenu": {
    "src": "/images/koin-ad-menu.png",
    "alt": {
      "th": "ตัวอย่างชิ้นงานโฆษณาเมนูแนะนำ ชาชักโกอิน",
      "en": "KO-IN recommended menu advertising creative"
    }
  }
};
