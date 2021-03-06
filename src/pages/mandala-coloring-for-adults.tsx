import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { FlexRow, FlexColTextCenter } from '../components/layout/FlexRow'

import AbstractMandala from '../components/images/AbstractMandala'
import AbstractMandala1 from '../components/images/AbstractMandala1'
import CelticMandala from '../components/images/CelticMandala'
import ElephantMandala from '../components/images/ElephantMandala'
import MandalaPattern1 from '../components/images/MandalaPattern1'
import MandalaPattern2 from '../components/images/MandalaPattern2'
import SunMandala from '../components/images/SunMandala'
import SunMandala2 from '../components/images/SunMandala2'

export default function PrivacyPolicy(): React.ReactElement {
    return (
        <Layout>
            <SEO title="Mandala coloring pages for adults" />
            <h1 id="mandala-coloring-pages-and-designs-for-adults">
                Mandala{' '}
                <a href="https://play.google.com/store/apps/details?id=adults.coloring.books">
                    coloring pages and designs for adults
                </a>
            </h1>
            <p>
                Mandala coloring pages help promote clarity in concentration and
                restore balance and mindfulness. If you like coloring,
                you&#39;ll appreciate a Mandala coloring book. Like the physical
                mandalas, the illustrations are done using natural hand motions
                to facilitate ease of memorization.
            </p>
            <FlexRow>
                <FlexColTextCenter>
                    <AbstractMandala />
                    <a
                        href="https://coloring-pages.tv/pdf/abstract_mandala.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download PDF
                    </a>
                </FlexColTextCenter>
                <FlexColTextCenter>
                    <AbstractMandala1 />
                    <a
                        href="https://coloring-pages.tv/pdf/abstract_mandala_1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download PDF
                    </a>
                </FlexColTextCenter>
                <FlexColTextCenter>
                    <CelticMandala />
                    <a
                        href="https://coloring-pages.tv/pdf/celtic_mandala.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download PDF
                    </a>
                </FlexColTextCenter>
                <FlexColTextCenter>
                    <ElephantMandala />
                    <a
                        href="https://coloring-pages.tv/pdf/elephant_mandala.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download PDF
                    </a>
                </FlexColTextCenter>
            </FlexRow>
            <p>
                Indo-Asian Art helps you get started in the art of making art,
                and as you practice, you will find the patterns clear and
                simple. It is a way that non-artists can understand too because
                of its purity.{' '}
                <Link to="/mandala-magic-coloring-book/">Mandalas</Link> come in
                a variety of styles and shapes. The Asian art takes a very
                different approach because their goal is to express the innate
                virtues of enlightenment. The doors of enlightenment are opened
                through both physical and mental activities.
            </p>
            <FlexRow>
                <FlexColTextCenter>
                    <MandalaPattern1 />
                    <a
                        href="https://coloring-pages.tv/pdf/mandala_pattern_1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download PDF
                    </a>
                </FlexColTextCenter>
                <FlexColTextCenter>
                    <MandalaPattern2 />
                    <a
                        href="https://coloring-pages.tv/pdf/mandala_pattern_2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download PDF
                    </a>
                </FlexColTextCenter>
                <FlexColTextCenter>
                    <SunMandala2 />
                    <a
                        href="https://coloring-pages.tv/pdf/sun_mandala_2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download PDF
                    </a>
                </FlexColTextCenter>
                <FlexColTextCenter>
                    <SunMandala />
                    <a
                        href="https://coloring-pages.tv/pdf/sun_mandala.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download PDF
                    </a>
                </FlexColTextCenter>
            </FlexRow>
            <p>
                <Link to="/">Coloring books for adults</Link> is like a
                meditation. It allows you to clear your mind and find happiness
                within yourself.
            </p>
        </Layout>
    )
}
