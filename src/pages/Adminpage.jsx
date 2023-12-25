import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Headerr from "../components/Headerr";
import ProgressCircle from "../components/ProgressCircle";
import Sidebar from "../components/Sidebar";
import { mockTransactions } from "../data/mockData";

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Box display="flex" height="100vh">
      <Box display="flex" flexDirection="column" flexGrow={1} overflow="auto">
        {/* HEADER */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="20px"
          borderBottom={`2px solid ${theme.palette.primary.main}`}
        >
          <Headerr title="DASHBOARD" />

          <Box>
            <Button
              sx={{
                backgroundColor: "#0B23C3",
                color: theme.palette.common.white,
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <DownloadOutlinedIcon sx={{ marginRight: "10px" }} />
              Download Reports
            </Button>
          </Box>
        </Box>

        {/* GRID & CHARTS */}
        <Box
          display="flex"
          flexDirection="column"
          padding="20px"
          flexGrow={1}
        >
          {/* ROW 2 */}
          <Box
            backgroundColor={theme.palette.primary.main}
            overflow="auto"
            marginBottom="20px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${theme.palette.primary.dark}`}
              color={theme.palette.common.white}
              padding="15px"
            >
              <Typography color={theme.palette.secondary.main} variant="h5" fontWeight="600">
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${theme.palette.primary.dark}`}
                padding="15px"
              >
                <Box>
                  <Typography
                    color={theme.palette.warning.main}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={theme.palette.common.white}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={theme.palette.common.white}>{transaction.date}</Box>
                <Box
                  backgroundColor={theme.palette.success.main}
                  padding="5px 10px"
                  borderRadius="4px"
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>

          {/* ROW 3 */}
          <Box
            backgroundColor={theme.palette.primary.main}
            padding="30px"
          >
            <Typography variant="h5" fontWeight="600" color={theme.palette.common.white}>
              Campaign
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              marginTop="25px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={theme.palette.success.main}
                marginTop="15px"
              >
                $48,352 revenue generated
              </Typography>
              <Typography color={theme.palette.common.white}>
                Includes extra miscellaneous expenditures and costs
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
