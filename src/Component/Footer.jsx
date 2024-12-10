import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <section className="Footer">
        <Container>
          <div className="Footer__mainDiv">
            <p className="Footer__para">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="Footer__inpBtnDiv">
              <input
                placeholder="Email address"
                type="email"
                autoComplete="email"
                maxLength="50"
                minLength="5"
                name=""
                className=""
              />
              <button
                role="button"
                data-uia="nmhp-card-cta+hero_card"
                type="submit"
                className=" e1ax5wel2 ew97par0 default-ltr-cache-1me0u3a-PressableButton-StyledPressable-StyledPressable e1ff4m3w2"
              >
                Get Started
                <div
                  aria-hidden="true"
                  className="default-ltr-cache-1lj9d5t e1ax5wel0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    data-icon="ChevronRightStandard"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <footer style={{ paddingBottom: "100px", paddingTop: "50px" }}>
            <div>
              <p>
                <a href="">Questions? Contact us.</a>
              </p>
            </div>
            <div className="Footer__list">
              <div>
                <ul>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                  <li>
                    <a href="">Investor Relations</a>
                  </li>
                  <li>
                    <a href="">Privacy</a>
                  </li>
                  <li>
                    <a href="">Speed Test</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="">Help Center</a>
                  </li>
                  <li>
                    <a href="">Jobs</a>
                  </li>
                  <li>
                    <a href="">Cookie Preferences</a>
                  </li>
                  <li>
                    <a href="">Legal Notices</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="">Account</a>
                  </li>
                  <li>
                    <a href="">Ways to Watch</a>
                  </li>
                  <li>
                    <a href="">Corporate Information</a>
                  </li>
                  <li>
                    <a href="">Only on Netflix</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="">Media Center</a>
                  </li>
                  <li>
                    <a href="">Terms of Use</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{ position: "relative", left: "-16px", marginTop: "45px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                data-icon="LanguagesSmall"
                aria-hidden="true"
                className="Footer__dropdown__svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                  fill="currentColor"
                ></path>
              </svg>
              <select name="" id="" className="Footer__dropdown">
                <option value="" className="trending__dropdownOption">
                  English
                </option>
              </select>
            </div>
            <p className="Footer__Last_Para">Netflix Pakistan</p>
          </footer>
        </Container>
      </section>
    </>
  );
}
