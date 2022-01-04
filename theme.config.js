export default {
  github: 'https://github.com/oslabs-beta/d3reacts-docs',
  docsRepositoryBase: 'https://github.com/oslabs-beta/d3reacts-docs',
  titleSuffix: ' – D3 Reacts',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">D3 Reacts</span>
      <span className="text-gray-600 font-normal hidden md:inline">Docs</span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="D3 Reacts Docs" />
      <meta name="og:description" content="D3 Reacts Docs" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © D3 Reacts</>,
  unstable_faviconGlyph: '👋',
}
