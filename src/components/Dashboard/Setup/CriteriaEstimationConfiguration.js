import React, { isValidElement, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  FormControl,
} from "@mui/material";

import { IoArrowForward, IoArrowBackOutline } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { setCriteriaEstimationConfiguration } from "../../../store/actions/criteriaEstimationConfigurationActions";
import { showToastMessage } from "../../../utils/toastUtils";
export default function CriteriaEstimationConfiguration({
  handleSetupStep,
  setIsSetupOpen,
  setIsSetupFinised,
  scrollToComponent,
  expertEstimationsRef,
}) {
  const dispatch = useDispatch();
  const names = useSelector((state) => state.nameConfiguration);
  const criteriaEstimation = useSelector(
    (state) => state.criteriaEstimationConfiguration
  );

  const [selectedItems, setSelectedItems] = React.useState(
    criteriaEstimation.criteriaEstimation || {}
  );

  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = React.useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentExpert = names.expertIndices.slice(startIndex, endIndex);

  const handleSetCriteriaEstimations = () => {
    const isValid = checkCriteriaEstimations(
      selectedItems,
      names,
      showToastMessage
    );
    if (isValid) {
      dispatch(setCriteriaEstimationConfiguration(selectedItems));
      setIsSetupOpen(false);
      setIsSetupFinised(true);
      scrollToComponent(expertEstimationsRef);
    }
  };
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const checkCriteriaEstimations = (selectedItems, names, showToastMessage) => {
    if (
      Object.keys(selectedItems).length ===
      names.expertNames.length * names.criteriaNames.length
    ) {
      return true;
    } else {
      showToastMessage("Please provide all criteria estimations", "error");

      return false;
    }
  };

  const handleSelectChange = (event, id) => {
    const { value } = event.target;
    const updatedSelectedItems = { ...selectedItems };
    updatedSelectedItems[id].linguisticTermId = value;
    setSelectedItems(updatedSelectedItems);
  };

  const MenuItems = currentExpert.map((expertId, expertIndex) => {
    return names.criteriaNames.map((criteriaName, criteriaIndex) => {
      const itemId = `e${Number(expertId) + 1}-c${criteriaIndex + 1}`;

      return (
        <TableRow key={`${currentExpert}-${criteriaIndex}`}>
          <TableCell align="center">{criteriaName}</TableCell>
          <TableCell align="center">
            <FormControl sx={{ m: 1, width: 100 }} size="small">
              <Select
                value={selectedItems[itemId].linguisticTermId}
                onChange={(event) => handleSelectChange(event, itemId)}
              >
                {names.linguisticTermsForCriteriaNames.map(
                  (option, optionIndex) => (
                    <MenuItem key={optionIndex} value={optionIndex}>
                      {option}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          </TableCell>
        </TableRow>
      );
    });
  });

  return (
    <Box
      sx={{
        p: 1.5,
        border: "1px solid #51454f",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Typography variant="h6">Provide criteria estimations</Typography>
      <Typography variant="h6" fontFamily="Inconsolata " color="textSecondary">
        {names.expertNames[currentPage - 1]}
      </Typography>
      <TableContainer sx={{ border: "1px solid #51454f", borderRadius: "8px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Criteria</TableCell>
              <TableCell align="center">LT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{MenuItems}</TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Pagination
          count={Math.ceil(names.expertNames.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          color="green"
          onClick={() => handleSetupStep(false)}
          startIcon={<IoArrowBackOutline />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="green"
          onClick={handleSetCriteriaEstimations}
          endIcon={<IoArrowForward />}
        >
          Finish
        </Button>
      </Box>
    </Box>
  );
}
