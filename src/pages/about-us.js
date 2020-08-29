import React from "react"

import Layout from "../components/Layout"
import PagesContainer from "../components/PagesContainer"

import styled from "styled-components"

const AboutUsPage = props => {
  const media = props => props.theme.media.m
  const mainColor = props => props.theme.color.subOp

  const data = [
    { th: " 商号", td: "株式会社キャリア未来図" },
    { th: "創業", td: "2019年1月" },
    {
      th: "所在地",
      td: "",
    },
    { th: "資本金", td: "500万円" },
    { th: "代表者", td: "代表取締役　太田　吉信" },
    { th: "業務内容", td: "有料職業紹介事業、および付帯関連する一切の業務" },
    { th: "許可番号", td: "13-ユ-310852" },
    {
      th: "取引先銀行",
      td: "三菱UFJ銀行、りそな銀行、城南信用金庫、 GMOあおぞら銀行、楽天銀行",
    },
    {
      th: "顧問",
      td: "ベリーベスト法律事務所、田口通税理士事務所、アクト労務経営センター",
    },
  ]

  const Table = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    display: table;
    width: 100%;
    th,
    td {
      display: block;
      padding: 0.5em;
    }
    th {
      background: ${mainColor};
      color: #fff;
    }
    td {
      border-inline-end: 2px solid #ccc;
      border-inline-start: 2px solid #ccc;
    }
    tr:last-of-type {
      border-block-end: 2px solid #ccc;
    }
    @media (min-width: ${media}) {
      th,
      td {
        border: 2px solid #ccc;
        display: table-cell;
      }
      th {
        background: #fff;
        color: inherit;
      }
    }
  `

  return (
    <Layout location={props.location}>
      <PagesContainer title="会社情報">
        <Table>
          <tbody>
            {data.map(d => (
              <>
                {d.th !== "所在地" && (
                  <tr>
                    <th>{d.th}</th>
                    <td>{d.td}</td>
                  </tr>
                )}
                {d.th === "所在地" && (
                  <tr>
                    <th>{d.th}</th>
                    <td>
                      <strong>本社</strong>
                      <p>〒105-0013</p>
                      <p>東京都港区浜松町2-2-15 浜松町ダイヤビル2</p>
                      <p>
                        TEL: <a href="tel:03-6777-0225">03-6777-0225</a>
                      </p>
                      <p>
                        メールアドレス:{" "}
                        <a href="mailto:info@career-m.co.jp">
                          info@career-m.co.jp
                        </a>
                      </p>
                      <br />
                      <strong>人材紹介事業部</strong>
                      <p>〒140-0004</p>
                      <p>東京都品川区南品川2-2-5 リードシー南品川ビル2F</p>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </Table>
      </PagesContainer>
    </Layout>
  )
}
export default AboutUsPage
