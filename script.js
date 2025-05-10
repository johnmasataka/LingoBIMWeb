// Language translations
const translations = {
    en: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        map: 'Map',
        work: 'Work',
        instagram: 'Instagram',
        linkedin: 'LinkedIn',
        projectTitle: 'LingoBIM',
        projectSubtitle: 'A Large Language Models (LLMs) Driven<br>Building Information Modeling (BIM) System',
        overview: 'Project Overview',
        overviewText: 'LingoBIM is an innovative project that addresses the language barriers in Building Information Modeling (BIM) workflows. It enables seamless communication between international teams by providing real-time translation of BIM elements and properties.',
        challenge: 'The Challenge',
        challengeText: 'In global construction projects, language barriers often lead to miscommunication and inefficiencies. Different teams working on the same BIM model face difficulties in understanding element names, properties, and specifications in foreign languages.',
        solution: 'Our Solution',
        solutionText: 'LingoBIM integrates with popular BIM software to provide real-time translation of model elements. It maintains the original data structure while making the information accessible to all team members in their preferred language.',
        features: 'Key Features',
        feature1: 'Real-time translation of BIM elements',
        feature2: 'Multi-language support',
        feature3: 'Preservation of original data structure',
        feature4: 'Customizable translation rules',
        feature5: 'Integration with major BIM platforms',
        impact: 'Impact',
        impactText: 'LingoBIM has significantly improved communication efficiency in international construction projects, reducing errors and saving time in the BIM workflow. It has been successfully implemented in several large-scale projects across different countries.',
        demo: 'Project Demo'
    },
    // Add other language translations here
};

// Initialize language
let currentLanguage = 'en';

// Function to update text content based on language
function updateLanguage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Handle language selection
document.getElementById('language-select').addEventListener('change', (e) => {
    updateLanguage(e.target.value);
});

// Scroll animation for story sections and context sections
function handleScroll() {
    const sections = document.querySelectorAll('.story-section, .context-section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
            
            // Animate statistics if this is a statistics section and hasn't been animated yet
            if (section.querySelector('.statistics-container') && !section.dataset.animated) {
                animateStatistics();
                section.dataset.animated = 'true';
            }
        }
    });
}

// Function to animate statistics
function animateStatistics() {
    const statistics = document.querySelectorAll('.statistic-item');
    
    function animateNumber(element, target) {
        let current = 0;
        const duration = 2000; // 2 seconds for each animation
        const startTime = performance.now();

        function updateNumber(timestamp) {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smoother animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            current = Math.floor(target * easeOutQuart);
            
            element.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = target.toLocaleString();
            }
        }

        requestAnimationFrame(updateNumber);
    }

    // Handle scroll events
    window.addEventListener('scroll', () => {
        statistics.forEach((stat, index) => {
            if (stat.getAttribute('data-visible') === 'false') {
                const rect = stat.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Trigger animation when the statistic is 75% in view
                if (rect.top < windowHeight * 0.75) {
                    stat.setAttribute('data-visible', 'true');
                    stat.classList.add('visible');
                    
                    const numberElement = stat.querySelector('.statistic-number');
                    const target = parseInt(numberElement.getAttribute('data-target'));
                    animateNumber(numberElement, target);
                }
            }
        });
    });

    // Check initial visibility
    statistics.forEach(stat => {
        const rect = stat.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.75) {
            stat.setAttribute('data-visible', 'true');
            stat.classList.add('visible');
            
            const numberElement = stat.querySelector('.statistic-number');
            const target = parseInt(numberElement.getAttribute('data-target'));
            animateNumber(numberElement, target);
        }
    });
}

// Initialize scroll animation
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else {
            window.location.href = targetId;
        }
    });
});

