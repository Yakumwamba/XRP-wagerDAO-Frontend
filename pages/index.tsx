import { Grid, Card, Text, Button,Progress} from "@nextui-org/react";
import XRPBalance from "./components/XRPBalance";
import MoneyWon from "./components/MoneyWon";
import PendingDeposit from "./components/PendingDeposit";
import PendingWithdrawal from "./components/PendingWithdrawal";
import GamesTable from "./components/table"
import BettingHistory from "./components/bettinghistory"

import { XummSdk } from "xumm-sdk";
import { XummPkce } from "xumm-oauth2-pkce"

export default function App() {



  const xumm = new XummPkce("46b37ea3-d9dd-434e-878d-bc40e70cf7c4");
 
  xumm.on("retrieved", async () => {
    console.log("Retrieved: from localStorage or mobile browser redirect");
    xummSignInHandler(await xumm.state());
  });
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

  const xummSignInHandler = async (state: any) =>   {
 //disable cors
    
    //const resp = await fetch('/api/connectwallet')
        // const data =  await resp.json()
      ///console.log( data)
      if (state.me) {
        const { sdk, me } = state;
        console.log("state", me);
        // Also: sdk » xumm-sdk (npm)
      }

  }

  const handleConnect = () => {
    xumm.authorize()?.then((session) => {
      xummSignInHandler(session);
    });
  }
  return (
    <>  


<Button onPress={handleConnect} >Connect Wallet</Button>
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
      <Grid xs={3}>
        <Progress value={10} shadow color="error" status="error" />
      </Grid>
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