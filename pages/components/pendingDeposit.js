import React from 'react';
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

const PendingDeposit = () => {
  return (
    <Card rounded="true">
    
      <Grid>
        <Col>

      <Text weight={"light"}>Pending Deposit</Text>

    <Row justify='space-between'>
        <Row justify='flex-start' align='center'  >
        <Text fontSize="lg" size={40} weight={"extrabold"}>000.000</Text>
        <Text  size={20} weight={"extrabold"}> XRP</Text>
        </Row>

    </Row>
    </Col>
  </Grid>

    </Card>
  );
}

export default PendingDeposit;