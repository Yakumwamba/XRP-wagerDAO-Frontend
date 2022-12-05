import React from 'react';
import { Card, Grid, Text, Button, Row, Col} from "@nextui-org/react";

const MoneyWon = () => {
  return (
    <Card rounded="true">
      <Grid>
        <Col>
        <Text weight={"light"}>Pending Deposit</Text>
        <Text weight={"thin"}   >last 12 days</Text>
        </Col>
        <Row justify='space-between'>
        <Row justify='flex-start' align='center'  >
        <Text fontSize="lg" size={40} weight={"extrabold"}>345.100</Text>
        <Text  size={20} weight={"extrabold"}>XRP</Text>
        </Row>

    </Row>
      </Grid>
    </Card>
  );
}

export default MoneyWon;