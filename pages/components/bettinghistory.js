import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import { Table, Modal } from "@nextui-org/react";
import { useState } from "react";

export default function BettingHistory() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState();

  const handleClick = (game) => {
    setShowModal(true);
    setSelectedGame(game);
  };

  return (
    <>
      <Table
        aria-label="Example static collection table"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="single"
      >
        <Table.Header>
          <Table.Column>Game</Table.Column>
          <Table.Column>Amount (XRP/USD)</Table.Column>
          <Table.Column>Date of Bet</Table.Column>
          <Table.Column>Details</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell>England vs Poland <Text size="xs" italic>3rd June 2020</Text></Table.Cell>
            <Table.Cell>20 XRP</Table.Cell>
            <Table.Cell>1st May 2020</Table.Cell>
            <Table.Cell><Button type='primary' onClick={() => handleClick('England vs Poland')}>More Details</Button></Table.Cell>
          </Table.Row>
          <Table.Row key="2">
            <Table.Cell>Germany vs France <Text size="xs" italic>2nd June 2020</Text></Table.Cell>
            <Table.Cell>50 USD</Table.Cell>
            <Table.Cell>25th April 2020</Table.Cell>
            <Table.Cell><Button type='primary' onClick={() => handleClick('Germany vs France')}>More Details</Button></Table.Cell>
          </Table.Row>
          <Table.Row key="3">
            <Table.Cell>Italy vs Spain <Text size="xs" italic>1st June 2020</Text></Table.Cell>
            <Table.Cell>30 XRP</Table.Cell>
            <Table.Cell>2nd April 2020</Table.Cell>
            <Table.Cell><Button type='primary' onClick={() => handleClick('Italy vs Spain')}>More Details</Button></Table.Cell>
          </Table.Row>
          <Table.Row key="4">
            <Table.Cell>Russia vs Denmark <Text size="xs" italic>4th June 2020</Text></Table.Cell>
            <Table.Cell>40 USD</Table.Cell>
            <Table.Cell>20th April 2020</Table.Cell>
            <Table.Cell><Button type='primary' onClick={() => handleClick('Russia vs Denmark')}>More Details</Button></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      {showModal && (
        <Modal
          title={selectedGame}
          show={showModal}
          onClose={() => setShowModal(false)}
        >
          <Card>
            <Grid>
              <Row>
                <Text>Full details of the game go here</Text>
              </Row>
            </Grid>
          </Card>
        </Modal>
      )}
    </>
  );
}