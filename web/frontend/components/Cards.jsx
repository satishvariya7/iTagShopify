import React from 'react'
import { useState, useCallback } from "react";
import { WandMinor } from "@shopify/polaris-icons";
import { StarFilledMinor } from "@shopify/polaris-icons";
import {
    Card,
    Page,
    Layout,
    TextContainer,
    Heading,
    Form,
    FormLayout,
    Checkbox,
    TextField,
    Button,
    Tag,
    Icon,
    Link,
    Banner,
    InlineError,
    List,
    ResourceItem,
    Avatar,
    ResourceList,
    Image,
  } from "@shopify/polaris";

function Cards() {
  return (
    <Layout.Section>
      <Card actions={[{ content: <Button primary>View All</Button> }]}>
        <br />
        <Layout>
          {[1, 2, 3].map((item) => (
            <Layout.Section key={item} oneThird>
              <Card>
                <Card.Section>
                  <ResourceList
                    resourceName={{
                      singular: "customer",
                      plural: "customers",
                    }}
                    items={[
                      {
                        id: "1",
                        url: "#",
                        avatarSource:
                          "https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746",
                        name: "Yi So-Yeon",
                      },
                    ]}
                    renderItem={(item) => {
                      const { id, url, avatarSource, name } = item;
                      return (
                        <ResourceItem
                          id={id}
                          url={url}
                          media={
                            <Avatar
                              customer
                              size="medium"
                              name={name}
                              source={avatarSource}
                            />
                          }
                        >
                          <Heading>Cart X ‑ Post Purchase Upsell</Heading>
                        </ResourceItem>
                      );
                    }}
                  ></ResourceList>
                </Card.Section>
                <Card.Section>
                  <div>
                    <span>
                      One Click Upsell, Reconverting Post Purchase, Popup,
                      In-Cart
                    </span>
                  </div>
                  <br />
                  <div style={{ display: "flex" }}>
                    <Icon source={StarFilledMinor} color="warning" />
                    <p>5.0 (119) Free Plan available</p>
                  </div>
                  {/* <Button
                        icon={<Icon source={StarFilledMinor} color="highlight" />}                        
                      >
                        5.0 (119) Free Plan available
                      </Button> */}
                </Card.Section>
              </Card>
            </Layout.Section>
          ))}
        </Layout>
        <br />
      </Card>
    </Layout.Section>
  );
}

export default Cards;
