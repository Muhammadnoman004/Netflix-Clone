import React from "react";
import NetFlixBg from "../assets/nfBg.jpg";

export default function HeroSection() {
  return (
    <>
      <section>
        <div>
          <div className="class__heroBgImg__wrapper">
            <img className="class__heroBgImg" src={NetFlixBg} alt="" />
          </div>
          <div className="class__heroheading__wrapper">
            <h1 className="class__heroheading">
              Unlimited movies, <span>TV shows, and more</span>
            </h1>
            <p className="class__heroTitleheading">
              Starts at Rs 250. Cancel anytime.
            </p>
            <p className="class__heroSubTitleheading">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="class__heroBtnDiv">
              <input
                placeholder="Email address"
                type="email"
                autoComplete="email"
                maxLength="50"
                minLength="5"
                name=""
                class="class__heroEmailInput"
              />
              <button
                role="button"
                class=" e1ax5wel2 ew97par0 default-ltr-cache-1me0u3a-PressableButton-StyledPressable-StyledPressable e1ff4m3w2"
                data-uia="nmhp-card-cta+hero_card"
                type="submit"
                className="class__heroBtn"
              >
                Get Started
                <div
                  aria-hidden="true"
                  class="default-ltr-cache-1lj9d5t e1ax5wel0"
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
