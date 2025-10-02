// app/head.js
"use client";

export default function Head() {
  return (
    <>
      <title>Karan Kumar | iOS Developer Portfolio</title>
      <meta name="description" content="iOS Developer Portfolio" />
      <link rel="icon" href="/favicon.ico" />

      {/* Hotjar Tracking Code */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:661bfff0e4fa6,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />
    </>
  );
}