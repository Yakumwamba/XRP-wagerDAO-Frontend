import { Grid, Card, Text } from "@nextui-org/react";
import XRPBalance from "./components/XRPBalance";
import MoneyWon from "./components/MoneyWon";
import PendingDeposit from "./components/PendingDeposit";
import PendingWithdrawal from "./components/PendingWithdrawal";
import GamesTable from "./components/table"
import BettingHistory from "./components/bettinghistory"
export default function App() {
  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$20", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ m: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <>
      <Grid.Container  gap={2} justify="center">
        <Grid xs={3}>
          <XRPBalance  />
        </Grid>
        <Grid xs={3}>
          <MoneyWon/>
        </Grid>
        <Grid xs={3}>
          <PendingDeposit />
        </Grid>
        <Grid xs={3}>
          <PendingWithdrawal text="3 of 3" />
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2} justify="center">
       
        <Grid xs={6}>
          <GamesTable />
        </Grid>
        <Grid xs={6}>
        <BettingHistory />
        </Grid>
     
      </Grid.Container>
    </>
  );
}