import {
  ActionList,
  Avatar,
  Button,
  Card,
  Heading,
  Icon,
  Layout,
  OptionList,
  Thumbnail,
} from "@shopify/polaris";
import React from "react";
import Video from "./Video";
import { ChevronRightMinor, MaximizeMajor } from "@shopify/polaris-icons";

function TutorialPage() {
  return (
    <>
      <Layout.Section>
        <Card sectioned>
          {[1, 2, 3].map((item, key) => (
            <React.Fragment key={key}>
              <Video />
            </React.Fragment>
          ))}
        </Card>
      </Layout.Section>
      <Layout.Section secondary>
        <Card sectioned>
          <Heading>Frequently Asked Questions</Heading>
          <ActionList
            actionRole="menuitem"
            items={[
              {
                content: "How to install?",
                suffix: <Icon source={MaximizeMajor} color="success" />,
              },
              {
                content: "How many icons am I allowed to use with my plan?",
                suffix: <Icon source={MaximizeMajor} />,
              },
              {
                content: "Is the app working with all theme on Shopify?",
                suffix: <Icon source={MaximizeMajor} />,
              },
              {
                content: "Do I need to add any code to my theme?",
                suffix: <Icon source={MaximizeMajor} />,
              },
              {
                content: "Do I need to add any code to my theme?",
                suffix: <Icon source={MaximizeMajor} />,
              },
              {
                content: "I want to cancel my subscription, what should I do ?",
                suffix: <Icon source={MaximizeMajor} />,
              },
              {
                content: "Do I need to do anything after removing this app?",
                suffix: <Icon source={MaximizeMajor} />,
              },
            ]}
          />
        </Card>
        <br/>
        <Button primary fullWidth>View More</Button>
      </Layout.Section>
    </>
  );
}

export default TutorialPage;
