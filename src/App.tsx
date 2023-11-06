import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { SeriesAreaChart, SeriesBarChart, Tabs, Tab } from "./components";

const SERIES_IDS = ["T10Y2Y", "GDPCA"];

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs>
        <Tab title="Area Chart">
          <SeriesAreaChart seriesId={SERIES_IDS[0]} />
        </Tab>

        <Tab title="Bar Chart">
          <SeriesBarChart seriesId={SERIES_IDS[1]} />
        </Tab>

        <Tab title="Pear">Pear is green</Tab>
      </Tabs>
    </QueryClientProvider>
  );
}

export default App;
