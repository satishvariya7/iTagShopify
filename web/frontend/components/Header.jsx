import {
  Card,
  Layout,
  TextContainer,
  Heading,
  Checkbox,
  ButtonGroup,
  Button,
} from "@shopify/polaris";
import { useCallback, useState } from "react";

function Header({ page, setPage }) {
  const [checked, setChecked] = useState(false);
  const handleChange = useCallback((newChecked) => setChecked(newChecked), []);
  return (
    <Layout.Section>
      <Card sectioned>
        <Card.Header
          title={
            <Checkbox label="iTAG" checked={checked} onChange={handleChange} />
          }
          actions={[
            {
              content: (
                <Button
                  primary={page === 1 ? true : false}
                  onClick={()=>setPage(1)}
                >
                  Dashboard
                </Button>
              ),
            },
            {
              content: (
                <Button
                  primary={page === 2 ? true : false}
                  onClick={()=>setPage(2)}
                >
                  Integrations
                </Button>
              ),
            },
            {
              content: (
                <Button
                  primary={page === 3 ? true : false}
                  onClick={()=>setPage(3)}
                >
                  Settings
                </Button>
              ),
            },
            {
              content: (
                <Button
                  primary={page === 4 ? true : false}
                  onClick={()=>setPage(4)}
                >
                  Tutorial
                </Button>
              ),
            },
            {
              content: (
                <Button
                  primary={page === 5 ? true : false}
                  onClick={()=>setPage(5)}
                >
                  Help Center
                </Button>
              ),
            },
          ]}
        ></Card.Header>
      </Card>
    </Layout.Section>
  );
}

export default Header;
