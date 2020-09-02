module.exports = {
  siteMetadata: {
    title: "キャリア未来図",
    siteUrl: "https://career-m.co.jp",
    description:
      "株式会社キャリア未来図では今までのご自身のキャリアを見つめ直すお手伝いをさせたいただき、より輝けるような転職先をご紹介させていただきます。 まずは皆様の熱い思いを聞かせてください。",
    // author: "@twitter",
    companyName: "キャリア未来図",
    founder: "太田　吉信", // 創業者名
    foundingDate: "平成31年1月21日", // 設立日
    telephone: "", // 電話番号（先頭に"+81-"）
    faxNumber: "", // FAX番号（先頭に"+81-"）
    addressLocality: "品川区南品川", // 市町村区
    addressRegion: "東京都", // 都道府県
    postalCode: "140-0004", // 郵便番号
    streetAddress: "二丁目2番5号 リードシー南品川ビル2F", // 番地
    addressCountry: "JP",
    copyrightYear: "2020-08-24T00:00:00+0000",
  },
  pathPrefix: `/`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `キャリア未来図`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
        include_favicon: false,
      },
    },
  ],
}
