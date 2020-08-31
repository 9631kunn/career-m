import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

const SiteJson = () => {
  const data = useStaticQuery(graphql`
    query SiteMetaQuery {
      site {
        siteMetadata {
          title
          siteUrl
          description
          companyName
          copyrightYear
        }
      }
    }
  `)
  const {
    title,
    siteUrl,
    description,
    companyName,
    copyrightYear,
  } = data.site.siteMetadata

  const json = {
    "@context": "http://schema.org",
    "@type": "website",
    name: title,
    inLanguage: "jp",
    publisher: {
      "@type": "Organization",
      name: companyName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/logo.png`,
      },
    },
    copyrightYear: copyrightYear, //コピーライトの日付
    headline: title,
    description: description,
    url: siteUrl,
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(json)}</script>
    </Helmet>
  )
}

export default SiteJson
