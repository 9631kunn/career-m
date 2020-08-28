module.exports = {
  siteMetadata: {
    title: "キャリア未来図",
    siteUrl: "https://career-m.com",
    description: "description from gatsby-config",
    // author: "@twitter",
    companyName: "キャリア未来図",
    founder: "", // 創業者名
    foundingDate: "", // 設立日
    telephone: "", // 電話番号（先頭に"+81-"）
    faxNumber: "", // FAX番号（先頭に"+81-"）
    addressLocality: "港区浜松町", // 市町村区
    addressRegion: "東京都", // 都道府県
    postalCode: "105-0013", // 郵便番号
    streetAddress: "二丁目2番15号 浜松町ダイヤビル2F", // 番地
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
