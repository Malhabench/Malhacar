import React, { useState } from "react";
import { Box, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Headerr";
import { useTheme } from "@mui/material";


const mockDataCars = [
  { id: 1, model: "Car 1", color: "Red", price: 25000, year: 2022 },
  { id: 2, model: "Car 2", color: "Blue", price: 30000, year: 2023 },
  { id: 2, model: "Car 2", color: "Blue", price: 30000, year: 2023 },
  { id: 2, model: "Car 2", color: "Blue", price: 30000, year: 2023 },
  { id: 2, model: "Car 2", color: "Blue", price: 30000, year: 2023 },
  { id: 2, model: "Car 2", color: "Blue", price: 30000, year: 2023 },
  { id: 2, model: "Car 2", color: "Blue", price: 30000, year: 2023 },
  
];

const CarManagement = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "model", headerName: "Model", flex: 1 },
    { field: "color", headerName: "Color", flex: 1 },
    { field: "price", headerName: "Price", flex: 1 },
    { field: "year", headerName: "Year", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (params) => (
        <Button
          onClick={() => handleEdit(params.row)}
          style={{ color: "#0B23C3", marginRight: 8 }}
        >
          Edit
        </Button>
      ),
    },
  ];

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleEdit = (car) => {
    setSelectedCar(car);
    setEditDialogOpen(true);
  };

  const handleEditSubmit = (updatedCar) => {
    console.log("Updated Car:", updatedCar);
    setEditDialogOpen(false);
    setSelectedCar(null);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setSelectedCar(null);
  };

  return (
    <Box m="20px">
      {/* ... (Header component) */}
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          // ... (styling)
        }}
      >
        <DataGrid
          rows={mockDataCars}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
      <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Car</DialogTitle>
        <DialogContent>
          {selectedCar && (
            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevent form submission
                handleEditSubmit(selectedCar);
                handleEditDialogClose(); // Close the dialog after submission
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                label="Model"
                value={selectedCar.model}
                onChange={(e) => setSelectedCar({ ...selectedCar, model: e.target.value })}
                required
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Color"
                value={selectedCar.color}
                onChange={(e) => setSelectedCar({ ...selectedCar, color: e.target.value })}
                required
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Price"
                type="number"
                value={selectedCar.price}
                onChange={(e) => setSelectedCar({ ...selectedCar, price: e.target.value })}
                required
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Year"
                type="number"
                value={selectedCar.year}
                onChange={(e) => setSelectedCar({ ...selectedCar, year: e.target.value })}
                required
              />
              <DialogActions>
                <Button onClick={handleEditDialogClose} style={{ backgroundColor: "#0B23C3", color: "#FFF" }}>
                  Cancel
                </Button>
                <Button type="submit" style={{ backgroundColor: "#0B23C3", color: "#FFF" }}>
                  Save Changes
                </Button>
              </DialogActions>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default CarManagement;