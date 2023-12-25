import { Box } from "@mui/material";
import Header from "../../components/Headerr";
import BarChart from "../../components/BarChart";

const Bar = () => {
  const barChartData = [
    { model: "Car 1", numberOfClients: 10 },
    { model: "Car 2", numberOfClients: 15 },
    { model: "Car 2", numberOfClients: 15 },
    { model: "Car 2", numberOfClients: 15 },
    { model: "Car 2", numberOfClients: 15 },
    // Add more data points as needed
  ];

  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Number of Clients per Car Model" />
      <Box height="75vh">
        <BarChart data={barChartData} xKey="model" yKey="numberOfClients" />
      </Box>
    </Box>
  );
};

export default Bar;
