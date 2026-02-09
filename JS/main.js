let themeToggleBtn = document.getElementById("theme-toggle-button");
let html = document.documentElement;
const themeIcon = document.getElementById("theme-colors-grid");




// تحميل الثيم المحفوظ
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  themeToggleBtn.setAttribute("aria-pressed", "true");
}

// عند الضغط على الزر
themeToggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  let isDark = html.classList.contains("dark");

  // Accessibility
  themeToggleBtn.setAttribute("aria-pressed", isDark);

  // حفظ الاختيار
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

let settingToggleBtn = document.getElementById("settings-toggle");
let settingsSidebar = document.getElementById("settings-sidebar");
settingToggleBtn.addEventListener("click", () => {
  settingsSidebar.classList.toggle("translate-x-full");
});

// اختيار حجم الخط
 document.addEventListener("DOMContentLoaded", () => {
  const fontButtons = document.querySelectorAll(".font-option");

  const fontsMap = {
    alexandria: {
      family: "'Alexandria', sans-serif",
      weight: "800"   // تقيل
    },
    tajawal: {
      family: "'Tajawal', sans-serif",
      weight: "500"   // متوسط
    },
    cairo: {
      family: "'Cairo', sans-serif",
      weight: "400"   // خفيف
    }
  };

  function applyFont(fontKey) {
    document.documentElement.style.setProperty(
      "--app-font",
      fontsMap[fontKey].family
    );

    document.documentElement.style.setProperty(
      "--app-font-weight",
      fontsMap[fontKey].weight
    );

    localStorage.setItem("appFont", fontKey);

    fontButtons.forEach(btn => {
      btn.classList.remove("active");
      btn.setAttribute("aria-checked", "false");
    });

    const activeBtn = document.querySelector(
      `.font-option[data-font="${fontKey}"]`
    );

    if (activeBtn) {
      activeBtn.classList.add("active");
      activeBtn.setAttribute("aria-checked", "true");
    }
  }

  fontButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      applyFont(btn.dataset.font);
    });
  });

  // تحميل المحفوظ
  applyFont(localStorage.getItem("appFont") || "tajawal");
});
 



// اضافة سمات عند النقر على الخيارات






// إغلاق الشريط الجانبي عند النقر خارجًا
document.addEventListener("click", function (e) {
  if (
    !settingsSidebar.contains(e.target) &&
    !settingToggleBtn.contains(e.target)
  ) {
    settingsSidebar.classList.add("translate-x-full");
  }
});

