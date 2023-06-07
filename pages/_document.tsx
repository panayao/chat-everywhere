import { DocumentProps, Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import i18nextConfig from '../next-i18next.config';

type Props = DocumentProps & {
  // add custom document props
};

//Sovrn Ads Key
const sovrnAdsKey= process.env.NEXT_PUBLIC_SOVRN_ADS_KEY || '';

export default function Document(props: Props) {
  const currentLocale =
    props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="PanayaoBot - ChatGPT for everyone"/>
        <meta property="og:title" content="PanayaoBot - ChatGPT for everyone" />
        <meta property="og:description" content="Revolutionize your ChatGPT experience with our app that boasts advanced front-end features like folder organization and easily shareable chats. Keep your conversations secured by locally storing data and enjoy collaborating with anyone from around the world, without any limitations." />
        <meta property="og:image" content="#" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:url" content={`https://panayaobot.vercel.app`} />
        {/* Ad Verification tag for Propellerads*/}
        <meta name="monetag" content="b0996adc439888b4590068e1e29a5696"/>
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Ad Verification tag for Infolinks*/}
        {process.env.NEXT_PUBLIC_ENV === 'production' && (
        <>
          <Script 
            type="text/javascript"
            id="show-banner"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                var infolinks_pid = 3395445;
                var infolinks_wsid = 0;
              `
            }}
          />
          <Script type="text/javascript" async src="http://resources.infolinks.com/js/infolinks_main.js"/>
        
          {/* Sovrn ads code for Affiliate Links */}
          <Script 
            type="text/javascript"
            id="show-banner"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                var vglnk = {key: '${sovrnAdsKey}'};
                (function(d, t) {var s = d.createElement(t);
                  s.type = 'text/javascript';s.async = true;
                  s.src = '//clickcdn.sovrn.com/api/sovrncm.js';
                  var r = d.getElementsByTagName(t)[0];
                  r.parentNode.insertBefore(s, r);
                }(document, 'script'));
              `,
            }}
          />
        </>
        )}
      </body>
    </Html>
  );
}
