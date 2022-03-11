import { Grid, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "../components/card";
import axios from "axios";

export default function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`https://dev.dashmed.in/sample-data`).then((response) => {
      setData(response.data.data);
      setLoading(false);
    });
  }, []);
  return (
    <Box sx={{ m: 2, mt: 15 }}>
      {loading && (
        <Typography variant="h6" sx={{ mt: 20 }}>
          Medicine Data is loading please wait for a few seconds!!
        </Typography>
      )}
      {!loading && (
        <>
          <Grid container>
            {data.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card medName={item.medName} saltName={item.saltName}></Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
}
