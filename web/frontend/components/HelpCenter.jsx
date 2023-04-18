import { Button, Card, Collapsible, Icon, Layout } from "@shopify/polaris";
import { PlusMinor } from "@shopify/polaris-icons";
import React, { useCallback, useState } from "react";

function HelpCenter() {
  const [list, setList] = useState([
    {
      id: 1,
      title: "HOW TO INSTALL?",
      description:
        "We are sorry to see you go, but if you wish to cancel your subscription, please just remove the app from your store, and it will be automatically cancelled. You won’t be charged anything after that moment. The billing is handled by Shopify, and this is the way it works.",
      Collapsible: false,
    },
    {
      id: 2,
      title: "How many icons am I allowed to use with my plan?",
      description:
        "We are sorry to see you go, but if you wish to cancel your subscription, please just remove the app from your store, and it will be automatically cancelled. You won’t be charged anything after that moment. The billing is handled by Shopify, and this is the way it works.",
      Collapsible: false,
    },
    {
      id: 3,
      title: "Is the app working with all theme on Shopify?",
      description:
        "We are sorry to see you go, but if you wish to cancel your subscription, please just remove the app from your store, and it will be automatically cancelled. You won’t be charged anything after that moment. The billing is handled by Shopify, and this is the way it works.",
      Collapsible: false,
    },
    {
      id: 4,
      title: "Do I need to add any code to my theme?",
      description:
        "We are sorry to see you go, but if you wish to cancel your subscription, please just remove the app from your store, and it will be automatically cancelled. You won’t be charged anything after that moment. The billing is handled by Shopify, and this is the way it works.",
      Collapsible: false,
    },
    {
      id: 5,
      title: "How many icons am I allowed to use with my plan?",
      description:
        "We are sorry to see you go, but if you wish to cancel your subscription, please just remove the app from your store, and it will be automatically cancelled. You won’t be charged anything after that moment. The billing is handled by Shopify, and this is the way it works.",
      Collapsible: false,
    },
    {
      id: 6,
      title: "I want to cancel my subscription, what should I do ?",
      description:
        "We are sorry to see you go, but if you wish to cancel your subscription, please just remove the app from your store, and it will be automatically cancelled. You won’t be charged anything after that moment. The billing is handled by Shopify, and this is the way it works.",
      Collapsible: false,
    },
  ]);
  const handleToggle = (id) => {
    setList(
      list.map((item) => {
        if (id === item.id) item.Collapsible = !item.Collapsible;
        return item;
      })
    );
  };

  return (
    <Layout.Section fullWidth>
      {list.map((item) => (
        <Card sectioned key={item}>
          <Card.Header
            title={item.title}
            actions={[
              {
                content: <Icon source={PlusMinor} color="subdued" />,
                onAction: () => {
                  handleToggle(item.id);
                },
              },
            ]}
          />
          <Card.Section>
            <Collapsible
              open={item.Collapsible}
              id="basic-collapsible"
              transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
              expandOnPrint
            >
              <p>{item.description}</p>
            </Collapsible>
          </Card.Section>
        </Card>
      ))}
    </Layout.Section>
  );
}

export default HelpCenter;
