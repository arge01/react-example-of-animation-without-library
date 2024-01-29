import { useEffect, useState } from 'react';

import phone from '../../images/export.png';

import file from '../../images/files.png';

function ExportShare() {
  const [active, setactive] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => setactive(true), 1200);
  }, []);
  return (
    <section className="main">
      <div className="left">
        <div className="img-container">
          <img className="animation" src={phone} alt="Export Share" />
          {active && (
            <>
              <img className="file" src={file} />
            </>
          )}
        </div>
      </div>
      <div className="right">
        <h5 className="title">Export & Share</h5>
        <h2 className="desc">All-Round Conversion</h2>
        <p className="text">Export your scans as PDF,JPG,ZIP,TXT and Word.</p>
        <button>Learn More</button>
      </div>
    </section>
  );
}

export default ExportShare;
