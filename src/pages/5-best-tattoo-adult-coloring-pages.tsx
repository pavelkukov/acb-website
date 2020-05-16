import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { FlexRow, FlexColTextCenter } from '../components/layout/FlexRow'

import ButterflyTattoo from '../components/images/ButterflyTattoo'
import CelticOrnamentBookOfKells from '../components/images/CelticOrnamentBookOfKells'
import LockedHeart from '../components/images/LockedHeart'
import PoppiesColoringPage from '../components/images/PoppiesColoringPage'
import FairyTattoo from '../components/images/FairyTattoo'

export default function PrivacyPolicy(): React.ReactElement {
    return (
        <Layout>
            <SEO title="5 Best Girl Tattoos" />
            <h1
                style={{ textAlign: 'center' }}
                id="adult-coloring-pages-summer-beach"
            >
                5 Best Tattoo Designs For Girls
            </h1>
            <p>
                The editor&apos;s pick of the five best temporary tattoos for
                the beach. These beautiful designs are suitable for girls that
                want to express themselves without words. Our five favorite
                temporary tattoos can be looked at and adored.
            </p>
            <FlexRow>
                <FlexColTextCenter>
                    <ButterflyTattoo />
                    <a
                        href="https://coloring-pages.tv/pdf/butterfly_tattoo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download PDF
                    </a>
                </FlexColTextCenter>
                <FlexColTextCenter>
                    <CelticOrnamentBookOfKells />
                    <a
                        href="https://coloring-pages.tv/pdf/celtic_ornament_book_of_kells.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download PDF
                    </a>
                </FlexColTextCenter>
                <FlexColTextCenter>
                    <FairyTattoo />
                    <a
                        href="https://coloring-pages.tv/pdf/fairy_tattoo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download PDF
                    </a>
                </FlexColTextCenter>
                <FlexColTextCenter>
                    <LockedHeart />
                    <a
                        href="https://coloring-pages.tv/pdf/locked_heart.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download PDF
                    </a>
                </FlexColTextCenter>
                <FlexColTextCenter>
                    <PoppiesColoringPage />
                    <a
                        href="https://coloring-pages.tv/pdf/poppies_coloring_page.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download PDF
                    </a>
                </FlexColTextCenter>
            </FlexRow>
            <p>
                You can add colors and a personal touch to each one of the
                illustrations. Printable versions are free to download.
            </p>
            <p>
                Use{' '}
                <a href="https://play.google.com/store/apps/details?id=adults.coloring.books">
                    coloring pages for adults
                </a>{' '}
                to try different color variations. Once colored you can print
                them directly from the <Link to="/">app</Link>.
            </p>
        </Layout>
    )
}
