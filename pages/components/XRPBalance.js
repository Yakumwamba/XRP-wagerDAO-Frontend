import React from 'react';
import { Card, Grid, Text, Button, Col, Row } from "@nextui-org/react";

const XRPBalance = () => {
  return (
    <Card rounded="true">
    
        <Text weight={"light"}>XRP Balance</Text>
  
        <Row justify='space-between'>
        <Row justify='flex-start' align='center'  >
        <Text fontSize="lg" size={40} weight={"extrabold"}>345.100</Text>
        <Text  size={20} weight={"extrabold"}>XRP</Text>
        </Row>

    </Row>
    </Card>
  );
}

export default XRPBalance;