import classNames from "classnames";
import { Container } from "../components/container";
import { HomepageHero } from "../components/sections/homepage-hero";

export default function Homepage() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <HomepageHero />
        </Container>
      </div>
    </>
  );
}