const translations = {
  ar: {
    hero_greeting: "مرحباً، أنا 👋",
    hero_name: "يوسف سيد",
    lang_name: "English",
    hero_desc_start: "بحول أفكارك لـ ",
    hero_desc_highlight: "تجارب رقمية مميزة",
    hero_desc_end: ". متخصص في بناء مواقع وتطبيقات ويب حديثة بأحدث التقنيات.",
    hero_btn_work: "استكشف أعمالي",
    hero_btn_contact: "تواصل معي",
     availability_status: "متاح للشغل الحر",
     about_section_title: "من أنا",
     about_section_heading: "عن ",
      about_name: "يوسف سيد",
      section_s: "بحب أحول الأفكار لواقع رقمي",
      section_p: "مطور واجهات أمامية بخبرة +1 سنوات في بناء تطبيقات ويب حديثة وتصميم تجارب مستخدم استثنائية.",
      section_p2: "بشتغل بأحدث التقنيات زي Angular و Next.js و TypeScript عشان أقدم حلول عالية الجودة وتعدي التوقعات.",
      section_i: "حاسبات ومعلومات",
      section_b: "+10 مشروع",
      section_c: "+35 عميل سعيد",
      section_h: "ما أقدمه",
      section_span: "تطوير تطبيقات ويب متكاملة بـ Angular & Next.js",
      section_span2: "تصميم واجهات مستخدم حديثة وجذابة",
      section_span3: "تحسين الأداء وسرعة التحميل",
      section_span4: "تطوير مواقع متوافقة مع جميع الأجهزة",
      section_div: "مشروع",
      section_div2: "سنة",
      section_div3: "عميل",
      skills_section_title: "ما أتقنه",
      skills_section_heading: "المهارات و",
      skills_section_heading_span: "التقنيات",
      section_angluar: "خبرة متقدمة في بناء تطبيقات Angular معقدة",
      setion_next: "تطوير تطبيقات SSR وSSG متقدمة",
      section_script: "كتابة كود آمن ومنظم بشكل احترافي",
      section_boot: "تصميم واجهات حديثة بسرعة عالية",
      section_node: "بناء APIs وخدمات الخلفية",
      section_figma: "تصميم واجهات احترافية ونماذج تفاعلية",
      portfolio_section_title: "أعمالي",
      portfolio_section_heading: "معرض ",
      portfolio_section_projects: "الأعمال",
      section_web: "موقع ويب",
      section_market: "متجر إلكتروني متكامل",
      section_market_p: "تصميم واجهة المستخدم وتجربة المستخدم لموقع تجارة إلكترونية حديث",
      section_app: "تطبيق",
      section_app2: "تطبيق  الالعاب",
      section_app_p: "موقع ويب ل الالعاب الالكترونية مع ميزات التعاون الجماعي",
      section_design: "تصميم",
      section_web2: "موقع شخصي إبداعي",
      section_web_p: "تصميم موقع شخصي بأسلوب عصري وألوان جريئة",
      section_web4: "موقع  لعرض وجبات العشاء",
      section_web_p4: "موقع احترافي      لعرض وجبات العشاء مع تصميم حديث",
      section_social_dashboard: "لوحة تحليلات اجتماعية",
      section_social_dashboard_p: "منصة تحليل وإدارة حسابات التواصل الاجتماعي",
      section_comrcery: "تجارة",
      section_app5: "   تطبيق لياقة بدنية    ",
      section_app_p5: "متجر إلكتروني لبيع معدات اللياقة البدنية عبر الإنترنت       ",
      section_web_p2: "منصة       تواصل اجتماعي مع ميزات المشاركة والتعليقات والإعجابات",
      section_app6: "تطبيق  لعرض بيانات ",
      section_app_p6: "تطبيق لعرض بيانات الموظفين مع ميزات إدارة المهام والتقارير     ",
      section_app7: "تصميم تطبيق جوال",
      section_app_p7: "تصميم UI/UX كامل لتطبيق جوال متعدد الوظائف",
      section_btn: "لنبدأ مشروعك القادم",
      section_rocket: "🚀",
      section_stat_p:"مشروع مكتمل",
      section_stat_p2:"عميل سعيد",
      section_stat_p3:"سنة خبرة",
        section_stat_p4:"جائزة وتقدير",
        contact_me: "تواصل معي",
        contact_title: "يلا نبدأ مشروعك",
        have_idea: "عندك فكرة مشروع؟ تعالى نتكلم ونحولها لواقع",
        Email: "البريد الإلكتروني",
        ready_response: "جاهز للرد خلال 24 ساعة",
        Number: "رقم الهاتف",
        available_hours: "متاح من 9 صباحاً - 5 مساءً",
        location: "الموقع",
        cairo_egypt: "القاهرة، مصر",
        remote_work_available: "متاح للعمل عن بعد",
          Follow: "تابعني على",
          Full_Name: "الاسم الكامل",
          Type_Project: "نوع المشروع",
          Select_Project: "اختر نوع المشروع",
          section_des: "تصميم UI/UX",
          Salary: "الميزانية المتوقعة",
          section_salary:"اختر الميزانية",
          less_than: "أقل من 20,000 جنيه",
        from_salary: "20,000 - 50,000 جنيه",
        salary_from: "50,000 - 100,000 جنيه",
        details:"تفاصيل المشروع",
        details_show:"احكيلي تفاصيل مشروعك...",
        send_message: "ابعت الرسالة",
        about_description: "أؤمن بأن البرمجة فن. هدفي مش بس كتابة كود، بل خلق تجربة مستخدم سلسة بتسيب أثر. بدمج التصميم الجمالي مع الأداء القوي عشان أقدم حلول رقمية مميزة.",
        home: "الرئيسية",
        about: "عني",
        portfolio: "الأعمال",
        
        contact: "تواصل",
        develob_web: "تطوير الويب",
        develob_app: "تطوير التطبيقات",
        section_performance: "تحسين الأداء",
        quick_links: "روابط سريعة",
        services: "الخدمات",
        customize: "تخصيص المظهر",
        font_type: "نوع الخط",
        section_maintenance: "الصيانة والدعم",
        about_for_me: " حقوق النشر © 2026 يوسف سيد. جميع الحقوق محفوظة."
        
        

     
      
  },
  en: {
    hero_greeting: "Hello, I'm 👋",
    hero_name: "Youssef Sayed",
    lang_name: "العربية",
     hero_desc_start: "I turn your ideas into ",
    hero_desc_highlight: "exceptional digital experiences",
    hero_desc_end: ". Specialized in building modern websites and web applications using the latest technologies.",
    hero_btn_work: "Explore My Work",
    hero_btn_contact: "Contact Me",
     availability_status: "Available for freelance work",
      about_section_title: "About Me",
      about_section_heading: "About ",
      about_name: "Youssef Sayed",
      section_s: "I love turning ideas into digital reality",
      section_p: "Front-end developer with over 1 year of experience in building modern web applications and designing exceptional user experiences.",
      section_p2: "I work with the latest technologies like Angular, Next.js, and TypeScript to deliver high-quality solutions that exceed expectations.",
      section_i: "Computer Science",
      section_b: "+10 Projects",
      section_c: "+35 Happy Clients",
      section_h: "What I Offer",
      section_span: "Full-stack web application development with Angular & Next.js",
      section_span2: "Designing modern and attractive user interfaces",
      section_span3: "Performance optimization and fast loading",
      section_span4: "Developing responsive websites compatible with all devices",
      section_div: "Project",
      section_div2: "Year",
      section_div3: "Client",
      skills_section_title: "What I Master",
      skills_section_heading: "Skills &",
      skills_section_heading_span: "Technologies",
      section_angluar: "Advanced experience in building complex Angular applications",
      setion_next: "Developing advanced SSR and SSG applications",
      section_script: "Writing secure and well-organized code professionally",
      section_boot: "Designing modern interfaces with high speed",
      section_node: "Building APIs and backend services",
      section_figma: "Designing professional interfaces and interactive prototypes",
      portfolio_section_title: "My Works",
      portfolio_section_heading: "Portfolio ",
      portfolio_section_projects: "Projects",
      section_web: "Website",
      section_market: "Full-featured E-commerce Store",
      section_market_p: "UI/UX design for a modern e-commerce website",
      section_app: "Application",
      section_app2: "Gaming Application",
      section_app_p: "A gaming web application with multiplayer features",
      section_design: "Design",
      section_web2: "Creative Personal Website",
      section_web_p: "Designing a personal website with a modern style and bold colors",
      section_web4: "Dinner Showcase Website",
      section_web_p4: "A professional website to showcase dinner meals with a modern design",
      section_social_dashboard: "Social Analytics Dashboard",
      section_social_dashboard_p: "Social media account analysis and management platform",
      section_comrcery: "commerce",
      section_app5: "   Fitness Application    ",
      section_app_p5: "An online store for selling fitness equipment       ",
      section_web_p2: "A social networking platform with sharing, commenting, and liking features",
      section_app6: "Data Display Application ",
      section_app_p6: "An application to display employee data with task management and reporting features     ",
      section_app7: "Mobile App Design",
      section_app_p7: "Complete UI/UX design for a multifunctional mobile application",
      section_btn: "Let's Start Your Next Project",
      section_rocket: "🚀",
      section_stat_p:"Project Completed",
      section_stat_p2:"Happy Client",
      section_stat_p3:"Years of Experience",
      section_stat_p4:"Awards & Recognition",
      contact_me: "Contact Me",
      contact_title: "Let's Start Your Project",
      have_idea: "Have a project idea? Let's talk and turn it into reality",
      Email: "Email",
      ready_response: "Ready to respond within 24 hours",
      Number: "Phone Number",
      available_hours: "Available from 9 AM - 5 PM",
      location: "Location",
      cairo_egypt: "Cairo, Egypt",
      remote_work_available: "Remote work available",
      Follow: "Follow Me On",
      Full_Name: "Full Name",
      Type_Project: "Type of Project",
      Select_Project: "Select Project Type",
      section_des: "UI/UX Design",
      Salary: "Expected Budget",
      section_salary:"Select Budget",
      less_than: "Less than 20,000 EGP",
      from_salary: "20,000 - 50,000 EGP",
      salary_from: "50,000 - 100,000 EGP",
      details:"Project Details",
      details_show:"Tell me about your project...",
        send_message: "Send Message",
        about_description: "I believe programming is an art. My goal is not just to write code, but to create a seamless user experience that leaves an impact. By blending aesthetic design with powerful performance, I deliver exceptional digital solutions.",
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        
        contact: "Contact",
        develob_web: "Web Development",
        develob_app: "App Development",
        section_performance: "Performance Optimization",
        quick_links: "Quick Links",
        services: "Services",
          customize: "Customize Appearance",
          font_type: "Font Type",
        section_maintenance: "Maintenance & Support",
        about_for_me: "Copyright © 2026 Youssef Sayed. All rights reserved."

    
  }
};



