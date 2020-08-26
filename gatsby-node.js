// Ref: https://www.gatsbyjs.com/docs/recipes/sourcing-data/

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const news = [
    { date: "2020-08-24", content: "testData1" },
    { date: "2020-08-25", content: "testData2" },
    { date: "2020-08-26", content: "testData3" },
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
}
