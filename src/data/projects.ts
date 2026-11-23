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
  },
  {
    name: "reevebyte.github.io",
    summary: "你正在看的个人主页。采用瑞士工业平面网格与微交互重构，零框架负担。",
    detail:
      "基于 Astro 5 构建：内嵌可交互 ScreenTranslate 划词演示、Canvas 鼠标磁吸点阵背景、实时机械时钟仪表、Content Collections 随笔系统与 RSS 订阅源。",
    year: "2026",
    status: "开源",
    stack: ["Astro 5", "TypeScript", "Canvas", "GitHub Actions"],
    repoUrl: "https://github.com/reevebyte/reevebyte.github.io",
    demoUrl: "https://reevebyte.github.io",
    featured: true,
  },
];