// Language content object
const languageContent = {
    en: {
        // Navigation
        top: "Top",
        // news: "News",
        work: "Work",
        about: "About",
        contact: "Contact",
        map: "Map",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        // Main content
        concept: "LingoBIM",
        conceptDetail: "A Large Language Models (LLMs) Driven\nBuilding Information Modeling (BIM) System",
        profile: "PROFILE",
        project: "PROJECTS<br>(Selected from Columbia University)",
        // shareProject: "Archtalk",
        // shareProjectDetail: "The project started with 'SHAREyaraicho' in Yaraicho, a residential area in Kagurazaka. Our motivation is revitalizing the invisible community in Tokyo by making a series of share houses. In our SHARE projects, every share house has very unique common space besides living room, shower room, toilet, laundry and working space.",
        // About section
        aboutTitle: "John Masataka Xianfeng Jiang",
        aboutContent: "John is a New York / Tokyo-based architect, AI researcher, and project manager. He has over eight years of professional experience at <a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">Kengo Kuma & Associates (KKAA)</a>, where he has led teams on a wide range of projects, including luxury towers, resorts, private residences, and high-end furniture. His unique career bridges the confluence of management, technology, and design. He also worked for the <a href=\"https://c4sr.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">Center for Spatial Research (CSR)</a> at Columbia University, and is the member of the <a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">Architectural Institute of Japan (AIJ)</a>. John holds master's degree in computation in <a href=\"https://www.arch.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">Columbia University GSAPP</a> and architecture in <a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">Hokkaido University</a>.",
        // Footer
        copyright: "Copyright © - All Rights Reserved."
    },
    ja: {
        // Navigation
        top: "トップ",
        // news: "ニュース",
        work: "プロジェクト",
        about: "概要",
        contact: "お問い合わせ",
        map: "地図",
        instagram: "インスタグラム",
        linkedin: "LinkedIn",
        // Main content
        concept: "ジョン・賢峰・蔣\nコロンビア大学での作品",
        conceptDetail: "To maximize the potential of a place, simply providing a 'box' is not enough. We propose 'content' that makes each building have its own story. Centered around the 'SHARE' project, we will develop our business with a range of sizes and programs all over Japan.",
        profile: "プロフィール",
        project: "プロジェクト<br>(コロンビア大学での作品のみ)",
        // shareProject: "SHAREプロジェクトとは",
        shareProjectDetail: "神楽坂の住宅地、矢来町にある「SHAREyaraicho」からはじまったプロジェクト。シェアハウスを通して、東京の見えなくなってしまったコミュニティを再び可視化させたい思いから始動。どの家も、プライベートな部屋のほかに、リビングやシャワー、トイレ、ランドラリー、ワーキングスペースなどの様々なコモンスペースを持つのが特徴。",
        // About section
        aboutTitle: "ジョン・賢峰・蔣",
        aboutContent: "ジョンはニューヨークと東京を拠点とする建築家、AI研究者、プロジェクトマネージャー。隈研吾建築都市設計事務所（<a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">KKAA</a>）にて8年以上の実務経験を有し、高層集合住宅、リゾート、個人住宅、高級家具など、幅広い分野のプロジェクトに携わる。キャリアの中心にあるのは、マネジメント・テクノロジー・デザインの三領域をまたぐ横断的な実践。また、コロンビア大学の<a href=\"https://c4sr.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">空間研究センター（CSR）</a>に所属し、<a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">日本建築学会（AIJ）</a>会員。ジョンは<a href=\"https://www.arch.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">コロンビア大学</a>でコンピューティション学科卒業、<a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">北海道大学</a>で建築学科修了。",
        // Footer
        copyright: "Copyright © - All Rights Reserved."
    },
    // Spanish language content
    es: {
        // Navigation
        top: "Inicio",
        // news: "Noticias",
        work: "Proyectos",
        about: "Acerca de",
        contact: "Contacto",
        map: "Mapa",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        // Main content
        concept: "El trabajo de John Masataka Xianfeng Jiang en la Universidad de Columbia GSAPP",
        conceptDetail: "Para maximizar el potencial de un lugar, simplemente proporcionar una 'caja' no es suficiente. Proponemos 'contenido' que hace que cada edificio tenga su propia historia. Centrados en el proyecto 'SHARE', desarrollaremos nuestro negocio con una variedad de tamaños y programas en todo Japón.",
        profile: "PERFIL",
        project: "PROYECTOS<br>(seleccionados de la Universidad de Columbia)",
        // shareProject: "¿Qué es el Proyecto SHARE?",
        shareProjectDetail: "El proyecto comenzó con 'SHAREyaraicho' en Yaraicho, un área residencial en Kagurazaka. Nuestra motivación es revitalizar la comunidad invisible en Tokio mediante la creación de una serie de casas compartidas. En nuestros proyectos SHARE, cada casa compartida tiene un espacio común único además de sala de estar, ducha, baño, lavandería y espacio de trabajo.",
        // About section
        aboutTitle: "John Masataka Xianfeng Jiang",
        aboutContent: "John es un arquitecto, investigador de IA y gerente de proyectos con sede en Nueva York/Tokio. Tiene más de ocho años de experiencia profesional en <a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">Kengo Kuma & Associates (KKAA)</a>, donde ha liderado equipos en una amplia gama de proyectos, incluyendo torres de lujo, resorts, residencias privadas y muebles de alta gama. Su carrera única une la gestión, la tecnología y el diseño. También trabajó para el <a href=\"https://c4sr.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">Center for Spatial Research (CSR)</a> en la Universidad de Columbia y es miembro del <a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">Architectural Institute of Japan (AIJ)</a>. John tiene una maestría en computación en <a href=\"https://www.arch.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">Columbia University</a> y en arquitectura en <a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">Hokkaido University</a>.",
        // Footer
        copyright: "Copyright © - Todos los derechos reservados."
    },
    // Korean language content
    ko: {
        // Navigation
        top: "상단",
        // news: "뉴스",
        work: "프로젝트",
        about: "소개",
        contact: "연락처",
        map: "지도",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        // Main content
        concept: "존 마사타카 시안펑 장의 컬럼비아 대학교 GSAPP 작품",
        conceptDetail: "장소의 잠재력을 최대화하기 위해서는 단순히 '상자'를 제공하는 것만으로는 충분하지 않습니다. 우리는 각 건물이 자신만의 이야기를 갖도록 '콘텐츠'를 제안합니다. 'SHARE' 프로젝트를 중심으로 일본 전역에서 다양한 규모와 프로그램으로 사업을 발전시킬 것입니다.",
        profile: "프로필",
        project: "프로젝트<br>(컬럼비아 대학교 작품 중)",
        // shareProject: "SHARE 프로젝트란?",
        shareProjectDetail: "이 프로젝트는 카구라자카의 주거 지역인 야라이초에 있는 'SHAREyaraicho'에서 시작되었습니다. 우리의 동기는 쉐어하우스 시리즈를 만들어 도쿄의 보이지 않는 커뮤니티를 활성화하는 것입니다. SHARE 프로젝트에서는 모든 쉐어하우스가 거실, 샤워실, 화장실, 세탁실 및 작업 공간 외에도 매우 독특한 공용 공간을 가지고 있습니다.",
        // About section
        aboutTitle: "존 마사타카 시안펑 장",
        aboutContent: "존은 뉴욕/도쿄를 기반으로 하는 건축가, AI 연구원, 프로젝트 매니저입니다. 그는 <a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">건고쿠마 앤드 어소시에이츠(KKAA)</a>에서 8년 이상의 전문 경력을 가지고 있으며, 럭셔리 타워, 리조트, 개인 주택, 하이엔드 가구 등 다양한 프로젝트에서 팀을 이끌었습니다. 그의 독특한 경력은 경영, 기술, 디자인의 융합을 연결합니다. 그는 또한 컬럼비아 대학의 <a href=\"https://c4sr.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">공간 연구 센터(CSR)</a>에서 일했으며 <a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">일본 건축 학회(AIJ)</a>의 회원입니다. 존은 <a href=\"https://www.arch.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">컬럼비아 대학 GSAPP</a>에서 계산학 석사, <a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">홋카이도 대학</a>에서 건축학 석사를 취득했습니다.",
        // Footer
        copyright: "Copyright © - All Rights Reserved."
    },
    // Simplified Chinese language content
    "zh-CN": {
        // Navigation
        top: "首页",
        // news: "新闻",
        work: "项目",
        about: "关于",
        contact: "联系",
        map: "地图",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        // Main content
        concept: "蒋贤峰在哥伦比亚大学GSAPP的作品",
        conceptDetail: "要最大化一个地方的潜力，仅仅提供一个'盒子'是不够的。我们提出'内容'，使每个建筑都有自己的故事。以'SHARE'项目为中心，我们将在日本各地开展各种规模和项目的业务。",
        profile: "简介",
        project: "项目<br>(哥伦比亚大学作品)",
        // shareProject: "什么是SHARE项目",
        shareProjectDetail: "该项目始于神乐坂住宅区矢来町的'SHAREyaraicho'。我们的动机是通过创建一系列共享住宅来振兴东京看不见的社区。在我们的SHARE项目中，每个共享住宅除了客厅、淋浴间、厕所、洗衣房和工作空间外，还有非常独特的公共空间。",
        // About section
        aboutTitle: "蒋贤峰",
        aboutContent: "蒋贤峰，字君安 (John)，是一位常驻纽约和东京的建筑师、AI研究员和项目经理。他在<a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">隈研吾建筑都市设计事务所（KKAA）</a>拥有超过八年的专业经验，曾领导团队完成各种项目，包括豪华塔楼、度假村、私人住宅和高端家具。他的职业生涯专注于管理、技术和设计。他还在<a href=\"https://c4sr.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">哥伦比亚大学空间研究中心（CSR）</a>工作，并且是<a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">日本建筑学会（AIJ）</a>的成员。蒋贤峰在<a href=\"https://www.arch.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">哥伦比亚大学</a>获得计算学硕士学位，在<a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">北海道大学</a>获得建筑学硕士学位。",
        // Footer
        copyright: "版权所有 © - 保留所有权利。"
    },
    // Traditional Chinese language content
    "zh-TW": {
        // Navigation
        top: "首頁",
        // news: "新聞",
        work: "案子",
        about: "關於",
        contact: "聯繫",
        map: "地圖",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        // Main content
        concept: "蔣賢峰在哥倫比亞大學的作品",
        conceptDetail: "要最大化一個地方的潛力，僅僅提供一個'盒子'是不夠的。我們提出'內容'，使每個建築都有自己的故事。以'SHARE'項目為中心，我們將在日本各地開展各種規模和項目的業務。",
        profile: "簡介",
        project: "案子<br>(哥倫比亞大學作品)",
        // shareProject: "什麼是SHARE項目",
        shareProjectDetail: "該項目始於神樂坂住宅區矢來町的'SHAREyaraicho'。我們的動機是通過創建一系列共享住宅來振興東京看不見的社區。在我們的SHARE項目中，每個共享住宅除了客廳、淋浴間、廁所、洗衣房和工作空間外，還有非常獨特的公共空間。",
        // About section
        aboutTitle: "蔣賢峰",
        aboutContent: "蔣賢峰，字君安（John），是一位長期居住於紐約與東京的建築師、AI 研究員以及專案經理。他在<a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">隈研吾建築都市設計事務所（KKAA）</a>擁有超過八年的專業經驗，曾領導團隊完成多項專案，包括豪華高樓、度假村、私人住宅與高端家具設計。他的職涯專注於管理、技術與設計三大領域。他亦曾於<a href=\"https://c4sr.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">哥倫比亞大學空間研究中心（CSR）</a>工作，並為<a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">日本建築學會（AIJ）</a>的成員。蔣賢峰擁有<a href=\"https://www.arch.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">哥倫比亞大學</a>計算學碩士學位，以及<a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">北海道大學</a>建築學碩士學位。",
        // Footer
        copyright: "版權所有 © - 保留所有權利。"
    }
};

