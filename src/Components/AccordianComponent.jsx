import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from "keep-react";

const AccordianComponent = () => {
  return (
    <Accordion flush={true} type="single" collapsible>
      <AccordionItem value="value-1">
        <AccordionAction>
          <AccordionTitle className="first-letter:text-primary-500 text-start max-sm:text-sm max-sm:font-normal ">
            Q. What makes your agency different from other startup development
            agencies?
          </AccordionTitle>
          <AccordionIcon />
        </AccordionAction>
        <AccordionContent>
          We stand out by offering comprehensive support. We go beyond just
          website or app development, providing services like legal guidance,
          marketing branding, and ongoing growth strategies. We're your one-stop
          shop for success!
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="value-2">
        <AccordionAction>
          <AccordionTitle className="first-letter:text-primary-500 text-start max-sm:text-sm max-sm:font-normal">
            Q. What stage of startups do you typically work with?
          </AccordionTitle>
          <AccordionIcon />
        </AccordionAction>
        <AccordionContent>
          We welcome startups at all stages! From ideation and validation to
          launch and growth, we tailor our services to your specific needs.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="value-3">
        <AccordionAction>
          <AccordionTitle className="first-letter:text-primary-500 text-start max-sm:text-sm max-sm:font-normal">
            Q. What kind of websites and applications do you develop?
          </AccordionTitle>
          <AccordionIcon />
        </AccordionAction>
        <AccordionContent>
          We have expertise across various platforms and technologies, building
          everything from e-commerce websites and mobile apps to custom software
          solutions.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="value-4">
        <AccordionAction>
          <AccordionTitle className="first-letter:text-primary-500 text-start max-sm:text-sm max-sm:font-normal">
            Q. How do you help me market and brand my startup effectively?
          </AccordionTitle>
          <AccordionIcon />
        </AccordionAction>
        <AccordionContent>
          We create tailored marketing strategies based on your target audience
          and goals. This includes branding development, social media
          management, content marketing, and paid advertising campaigns.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="value-5">
        <AccordionAction>
          <AccordionTitle className="first-letter:text-primary-500 text-start max-sm:text-sm max-sm:font-normal">
            Q. How do you communicate and collaborate with your clients?
          </AccordionTitle>
          <AccordionIcon />
        </AccordionAction>
        <AccordionContent>
          We believe in open communication and transparency. We assign dedicated
          project managers and utilize collaboration tools to keep you informed
          and involved throughout the process.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="value-6">
        <AccordionAction>
          <AccordionTitle className="first-letter:text-primary-500 text-start max-sm:text-sm max-sm:font-normal">
            Q. How much does it cost to work with your agency?
          </AccordionTitle>
          <AccordionIcon />
        </AccordionAction>
        <AccordionContent>
          The cost depends on your specific needs and chosen services. We offer
          transparent pricing models and provide detailed proposals before work
          begins.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordianComponent;
