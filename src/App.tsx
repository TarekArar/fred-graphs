import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Tabs, Tab, DiffLineChart, SeriesChart } from "@/components";

const SERIES_IDS = ["T10Y2Y", "GDPCA"];

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4">
        <Tabs>
          <Tab title="Area Chart">
            <SeriesChart type="area" seriesId={SERIES_IDS[0]} />
          </Tab>

          <Tab title="Bar Chart">
            <SeriesChart type="bar" seriesId={SERIES_IDS[1]} />
          </Tab>

          <Tab title="Line Chart">
            <DiffLineChart seriesIds={["T10YIE", "DGS10"]} />
          </Tab>
        </Tabs>
      </div>
    </QueryClientProvider>
  );
}

export default App;
