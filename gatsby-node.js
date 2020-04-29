exports.createPages = ({ actions }) => {
    // need createRedirect action in actions collection
    // to make the redirection magic happen.
    // https://www.gatsbyjs.org/docs/bound-action-creators/
    const { createRedirect } = actions

    const redirectToHome = [
        '/online-coloring-pages/online-coloring-pages.php',
        '/princess-coloring-pages/baby-princess.php',
        '/cartoon-coloring-pages/cartoon-fish.php',
        '/bible-coloring-pages/dove-of-peace.php',
        '/cars-coloring-pages/muscle-car.php',
        '/easter-coloring-pages/outline-of-bunny.php',
        '/pooh-coloring-pages/tiger.php',
        '/adult-coloring-tips-for-beginners',
        '/caf',
        '/guitar-hero-coloring-pages/guitar-hero-coloring-pages.php',
        '/animal-coloring-pages/fish-animal.php',
        '/bear-coloring-pages/cute-teddy-bear.php',
        '/princess-coloring-pages/off-to-the-palace.php',
        '/cartoon-coloring-pages/grateful-guitar-player.php',
        '/cartoon-coloring-pages/jogger-guy-running-with-sun.php',
        '/princess-coloring-pages/fairy-princess.php',
        '/cartoon-coloring-pages/cartoon-coloring-pages.php',
        '/easter-coloring-pages/easter-coloring-pages.php',
        '/category/coloring-pages-for-kids',
        '/tag/coloring-pages-for-kids',
    ]
    redirectToHome.forEach(r => {
        createRedirect({
            fromPath: r,
            toPath: '/',
            isPermanent: true,
        })
    })
}
