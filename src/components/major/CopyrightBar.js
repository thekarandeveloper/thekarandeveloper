import React from "react";
function CopyrightBar() {
  const currentYear = new Date().getFullYear();
  return (
    <section id="copy" className="w-full bg-dark-bg text-body h-[12vh] flex justify-center items-center p-0 rounded-b-none">
      <div className="title">{`© ${currentYear} Karan Kumar. All rights reserved.`}</div>
    </section>
  );
}

export default CopyrightBar;
