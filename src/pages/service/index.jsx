import { Service } from "@modal";
import { Button } from "@mui/material";
import { ServiceTable } from "@ui";
import { useEffect, useState } from "react";
import { service } from "@service";

const Index = () => {
  const [open, setOpen] = useState(false);

  const getData = async () => {
    try {
      const response = await service.get();
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Service open={open} handleClose={() => setOpen(false)} />
      <div className="flex flex-col gap-3">
        <div className="flex justify-end">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            Add
          </Button>
        </div>

        <ServiceTable />
      </div>
    </>
  );
};

export default Index;
