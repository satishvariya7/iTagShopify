import React from "react";
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
function Dashboard() {
  const [gtmInput, setGtmInput] = useState("");
  const [gtmError, setGtmError] = useState(false);
  const [banner, setBanner] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (gtmInput === "") setGtmError(true);
    else {
      setGtmInput("");
      setGtmError(false);
    }
  };
  const handleGoogleTagChange = (value) => setGtmInput(value);
  return (
    <>
      <Layout.Section oneHalf>
        <div>
          <Heading>Setup your Google Tag Manager</Heading>
          <span>Enter the GTM ID and publish.</span>
        </div>
      </Layout.Section>
      <Layout.Section oneHalf>
        <Card sectioned>
          <Form onSubmit={handleSubmit}>
            <TextField
              label="Google Tag Manager ID"
              value={gtmInput}
              onChange={handleGoogleTagChange}
              autoComplete="off"
              placeholder="GTM Name"
              helpText={<span>Not sure where to find it?</span>}
              id="googleTagInput"
            />
            {gtmError && (
              <InlineError message="Google Tag Manager ID is required." />
            )}
            <br />
            <Button primary submit>
              Save
            </Button>
          </Form>
          <br />
          {banner && (
            <Banner title="Next Steps" onDismiss={() => setBanner(false)}>
              <p>
                Navigate to the{" "}
                <Link url="https://help.shopify.com/manual">
                  Data Layer Settings
                </Link>{" "}
                page to enable your preferred events.
              </p>
            </Banner>
          )}
        </Card>
      </Layout.Section>
    </>
  );
}

export default Dashboard;
