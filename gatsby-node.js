// Ref: https://www.gatsbyjs.com/docs/recipes/sourcing-data/

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const news = [{ date: "2020-09-01", content: "公式HPを開設しました" }]

  const menus = [
    { title: "ホーム", sub: "Home", link: "/" },
    { title: "事業紹介", sub: "Our Works", link: "/test1" },
    { title: "人材をお探しの企業様へ", sub: "Recruiter", link: "/test2" },
    { title: "求人", sub: "Recruitment", link: "/test3" },
    { title: "会社情報", sub: "About us", link: "/test4" },
    { title: "お問い合わせ", sub: "Get in touch", link: "/test5" },
  ]

  news.forEach(n => {
    const node = {
      date: n.date,
      content: n.content,
      id: createNodeId(
        `news-${n.date}-${Math.floor(Math.random() * 1000000000)}`
      ),
      internal: {
        type: "news",
        contentDigest: createContentDigest(n),
      },
    }
    actions.createNode(node)
  })

  menus.forEach(m => {
    const node = {
      title: m.title,
      sub: m.sub,
      link: m.link,
      id: createNodeId(`menu-${Math.floor(Math.random() * 1000000000)}`),
      internal: {
        type: "menus",
        contentDigest: createContentDigest(m),
      },
    }
    actions.createNode(node)
  })
}
