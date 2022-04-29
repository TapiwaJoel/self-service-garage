import {Department} from '../departments/departments.entity';
import {User} from '../users/users.entity';

export interface Vehicle {
  id: string;
  userId: number;
  user: Partial<User>;
  departmentId: string;
  department: Partial<Department>;
  registrationNumber: string;
  VIN: string;
  make: string;
  model: string;
  color: string;
  yearOfManufacturing: number;
  chassis: string;
  additionalInformation: string;
  vin: string;
  recordStatus: string;
  dateCreated: string;
}
