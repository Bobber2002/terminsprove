import ToHome from "./welcomeLinkToHome";
import Section from "./welcomeSection";
import Title from "./welcomeTitle";

const WelcomeBackground = () => {
  return (
    <div
      id="WelcomeBackground"
      className="h-full w-full bg-slate-500"
      style={{
        backgroundImage: `url(/bg2.jpg), url(/bg1.jpg)`,
        backgroundSize: "175%, 300%",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center bottom, center top",
      }}
    >
      <Section classes={"pb-12"}>
        <Title/>
      </Section>
      <Section classes={"items-center pb-12"}>
        <ToHome/>
      </Section>
    </div>
  );
};

export default WelcomeBackground;
