import Form from "next/form";

import s from "../carForm.module.css";
import { saveCar } from "@/server-action/serverActons";

const CarCreateForm = async () => {
  return (
    <div>
      <Form action={saveCar} className={s.form}>
        <label htmlFor="brand">
          brand: <input type={"text"} name="brand" aria-label="brand" />
        </label>
        <label htmlFor="year">
          year:<input type={"text"} name="year" />
        </label>
        <label htmlFor="price">
          price:<input type={"text"} name="price" />
        </label>
        <label htmlFor="image">
          photo:<input type={"text"} name="image" />
        </label>
        <button>Submit</button>
      </Form>
    </div>
  );
};

export default CarCreateForm;
