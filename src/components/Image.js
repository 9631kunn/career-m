import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = ({ filename, className = "", alt = "" }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((e) => {
        return e.node.relativePath.includes(filename);
      });

      if (!image) return;

      const imageSizes = image.node.childImageSharp.sizes;
      return <Img fluid={imageSizes} className={className} alt={alt} />;
    }}
  />
);

export default Image;
