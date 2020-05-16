import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function CelticOrnamentBookOfKells(): React.ReactElement {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(
                relativePath: { eq: "celtic_ornament_book_of_kells.png" }
            ) {
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
                alt={`Celtic Ornament - Book Of Kells`}
                fluid={data.placeholderImage.childImageSharp.fluid}
            />
        </Zoom>
    )
}
