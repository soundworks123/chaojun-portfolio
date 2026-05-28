const CONTENT = {
  zh: {
    pageTitle: "晁军 | 个人名片",
    kicker: "影视声音创作档案",
    name: "晁军",
    title: "电影录音师、声音设计师",
    intro: "长期参与电影与影视声音创作，聚焦现场录音、声音设计与后期声音协作。",
    worksHeading: "代表作品",
    works: [
      "《我们的田野》 (1981；1983年文化部推荐参加美国第十届学生电影节)",
      "《摇滚青年》 (1988)",
      "《找乐》 (1992；东京电影节青年导演奖、柏林电影节评委会特别奖等)",
      "《无人喝彩》 (1993)",
      "《与往事干杯》 (1994)",
      "《我爱我家》 (1994；大型情景喜剧)",
      "《龙城正月》 (1995；第17届中国电影金鸡奖最佳录音提名)",
      "《丽江的故事》 (1999；第5届中国纪录片学术奖单项奖最佳录音奖)",
      "《漂亮妈妈》",
      "《蓝色爱情》",
      "《生活秀》 (上海国际电影节最佳影片)",
      "《暖》 (东京电影节金麒麟奖)",
      "《情人节》",
      "《愚公移山》",
      "《萧红》",
      "《美人草》 (第24届中国电影金鸡奖最佳录音提名)",
      "《清水的故事》",
      "《海的故事》",
      "《喊过岭的故事》",
      "《春滋味》",
      "《岁岁清明》",
      "《大工匠》 (电视剧)",
      "《秋之白华》 (第28届中国电影金鸡奖最佳录音提名)",
      "《大唐玄奘》 (2016)",
      "《战争子午线》",
      "《天出血》",
      "《消失的女人》",
      "《民警故事》",
      "《夏日暖洋洋》"
    ],
    aboutHeading: "关于",
    aboutText: "1978年毕业于北京电影学院录音系。",
    certText: "CMDb 华语影视从业认证"
  },
  en: {
    pageTitle: "Chao Jun | Personal Card",
    kicker: "Film & Television Sound Profile",
    name: "Chao Jun",
    title: "Production Sound Mixer & Sound Designer",
    intro: "Focused on film and screen sound creation, including location sound, sound design, and post-production collaboration.",
    worksHeading: "Selected Works",
    works: [
      "《我们的田野》 (1981；1983年文化部推荐参加美国第十届学生电影节)",
      "《摇滚青年》 (1988)",
      "《找乐》 (1992；东京电影节青年导演奖、柏林电影节评委会特别奖等)",
      "《无人喝彩》 (1993)",
      "《与往事干杯》 (1994)",
      "《我爱我家》 (1994；大型情景喜剧)",
      "《龙城正月》 (1995；第17届中国电影金鸡奖最佳录音提名)",
      "《丽江的故事》 (1999；第5届中国纪录片学术奖单项奖最佳录音奖)",
      "《漂亮妈妈》",
      "《蓝色爱情》",
      "《生活秀》 (上海国际电影节最佳影片)",
      "《暖》 (东京电影节金麒麟奖)",
      "《情人节》",
      "《愚公移山》",
      "《萧红》",
      "《美人草》 (第24届中国电影金鸡奖最佳录音提名)",
      "《清水的故事》",
      "《海的故事》",
      "《喊过岭的故事》",
      "《春滋味》",
      "《岁岁清明》",
      "《大工匠》 (电视剧)",
      "《秋之白华》 (第28届中国电影金鸡奖最佳录音提名)",
      "《大唐玄奘》 (2016)",
      "《战争子午线》",
      "《天出血》",
      "《消失的女人》",
      "《民警故事》",
      "《夏日暖洋洋》"
    ],
    aboutHeading: "About",
    aboutText: "Graduated from the Sound Department of Beijing Film Academy in 1978.",
    certText: "CMDb Industry Profile"
  }
};

