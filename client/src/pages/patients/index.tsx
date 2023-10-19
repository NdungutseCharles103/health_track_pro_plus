import MainLayout from '@/layouts/MainLayout';
import { ApiResponse } from '@/types';
import { Patient } from '@/types/patient.type';
import { api } from '@/utils/fetch';
import { Button, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react';
import { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Patients = () => {
   const [patients, setPatients] = useState<Patient[]>([]);
   const [loading, setLoading] = useState(false);

   const getPatients = async () => {
      try {
         setLoading(true);
         const res = await api.get<ApiResponse<Patient[]>>('/patient');
         const data = res.data.data;
         setPatients(data);
      } catch (error) {
         console.log(error);
      }
      setLoading(false);
   };

   useEffect(() => {
      getPatients();
   }, []);

   return (
      <MainLayout>
         <Card>
            <Title>Patients Registered</Title>
            {loading && <Text>Loading...</Text>}
            {!loading && patients.length === 0 && <Text>No patients registered yet</Text>}
            {!loading && (
               <Table className="mt-5">
                  <TableHead>
                     <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>NationalId</TableHeaderCell>
                        <TableHeaderCell>Frequent Sickness</TableHeaderCell>
                        <TableHeaderCell>Action</TableHeaderCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {patients.map((item) => (
                        <TableRow key={item.patientName}>
                           <TableCell>{item.patientName}</TableCell>
                           <TableCell>
                              <Text>{item.patientNationalID}</Text>
                           </TableCell>
                           <TableCell>
                              <Text>{item?.frequentSickness?.name}</Text>
                           </TableCell>
                           <TableCell>
                              <Link to={'#'} className="">
                                 <Button className="flex items-center">
                                    <span className="flex items-center gap-x-3">
                                       <FaEye /> View
                                    </span>
                                 </Button>
                              </Link>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            )}
         </Card>
      </MainLayout>
   );
};

export default Patients;
