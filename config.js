// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic homepage.
// No HTML/CSS knowledge required.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Xukun Luan",
  initials:   "",
  role:       "PhD Candidate",
  university: "Beijing Institute of Technology",
  email:      "xukunluan[at]bit[dot]edu[dot]cn",
  bio:        "My research primarily focuses on inference attacks🕵️, poisoning attacks😈, differential privacy🔐, embodied intelligence🦾, and reinforcement learning🕹️. I welcome discussions, academic exchanges, and potential collaborations. Feel free to connect if you share similar research interests!",
  photo:      "",   // optional: path to your photo, e.g. "assets/photo.jpg"

  // stats: [
  //   { value: "10+",  label: "Publications" },
  //   { value: "200+", label: "Citations" },
  //   { value: "5+",   label: "Projects" },
  // ],

  links: {
    // scholar: "https://scholar.google.com/",
    github:  "https://github.com/Zili1000",
    // twitter: "",          // leave empty to hide
    // cv:      "assets/cv.pdf",
  },

  publications: [
    {
      year:     2026,
      title:    "Code-Poisoning Property Inference Attacks",
      authors:  "Xukun Luan, Yuhui Gong, Gang Zhang, Zixuan Huang, Yuanguo Bi, Xuesong Li, Jinyan Liu",
      venue:    "arXiv",
      links:    { pdf: "https://arxiv.org/abs/2607.15970", code: "https://github.com/Zili1000/CPPIA" },
      abstract: "",
    },
    {
      year:     2026,
      title:    "Is External Database Protection Static in Retrieval-Augmented Generation? Rethinking Privacy Preservation under Dynamic Queries",
      authors:  "Gang Zhang, Mingyu Tian, Xukun Luan, Yuanchi Ma, Jinyan Liu",
      venue:    "arXiv",
      links:    { pdf: "https://arxiv.org/abs/2607.14811"},
      abstract: "",
    },
    {
      year:     2026,
      title:    "VLALeaks: Membership Inference Attacks against Vision-Language-Action Models",
      authors:  "Xukun Luan, Jinyan Liu, Xuesong Li, Yuanguo Bi, Renjun Wu, Zhongxiang Lei, Di Wang",
      venue:    "arXiv",
      links:    { pdf: "https://arxiv.org/abs/2606.15165", code: "https://github.com/Zili1000/VLALeaks" },
      abstract: "",
    },
    {
      year:     2026,
      title:    "Poisoning-Assisted Membership Inference in Federated Learning",
      authors:  "Xukun Luan, Yuanguo Bi, Kuan Zhang, Zixuan Huang, Zhou Su, Tom H. Luan, Bing Hu",
      venue:    "TDSC",
      links:    { pdf: "https://xplorestaging.ieee.org/document/11544110/", code: "https://github.com/Zili1000/TEPE" },
      abstract: "",
    },
    {
      year:     2025,
      title:    "PDSA-FL: A Poisoning-Defense Secure Aggregation in Federated Learning",
      authors:  "Zixuan Huang, Yuanguo Bi, Kuan Zhang, Bing Hu, Zhou Su, Chong Tai, Xukun Luan",
      venue:    "TIFS",
      links:    { pdf: "https://xplorestaging.ieee.org/document/11078290/"},
      abstract: "",
    },
  ],

  // projects: [
  //   {
  //     name: "Project Name",
  //     desc: "Brief description of your project and its impact.",
  //     tags: ["Python", "PyTorch"],
  //     url:  "#",
  //   },
  // ],

  // news: [
  //   { date: "2025.01", badge: "New",   text: "Paper accepted at Conference 2025!" },
  //   { date: "2024.09", badge: "Award", text: "Received fellowship / award." },
  // ],

  // education: [
  //   { period: "2020–Present", degree: "Ph.D. in Computer Science", institution: "Your University" },
  //   { period: "2016–2020",    degree: "B.S. in Computer Science",  institution: "Your University" },
  // ],

  // experience: [
  //   { period: "Summer 2024", role: "Research Intern", institution: "Research Lab / Company" },
  // ],
};
