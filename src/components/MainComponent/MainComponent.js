import React from "react";
import classes from "./MainComponent.module.css";
import { data } from "autoprefixer";

const MainComponent = ({
  header,
  introduction,
  mainContent,
  visualElements,
  conclusions,
  callToAction,
  authorBio,
}) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.mainWrapper}>
        <div className={classes.headingContainer}>
          <h3
            className={classes.subHeading}
            style={{ "--color": header.subHeadingColor }}
          >
            {header.subHeading}
          </h3>
          <h1
            className={classes.heading}
            style={{ "--color": header.headingColor }}
          >
            {header.heading}
          </h1>
        </div>
        <div className={classes.wrapper}>
          {introduction && (
            <div className={[classes.row].join(" ")}>
              <div
                className={[classes.box, classes.introduction].join(" ")}
                style={{
                  "--border": introduction.border,
                  "--bg": introduction.bg,
                }}
              >
                <h2
                  className={classes.title}
                  style={{ "--color": introduction.titleColor }}
                >
                  {introduction.title}
                </h2>
                <p
                  className={classes.info}
                  style={{ "--color": introduction.infoColor }}
                >
                  {introduction.info}
                </p>
              </div>
            </div>
          )}

          {mainContent && (
            <div
              className={[classes.box, classes.mainContent].join(" ")}
              style={{
                "--border": mainContent.border,
                "--bg": mainContent.bg,
              }}
            >
              {" "}
              <h2
                className={classes.title}
                style={{ "--color": mainContent.titleColor }}
              >
                {mainContent.title}
              </h2>
              <p
                className={classes.info}
                style={{ "--color": mainContent.infoColor }}
              >
                {mainContent.info}
              </p>
              <div className={classes.row}>
                {mainContent.contents.map((content, i) => (
                  <div
                    className={[classes.box].join(" ")}
                    key={i}
                    style={{
                      "--border": content.border,
                      "--bg": content.bg,
                    }}
                  >
                    <h2
                      className={classes.title}
                      style={{ "--color": content.titleColor }}
                    >
                      {content.title}
                    </h2>
                    <p
                      className={classes.tagline}
                      style={{ "--color": content.taglineColor }}
                    >
                      {content.tagline}
                    </p>
                    {content.data.map((el, i) => (
                      <p
                        className={classes.info}
                        style={{ "--color": content.infoColor }}
                        key={i}
                      >
                        <span className={classes.subTitle}>{el.subTitle}</span>
                        {el.info}
                      </p>
                    ))}
                  </div>
                ))}
                <div
                  className={[
                    classes.box,
                    classes.practicalTips,
                    mainContent.contents.length % 2 === 0 && classes.fullWidth,
                  ].join(" ")}
                  style={{
                    "--border": mainContent.practicalTips.border,
                    "--bg": mainContent.practicalTips.bg,
                  }}
                >
                  <h2
                    className={classes.title}
                    style={{ "--color": mainContent.practicalTips.titleColor }}
                  >
                    {mainContent.practicalTips.title}
                  </h2>

                  {mainContent.practicalTips.data.map((el, i) => (
                    <div className={classes.tips} key={i}>
                      <p
                        className={classes.id}
                        style={{
                          "--bg": mainContent.practicalTips.idBg,
                          "--color": mainContent.practicalTips.idColor,
                        }}
                      >
                        {i + 1}
                      </p>
                      <p
                        className={classes.info}
                        style={{
                          "--color": mainContent.practicalTips.infoColor,
                        }}
                        key={i}
                      >
                        <span className={classes.subTitle}>{el.subTitle}</span>
                        {el.info}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {visualElements && (
            <div className={classes.row}>
              <div
                className={[classes.box, classes.visualElements].join(" ")}
                style={{
                  "--border": visualElements.border,
                  "--bg": visualElements.bg,
                }}
              >
                <h2
                  className={classes.title}
                  style={{ "--color": visualElements.titleColor }}
                >
                  {visualElements.title}
                </h2>
                <div className={classes.elements}>
                  {visualElements.elements.map((el, i) => (
                    <div className={classes.finding} key={i}>
                      <img src={el.img} alt="#" className={classes.img} />
                      <p
                        className={classes.info}
                        style={{ "--color": visualElements.infoColor }}
                      >
                        {el.info}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {conclusions && (
            <div className={classes.row}>
              <div
                className={[classes.box, classes.conclusions].join(" ")}
                style={{
                  "--border": conclusions.border,
                  "--bg": conclusions.bg,
                }}
              >
                <h2
                  className={classes.title}
                  style={{ "--color": conclusions.titleColor }}
                >
                  {conclusions.title}
                </h2>
                <p
                  className={classes.info}
                  style={{ "--color": conclusions.infoColor }}
                >
                  {conclusions.info}
                </p>
              </div>
            </div>
          )}
          {(callToAction || authorBio) && (
            <div className={classes.row}>
              {callToAction && (
                <div
                  className={[classes.box, classes.callToAction].join(" ")}
                  style={{
                    "--border": callToAction.border,
                    "--bg": callToAction.bg,
                  }}
                >
                  <h2
                    className={classes.title}
                    style={{ "--color": callToAction.titleColor }}
                  >
                    {callToAction.title}
                  </h2>
                  <p
                    className={classes.info}
                    style={{ "--color": callToAction.infoColor }}
                  >
                    {callToAction.info}
                  </p>
                </div>
              )}{" "}
              {authorBio && (
                <div
                  className={[classes.box, classes.authorBio].join(" ")}
                  style={{
                    "--border": authorBio.border,
                    "--bg": authorBio.bg,
                  }}
                >
                  <h2
                    className={classes.title}
                    style={{ "--color": authorBio.titleColor }}
                  >
                    {authorBio.title}
                  </h2>
                  <p
                    className={classes.info}
                    style={{ "--color": authorBio.infoColor }}
                  >
                    {authorBio.info}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
