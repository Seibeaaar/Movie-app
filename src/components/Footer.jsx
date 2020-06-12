import React from 'react';

const Footer = () => {
  return ( 
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed by:
            <span className="text-warning ml-1">
              Yurii Baryliak
            </span>
            , using <i className="fab fa-react" /> ReactJS &amp; Redux integrated with external movies data API 
            <a href="http://www.omdbapi.com/" target="_blank" className="ml-2">
              OMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;