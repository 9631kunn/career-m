import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

const CompanyJson = () => {
  const data = useStaticQuery(graphql`
    query CompanyMetaQuery {
      site {
        siteMetadata {
          siteUrl
          description
          companyName
          founder
          foundingDate
          telephone
          faxNumber
          addressLocality
          addressRegion
          postalCode
          streetAddress
          addressCountry
        }
      }
    }
  `)
  const {
    siteUrl,
    description,
    companyName,
    founder,
    foundingDate,
    telephone,
    faxNumber,
    addressLocality,
    addressRegion,
    postalCode,
    streetAddress,
    addressCountry,
  } = data.site.siteMetadata

  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyName,
    founder: founder,
    foundingDate: foundingDate,
    description: description,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/assets/logo.png`,
      width: 150,
      height: 150,
    },
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}/assets/ogp.png`,
      height: 630,
      width: 1200,
    },
    telephone: telephone,
    faxNumber: faxNumber,
    address: {
      "@type": "PostalAddress",
      addressLocality: addressLocality,
      addressRegion: addressRegion,
      postalCode: postalCode,
      streetAddress: streetAddress,
      addressCountry: addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: telephone,
        contactType: "customer service",
      },
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(json)}</script>
    </Helmet>
  )
}

export default CompanyJson
