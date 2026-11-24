export interface Project {
  name: string;
  summary: string;
  detail: string;
  year: string;
  status: "维护中" | "开源" | "归档";
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
  featured?: boolean;
  image: string;
  imageAlt: string;
  artTitle: string;
  artArtist: string;
  artYear: string;
}

export const PROJECTS: Project[] = [
  {
    name: "ScreenTranslate",
    summary: "跨平台屏幕 OCR 截图翻译工具，框选屏幕区域即可原位悬浮译文。",
    detail:
      "支持 Windows 与 macOS。可自由切换本地或云端 OCR 引擎，接入 OpenAI 兼容接口及常规翻译服务，并提供对照阅读视图、全局快捷键、主题自定义与应用内更新。",
    year: "2026",
    status: "维护中",
    stack: ["Windows", "macOS", "OCR", "OpenAI API"],
    repoUrl: "https://github.com/reevebyte/ScreenTranslate",
    featured: true,
    image: "/art/project-screentranslate.jpg",
    imageAlt: "勃鲁盖尔与鲁本斯 1617 年《视觉的寓言》，普拉多博物馆馆藏",
    artTitle: "The Sense of Sight",
    artArtist: "Brueghel & Rubens",
    artYear: "1617",
  },
  {
    name: "reevebyte.github.io",
    summary: "你正在看的个人主页，用 Astro 5 做的静态站点。",
    detail:
      "基于 Astro 5 构建，使用公版博物馆油画与铜版画素材，包含全出血分屏构图、ScreenTranslate 交互演示、⌘K 快捷面板以及基于 Markdown 的随笔与 RSS 订阅。",
    year: "2026",
    status: "开源",
    stack: ["Astro 5", "TypeScript", "CSS", "GitHub Actions"],
    repoUrl: "https://github.com/reevebyte/reevebyte.github.io",
    demoUrl: "https://reevebyte.github.io",
    featured: true,
    image: "/art/project-homepage.jpg",
    imageAlt: "帕尼尼 1757 年《现代罗马画廊》，大都会艺术博物馆馆藏",
    artTitle: "Modern Rome",
    artArtist: "Giovanni Paolo Panini",
    artYear: "1757",
  },
];