const POSTERS = [
  {
    slot: "poster-primary",
    filmZh: "大唐玄奘",
    filmEn: "Xuan Zang",
    urls: [
      "大唐玄奘海报/f43531e066b2bef5016c6143af8597b5ddbc1bb0d7878-o4COaU_fw658.webp",
      "大唐玄奘海报/R.jpg",
      "大唐玄奘海报/纪念柯南·道尔诞辰.png"
    ]
  },
  {
    slot: "poster-left",
    filmZh: "龙城正月",
    filmEn: "Lunar New Year",
    urls: [
      "龙城正月海报/42253715.jpg",
      "龙城正月海报/OIP.webp"
    ]
  },
  {
    slot: "poster-right",
    filmZh: "秋之白华",
    filmEn: "Qiuzhi Baihua",
    urls: [
      "秋之白华海报/R.jpg",
      "秋之白华海报/R (1).jpg"
    ]
  }
];

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function renderLanguage(lang) {
  const data = CONTENT[lang] || CONTENT.zh;
  document.body.dataset.lang = lang;
  document.title = data.pageTitle;

  setText("kicker", data.kicker);
  setText("name", data.name);
  setText("title", data.title);
  setText("intro", data.intro);
  setText("works-heading", data.worksHeading);
  setText("about-heading", data.aboutHeading);
  setText("about-text", data.aboutText);
  setText("cert-link", data.certText);

  const worksList = document.getElementById("works-list");
  if (!worksList) return;
  worksList.innerHTML = "";
  const rows = [];
  let row = [];
  let rowLength = 0;
  data.works.forEach((work) => {
    const nextLength = rowLength + work.length;
    if (row.length && (row.length >= 2 || nextLength > 56)) {
      rows.push(row);
      row = [];
      rowLength = 0;
    }
    row.push(work);
    rowLength += work.length;
  });
  if (row.length) rows.push(row);

  rows.forEach((rowItems) => {
    const li = document.createElement("li");
    li.textContent = rowItems.join("    /    ");
    worksList.appendChild(li);
  });
  resetCreditsRoll(worksList);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.setLang === lang);
  });
}

function resetCreditsRoll(worksList) {
  const windowNode = worksList.closest(".credits-window");
  if (!windowNode) return;

  worksList.style.animation = "none";
  requestAnimationFrame(() => {
    const visibleHeight = windowNode.clientHeight;
    const travel = worksList.scrollHeight + visibleHeight;
    const duration = Math.max(34, Math.round(travel / 22));
    worksList.style.setProperty("--credits-start", `${visibleHeight}px`);
    worksList.style.setProperty("--credits-end", `-${worksList.scrollHeight}px`);
    worksList.style.setProperty("--credits-duration", `${duration}s`);
    worksList.style.animation = "";
  });
}

function tryLoadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.referrerPolicy = "no-referrer";
    img.onload = () => resolve(url);
    img.onerror = () => reject(new Error("failed"));
    img.src = encodeURI(url);
  });
}

async function resolvePosterUrl(urls) {
  for (const url of urls) {
    try {
      const loaded = await tryLoadImage(url);
      return loaded;
    } catch (_) {
      // Try next candidate URL.
    }
  }
  return null;
}

async function mountPosters() {
  const results = await Promise.all(
    POSTERS.map(async (poster) => {
      const node = document.getElementById(poster.slot);
      if (!node) return false;

      const url = await resolvePosterUrl(poster.urls);
      if (!url) return false;

      node.style.backgroundImage = `url("${encodeURI(url)}")`;
      node.classList.add("loaded");
      return true;
    })
  );

  const hasAny = results.some(Boolean);
  document.body.classList.toggle("has-posters", hasAny);
  document.body.classList.toggle("no-posters", !hasAny);
}

function bindLanguageToggle() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      renderLanguage(btn.dataset.setLang || "zh");
    });
  });
}

bindLanguageToggle();
renderLanguage("zh");
mountPosters();
