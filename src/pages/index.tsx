import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

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
                            &quot;Adults Coloring Books&quot; is a free,
                            coloring book for adults on Android.
                        </strong>{' '}
                        It offers an artistic and fun way to play while
                        challenging the imagination.
                    </p>
                    <p>
                        Discover a continually growing collection of
                        illustrations, a wide selection of colors, and a variety
                        of cute stickers. The simple interface and beautiful
                        colouring pages make the app an excellent game for all
                        ages. Get ready for a calming experience!
                    </p>
                    <p>
                        Works on tablets and phones. No registration required.
                        New images are available for free in the coloring book.
                    </p>
                </div>
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
                    <li>Choose pastels, magic wand, or stickers</li>
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
        </Layout>
    )
}
