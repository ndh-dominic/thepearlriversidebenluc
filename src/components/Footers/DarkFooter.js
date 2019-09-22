/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer style={{paddingBottom: "50px"}} className="footer footer-default">
        <Container>
          <div classname="footerBoj" style={{}}>
          <div className="group">
                  
                  <div className="left3">
                    <div className="acontent">
                      <img
                        style={{paddingTop: "40px", maxWidth: "250px"}}
                        alt="..."
                        className="n-logo"
                        src={require("assets/img/now-logo-black.png")}
                      ></img>
                    </div>
                    
                    
                  </div>
                  <div className="right3">
                  <div className="acontent">
                            
                            <div >
                              <h4>CÔNG TY CỔ PHẦN BẤT ĐỘNG SẢN SEAHOLDINGS</h4>
                              <p style={{color: "black"}} className="ccontentbread">
                                Địa chỉ: 27 Quốc lộ 13, P26, Q. Bình Thạnh, TP.HCM
                                <br/>Hotline: 0908 201 363
                                <br/>Web: www.thepearlriverside.com.vn
                              </p>
                            </div>
                    </div>
                  </div>
              </div>

          </div>
          <nav>
            <ul>
              <li>
                <a
                  href="http://presentation.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  Google Business
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="https://www.invisionapp.com?ref=nukr-default-footer"
              target="_blank"
            >
              Dominic Nguyen
            </a>
          </div>
        </Container>
      </footer>
  );
}

export default DarkFooter;
