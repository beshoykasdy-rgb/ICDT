/* ===== الروابط: عدّل أي رابط من هنا فقط =====
   اترك الرابط فارغًا "" ويظهر الكارت "قريبًا" ولا يفتح شيئًا */
const LINKS = {
    hospitalCard: "https://engyfayez.github.io/index/hospital_card.html",
    hospitalKPIs: "",   // رابط مؤشرات المستشفيات الشهرية (KPIs) - يُضاف لاحقًا
    surgeries: "https://engyfayez.github.io/index/",
    org: "https://liart-three-95.vercel.app",
    deptCard: "",   // رابط الكارت التعريفي للإدارات الصحية
    deptKPIs: ""    // رابط المؤشرات الشهرية بالإدارات
};

/* الأيقونات */
const ICONS = {
    hospital: '<svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M12 8v4M10 10h4"/></svg>',
    gauge: '<svg viewBox="0 0 24 24"><path d="M3.3 17a9 9 0 1 1 17.4 0"/><path d="M12 14l4-5"/><circle cx="12" cy="14" r="1.2"/><path d="M7 17h10"/></svg>',
    pulse: '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/><path d="M6.5 12h3l1.5-3 2.5 6 1.5-3h2.5"/></svg>',
    org: '<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h3M8 11h3M8 15h3M14 7h2M14 11h2M14 15h2"/></svg>',
    trend: '<svg viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>',
    lock: '<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>'
};

const SECTIONS = {
    hospitals: [
        { icon: "hospital", accent: "#d9b46c", title: "الكارت التعريفي للمستشفيات", desc: "بيانات وإمكانات وخدمات كل مستشفى", link: LINKS.hospitalCard },
        { icon: "gauge", accent: "#4aa3ff", title: "المؤشرات الشهرية بالمستشفيات KPIs", desc: "متابعة مؤشرات الأداء الشهرية للمستشفيات", link: LINKS.hospitalKPIs },
        { icon: "pulse", accent: "#ff6b73", title: "العمليات الجراحية", desc: "التقرير الإحصائي للعمليات الجراحية", link: LINKS.surgeries },
        { icon: "org", accent: "#8b7bff", title: "القيادة الصحية", desc: "بيانات وقيادات القطاع الصحي", link: LINKS.org }
    ],
    departments: [
        { icon: "org", accent: "#d9b46c", title: "الكارت التعريفي للإدارات الصحية", desc: "بيانات وإمكانات كل إدارة صحية", link: LINKS.deptCard },
        { icon: "trend", accent: "#4aa3ff", title: "المؤشرات الشهرية بالإدارات", desc: "متابعة مؤشرات الأداء الشهرية للإدارات", link: LINKS.deptKPIs }
    ]
};

Object.entries(SECTIONS).forEach(([id, items]) => {
    const box = document.getElementById(id);
    items.forEach((it, i) => {
        const a = document.createElement("a");
        a.className = "card" + (it.link ? "" : " disabled");
        a.style.setProperty("--accent", it.accent);
        a.style.setProperty("--i", i);
        if (it.link) {
            a.href = it.link;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
        } else {
            a.setAttribute("aria-disabled", "true");
            a.addEventListener("click", e => e.preventDefault());
        }
        a.innerHTML =
            (it.link ? "" : `<span class="badge">${ICONS.lock}قريبًا</span>`) +
            `<div class="icon">${ICONS[it.icon]}</div>
       <h3>${it.title}</h3>
       <p>${it.desc}</p>
       <div class="go"><span>${it.link ? "فتح التقرير" : "الرابط قيد الإعداد"}</span>${ICONS.arrow}</div>`;
        a.addEventListener("pointermove", e => {
            const r = a.getBoundingClientRect();
            a.style.setProperty("--mx", (e.clientX - r.left) + "px");
            a.style.setProperty("--my", (e.clientY - r.top) + "px");
        });
        box.appendChild(a);
    });
});

/* التاريخ والوقت */
function tick() {
    const d = new Date();
    const date = d.toLocaleDateString("ar-EG", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    const time = d.toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" });
    document.getElementById("clock").textContent = date + "  •  " + time;
}
tick(); setInterval(tick, 30000);
