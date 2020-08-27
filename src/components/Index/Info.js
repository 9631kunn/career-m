import React from "react"

import Section from "./Section"
import Image from "../Image"

import styled from "styled-components"

const Info = () => {
  const gapY = props => props.theme.gapY

  const Wrap = styled.div`
    align-items: center;
    background: #fff;
    display: grid;
    gap: 20px;
    grid-template-columns: 70px 1fr;
    padding: 60px ${gapY};
    .logo-l,
    .logo-n {
      img {
        object-fit: contain !important;
      }
    }
    .logo-l {
      img {
        left: 50% !important;
        transform: translateX(-50%);
        width: 30px !important;
      }
    }
    .logo-n {
      img {
        width: 70px !important;
      }
    }
  `

  return (
    <Section>
      <Wrap>
        <Image
          filename="l_logo.png"
          className="logo-l"
          alt="ベリーベスト法律事務所ロゴ"
        />
        <p>
          株式会社キャリア未来図はベリーベスト法律事務所と顧問契約を締結してます。
        </p>
        <Image
          filename="n_logo.jpg"
          className="logo-n"
          alt="認定特定非営利活動法人カタリバロゴ"
        />
        <p>
          株式会社キャリア未来図は認定特定非営利活動法人カタリバの活動を支援しています。
        </p>
      </Wrap>
    </Section>
  )
}

export default Info