const langToggle = document.getElementById("langToggle");
let currentLang = localStorage.getItem("lang") || "ar";

function applyLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  langToggle.textContent = translations[lang].lang_name;
  localStorage.setItem("lang", lang);
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  applyLanguage(currentLang);
});

// تحميل اللغة المحفوظة
applyLanguage(currentLang);





document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll(".custom-select-wrapper");

  selects.forEach(wrapper => {
    const select = wrapper.querySelector(".custom-select");
    const optionsBox = wrapper.querySelector(".custom-options");
    const options = wrapper.querySelectorAll(".custom-option");
    const selectedText = wrapper.querySelector(".selected-text");
    const arrow = wrapper.querySelector("i");

    // فتح / قفل
    select.addEventListener("click", () => {
      optionsBox.classList.toggle("hidden");
      arrow.classList.toggle("rotate-180");
      select.setAttribute(
        "aria-expanded",
        optionsBox.classList.contains("hidden") ? "false" : "true"
      );
    });

    // اختيار عنصر
    options.forEach(option => {
      option.addEventListener("click", () => {
        selectedText.textContent = option.textContent;
        selectedText.classList.remove("text-slate-500", "dark:text-slate-400");
        optionsBox.classList.add("hidden");
        arrow.classList.remove("rotate-180");
        select.setAttribute("aria-expanded", "false");

        // لو محتاج القيمة
        select.dataset.value = option.dataset.value;
      });
    });
  });

  // قفل عند الضغط خارج السليكت
  document.addEventListener("click", e => {
    document.querySelectorAll(".custom-select-wrapper").forEach(wrapper => {
      if (!wrapper.contains(e.target)) {
        wrapper.querySelector(".custom-options").classList.add("hidden");
        wrapper.querySelector("i").classList.remove("rotate-180");
        wrapper.querySelector(".custom-select")
          .setAttribute("aria-expanded", "false");
      }
    });
  });
});