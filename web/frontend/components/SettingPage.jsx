import {
  Button,
  ButtonGroup,
  Card,
  DataTable,
  Form,
  Icon,
  IndexTable,
  Layout,
  Modal,
  TextField,
} from "@shopify/polaris";
import { DeleteMajor, EditMajor } from "@shopify/polaris-icons";
import React, { useState } from "react";

function SettingPage() {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [gtmInput, setGtmInput] = useState("");
  const rows = [
    [
      1,
      <Button>Turn Off</Button>,
      "GTM Itag name here",
      "#256980389",
      <ButtonGroup>
        <Button
          onClick={() => setEditModal(true)}
          icon={<Icon source={EditMajor} color="success" />}
        />
        <Button
          destructive={true}
          onClick={() => setDeleteModal(true)}
          icon={<Icon source={DeleteMajor} />}
        />
      </ButtonGroup>,
    ],
    [
      2,
      <Button>Turn Off</Button>,
      "GTM Itag name here",
      "#256980389",
      <ButtonGroup>
        <Button
          onClick={() => setEditModal(true)}
          icon={<Icon source={EditMajor} color="success" />}
        />
        <Button
          onClick={() => setDeleteModal(true)}
          destructive={true}
          icon={<Icon source={DeleteMajor} />}
        />
      </ButtonGroup>,
    ],
    [
      3,
      <Button>Turn Off</Button>,
      "GTM Itag name here",
      "#256980389",
      <ButtonGroup>
        <Button
          onClick={() => setEditModal(true)}
          icon={<Icon source={EditMajor} color="success" />}
        />
        <Button
          onClick={() => setDeleteModal(true)}
          destructive={true}
          icon={<Icon source={DeleteMajor} />}
        />
      </ButtonGroup>,
    ],
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Layout.Section>
      <Modal
        open={editModal}
        onClose={() => setEditModal(false)}
        title="Edit GTM "
        primaryAction={{
          content: "Update",
          onAction: () => {
            setEditModal(false);
          },
        }}
      >
        <Modal.Section>
          <Form onSubmit={handleSubmit}>
            <TextField
              label="GTM Name"
              value={gtmInput}
              onChange={(value) => setGtmInput(value)}
              autoComplete="off"
              placeholder="GTM Name"
              id="googleTagInput"
            />
            <br />
            <TextField
              label="GTM ID"
              value={gtmInput}
              onChange={(value) => setGtmInput(value)}
              autoComplete="off"
              placeholder="GTM ID"
              id="googleTagInput2"
            />
          </Form>
        </Modal.Section>
      </Modal>
      <Modal
        open={deleteModal}
        onClose={() => setDeleteModal(false)}
        title="Edit GTM "
        secondaryActions={[
          {
            content: "Delete",
            destructive: true,
            onAction: () => {
              setDeleteModal(false);
            },
          },
        ]}
      >
        <Modal.Section>
          <p>Are you sure you want to delete?</p>
        </Modal.Section>
      </Modal>
      <Card>
        <DataTable
          columnContentTypes={["numeric", "text", "text", "text", "text"]}
          headings={["Id", "Status", "GTM Name", "GTM ID", "Actions"]}
          rows={rows}
        />
      </Card>
    </Layout.Section>
  );
}

export default SettingPage;
