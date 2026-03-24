export const getNavLinks = (t) => [
  { href: "/services", label: t("nav.services") },
  { href: "/nosoffres", label: t("nav.offers") },
  { href: "/realisation", label: t("nav.projects") },
  {
    href: "/nosmodeles",
    label: t("nav.models"),
    dropdown: [
      { href: "/nosmodeles/banniere", label: t("nav.banners") },

      // add more subsections here…
    ],
  },
  { href: "/Blog", label: t("nav.blogs") },
  { href: "/contact", label: t("nav.contact") },
];
export const galeries = [
  {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760271073/linkedinbanner_dpvxlv.png",
    title: "Logo & Visual identity",
    alt: "Project 4",
  },
  {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760271038/flyer2_dw4dzm.png",
    title: "Brand Guidelines",
    alt: "Project 5",
  },
  {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760271020/colors_hfaewi.png",
    title: "Visual Identity",
    alt: "Project 3",
  },
  {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760271017/beautycenter-image_rdkk8i.png",
    title: "Branding & Design",
    alt: "Project 1",
  },
  {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760271123/women-collection-template_eof2o2.png",
    title: "Digital ",
    alt: "Project 2",
  },
  {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760271064/flyer4_p0wvv5.png",
    title: "HappyBirthday",
    alt: "Project 6",
  },
  {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760271051/flyer5_nbbuqe.png",
    title: "House For Sale",
    alt: "Project 6",
  },
  {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760271049/flyer6_pmaic6.png",
    title: "Events",
    alt: "Project 6",
  },
];
export const linkedinBanners = [
  {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760270951/banner2_xrk36z.png",
    title: "Digital Marketing",
    price: "15 TND ",
  },
  {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760270960/banner3_byzfx3.png",
    title: "Software Engineering",
    price: "15 TND  ",
  },
  {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760270970/banner5_smuzde.png",
    title: "Business Continutity ",
    price: "10 TND  ",
  },
  {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760270973/banner4_z4sfxp.png",
    title: "Web Designer",
    price: "10 TND ",
  },
  {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760270990/banner7_m7zg8l.png",
    title: "Director",
    price: "20 TND  ",
  },
    {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760270977/banner10_xbwrr9.png",
    title: "Web Designer",
    price: "15 TND ",
  },
  {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760271000/banner9_umq83k.png",
    title: "Creative Agency",
    price: "20 TND  ",
  },
  {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760271007/banner8_lhl1os.png",
    title: "Business Agency",
    price: "20 TND  ",
  },
  {
    src: "https://res.cloudinary.com/wavency/image/upload/v1760270944/banner1_gjz9nc.png",
    title: "UI/UX Designer",
    price: "20 TND  ",
  },
];

export const templates = [
  {
    id: 1,
    title: "Designer",
    image:
      "https://res.cloudinary.com/wavency/image/upload/v1760290693/graphicdesigner_bwxdv4.png",
    price: "149,000 TND",
    oldPrice: "259 TND",
    rating: 1.2,
    category: "modéle",
  },
  {
    id: 2,
    title: "Front-end Developer",
    image:
      "https://res.cloudinary.com/wavency/image/upload/v1760290676/Developer_qqpa3u.png",
    price: "129,000 TND",
    oldPrice: "179 TND",
    rating: 1.2,
    category: "modéle",
  },
  {
    id: 3,
    title: "Creative Developer ",
    image:
      "https://res.cloudinary.com/wavency/image/upload/v1760290602/00_Preview.__large_preview_urkiwz.png",
    rating: 1.2,
    isFreeWithFollow: true,
    category: "modéle",
  },
];

