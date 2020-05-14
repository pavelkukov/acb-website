import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Tablet4(): React.ReactElement {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "tablet4.png" }) {
                childImageSharp {
                    fluid(maxWidth: 480) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Zoom>
            <Img
                alt={`ACB - tablet demo`}
                fluid={data.placeholderImage.childImageSharp.fluid}
            />
        </Zoom>
    )
}
