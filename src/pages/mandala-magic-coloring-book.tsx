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
            <SEO title="Mandala Magic coloring book" />
            <h1
                id="mandala-magic-coloring-book"
                style={{ textAlign: 'center' }}
            >
                The Best 8 Mandala Magic
                <br />
                <a href="https://play.google.com/store/apps/details?id=adults.coloring.books">
                    coloring pages for adults
                </a>
            </h1>
            <p>
                <Link to="/">Mandala</Link> magic is in the clarity of the mind.
                It is the comprehension of the truth, of the more or less
                convenient reality, of the prime underlying truth of the
                universe that contains it. It is the primacy of what is, and the
                experience of nothingness. It is what happens between the lines
                of an alphabet. It is a clear perception of yourself.
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
                One must possess clarity, one must be open to illumination, and
                a clear perception of one&apos;s inner self is a prerequisite of
                this insight. Once this clarity is achieved, one can still
                listen to the infinite chatter of the mind, but the mind has
                been stripped of its corruption and delusion, and this is how
                the mind with that enlightenment comes into being. There is no
                view, no acceptance of a world.
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
                To achieve a higher state of mind you can follow the Tibetan
                Buddhist tradition of creating colorful mandalas. They are used
                as a meditation practice. Use adults{' '}
                <a href="https://play.google.com/store/apps/details?id=adults.coloring.books">
                    coloring books app
                </a>{' '}
                to relax and clear your mind. You can also print the pages from
                the app directly or by downloading printable mandalas from this
                page. Coloring is a great exercise in concentration and
                self-control. Mandala magic is exacly this - concentration and
                self-control.
            </p>
        </Layout>
    )
}