// Function to update content based on selected language
function updateContent(language) {
    const content = languageContent[language];
    if (!content) return;

    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', language);

    // Update navigation
    document.querySelectorAll('nav a').forEach(link => {
        const key = link.getAttribute('data-key');
        if (key && content[key]) {
            link.textContent = content[key];
        }
    });

    // Update main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        // Update concept
        const concept = mainContent.querySelector('.hero h1');
        if (concept) concept.textContent = content.concept;

        const conceptDetail = mainContent.querySelector('.hero p');
        if (conceptDetail) conceptDetail.textContent = content.conceptDetail;

        // Update profile section
        const profileTitle = mainContent.querySelector('.profile h2');
        if (profileTitle) profileTitle.textContent = content.profile;

        // Update project section
        const projectTitle = mainContent.querySelector('.project h2');
        if (projectTitle) projectTitle.innerHTML = content.project;

        // Update about section
        const aboutTitle = mainContent.querySelector('.about h1');
        if (aboutTitle) aboutTitle.textContent = content.aboutTitle;

        const aboutContent = mainContent.querySelector('.about-content p');
        if (aboutContent) aboutContent.innerHTML = content.aboutContent;
    }

    // Update footer
    const footer = document.querySelector('footer p');
    if (footer) footer.textContent = content.copyright;
}

// Event listener for language selection
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        // Get the stored language or use browser language as default
        const storedLanguage = localStorage.getItem('selectedLanguage');
        const browserLang = navigator.language.split('-')[0];
        const defaultLang = storedLanguage || (languageContent[browserLang] ? browserLang : 'en');
        
        // Set the selected language in the dropdown
        languageSelect.value = defaultLang;
        updateContent(defaultLang);

        // Add event listener for language change
        languageSelect.addEventListener('change', (e) => {
            const selectedLanguage = e.target.value;
            updateContent(selectedLanguage);
        });
    }
});

// Hero Slideshow
function initSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    const slideCount = slides.length;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Initialize slideshow when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initSlideshow();
    animateStatistics();
}); 