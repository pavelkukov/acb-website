import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { FlexRow, FlexCol } from '../components/layout/FlexRow'

import Phone1 from '../components/images/Phone1'
import Phone2 from '../components/images/Phone2'
import Phone3 from '../components/images/Phone3'

import Tablet2 from '../components/images/Tablet2'
import Tablet3 from '../components/images/Tablet3'
import Tablet4 from '../components/images/Tablet4'

export default function IndexPage(): React.ReactElement {
    return (
        <Layout>
            <SEO title="Adults Coloring Books" />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                    style={{
                        flex: 1,
                    }}
                >
                    <p>
                        <strong>
                            &quot;
                            <a href="https://play.google.com/store/apps/details?id=adults.coloring.books">
                                Adults Coloring Books
                            </a>
                            &quot; is a free, coloring book for adults on
                            Android.
                        </strong>{' '}
                        It offers an artistic and fun way to play while
                        challenging the imagination.
                    </p>
                    <FlexRow>
                        <FlexCol>
                            <iframe
                                title={
                                    'Official app video: Adults Coloring Books'
                                }
                                style={{ width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/ZVrzkqW0edI"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </FlexCol>
                        <FlexCol>
                            <p>
                                Discover a continually growing collection of
                                illustrations, a wide selection of colors, and a
                                variety of cute stickers. The simple interface
                                and beautiful colouring pages make the app an
                                excellent game for all ages. Get ready for a
                                calming experience!
                            </p>
                            <p>
                                Works on tablets and phones. No registration
                                required. New images are available for free in
                                the coloring book.
                            </p>
                        </FlexCol>
                    </FlexRow>
                </div>
            </div>
            <FlexRow>
                <FlexCol>
                    <Phone1 />
                </FlexCol>
                <FlexCol>
                    <Phone3 />
                </FlexCol>
                <FlexCol>
                    <Tablet2 />
                </FlexCol>
                <FlexCol>
                    <Tablet4 />
                </FlexCol>
                <FlexCol>
                    <Phone2 />
                    <Tablet3 />
                </FlexCol>
            </FlexRow>
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
            <div>
                <h3
                    style={{
                        marginTop: `20px`,
                    }}
                >
                    🌈 Features:
                </h3>
                <ul>
                    <li>Choose crayons, magic wand, or stickers</li>
                    <li>Recolor as many times as you want</li>
                    <li>Save and print colored pages</li>
                    <li>Share your creations with friends</li>
                    <li>
                        After an image is initially selected, it becomes
                        available offline in the colouring book
                    </li>
                    <li>
                        Fresh coloring pages - updates in the gallery every week
                    </li>
                </ul>
            </div>

            <h3>🎨 THE GAME THAT KEEPS YOU INSPIRED</h3>
            <p>
                Beautiful colouring pages with florals, famous artworks,
                animals, patterns and mandalas - all tailored for joy.
            </p>
            <p>
                Have fun playing &quot;Adults Coloring Books&quot; the most
                fulfilling game around!
            </p>
            <div>
                <h3>Articles</h3>
                <ul>
                    <li>
                        <Link to="/adult-coloring-pages/">
                            Adult Coloring Pages - Summer Beach
                        </Link>
                    </li>
                    <li>
                        <Link to="/stress-relieving-pattern/">
                            Stress Relieving Pattern
                        </Link>
                    </li>
                    <li>
                        <Link to="/calm-down/">
                            Coloring Books for Grown-Ups: Calm the f*ck down!
                        </Link>
                    </li>
                    <li>
                        <Link to="/melt-the-stress-away/">
                            Best Adults Coloring Pages to Melt The Stress Away
                        </Link>
                    </li>
                    <li>
                        <Link to="/best-rated-adult-coloring-book/">
                            Best-rated adult coloring book
                        </Link>
                    </li>
                    <li>
                        <Link to="/mandala-coloring-for-adults/">
                            Mandala coloring pages and designs for adults
                        </Link>
                    </li>
                </ul>
                <h4>App Policy</h4>
                <Link to="/privacy-policy/">Privacy Policy</Link> |{' '}
                <Link to="/terms-conditions/">Terms &amp; Conditions</Link>
            </div>
        </Layout>
    )
}
