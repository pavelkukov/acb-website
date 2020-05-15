import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SummerBeach from '../components/images/SummerBeach'

export default function PrivacyPolicy(): React.ReactElement {
    return (
        <Layout>
            <SEO title="Summer beach - Adult Coloring Pages" />
            <h1 id="adult-coloring-pages-summer-beach">
                Summer beach - Adult Coloring Pages
            </h1>
            <div
                style={{
                    width: '200px',
                    display: 'inline-block',
                    float: 'left',
                    textAlign: 'center',
                    padding: '10px',
                }}
            >
                <SummerBeach />
                <a
                    href="https://coloring-pages.tv/pdf/summer_beach.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download PDF
                </a>
            </div>
            From our artisan&apos;s collection, we have this beautiful
            illustration. It is also available in the{' '}
            <a href="https://play.google.com/store/apps/details?id=adults.coloring.books">
                free coloring pages app
            </a>
            .{' '}
            <p>
                The breezy mood carries over the colors of summer. Blue is the
                main color for this image, but you&apos;ll also find a lot of
                room for orange and yellow colors. Some of the tones are very
                fun, such as the floral-hued green. The remaining palette can be
                described as the &quot;bright colors of plastic&quot; and some
                people loved it. :)
            </p>
            <p>
                Mixing colors in different places of the artwork will add
                different moods. Not only does mixing colors in different places
                of the illustration help you communicate more strongly, but also
                gives you more options.
            </p>
            <p>
                If you&apos;re looking for inspiration, consider printing the
                illustration. Create a piece of art to set the right mood for
                your summer holiday.
            </p>
            <p>
                You can download printable version from the download link under
                the image.
            </p>
            <div
                style={{
                    textAlign: 'center',
                    maxWidth: '500px',
                    margin: 'auto',
                }}
            >
                <a href="https://play.google.com/store/apps/details?id=adults.coloring.books&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                    <img
                        alt="Get it on Google Play"
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    />
                </a>
            </div>
        </Layout>
    )
}
