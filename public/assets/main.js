const CONTENT = {
  zh: {
    pageTitle: "晁军 | 电影录音师、声音设计师",
    kicker: "影视声音创作档案",
    name: "晁军",
    title: "电影录音师、声音设计师",
    intro: "长期参与电影与影视声音创作，聚焦现场录音、声音设计与后期声音协作。",
    worksHeading: "代表作品",
    aboutHeading: "关于",
    aboutText: "1978年毕业于北京电影学院录音系。",
    contactHeading: "联系",
    contactTodo: "待补充",
    certText: "CMDb 华语影视从业认证",
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
    ]
  },
  en: {
    pageTitle: "Chao Jun | Production Sound Mixer & Sound Designer",
    kicker: "Film & Television Sound Profile",
    name: "Chao Jun",
    title: "Production Sound Mixer & Sound Designer",
    intro: "Focused on film and screen sound creation, including location sound, sound design, and post-production collaboration.",
    worksHeading: "Selected Works",
    aboutHeading: "About",
    aboutText: "Graduated from the Sound Department of Beijing Film Academy in 1978.",
    contactHeading: "Contact",
    contactTodo: "To be added",
    certText: "CMDb Industry Profile",
    /* 片名保留中文原名（国际影展通行做法）；仅对海报上有官方英文名的两部标注英译。
       荣誉与年份按英文片目惯例翻译。其余片名的官方英译未确认，不臆造。 */
    works: [
      "《我们的田野》 (1981 — Recommended by the Ministry of Culture for the 10th US Student Film Festival, 1983)",
      "《摇滚青年》 (1988)",
      "《找乐》 (1992 — Young Cinema Award, Tokyo IFF; Special Jury Prize, Berlin IFF)",
      "《无人喝彩》 (1993)",
      "《与往事干杯》 (1994)",
      "《我爱我家》 (1994 — sitcom series)",
      "《龙城正月》 (1995 — Best Sound nomination, 17th Golden Rooster Awards)",
      "《丽江的故事》 (1999 — Best Sound, 5th China Documentary Academic Award)",
      "《漂亮妈妈》",
      "《蓝色爱情》",
      "《生活秀》 (Best Film, Shanghai International Film Festival)",
      "《暖》 (Golden Kirin Award, Tokyo IFF)",
      "《情人节》",
      "《愚公移山》",
      "《萧红》",
      "《美人草》 (Best Sound nomination, 24th Golden Rooster Awards)",
      "《清水的故事》",
      "《海的故事》",
      "《喊过岭的故事》",
      "《春滋味》",
      "《岁岁清明》",
      "《大工匠》 (TV series)",
      "《秋之白华》 The Seal of Love (Best Sound nomination, 28th Golden Rooster Awards)",
      "《大唐玄奘》 Xuan Zang (2016)",
      "《战争子午线》",
      "《天出血》",
      "《消失的女人》",
      "《民警故事》",
      "《夏日暖洋洋》"
    ]
  }
};

/* 联系方式：有 href 的渲染成链接，没有的渲染成纯文本 */
const CONTACT = [
  { label: "Email", value: "551808@qq.com", href: "mailto:551808@qq.com" },
  { label: "WeChat", value: "soundworks123", href: null }
];

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

/* 按视觉宽度估算：中日韩字符算 1，其余算 0.55，避免英文行比中文行长得离谱 */
function visualLength(str) {
  let n = 0;
  for (const ch of str) {
    n += ch.charCodeAt(0) > 0x2e80 ? 1 : 0.55;
  }
  return n;
}

function renderContact(lang) {
  const list = document.getElementById("contact-list");
  if (!list) return;
  const data = CONTENT[lang] || CONTENT.zh;
  list.innerHTML = "";

  CONTACT.forEach((item) => {
    const li = document.createElement("li");
    const label = document.createElement("span");
    label.className = "contact-label";
    label.textContent = item.label;
    li.appendChild(label);

    if (item.href) {
      const a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.value;
      li.appendChild(a);
    } else if (item.value) {
      const span = document.createElement("span");
      span.className = "contact-value";
      span.textContent = item.value;
      li.appendChild(span);
    } else {
      const ph = document.createElement("span");
      ph.className = "contact-todo";
      ph.textContent = data.contactTodo;
      li.appendChild(ph);
    }
    list.appendChild(li);
  });
}

function renderLanguage(lang) {
  const data = CONTENT[lang] || CONTENT.zh;
  document.body.dataset.lang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = data.pageTitle;

  setText("kicker", data.kicker);
  setText("name", data.name);
  setText("title", data.title);
  setText("intro", data.intro);
  setText("works-heading", data.worksHeading);
  setText("about-heading", data.aboutHeading);
  setText("about-text", data.aboutText);
  setText("contact-heading", data.contactHeading);
  setText("cert-link", data.certText);

  const worksList = document.getElementById("works-list");
  if (worksList) {
    worksList.innerHTML = "";
    const rows = [];
    let row = [];
    let rowLength = 0;
    data.works.forEach((work) => {
      const nextLength = rowLength + visualLength(work);
      if (row.length && (row.length >= 2 || nextLength > 56)) {
        rows.push(row);
        row = [];
        rowLength = 0;
      }
      row.push(work);
      rowLength += visualLength(work);
    });
    if (row.length) rows.push(row);

    rows.forEach((rowItems) => {
      const li = document.createElement("li");
      li.textContent = rowItems.join("    /    ");
      worksList.appendChild(li);
    });
    resetCreditsRoll(worksList);
  }

  renderContact(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const on = btn.dataset.setLang === lang;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  });
}

function resetCreditsRoll(worksList) {
  const windowNode = worksList.closest(".credits-window");
  if (!windowNode) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    worksList.style.animation = "none";
    worksList.style.transform = "none";
    return;
  }

  worksList.style.animation = "none";
  requestAnimationFrame(() => {
    const visibleHeight = windowNode.clientHeight;
    const travel = worksList.scrollHeight + visibleHeight;
    const duration = Math.max(38, Math.round(travel / 20));
    worksList.style.setProperty("--credits-start", `${visibleHeight}px`);
    worksList.style.setProperty("--credits-end", `-${worksList.scrollHeight}px`);
    worksList.style.setProperty("--credits-duration", `${duration}s`);
    worksList.style.animation = "";
  });
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
