import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";

import { OrangeButton } from "./OrangeButton";

export default function GamesTable() {
  const columns = [
    { name: "TEAMS", uid: "teams" },
    { name: "IMAGE", uid: "image" },
    { name: "ODDS", uid: "odds" },
    { name: "ACTIONS", uid: "actions" },
  ];
  const games = [
    {
      teams: "Lions vs. Bears",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      odds: "1.5",
    },
    {
      teams: "Patriots vs. Steelers",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      odds: "2.5",
    },
    {
      teams: "Redskins vs. Eagles",
      image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      odds: "3.5",
    },
    {
      teams: "Seahawks vs. Cardinals",
      image: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      odds: "4.5",
    },
    {
      teams: "Giants vs. Cowboys",
      image: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      odds: "5.5",
    },
    {
      teams: "Packers vs. Vikings",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      odds: "6.5",
    },
    {
      teams: "Colts vs. Jaguars",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      odds: "7.5",
    },
    {
      teams: "Rams vs. 49ers",
      image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      odds: "8.5",
    },
    {
      teams: "Raiders vs. Chargers",
      image: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      odds: "9.5",
    },
    {
      teams: "Bills vs. Dolphins",
      image: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      odds: "10.5",
    },
  ];
  const renderCell = (game, columnKey) => {
    const cellValue = game[columnKey];
    switch (columnKey) {
      case "teams":
        return (
          <User squared src={game.image} name={cellValue} css={{ p: 0 }}>
            {game.teams}
          </User>
        );
      case "Game":
        return (
          <Col>
            <Row>
              <Text b size={14}>
                {cellValue}
              </Text>
            </Row>
          </Col>
        );
      case "odds":
        return (
          <Row>
            <Text b size={13} css={{ color: "$accents7" }}>
              {cellValue}
            </Text>
          </Row>
        );

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <OrangeButton onClick={() => console.log("Place Bet", game.teams)}>
                  Place Bet
              </OrangeButton>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="true"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={games}>
        {(item) => (
          <Table.Row key={item.odds}>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}