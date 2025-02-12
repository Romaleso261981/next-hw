import { Car } from "@/types/types";
import styles from "./carsList.module.css";
import CarComponent from "../Car/Car";
import CarCreateForm from "../CarForm/reactHookForm/ReactHookForm";

type CarsListProps = {
  cars: Car[];
};

const CarsList: React.FC<CarsListProps> = ({ cars }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Cars</h1>
      {/* <CarForm /> */}
      <CarCreateForm />
      <ul className={styles.carsList}>
        {cars.map(car => <CarComponent car={car} key={car.id} />)}
      </ul>
    </div>
  );
};

export default CarsList;