const blogData = [
  {
    id: 1,
    title: "blogs.reactBasics.title",
    category:"Tutorials",
    date: "2025-09-15",
    image: "https://res.cloudinary.com/wavency/image/upload/v1760271071/reactbasics_u3w1sx.png",
    excerpt: "blogs.reactBasics.excerpt",
    introduction: "blogs.reactBasics.introduction",
    headingh1: "blogs.reactBasics.headingh1",
    content: {
      keyTakeawaysList: [
        "blogs.reactBasics.keyTakeaways.item1",
        "blogs.reactBasics.keyTakeaways.item2",
        "blogs.reactBasics.keyTakeaways.item3",
        "blogs.reactBasics.keyTakeaways.item4",
        "blogs.reactBasics.keyTakeaways.item5",
      ],
      sections: [
        {
          heading: "blogs.reactBasics.section1.heading",
          paragraphs: ["blogs.reactBasics.section1.p1"],
        },
        {
          heading: "blogs.reactBasics.section2.heading",
          paragraphs: ["blogs.reactBasics.section2.p1"],
        },
        {
          heading: "blogs.reactBasics.section3.heading",
          paragraphs: ["blogs.reactBasics.section3.p1"],
        },
        {
          heading: "blogs.reactBasics.section4.heading",
          paragraphs: ["blogs.reactBasics.section4.p1"],
        },
        {
          heading: "blogs.reactBasics.section5.heading",
          paragraphs: ["blogs.reactBasics.section5.p1"],
        },
        {
          heading: "blogs.reactBasics.section6.heading",
          paragraphs: ["blogs.reactBasics.section6.p1"],
        },
        {
          heading: "blogs.reactBasics.section7.heading",
          paragraphs: ["blogs.reactBasics.section7.p1"],
        },
        {
          heading: "blogs.reactBasics.section8.heading",
          paragraphs: ["blogs.reactBasics.section8.p1"],
        },
        {
          heading: "blogs.reactBasics.section9.heading",
          paragraphs: ["blogs.reactBasics.section9.p1"],
        },
        {
          heading: "blogs.reactBasics.section10.heading",
          paragraphs: ["blogs.reactBasics.section10.p1"],
        },
        {
          heading: "blogs.reactBasics.section11.heading",
          paragraphs: ["blogs.reactBasics.section11.p1"],
        },
        {
          heading: "blogs.reactBasics.section12.heading",
          paragraphs: ["blogs.reactBasics.section12.p1"],
        },
        {
          heading: "blogs.reactBasics.section13.heading",
          paragraphs: ["blogs.reactBasics.section13.p1"],
        },
        {
          heading: "blogs.reactBasics.section14.heading",
          paragraphs: ["blogs.reactBasics.section14.p1"],
        },
        {
          heading: "blogs.reactBasics.section15.heading",
          paragraphs: ["blogs.reactBasics.section15.p1"],
        },
        {
          heading: "blogs.reactBasics.section16.heading",
          paragraphs: ["blogs.reactBasics.section16.p1"],
        },
        {
          heading: "blogs.reactBasics.section17.heading",
          paragraphs: ["blogs.reactBasics.section17.p1"],
        },
        {
          heading: "blogs.reactBasics.section18.heading",
          paragraphs: ["blogs.reactBasics.section18.p1"],
        },
        {
          heading: "blogs.reactBasics.section19.heading",
          paragraphs: ["blogs.reactBasics.section19.p1"],
        },
        {
          heading: "blogs.reactBasics.section20.heading",
          paragraphs: ["blogs.reactBasics.section20.p1"],
        },
        {
          heading: "blogs.reactBasics.section21.heading",
          paragraphs: ["blogs.reactBasics.section21.p1"],
        },
        {
          heading: "blogs.reactBasics.section22.heading",
          paragraphs: ["blogs.reactBasics.section22.p1"],
        },
        {
          heading: "blogs.reactBasics.section23.heading",
          paragraphs: ["blogs.reactBasics.section23.p1"],
        },
        {
          heading: "blogs.reactBasics.section24.heading",
          paragraphs: ["blogs.reactBasics.section24.p1"],
        },
        {
          heading: "blogs.reactBasics.section25.heading",
          paragraphs: ["blogs.reactBasics.section25.p1"],
        },
        {
          heading: "blogs.reactBasics.section26.heading",
          paragraphs: ["blogs.reactBasics.section26.p1"],
        },
        {
          heading: "blogs.reactBasics.section27.heading",
          paragraphs: ["blogs.reactBasics.section27.p1"],
        },
        {
          heading: "blogs.reactBasics.section28.heading",
          paragraphs: ["blogs.reactBasics.section28.p1"],
        },
        {
          heading: "blogs.reactBasics.section29.heading",
          paragraphs: ["blogs.reactBasics.section29.p1"],
        },
        {
          heading: "blogs.reactBasics.section30.heading",
          paragraphs: ["blogs.reactBasics.section30.p1"],
        },
        {
          heading: "blogs.reactBasics.section31.heading",
          paragraphs: ["blogs.reactBasics.section31.p1"],
        },
        {
          heading: "blogs.reactBasics.section32.heading",
          paragraphs: ["blogs.reactBasics.section32.p1"],
        },
        {
          heading: "blogs.reactBasics.section33.heading",
          paragraphs: ["blogs.reactBasics.section33.p1"],
        },
        {
          heading: "blogs.reactBasics.section34.heading",
          paragraphs: ["blogs.reactBasics.section34.p1"],
        },
        {
          heading: "blogs.reactBasics.section35.heading",
          paragraphs: ["blogs.reactBasics.section35.p1"],
        },
        {
          heading: "blogs.reactBasics.section36.heading",
          paragraphs: ["blogs.reactBasics.section36.p1"],
        },
        {
          heading: "blogs.reactBasics.section37.heading",
          paragraphs: ["blogs.reactBasics.section37.p1"],
        },
        {
          heading: "blogs.reactBasics.section38.heading",
          paragraphs: ["blogs.reactBasics.section38.p1"],
        },
        {
          heading: "blogs.reactBasics.section39.heading",
          paragraphs: ["blogs.reactBasics.section39.p1"],
        },
        {
          heading: "blogs.reactBasics.section40.heading",
          paragraphs: ["blogs.reactBasics.section40.p1"],
        },
        {
          heading: "blogs.reactBasics.section41.heading",
          paragraphs: ["blogs.reactBasics.section41.p1"],
        },
      ],
    },
  },
  {
    id: 2,
    title: "blogs.webdesign.title",
    category:"News",
    date: "2025-09-17",
    excerpt: "blogs.webdesign.excerpt",
    introduction: "blogs.webdesign.introduction",
    headingh1: "blogs.webdesign.headingh1",
    image: "https://res.cloudinary.com/wavency/image/upload/v1760271116/webdesign_ei0zwg.png",
    content: {
      keyTakeawaysList: [
        "blogs.webdesign.keyTakeaways.item1",
        "blogs.webdesign.keyTakeaways.item2",
        "blogs.webdesign.keyTakeaways.item3",
        "blogs.webdesign.keyTakeaways.item4",
        "blogs.webdesign.keyTakeaways.item5",
        "blogs.webdesign.keyTakeaways.item6",
        "blogs.webdesign.keyTakeaways.item7",
      ],
      sections: [
        {
          heading: "blogs.webdesign.section1.heading",
          paragraphs: ["blogs.webdesign.section1.p1"],
        },
        {
          heading: "blogs.webdesign.section2.heading",
          paragraphs: ["blogs.webdesign.section2.p1"],
        },
        {
          heading: "blogs.webdesign.section3.heading",
          paragraphs: ["blogs.webdesign.section3.p1"],
        },
        {
          heading: "blogs.webdesign.section4.heading",
          paragraphs: ["blogs.webdesign.section4.p1"],
        },
        {
          heading: "blogs.webdesign.section5.heading",
          paragraphs: ["blogs.webdesign.section5.p1"],
        },
        {
          heading: "blogs.webdesign.section6.heading",
          paragraphs: ["blogs.webdesign.section6.p1"],
        },
        {
          heading: "blogs.webdesign.section7.heading",
          paragraphs: ["blogs.webdesign.section7.p1"],
        },
      ],
    },
  },
];

export default blogData;
