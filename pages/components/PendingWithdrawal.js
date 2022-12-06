import React from 'react';
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

const PendingWithdrawal = () => {
  return (
    <Card  css={{ p: "$6", mw: "400px", color:'$accents7' }} rounded="true" back >
      <Grid>
      
    
          <Text weight={"light"}>Pending Withdrawal</Text>
    
        <Row justify='space-between'>
            <Row justify='flex-start' align='center'  >
            <Text fontSize="lg" size={40} weight={"extrabold"}>057.200</Text>
            <Text  size={20} weight={"extrabold"}>XRP</Text>
            </Row>
    
        </Row>
      </Grid>
    </Card>
  );
}

export default PendingWithdrawal;