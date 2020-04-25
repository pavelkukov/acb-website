import { Link } from 'gatsby'
import React from 'react'

export interface HeaderProps {
    siteTitle: string
}

export default function Header({
    siteTitle,
}: HeaderProps): React.ReactElement<HeaderProps> {
    return (
        <header
            style={{
                background: `lightcoral`,
                marginBottom: `1.45rem`,
            }}
        >
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    height: `90px`,
                    display: `flex`,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1 style={{ margin: 0 }}>
                    <Link
                        to="/"
                        title={siteTitle}
                        style={{
                            textDecoration: `none`,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            Adults Coloring Books
                        </div>
                    </Link>
                </h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    siteTitle: ``,
}
