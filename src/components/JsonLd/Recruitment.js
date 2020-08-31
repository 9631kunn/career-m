import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

const RecruitmentJson = () => {
  const data = useStaticQuery(graphql`
    query RecruitmentQuery {
      site {
        siteMetadata {
          siteUrl
          description
          companyName
          founder
          foundingDate
          telephone
          faxNumber
          streetAddress
          addressLocality
          addressRegion
          postalCode
          addressCountry
        }
      }
    }
  `)
  const {
    siteUrl,
    companyName,
    addressLocality,
    addressRegion,
    postalCode,
    streetAddress,
    addressCountry,
  } = data.site.siteMetadata

  const json = {
    "@context": "http://schema.org",
    "@type": "JobPosting",
    title: "派遣人材",
    datePosted: "2020-09-01",
    validThrough: "2030-09-01T00:00",
    hiringOrganization: {
      "@type": "Organization",
      name: companyName,
      sameAs: siteUrl,
      logo: `${siteUrl}/assets/logo.png`,
    },
    jobLocation: [
      {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: addressLocality,
          addressRegion: addressRegion,
          postalCode: postalCode,
          streetAddress: streetAddress,
          addressCountry: addressCountry,
        },
      },
    ],
    employmentType: "FULL_TIME",
    description:
      "<p>転職を希望する方がプロフィールを登録し、転職先をご紹介するサービスです。求人案件を紹介、また転職に関する様々なアドバイス等のサービスを無料でご提供しています。</p>",
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(json)}</script>
    </Helmet>
  )
}

export default RecruitmentJson
