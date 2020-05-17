import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

import CFD from '../components/images/CFD'

export default function PrivacyPolicy(): React.ReactElement {
    return (
        <Layout>
            <SEO title="Calm the f*ck down!" />
            <h1 id="coloring-books-for-grown-ups">
                Coloring Book by Sasha O&apos;Hara
            </h1>
            <h3 id="calm-the-f-ck-down">
                Calm the F*ck Down: An Irreverent Adult Coloring Book
            </h3>
            <p>
                A super relaxing and heartfelt{' '}
                <a href="https://play.google.com/store/apps/details?id=adults.coloring.books">
                    adults coloring book
                </a>{' '}
                about getting your shit together in order to have a happier
                future!{' '}
                <a href="https://www.amazon.com/Calm-Down-Irreverent-Adult-Coloring/dp/1522864741">
                    Buy from amazon
                </a>
            </p>
            <p>
                <div style={{ width: '180px', float: 'left', padding: '10px' }}>
                    <CFD />
                </div>
                21 single sided adult coloring pages and 2 color test pages.
                Irreverent illustrations are moderate to complex in detail.
                Coloring images include beautiful abstract doodles, animals,
                people and fairies. Each picture has its own sassy quip like
                &quot;Home is where the vodka is&quot;, &quot;Suck it up
                buttercup&quot; and &quot;Dance like no one attractive is
                watching&quot;, and other humorous and subversive sayings.
            </p>
            <p>
                This book is similar to meditation, a beautiful little coloring
                book about being selfish and optimistic (and how that can be a
                really good thing). Like into meditation, the act of coloring
                explores a variety of themes, and there are plenty of ideas that
                could be useful for you and others.
            </p>
            <p>
                To kick things off, we have a simple one about the most
                universal human skill: perspective-taking. We need to empty our
                brains in order to focus on the really important things in life.
                Go forth and experience the value of applying and breaking free
                of our habitual ways!
            </p>
            <p>
                <strong>Here&#39;s a funny one:</strong>I used to be pretty much
                the stereotype of an introvert. I was the kind of person who
                didn&#39;t like crowds, was clumsy and small and weirdly timid
                (okay, pretty &quot;funny&quot; in the sense of laugh out loud
                funny). I still do those things (although I get better at them).
                But my new perspective is that I&#39;m actually a very
                intelligent person that deserves the best in life. Coloring
                books are helping to calm down and restore my balance. They are
                a wonderful distraction from my problems and bring my mind to
                things I really want to think about. Oh, and one more thing, if
                you like coloring books, there&#39;s a free{' '}
                <Link to="/">app available on Play Store</Link>.
            </p>
        </Layout>
    )
}
